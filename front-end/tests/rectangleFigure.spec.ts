import test, { expect, Page } from "@playwright/test";

test('Calculating the perimeter and the area of a rectangle', async ({ page }) => {
    // Go to http://localhost:4200/figures
    await page.goto('http://localhost:4200/figures');
    // Click text=circleCalculate the perimeter or area of a circle.
    await page.locator('text=Calculate the perimeter or area of a rectangle.').click();

    await expect(page).toHaveURL('http://localhost:4200/figure/2');

    await page.locator('input[name="length"]').fill('0.2');

    await page.locator('input[name="width"]').fill('0.2');

    await page.locator('button:has-text("Calculate")').click();

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.8 m')

    // thesame calculations in meter squared
    await testRectanglePerimeterInMetersSquared(page)

    // do thesame calculations using the meters cube

    await testRectanglePerimeterInMetersCube(page)


    // do thesame calculation with the centimeter

    await testRectanglePerimterInCentimeter(page)

    // do thesame with the centimeter squared

    await testRectanglePerimeterInCentimeterSquared(page)


    // do thesame with kilometers
    await testRectanglePerimterInKilometers(page)

    // do thesame with kilometers squared

    await testRectanglePerimeterInKilometersSquared(page)
})




const testRectanglePerimeterInMetersSquared = async (page: Page) => {
    await page.locator('select[name="unitM"]').selectOption('m²')

    await page.locator('button:has-text("Calculate")').click();

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.8 m²')

    await page.locator('select[name="conv"]').selectOption('centimeter²')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 8000 cm²')

    await page.locator('select[name="conv"]').selectOption('decimeter²')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 80 dm²')

    await page.locator('select[name="conv"]').selectOption('kilometer²')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 8.000000000000001e-7 km²')
}

const testRectanglePerimeterInMetersCube = async (page: Page) => {
    await page.locator('select[name="unitM"]').selectOption('m³')

    await page.locator('button:has-text("Calculate")').click();

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.8 m³')

    await page.locator('select[name="conv"]').selectOption('centimeter³')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 800000 cm³')
}

const testRectanglePerimterInCentimeter = async (page: Page) => {
    await page.locator('select[name="unitM"]').selectOption('cm')

    await page.locator('button:has-text("Calculate")').click();

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.8 cm')

    await page.locator('select[name="conv"]').selectOption('decimeter')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.08 dm')

    await page.locator('select[name="conv"]').selectOption('meter')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.008 m')

    await page.locator('select[name="conv"]').selectOption('kilometer')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.000008 km')
}

const testRectanglePerimeterInCentimeterSquared = async (page: Page) => {
    await page.locator('select[name="unitM"]').selectOption('cm²')

    await page.locator('button:has-text("Calculate")').click();

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.8 cm²')

    await page.locator('select[name="conv"]').selectOption('decimeter²')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.008 dm²')

    await page.locator('select[name="conv"]').selectOption('meter²')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.00008 m²')

    await page.locator('select[name="conv"]').selectOption('kilometer²')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 8e-11 km²')
}


// KILOMETERS

const testRectanglePerimterInKilometers = async (page: Page) => {
    await page.locator('select[name="unitM"]').selectOption('km')

    await page.locator('button:has-text("Calculate")').click();

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.8 km')

    await page.locator('select[name="conv"]').selectOption('decimeter')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 8000 dm')

    await page.locator('select[name="conv"]').selectOption('meter')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 800 m')

    await page.locator('select[name="conv"]').selectOption('centimeter')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 80000 cm')
}

const testRectanglePerimeterInKilometersSquared = async (page: Page) => {
    await page.locator('select[name="unitM"]').selectOption('km²')

    await page.locator('button:has-text("Calculate")').click();

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 0.8 km²')

    await page.locator('select[name="conv"]').selectOption('decimeter²')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 80000000 dm²')

    await page.locator('select[name="conv"]').selectOption('meter²')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 800000 m²')

    await page.locator('select[name="conv"]').selectOption('centimeter²')

    await expect((await page.locator('input[name="finalR"]').inputValue()).toString()).toMatch('Result : 8000000000 cm²')
}