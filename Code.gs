function getSheetUrl() {
  // Replace 'YOUR_EXISTING_SHEET_URL' with the URL of your existing Google Sheet
  var sheetUrl = 'https://docs.google.com/spreadsheets/d/1UDvyTIsE9SUOBKbjjS_aBEs6A7PaXXzPUWGJnOAItbA/edit';
  
  return sheetUrl;
}

function doGet() {
  // Get the URL of the existing sheet
  var spreadsheetUrl = getSheetUrl();

  // Pass the URL to the HTML template
  var template = HtmlService.createTemplateFromFile('index');
  template.spreadsheetUrl = spreadsheetUrl;

  return template.evaluate()
    .setTitle('Existing Sheet')
    .setWidth(300)
    .setHeight(100);
}

function addRecords(data, sheetUrl) {
  var spreadsheet = SpreadsheetApp.openByUrl(sheetUrl);
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(sheet.getLastRow() + 1, 1, data.length, data[0].length).setValues(data);
}
