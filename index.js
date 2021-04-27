const express = require("express")
const server = express()
const router = express.Router()
const fs = require("fs")

const readfile = () =>{
    const content = fs.readFileSync('./data/items.json','utf-8')
    return JSON.parse(content)
}

const writefile = (content) =>{
    const updatefile = JSON.stringify(content)
    fs.writeFileSync('./data/items.json',JSON.stringify(updatefile),'utf-8')
}

router.get('/',(req,res)=>{
    const content = readfile()
    res.send(content)
})
 
router.post('/',(req,res)=>{
    const { name, email, phone} = req.body
    const currentcontent = readfile()
    currentcontent.push({name,email,phone})
    writefile(currentcontent)
    res.send({ name, email, phone})
})

router.put('/',(req,res)=>{
    res.send(' Put !!!')
})

router.delete('/',(req,res)=>{
    res.send(' Delete !!!')
})

server.use(express.json({extended : true}))
server.use(router)

server.listen(3000, () => {
    console.log("Rodando Servidor")
})