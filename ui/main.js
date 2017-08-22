/*
console.log('Loaded!');

//code to change the content of page 

var element= document.getElementById("tobechange");
element.innerHTML= " this is changed text ";

*/ 

var counter=0;
var button = document.getElementById("counter");
button.onclick = function() {
    // create a Request to counter endpoint 
    var request = new XMLHttpRequest();
  //capture the response and store 
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE) {
          //take some action
          if(request.status === 200){
           var counter=request.responseText;
           var span = document.getElementById("count");
           span.innerHTML=counter.toString();
          }
      }
      // not done yet 
  };
  request.open('GET','http://himanshubeniwal015.imad.hasura-app.io/counter',true);
      request.send(null);
};


//submit name

var submit= document.getElementById ('submit_btn');
submit.onclick = function() {
    
     var request = new XMLHttpRequest();
  //capture the response and store 
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE) {
          //take some action
          if(request.status === 200){
            var names= request.responseText;
            names=JSON.parse(names);
    var list='';
    for (var i=0; i<names.length; i++) {
        list += '<li>' + names[i]  +' </li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
          }
      }
      // not done yet 
  };
  var nameInput=document.getElementById ('name');
var name=nameInput.value;
  request.open('GET','http://himanshubeniwal015.imad.hasura-app.io/submit-name?name=' + name,true);
      request.send(null);
  // make a request to server and send the name 
  
  
    
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

