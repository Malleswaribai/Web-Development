// here app.js is our root file where everything is getting started. 
const ex = require("express") ; // here we are importing express. 

const app = ex(); // here this will return an express instance that that is assigned to app.  // so any thing what we change inside this app, will get changed in the express instance. 

// so here app is our application. 

app.listen(3000 , (err) => { // here our application is listening at port 3000, the port could be anything which is avilable on system. 
    if(err) {
        console.log(err);
    }

    console.log("server is running at port 3000"); 
})

// handle requests . 

app.get("/" , (req, res) => { // here we are handling a get request to the path which is mentioned in the function , 
    console.log("got a get request");
    let data = {
        name: "jayaram", 
        age: 20
    }
    res.send(data); // here the responce which we are giving in the form of string is a HTML template
} );