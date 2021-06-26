function getParagraph1() {
    var inputs=[];
    for(var i=1 ; i<=6 ; i++) {
        inputs.push(document.getElementById("para1_input_box_" + i).value);
        document.getElementById("showParagraph1").innerHTML=inputs.join(". ");
    }
}
function getParagraph2() {
    var inputs_2=[];
    for(var x=1 ; x<=6 ; x++) {
        inputs_2.push(document.getElementById("para2_input_box_" + x).value);
        document.getElementById("showParagraph2").innerHTML=inputs_2.join(". ");
    }
}