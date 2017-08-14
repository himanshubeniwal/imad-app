console.log('Loaded!');
//code to change the content of page 
var element= document.getElementById("tobechange");
element.innerHTML= " this is changed text ";


// move the image to right
var pic= document.getElementById('image');
pic.onClick = function () {
  pic.style.marginLeft='100px';
};