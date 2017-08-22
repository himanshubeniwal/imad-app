var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
        'article-one':{
            title: 'Article one | Himanshu Beniwal',
            heading : 'Article One',
            date: 'Aug. 15,2017',
            content: `
            <p>This is content for my fist aritwagiagbaenkfrab jrb vfkv jfb  ljlfnekr ben ner net ne</p>
                    <p>This is content for my fist aritwagiagbaenkfrab jrb vfkv jfb  ljlfnekr ben ner net ne</p>
                        <p>This is content for my fist aritwagiagbaenkfrab jrb vfkv jfb  ljlfnekr ben ner net ne</p>
                        <p>This is content for my fist aritwagiagbaenkfrab jrb vfkv jfb  ljlfnekr ben ner net ne</p>
                        `
        },
        'article-two': {  title: 'Article Two | Himanshu Beniwal',
            heading : 'Article Two',
            date: 'Aug. 16,2017',
            content: `
            <p>This is content for my Second aptpahae na pbnnnnnnba bf n bbbbbbbb  b b b b bbbb bbbbb bbbb bbbbbbb bbbbbbbaritwagiagbaenkfrab jrb vfkv jfb  ljlfnekr ben ner net ne</p>
                        ` 
        },
        'article-three' : {  title: 'Article Three | Himanshu Beniwal',
            heading : 'Article Three',
            date: 'Aug. 17,2017',
            content: `
            <p>This is content for my Third content parag of  bag pga egnkaen kp abaritwagiagbaenkfrab jrb vfkv jfb  ljlfnekr ben ner net ne</p>
        ` } 
};

function createTemplate(data){
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;
var htmlTemplate=  
    `
        <html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="widht=device-width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home Page</a>
            </div>
            <hr />
              <h3>
              ${heading} 
              </h3>
              <div>
              ${date}
              </div>
            <div>
                ${content}
                
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req,res) {
   counter=counter+1;
   res.send(counter.toString());
    
});

var names=[];
app.get('/submit-name', function (req,res){
    // get the name from request
    var name= req.query.name; 
    names.push(name);
    // JSON : javascript object notation
    res.send(JSON.stringify(names)); //todo
    
});

app.get('/:articlesName', function (req,res){
    //article name will be article one
    // articles [articlesname] == {}content object for article one 
    var articlesName=req.params.articlesName;
    res.send(createTemplate(articles[articlesName]));
});

// Request made to css file
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

// if request made to javascript file 
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// request made to image madi
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
