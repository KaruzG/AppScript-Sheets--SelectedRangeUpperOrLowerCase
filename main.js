function onOpen(){ // This just creates a menu with the functions
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Menu')
    .addItem('Uppercase Selection', 'setSelectedUppercase')
    .addItem('Lowercase Selection', 'setSelectedLowercase')
    .addToUi();
}


function setSelectedUppercase() { // Function uppercase
  const range = SpreadsheetApp.getActiveSheet()
                              .getActiveRange();

  const values = range.getDisplayValues()
                      .map(row => row.map(col => (col) ? col.toUpperCase() : col));
  
  range.setValues(values);
}

function setSelectedLowercase() { // Function lowercase
  const range = SpreadsheetApp.getActiveSheet()
                              .getActiveRange();

  const values = range.getDisplayValues()
                      .map(row => row.map(col => (col) ? col.toLowerCase() : col));
  
  range.setValues(values);
}
