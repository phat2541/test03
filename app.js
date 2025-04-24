const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');  
const path = require('path');
const productRouter = express.Router();

const app = express();
const PORT = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs")

productRouter.route("/").get((req,res) =>{
    res.render("products",{
        products: [
            {title: 'car1', Description: 'NISSIN SKYLINE R35' , Price : '25.m'},
            {title: 'car2', Description: 'MORSIDAS BENZ ' , Price : '30.m'},
            {title: 'car3', Description: 'MACRARAN P1 ' , Price : '50.m'},
            {title: 'car4', Description: 'BMW SERIES 3 ' , Price : '10.m'},
        ]
    }
    );
});


app.use("/products", productRouter)

app.get("/", (req,res) =>{

    res.render('index',{username: 'weeraphat', customers: ["weera","phat","kamlang"]});

})

app.listen(PORT, ()=>{
    console.log("Listening On Port %d " + chalk.green (" : "+ PORT));
})