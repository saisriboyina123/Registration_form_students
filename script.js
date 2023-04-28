// Function to add product table

function Updateprod()
{   // checks if the fields are not blank
    if ($("#name").val() != '' && $("#email").val() != '' && $("#website").val() != '' && $("#imageLink").val() != '') {
            addProd();
            Clrform();
            $("#name").focus();
     
    }
    else {
        document.getElementById("errorMsg").innerHTML = "Please Fill all the fields of the form";
    }
}
// Variable is declared to distinguish between odd and even row elemnts
let count = 0;
function addProd()
{

    var genderOutput = gendCh();
    var skillOutput  = skillCh();
    if ($("#prodTable tbody").length == 0) {
        $("#prodTable").append("<tbody></tbody>");
    }
    // Odd row elements have different styling than even row
    if (count % 2 == 0) {
        $("#prodTable tbody").append("<tr>" + "<td id='newData' class='animated fadeIn' style='height:100px'>" + "<b>" + $("#name").val() + "</b>" + "<br>" +
            genderOutput + "<br>" + $("#email").val() + "<br>" + '<u style="color:blue">' + $("#website").val() + "</u>" + "<br>" + skillOutput
            + "</td>" + "<td id='newData' class='animated fadeIn'>" + '<a href="' + $("#imageLink").val() + '" target="_blank">' + '<img src="'
            + $("#imageLink").val() + '" alt="Photo" title="Click to open in new tab" style="width:125px;height:100px"></a>' + "</td>" + "</tr>");

    }
    // Even Row elements 
    else {
        $("#prodTable tbody").append("<tr>" + "<td id='newData' class='animated fadeIn' >" + "<b>" + $("#name").val() + "</b>" + "<br>" +
            genderOutput + "<br>" + '<u style="color:blue">' + $("#website").val() + "</u>" + "<br>" + $("#email").val() +"<br>" + skillOutput
            + "</td>" + "<td id='newData' class='animated fadeIn'>" + '<a href="' + $("#imageLink").val() + '" target="_blank">' + '<img src="'
            + $("#imageLink").val() + '" alt="Photo" title="Click to open in new tab" style="width:125px;height:100px"></a>' + "</td>" + "</tr>");
    }
    count += 1;
}
// Gives the checked radio key of gender
function gendCh()
{
    const choices = document.querySelectorAll('input[name="genderchoice"]');
    let selectedValue;
    for (const choice of choices) {
        if (choice.checked) {
            selectedValue = choice.value;
            break;
        }
    }
    return selectedValue;
}
// Gives the skill choices made by user
function skillCh()
{
    const choices = document.querySelectorAll('input[name="skillchoice"]');
    let selectedValue = [];
    for (const choice of choices) {
        if (choice.checked) {
            selectedValue.push(choice.value);
        }
    }
    return selectedValue.toString();
}
// Clears the form fields
function Clrform()
{
    $("#name").val("");
    $("#email").val("") ;
    $("#website").val("") ;
    $("#imageLink").val("");
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("java").checked = false;
    document.getElementById("html").checked = false;
    document.getElementById("css").checked = false;
    document.getElementById("errorMsg").innerHTML = "<br>";

}
