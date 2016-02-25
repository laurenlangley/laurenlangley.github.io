function showData(data) {
	var newContent = '';

	for (var i = 0; i < data.length; i++) {
		newContent += '<div class="vehicle">';
		newContent += data[i].VEHICLE;
		newContent += '</div>';
	}

	document.getElementById('body').innerHTML = newContent;
}
