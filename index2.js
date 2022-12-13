let editor = ace.edit("code"),
output = document.getElementById("output");

window.onload = ()=>{
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
    document.getElementById("theme").selectedIndex = 0;
    document.getElementById("lang").selectedIndex = 1;
}


function setIDETheme(sel) {
    var text = sel.options[sel.selectedIndex].text;
    if(text === "Clouds midnight") editor.setTheme("ace/theme/clouds_midnight");
    else editor.setTheme("ace/theme/"+text.toLowerCase());
}