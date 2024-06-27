'use strict';

var newLineCharCode = '\n'.charCodeAt(0);
// todo: type the `ts` import (maybe with a local type that defines the expected compiler API structure)
/** Creates a minifier that should be stored and then used to minify one or more files. */
export function createMinifier(ts) {
  var scanner = ts.createScanner(
    ts.ScriptTarget.Latest,
    /* skipTrivia */ false,
    ts.LanguageVariant.Standard
  );
  return {
    minify: minify
  };
  function minify(fileText, options) {
    var _a;
    var keepJsDocs =
      (_a = options === null || options === void 0 ? void 0 : options.keepJsDocs) !== null &&
      _a !== void 0
        ? _a
        : false;
    var result = '';
    var lastWrittenToken;
    var lastHadSeparatingNewLine = false;
    scanner.setText(fileText);
    while (scanner.scan() !== ts.SyntaxKind.EndOfFileToken) {
      var currentToken = scanner.getToken();
      switch (currentToken) {
        case ts.SyntaxKind.NewLineTrivia:
          lastHadSeparatingNewLine = true;
          break;
        case ts.SyntaxKind.WhitespaceTrivia:
          break;
        case ts.SyntaxKind.SingleLineCommentTrivia:
          if (isTripleSlashDirective()) {
            writeSingleLineComment();
            lastHadSeparatingNewLine = false;
          }
          break;
        case ts.SyntaxKind.MultiLineCommentTrivia:
          if (keepJsDocs && isJsDoc()) {
            writeJsDoc();
            lastHadSeparatingNewLine = false;
          }
          break;
        default:
          // use a newline where ASI is probable
          if (
            currentToken === ts.SyntaxKind.Identifier &&
            lastHadSeparatingNewLine &&
            lastWrittenToken !== ts.SyntaxKind.SemicolonToken &&
            lastWrittenToken !== ts.SyntaxKind.CloseBraceToken &&
            lastWrittenToken !== ts.SyntaxKind.OpenBraceToken &&
            lastWrittenToken !== ts.SyntaxKind.OpenParenToken &&
            lastWrittenToken !== ts.SyntaxKind.CommaToken &&
            lastWrittenToken !== ts.SyntaxKind.ColonToken
          ) {
            result += '\n';
          }
          writeText(scanner.getTokenText());
          lastHadSeparatingNewLine = false;
      }
    }
    return result;
    function isTripleSlashDirective() {
      var tokenText = scanner.getTokenText();
      // todo: better check
      return tokenText.startsWith('///') && tokenText.includes('<');
    }
    function writeSingleLineComment() {
      writeText(scanner.getTokenText());
      // write out the next newline as-is (ex. write \n or \r\n)
      var nextToken = scanner.scan();
      if (nextToken === ts.SyntaxKind.NewLineTrivia) {
        writeText(scanner.getTokenText());
      } else if (nextToken !== ts.SyntaxKind.EndOfFileToken) {
        throw new Error(
          'Unexpected scenario where the token after a comment was a '.concat(nextToken, '.')
        );
      }
    }
    function isJsDoc() {
      var tokenText = scanner.getTokenText();
      return tokenText.startsWith('/**');
    }
    function writeJsDoc() {
      writeText(scanner.getTokenText().replace(/^\s+\*/gm, ' *'));
    }
    function writeText(text) {
      var token = scanner.getToken();
      // ensure two tokens that would merge into a single token are separated by a space
      if (
        lastWrittenToken &&
        isAlphaNumericToken(token) &&
        isAlphaNumericToken(lastWrittenToken) &&
        !wasLastWrittenNewLine()
      ) {
        result += ' ';
      }
      result += text;
      lastWrittenToken = token;
    }
    function wasLastWrittenNewLine() {
      return result.charCodeAt(result.length - 1) === newLineCharCode;
    }
  }
  function isAlphaNumericToken(token) {
    if (token >= ts.SyntaxKind.FirstKeyword && token <= ts.SyntaxKind.LastKeyword) {
      return true;
    }
    return token === ts.SyntaxKind.Identifier;
  }
}
