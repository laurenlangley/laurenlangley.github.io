$(document).ready(function () {

    function getBuses() {
     $.ajax({
        type: 'GET',
        url: 'data.json',
        //data: { get_param: 'value' }, 
        data: null,
        dataType: 'json',
        success: function(data) { 
            $.each(data, function(index, element) {
                $('body').append($('<div>', {
                    text: element.VEHICLE
                }));
            });
        }
    });
    }

    getBuses()

    // function loadJSON(callback) {

    //     var xobj = new XMLHttpRequest();
    //     xobj.overrideMimeType("application/json");
    //     xobj.open('GET', 'data.json', true);
    //     xobj.onreadystatechange = function() {
    //         if (xobj.readyState == 4 && xobj.status == "200") {
    //             callback(xobj.responseText);
    //         }
    //     }
    //     xobj.send(null);
    // }

    // // Call to function with anonymous callback
    // loadJSON(function(response) {
    //     // Do Something with the response e.g.
    //     jsonresponse = JSON.parse(response);

    //     // Assuming json data is wrapped in square brackets as Drew suggests
    //     console.log(jsonresponse)
    //     //console.log(jsonresponse[0].ROUTE);

    //     var section;

    //     for (var i = 0; i < jsonresponse.length; i++) {
    //         section = $('<section>');
    //         section.append("<div>Bus " + jsonresponse[i].VEHICLE + " is at " + jsonresponse[i].LATITUDE + " and " + jsonresponse[i].LONGITUDE + " at " + jsonresponse[i].MSGTIME + + "</div>");
    //         $('body').append(section);
    //     }
        
    // });


});