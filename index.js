const express  = require("express")
const App =  express()

App.use(express.json());
let Arry = []

App.get("/", (req,res) => 
{
    res.send(Arry);
})

App.get("/:id",(req,res) =>
{
    let {id} = req.params
    let data = Arry
    let {category,sort,serach} = req.query
    res.send(Arry[id])


    if(category)
    {
        data.filter((ele) => ele.category == category)
        console.log(data);
        res.send(category)
    }
    else
    {
        res.send(Arry)
    }
    if(sort)    
    {
        if(sort=="lth")
            {
                data.sort((a,b) => a.price - b.price)
            }
        else
        {
            data.sort((a,b) => b.price - a.price)
        }    
    }
    if(serach)
    {
        data.filter((ele) => ele.title==serach)
    }    
    res.send(data)    
})

App.post("/", (req,res) =>
{
    console.log(req.body);
    Arry.push(req.body)
    res.send(Arry)
})

App.delete("/:id", (req,res) =>
{
    console.log(req.params);
    res.send(Arry);
    let {id} = req.params;
    Arry.splice(id,1)
})
App.patch("/:id",(req,res) =>
{
    let {id} = req.params
    Arry[id] = {...Arry[id],...req.body}
    res.send(Arry)
})
App.listen(8000,() =>
{
    console.log("Server Is Runnig On Port 8000");
})