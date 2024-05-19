const express = require('express'),
path = require('path') //backend can look for information in our frontend folder

const app = express()

//Methods below
//For our adresses to work, we need to reference a folder called "api" so Express understands that we're working with APIs.
app.get('/api', (_request, response) => {
    response.send({ hello: "World" })
})

//Middleware
//To tell Express that all our static files are found in the "dist" folder in our backend folder:
app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(3000, () => {
    console.log('Server is ready at http://localhost:3000')
})

//Don't forget to do a npm script for the build in the package.json: "build-frontend": "npm run --prefix ../frontend build && rm -Rf dist"
//So all you have to write in the terminal is "npm run build-frontend" instead of the whole thing above.