function showData(data) {

	var newContent = '';

	console.log(data);

	for (var i = 0; i < data.length; i++) {
		newContent += '<div class="vehicle">';
		newContent += data[i].VEHICLE;
		newContent += '</div>';
	}

	document.getElementById('body').innerHTML = newContent;

}
