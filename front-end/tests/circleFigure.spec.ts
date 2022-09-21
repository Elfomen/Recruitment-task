
import { test, expect } from '@playwright/test';
test('Calculate the perimeter of a circle', async ({ page }) => {
  // Go to http://localhost:4200/figures
  await page.goto('http://localhost:4200/figures');
  // Click text=circleCalculate the perimeter or area of a circle.
  await page.locator('text=Calculate the perimeter or area of a circle.').click();
  await expect(page).toHaveURL('http://localhost:4200/figure/1');
  // Enter the radius of the circle
  await page.locator('input[name="name"]').fill('0.3');
  // Click on the calculate button to calculate the result
  await page.locator('button:has-text("Calculate")').click();

  // the result should be 1.887414 m
  await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 1.887414 m')

  //Try converting the result to centimeter
  await page.locator('select[name="conv"]').selectOption('centimeter');

  // the result should be 1.887414 m
  await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 188.7414 cm')

  // // Try converting the result to decimeter
  await page.locator('select[name="conv"]').selectOption('decimeter');

  // the result should be 1.887414 m
  await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 18.87414 dm')

  //Try converting the result to kilometer
  await page.locator('select[name="conv"]').selectOption('kilometer');

  // The result should be
  await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.001887414 km')


  // calculating the area
  await page.locator('select[name="figureSelect"]').selectOption('area');

  // Click to obtain the area of the circle
  await page.locator('button:has-text("Calculate")').click();

  // the result should be
  await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.2831121 m')

});