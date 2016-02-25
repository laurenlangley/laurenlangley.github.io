$(document).ready(function () {

    setInterval(function() {
    //your jQuery ajax code
        function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data.json', true);

        // register the event handler
        xobj.addEventListener('load', function() {
            if(xobj.status === 200){
                //alert("We got data: " + xobj.responseText);
                callback(xobj.responseText);
            }
        },false)

        // xobj.onreadystatechange = function() {
        //     if (xobj.readyState == 4 && xobj.status == "200") {
        //         // .open will NOT return a value but simply returns undefined in async mode so use a callback
        //         callback(xobj.responseText);
        //     }
        // }
        xobj.send(null);

        }


        // Call to function with anonymous callback
        loadJSON(function(response) {
            // Do Something with the response e.g.
            jsonresponse = JSON.parse(response);

            // Assuming json data is wrapped in square brackets as Drew suggests
            console.log(jsonresponse)
            //console.log(jsonresponse[0].ROUTE);

            var section;

            for (var i = 0; i < jsonresponse.length; i++) {
                section = $('<section>');
                section.append("<div>Bus " + jsonresponse[i].VEHICLE + " is at " + jsonresponse[i].LATITUDE + " and " + jsonresponse[i].LONGITUDE + " at " + jsonresponse[i].MSGTIME + + "</div>");
                $('body').append(section);
            }
            
        });

    }, 1000 * 60 * 1); // where X is your every X minutes

});