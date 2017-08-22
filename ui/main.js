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
var nameInput=document.getElementById ('name');
var name=nameInput.value;
var submit= document.getElementById ('submit_btn');
submit.onclick = function() {
  // make a request to server and send the name 
  //capture a list of names and render as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for (var i=0; i<names.length; i++) {
        list += '<li>' + names[i]  +' </li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
    
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

