function Add() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var string1 = prompt("Enter a Task:");
    var string2 = prompt("Enter a Category:");
    var string3 = prompt("Enter a Due Date:");

    cell1.innerHTML = string1;
    cell2.innerHTML = string2;
    cell3.innerHTML = string3;
    cell4.innerHTML = ("<input type=\"checkbox\" />");
}

function Delete()
{
    var table = document.getElementById("myTable");
    var index = prompt("Enter a Row to Delete:");
    table.deleteRow(index);
}