const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    console.log("Home Page")
    res.send("Home Page <h3>For Info About React do /express</h3><h3>For Info About Node do /node</h3>")
    // return res.send({message:"hello"})
})

app.get("/express",(req,res)=>{
    res.send("<h1>About Express.js</h1><p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</p>")
})

app.get("/node",(req,res)=>{
    res.send("<h1>About Node.js</h1> <p>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting. The ability to run JavaScript code on the server is often used to generate dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a JavaScript everywhere paradigm,[6] unifying web-application development around a single programming language, as opposed to using different languages for the server- versus client-side programming.</p>")
})

app.listen(9000)