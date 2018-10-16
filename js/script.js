function makeGrid() {
	// Select size input
	let canvas, cell, gridHeight, gridWidth, rows;
	
	canvas = $('#pixel_canvas');
	gridHeight = $('#input_height').val();
	gridWidth = $('#input_width').val();
	
  //Clears the canvas upon choosing a different size
  canvas.children().remove();
	
  //for loops for thr grid h and w
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	// Color is changed when the cell is clicked
	cell.click(function() {
		// Select your color
		console.log("changeColor is running!");
		let color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

//Make the grid once submit
let submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
  event.preventDefault();
  makeGrid();
});