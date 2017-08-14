/*
console.log('Loaded!');


//code to change the content of page 



var element= document.getElementById("tobechange");
element.innerHTML= " this is changed text ";

*/ 
var counter=0
var button = document.getElementById("counter");
button.onclick = function() {
  counter=counter+1;
  var span = document.getElementById("count");
  span.innerHTML=counter.toString();
  
    
};

/*
// move the image to right
var pic= document.getElementById('bny');
var marginLeft=0;
function moveright() {
    marginLeft= marginLeft + 1;
    if (marginLeft <300){
    pic.style.marginLeft=marginLeft+ 'px';
}
}
pic.onclick = function () {
    var interval = setInterval(moveright,20);
    
};   
*/

