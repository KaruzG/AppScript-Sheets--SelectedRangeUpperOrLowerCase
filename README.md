# AppScript-Sheets--SelectedRangeUpperOrLowerCase
Simple script to uppercase or lowercasse a selected range in a google sheet.


| Function | Explanation |
| ------------- | ------------- |
| onOpen() | Just makes a menu where you canfind the other functions |
| setSelectedUppercase() | Gets an array of the slected cells. Then maps the array and loops through row and col applying toUpperCase(), also addresses blank cells. Then sets the result on the same range. |
| setSelectedUppercase()  | Same with lower case.  |

## Why

I did this script because looking for plugins I notice they were very slow (They uppercased cell by cell), maybe because they used unefficient loops or something. This way you can modify more than 50.000 cells in about 4s (Because of google cloud processing limitations)
