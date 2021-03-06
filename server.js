var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Pages = {//used to replace contents of each and every page
    one:{
        title:'ALERT!',
        Heading : 'Change of class',
        section : ' 4B ',
        subject  : 'Java ',
        date : 'Today',
        memo : '<p>Today,Java class will be held in room number 132!Submit assignments.Today,Java class will be held in room number 132!Submit assignments</p><p>Today,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignments</p><p>Today,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignments</p>'
        },
    two:{
        title:'Alert!',
        Heading : 'Change of class',
        section : ' A ',
        subject  : 'C++ ',
        date : 'Tomorrow',
        memo : '<p>Today,Java class will be held in room number 132!Submit assignments.Today,Java class will be held in room number 132!Submit assignments</p><p>Today,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignments</p><p>Today,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignments</p>'
        
    },
    three:{
        title:'ALERT!',
        Heading : 'Change of class',
        section : ' 4B ',
        subject  : 'Java ',
        date : 'Today',
        memo : `<p>Today,Java class will be held in room number 132!Submit assignments.Today,Java class will be held in room number 132!Submit assignments</p><p>Today,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignments</p><p>Today,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignmentsToday,Java class will be held in room number 132!Submit assignments</p>
            <a href="/">Go back</a>`
    }
};
function create_template(data){
    var date=data.date,title=data.title,Heading=data.Heading,section=data.section,subject=data.subject,memo=data.memo;
    
    
    var templatehtml=
                `<html>
                <head>
                    <title>${title}</title>
                    <meta name="mfriendly" content="width-device-width,initial-scale=1"/>
                            <link href="/ui/style.css" rel="stylesheet" />
            
                </head>
                <body>
                    <div>${Heading}</div>
                    <div>${date}</div>
                     <div>${section}</div>
                      <div>${subject}</div>
                     <div>${memo}</div>        
                  
                </body>
            </html>`;

    return templatehtml;
}


    





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(create_template(Pages[articleName]));
});
/*
app.get('/Page-two', function (req, res) {
   // res.sendFile(path.join(__dirname, 'ui', 'Page-two.html'));
   res.send(create_template(Pages.two));
});
app.get('/Page-three', function (req, res) {
   //res.sendFile(path.join(__dirname, 'ui', 'Page-three.html'));
   res.send(create_template(Pages.three));
});*/
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});



app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
