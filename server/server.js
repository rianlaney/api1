const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(express.json())
app.use(cors())

//body
app.get('/api/planet/2', (req,res)=>{
    let { name } = req.params
    console.log(name)
    axios.get(`https://swapi.dev/api/planets/2`)

})


//body
app.listen(4000, console.log(`App running on 4000`))