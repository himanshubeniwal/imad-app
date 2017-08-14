/*
console.log('Loaded!');

//code to change the content of page 

var element= document.getElementById("tobechange");
element.innerHTML= " this is changed text ";

*/ 
var counter=0
var button = document.getElementById("counter");
button.onclick = function() {
    // create a Request to counter endpoint 
    var request = new XMLHttpRequest();
  //capture the response and store 
  request.onreadystatechange == function() {
      if(request.readyState === XMLHttpRequest.DONE) {
          if(request.status==200){
           var counter=request.responseText;
           var span = document.getElementById("count");
           span.innerHTML=counter.toString();
          }
      }
      // make the request 
      request.open('GET','http://himanshubeniwal015.imad.hasura-app.io/',true);
      request.send(null);
  };
  
  //rendering the correct variable in correct span
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

