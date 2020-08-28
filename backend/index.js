const server = require ('./server')
const PORT = 4000 || process.env.PORT

server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})