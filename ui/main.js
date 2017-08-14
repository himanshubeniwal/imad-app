console.log('Loaded!');
//code to change the content of page 
var element= document.getElementById("tobechange");
element.innerHTML= " this is changed text ";


// move the image to right
var pic= document.getElementById('bny');
var marginLeft=0
function moveright() {
    marginLeft= marginLeft + 5;
    pic.style.marginLeft=marginLeft+ 'px';
}
pic.onclick = function () {
    var interval = setInterval(moveright,50);
    
};