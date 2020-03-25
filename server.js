const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const port = process.env.PORT||9000
const app = express()
const schema = require('./schema.js')

app.use(bodyParser.json() , cors())

const {graphqlExpress,graphiqlExpress} = require('apollo-server-express')

app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))

app.listen(port, () =>  console.log(`server is up and running ${port}`))
