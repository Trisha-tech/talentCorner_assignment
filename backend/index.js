const express = require(`express`);
const app = express();
const PORT =  8080;

app.use(express.json());



app.get('/', (req, res) => {
    res.send(`Welcome to Talent Corner HR Services Private Limited Assignment !!!    Made by Trisha Sahu`);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})