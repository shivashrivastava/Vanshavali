/**
 * Created by nikunj on 05/06/20.
 */

var baseurl;
var Vanshavalliservleturl ;


baseurl = jQuery('input[title="baseURL"]').val();
Vanshavalliservleturl = "/VanshavaliServlet";


var name = jQuery("#name").val();
var DOB = jQuery("#DOB").val();

function vali()
{

    console.log("bhag yaha se");
    alert("bhag yaha se ");

    var dataString = "Name=" +
        name + "&DOB=" + DOB +
        "&Age=" + Age +
        "&ParentName1=" + Parent1 +
        "&ParentName2=" + Parent2 +
        "&Gender=" + Gender +
        "&DOD=" + DOD ;



    $.ajax({
        type: "POST",
        url: baseurl + Vanshavalliservleturl + "?" + dataString,
        dataType: "text",
        content: "application/json; charset=UTF-8",
        // data : JSON.stringify(data),
        success: function (callbackresponse) {

            treeBoxes('', callbackresponse);

        },
        error: function (callbackresponse) {
            alert ("invalid data, contact site admin");

        },
        done: function(callbackresponse){

        },
        complete: function(){

        }
    });

}