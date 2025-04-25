
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');


const PORT = 3000;
const productsRouter = require("./src/router/productsRouter")

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs")

app.use("/products", productsRouter)

app.get("/", (req, res) => {

    res.render('index', { username: 'weeraphat', customers: ["weera", "phat", "kamlang"] });

})

app.listen(PORT, () => {
    console.log("Listening On Port %d " + chalk.green(" : " + PORT));
})