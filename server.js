const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use("/regions_list", (req, res)=>{

    res.contentType('application/json');
    res.send({ "country_name":"Malaysia" });
})

app.listen(PORT, ()=>{
    console.log(`Current server running on PORT ${ PORT }`);
})