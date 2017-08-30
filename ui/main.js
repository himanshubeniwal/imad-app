/*
console.log('Loaded!');

//code to change the content of page 

var element= document.getElementById("tobechange");
element.innerHTML= " this is changed text ";

*/ 

/*
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


var nameInput=document.getElementById ('name');
var name=nameInput.value;
  request.open('GET','http://himanshubeniwal015.imad.hasura-app.io/submit-name?name=' + name,true);
      request.send(null);
  // make a request to server and send the name 
  
*/

//submit username / password to log in !! 

var submit= document.getElementById ('submit_btn');
submit.onclick = function() {
    
     var request = new XMLHttpRequest();
  //capture the response and store 
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE) {
          //take some action
          if(request.status === 200){
            alert("Logged in successfully!!! ");
          }
          else if ( request.status === 403) {
              alert("username/password is incorrect");
          }
          else if ( request.status === 500 ) {
              alert(" SErver went wrong ");
          }
      }
      // not done yet 
  };
  
  
var username=document.getElementById ('username').value;
var password=document.getElementById ('password').value;
console.log(username);
console.log(password);

  request.open('POST','http://himanshubeniwal015.imad.hasura-app.io/login',true);
  request.setRequestHeader('Content-Type', 'application/json');
      request.send(JSON.stringify({username: username, password:password}));
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

