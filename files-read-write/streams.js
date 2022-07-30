import http from 'http'
import fs from 'fs'

let server = http.createServer()

// server.on('request', (req, res)=>{
//     const stream = fs.createReadStream('./temp/temp.csv')
//     stream.on('data', (chunck)=>{
//         console.log(chunck)
//         res.write(chunck)
//     })
//     stream.on('error', (err)=>{
//         if(err){
//             console.error(err)
//         }
//         res.end('Error Occured')
//     })
//     stream.on('end', ()=>{
//         console.log('Closed')
//         res.end()
//     })
// })

// ============= OR =============

server.on('request', (req, res)=>{
    const stream = fs.createReadStream('./temp/temp.csv')
    stream.pipe(res)
})


server.listen(8000, 'localhost')