// from data.js
var tableData = data;

var list = d3.select("#ufo-table");

var table = list.select("tbody");

// remove any children from the list to


function appendTable(data) {
    table.html("")
    data.forEach(function(d) {

    // Appends all of the data onto the table, row by row.
    table.append('tr').html(`<td>${d.datetime}</td><td>${d.city}</td>
    <td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td>
    <td>${d.durationMinutes}</td><td>${d.comments}</td>`);
    console.log('hi')
    

})

}
;

appendTable(tableData)
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  console.log('hello')

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(d => d.datetime === inputValue);

  appendTable(filteredData)

  console.log(filteredData)


});


