var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var crypto= require('crypto');
var bodyParser = require('body-parser');

var config={
    user: 'himanshubeniwal015',
    database: 'himanshubeniwal015',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

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
              ${date.toDateString()}
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


function hash(input,salt) {
    //how do we create a hash??
    var hashed = crypto.pbkdf2Sync(input,salt, 10000,512,'sha512');
    return ['pbkdf2','10000',salt, hashed.toString('hex')].join('$');
}

app.get('/hash/:input',function (req,res) {
   var hashedString = hash(req.params.input, 'this-is-some-random-string');
   res.send(hashedString);
    
});

app.post('/create-user', function( req,res) {
    //username, password
    //JOSN
    var username= req.body.username;
    var password = req.body.password;
    var salt= crypto.randomBytes(128).toString('hex');
    var dbString = hash(password,salt);
    pool.query('INSERT INTO "user" (username,password) VALUES ($1,$2)', [username, dbString], function (err, result) {
        if(err) {
            res.status(500).send(err.toString());
            
        }else {
            res.send('User successfuly created : ' + username);
        }
        
        
    });
    
});

app.post('/login', function (req,res) {
    var username= req.body.username;
    var password = req.body.password;
    pool.query('SELECT * FROM "user" WHERE username = $1', [username], function (err, result) {
        if(err) {
            res.status(500).send(err.toString());
            
        }else {
            if(result.rows.length === 0) {
            res.send(403).send('username/password is invalid');
            }
            else {
                //match the password
                var dbString = result.rows[0].password;
                var salt = dbString.split('$')[2];
                var hashedPassword = hash(password, salt); 
                //creating hash based on password submitted and original salt
                if (hashedPassword === dbString) {
                    res.send('Credentials correct!!!! ');
                    
                    //set the session
                } else {
                    res.send(403).send('Username/password is invalid');
                }
            }
        }
    });
    
});


var pool= new Pool(config);
app.get('/test-db', function (req,res){ 
    
    //make a select request
    //return a response with the results
    pool.query('SELECT * FROM test', function(err,result){
        if(err) {
            res.status(500).send(err.toString());
            
        }else {
            res.send(JSON.stringify(result.rows));
        }
    } );
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

app.get('/articles/:articlesName', function (req,res){
    //article name will be article one
    // articles [articlesname] == {}content object for article one 
    // select * from article whre title ='\'; DELETE WHERE a=\'asdag a' 
    pool.query("SELECT * FROM article WHERE title = $1", [req.params.articlesName],  function (err,result) {
       if(err) {
           res.status(500).send(err.toString());
       } else {
           if(result.rows.length ===0 ) {
               res.status(404).send('Article not Found');
           } else {
               var articleData= result.rows[0];
               res.send(createTemplate(articleData));
           }
       }
    });
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
