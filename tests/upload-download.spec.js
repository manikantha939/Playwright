const { test,expect } = require("@playwright/test");
const ExcelJs = require("exceljs");

test.use({ acceptDownloads: true });

async function writeExcelTest1(searchText, replaceText, change, filepath) {
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filepath);
  const workSheet = await workbook.getWorksheet("Sheet1");
  const output = await readExcel(workSheet, searchText);
  const cell = workSheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filepath);
}

async function readExcel(workSheet, searchText) {
  let response = {
    row: -1,
    column: -1,
  };
  workSheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        response.row = rowNumber;
        response.column = colNumber;
      }
    });
  });
  return response;
}

test("test upload and download excel", async ({ page }) => {
  const textSearch = "Mango";
  const updateValue = "350";
  const filepath="/Users/Momitha/Downloads/download.xlsx";
  await page.goto("https://rahulshettyacademy.com/upload-download-test/");
  
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download" }).click();
  const download = await downloadPromise;
  await download.saveAs(filepath);

  writeExcelTest1(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filepath);
  
  await page.locator("#fileinput").click();
  await page.locator("#fileinput").setInputFiles(filepath);

  const textlocator = page.getByText(textSearch);
  const desiredRow = await page.getByRole("row").filter({ has: textlocator });
  await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);
});
