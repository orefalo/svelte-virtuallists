import { expect, test } from '@playwright/test';

test('index 0, then 5000, then back to 0', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(2000);
  await page.goto('/examples/positioning');

  const testpage = page.locator(':has-text("Positioning")~div');
  expect(testpage).toBeDefined();

  const listWrapper = testpage.locator('div.vtlist-inner').first();
  expect(listWrapper).toBeDefined();

  // count the rendered list rows
  expect(await listWrapper.locator('div').count()).toBeGreaterThan(7);

  // Find the first rendered Row
  let firstRowElement = await listWrapper.locator('div').first();
  let innerHTML = await firstRowElement.allTextContents();
  expect(innerHTML[0].toString().substring(0, 2)).toContain('#0');

  // Goto element 5000
  const numberInput = await testpage.locator('#index');
  await numberInput.fill('5000');
  await page.waitForTimeout(2000);

  // count the rendered list rows
  expect(await listWrapper.locator('div').count()).toBeGreaterThan(7);

  // validate that the first rendered row is not "#0..." anymore
  firstRowElement = await listWrapper.locator('div').first();
  innerHTML = await firstRowElement.allTextContents();
  expect(innerHTML[0].toString().substring(0, 2)).not.toContain('#0');

  // go back to item 0
  await numberInput.fill('0');
  await page.waitForTimeout(2000);

  // ensure we are back on the first item
  firstRowElement = await listWrapper.locator('div').first();
  innerHTML = await firstRowElement.allTextContents();
  expect(innerHTML[0].toString().substring(0, 2)).toContain('#0');
});
