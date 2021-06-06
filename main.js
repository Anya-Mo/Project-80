function getParagraph1() {
    var inputs=[];
    for(var i=1 ; i<=6 ; i++) {
        inputs.push(document.getElementById("para1_input_box_1" + i).value);
        inputs.push(document.getElementById("para1_input_box_2" + i).value);
        inputs.push(document.getElementById("para1_input_box_3" + i).value);
        inputs.push(document.getElementById("para1_input_box_4" + i).value);
        inputs.push(document.getElementById("para1_input_box_5" + i).value);
        inputs.push(document.getElementById("para1_input_box_6" + i).value);
        inputs.join(". ")
        document.getElementById("showParagraph1").innerHTML=inputs.join(". ");
    }
}
function getParagraph2() {
    var inputs_2=[];
    for(var x=1 ; x<=6 ; x++) {
        inputs_2.push(document.getElementById("para2_input_box_1" + x).value);
        inputs_2.push(document.getElementById("para2_input_box_2" + x).value);
        inputs_2.push(document.getElementById("para2_input_box_3" + x).value);
        inputs_2.push(document.getElementById("para2_input_box_4" + x).value);
        inputs_2.push(document.getElementById("para2_input_box_5" + x).value);
        inputs_2.push(document.getElementById("para2_input_box_6" + x).value);
        inputs_2.join(". ")
        document.getElementById("showParagraph2").innerHTML=inputs.join(". ");
    }
}
var name_of_the_student_array = [];
function submitbutton() {
    var display_student_array = [];
    for (var a = 1; a <= 5; a++) {
        var name_of_the_students = document.getElementById("student_" + a).value;
        console.log(name_of_the_students);
        name_of_the_student_array.push(name_of_the_students);
    }
    console.log(name_of_the_student_array);
    var length_of_the_array = name_of_the_student_array.length;
    console.log(length_of_the_array);
    for (var k = 0; k < length_of_the_array; k++) {
        display_student_array.push("<h4>NAME -" + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array);

    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas)
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sort_button() {
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array); 
    var display_student_array_sorting = []; 
    var lenght_of_name_of_students_array = name_of_the_student_array.length; 
    console.log(lenght_of_name_of_students_array); 
    for (var k = 0; k < lenght_of_name_of_students_array; k++) { 
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>"); 
        console.log(display_student_array_sorting); } 
        var remove_commas = display_student_array_sorting.join(" "); 
        console.log(remove_commas); 
        document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}
