const fs = require("fs")
const http = require("http")

fs.writeFile("index.html", `<h1> Hello World </h1> <p> This is Bapi Shaikh... </p>`, (err) => {
    if (err != null) {
        console.log(err);
    }

    const server = http.createServer((req, res) => {
        fs.readFile("index.html", "utf-8", (err, data) => {
            if (err != null) {
                console.log(err);
                res.write("Some error came");
                res.end();
                return
            }
            res.write(data);
            res.end();
        })
    })
    server.listen("5000", "localhost", (err) => {
            console.log(err);
        
    })
})
