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