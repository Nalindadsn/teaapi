const express=require('express')
const app=express()

app.get("/",function (req,res) {
	res.send("test o j")
})

app.listen(process.env.PORT || 5000)