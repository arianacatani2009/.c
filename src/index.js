/*
//creacion de un web server en express
//const express = require('express')
const {engine} = require('express-handlebars')
//invocar la libreria de express
//crear una instancia
//const app = express()
app.engine('handlebars',engine);
app.set('view engine','handlebars');
//porsicaso no funcione
//const ruta = path.join(__dirname,"views")
app.set('view','./src/views')

app.get('/hamburguesa/vegana',(req,res)=>{
    res.send('home')
})
app.get('/hamburguesa/contactos',(req,res)=>{
    res.render('contactos')
})
*/
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
/*
app.get('/',(req,res)=>{
    //request de la peticion -  cliente
    req.body
    req.params
    req.query
})

//publicas
app.get('/entrada',(req,res)=>{
    res.send("Entrada al local")
})
//crear un middleware
app.use((req,res,next)=>{
    const{email,password} = req.body
    if(email === "arianacatani@gmail.com" && password === "12345"){
        next()
    }
    else{
        res.send("Usuario no registrado")
    }
})
//privadas
app.get('/pedido',(req,res)=>{
    res.send(`Bienvenido -${req.body.email} -- listo para tomar su orden`)
})
*/
app.get('/',(req,res)=>{
    res.send("Bienvenido")
})
app.get('/pedidoss',(req,res)=>{
    res.send("Bienvenido - usuario")
})
app.listen (3000)
//ruta
/*
app.get('/',(req,res)=>{
    res.send("Bienvenidos")
})//
//ruta
app.get('/dashboard',(req,res)=>{
    res.send("Dashboard principal")
})
app.use((req,res)=>{
    res.send("404 - Not Found")
})
*/
//mandar info en formato JSON
app.use(express.json())
/*
app.get('/pedido/:tipo',(req,res)=>{
    console.log(req.params)
})
app.get('/pedido/abc',(req,res)=>{
removeEventListener.send(`el pedido es una hamburguesa ${req.params.abc}`)
})
app.post('/register',(req,res)=>{
    const{pedido,solicitado}=req.body
    res.send(`El pedido de ${pedido} es realizado por ${solicitado}`)
})
//console.log(req.body)

app.get('/search',(req,res)=>{

    if (req.query.tipo == "sencilla")
    {
        res.send("Hamburguesa sencilla")
    }
    else{
        res.send("Otro tipo de hamburquesa")
    }
})

app.get('/hamburguesa/simple',(req,res)=>{
    res.send("Hamburguesa - simple")
})
console.log(__dirname)
app.get('/hamburguesa/doble',(req,res)=>{
    res.sendFile('./doble.webp',{
        root:__dirname
    })
})
app.get('/hamburguesa/triple',(req,res)=>{
    res.sendFile('./triple.docx',{
        root:__dirname
    })
})
app.get('/hamburguesa/mixta',(req,res)=>{
    res.status(200).json({
        "tipo":"mixta",
        "extra":"No"
    })
})
app.listen(3000)
console.log("Web server ejecutandose en el puesto 3000")

*/