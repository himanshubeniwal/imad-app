console.log('Loaded!');
//code to change the content of page 
var element= document.getElementById("tobechange");
element.innerHTML= " this is changed text ";


// move the image to right
var pic= document.getElementById('bny');
var marginleft=0
function moveright() {
    marginleft= marginleft + 5;
    img.style.marginleft=marginleft+'px';
}
pic.onclick = function () {
    var interval = setInterval(moveright,50);
    
};