const http = require('http')
const fs = require('fs')
const { error } = require('console')

const server = http.createServer()



server.listen(8000, '127.0.0.1', ()=>{
    console.log('server listening')
})

// server.on('request', (req, res)=>{
//     fs.readFile('./largeFile.txt.', (error, data)=>{
//         if(error){
//             return res.end('something went wrong')
//         }
//         res.end(data)
//     }
// )})

server.on('request', (req, res)=>{
    let rs = fs.createReadStream('./largeFile.txt.')

    rs.on('data', (chunk)=>{
        res.write(chunk)
    })


    rs.on('end', ()=>{
        res.end()
    })

    rs.on('error', (error)=>{
        res.end(error.message)
    })
    
}) 