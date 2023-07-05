const express=require('express');
const  bp = require("body-parser");
const app=express();
app.use(bp.json());
var datas=[];
function getData(url)
{
    fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('');
    }
    return response.json();
  })
    
  .then(data => {
        for(let i=0;i<data.numbers.length;i++)
                {
                    
                    if(datas.includes(data.numbers[i]))
                        {
                            
                        }
                        else
                            {
                                console.log(data.numbers[i]);
                                datas.push(data.numbers[i])
                            }
                }   
  })
  .catch(error => {
    console.error('Error:', error);
  });    
}
app.get('/numbers',(req,res)=>{
    var x=req.body.url;
    var x1=req.body.url1;
    var x3=req.body.url2;
    if(!x && !x1)
        {
            res.status(404).send("error");
        }
    getData(x);
    getData(x1);
    getData(x3);
    datas.sort(function(a, b){return a - b});
    res.json(datas);
});


app.listen(3000,()=>{
    console.log("Number Server is Running At port 3000")
});