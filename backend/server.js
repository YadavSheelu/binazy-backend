const app = require("./app");  
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');


dotenv.config({ path: "backend/config/config.env" });  


connectDatabase();

app.use(cookieParser());  


app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
