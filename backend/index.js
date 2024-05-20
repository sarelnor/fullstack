const express = require('express'),
path = require('path') //backend can look for information in our frontend folder
const sqlite3 = require('sqlite3').verbose();

const app = express()

//Open connection to database
const db = new sqlite3.Database(path.resolve(__dirname, 'test.sqlite'));

//Methods below
//For our adresses to work, we need to reference a folder called "api" so Express understands that we're working with APIs.
/*app.get('/api', (_request, response) => {
    response.send({ hello: "World" })
})*/

//Endpoint fetch all data from database
app.get('/cities', (_req, res) => {
    db.all('SELECT * FROM cities', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Database error');
            return;
        }
        res.json(rows);
    });
});

//Middleware
//To tell Express that all our static files are found in the "dist" folder in our backend folder:
app.use(express.static(path.join(path.resolve(), 'dist')))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Redo på http://localhost:3000');
});

//Don't forget to do a npm script for the build in the package.json: "build-frontend": "npm run --prefix ../frontend build && rm -Rf dist"
//So all you have to write in the terminal is "npm run build-frontend" instead of the whole thing above.