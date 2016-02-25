$(document).ready(function () {

    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data.json', true);
        xobj.onreadystatechange = function GetData() {
            if (xobj.readyState != 4 || xobj.status != 200) {
                return;
            }
            else if (xobj.readyState == 4 && xobj.status == "200") {

                // .open will NOT return a value but simply returns undefined in async mode so use a callback
                callback(xobj.responseText);
            }
            setTimeout("loadJSON(callback)", 10000);
            return;
        }
        xobj.send(null);

    }

    // Create the XHR object to do GET to /data resource  
    //var xhr = new XMLHttpRequest();
    //xhr.open("GET","data",true);

    // register the event handler
    //xhr.addEventListener('load',function(){
    //  if(xhr.status === 200){
    //      alert("We got data: " + xhr.response);
    //  }
    //},false) 

    // perform the work
    //xhr.send();


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



});