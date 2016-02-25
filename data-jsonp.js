function showData(data) {

	jsonresponse = JSON.parse(data);

    var section;

    for (var i = 0; i < jsonresponse.length; i++) {
        section = $('<section>');
        section.append("<div>Bus " + jsonresponse[i].VEHICLE + " is at " + jsonresponse[i].LATITUDE + " and " + jsonresponse[i].LONGITUDE + " at " + jsonresponse[i].MSGTIME + + "</div>");
        $('body').append(section);
    }

	// var newContent = '';

	// console.log(newContent);

	// for (var i = 0; i < data.length; i++) {
	// 	newContent += '<div class="vehicle">';
	// 	newContent += data[i].VEHICLE;
	// 	newContent += '</div>';
	// }

	// document.getElementById('body').innerHTML = newContent;

}
