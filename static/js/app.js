// from data.js
var tableData = data;

var list = d3.select("#ufo-table");

var table = list.select("tbody");



//We're making a function that clears any existing table and replaces it with
//a table based on our data source.
function appendTable(data) {
  // remove any children from the list to
    table.html("")
    data.forEach(function(d) {

    // Appends all of the data onto the table, row by row.
    table.append('tr').html(`<td>${d.datetime}</td><td>${d.city}</td>
    <td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td>
    <td>${d.durationMinutes}</td><td>${d.comments}</td>`);
    
    

})
}
;

//Calls the function so that there is a table when the page loads.
appendTable(tableData)


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node. Since we have
  //five filters, we're pulling all of those.
  var inputElement = d3.select("#datetime");
  var inputElement2 = d3.select("#cityinput");
  var inputElement3 = d3.select("#stateinput");
  var inputElement4 = d3.select("#countryinput");
  var inputElement5 = d3.select("#shapeinput");



  // Get the value property of each of the the input elements
  var inputValue = inputElement.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");


  // Here we have several conditionals that check each of the boxes for inputs. If there is any length
  //in the boxes, it will filter the data by what's in that box. Otherwise, if the box is empty, it'll
  //pass on that responsibility to the next box until we get to the end and append our filtered data
  //to the page.

  if (inputValue.length > 0) {
    var filteredData = tableData.filter(d => d.datetime === inputValue);
    console.log('Date Filter')
  } else {
    var filteredData = tableData;
    console.log('No Date Filter')
  }

  if (inputValue2.length > 0) {
    var filteredData2 = filteredData.filter(d => d.city === inputValue2);
    console.log('City Filter')
  } else {
    var filteredData2 = filteredData;
    console.log('No City Filter')
  }

  if (inputValue3.length > 0) {
    var filteredData3 = filteredData2.filter(d => d.state === inputValue3);
    console.log('State Filter')
  } else {
    var filteredData3 = filteredData2;
    console.log('No State Filter')
  }

  if (inputValue4.length > 0) {
    var filteredData4 = filteredData3.filter(d => d.country === inputValue4);
    console.log('Country Filter')
  } else {
    var filteredData4 = filteredData3;
    console.log('No Country Filter')
  }

  if (inputValue5.length > 0) {
    var filteredData5 = filteredData4.filter(d => d.shape === inputValue5);
    console.log('Shape Filter')
  } else {
    var filteredData5 = filteredData4;
    console.log('No Shape Filter')
  }
  
  //Clears the table and replaces it with the filtered data.
  appendTable(filteredData5)

  console.log(filteredData5)


});


