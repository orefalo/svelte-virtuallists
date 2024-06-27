import type { SvelteComponent } from 'svelte';

export interface Example {
  code: string;
  highlightedHTML: string;
}

export interface SvelteExample extends Example {
  component: SvelteComponent;
}

export interface CSSExample extends Example {
  css: string;
  cssHighlightedHTML: string;
}
