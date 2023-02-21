
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")

const authRoute = require("./routes/authRouter")
const userRoute = require("./routes/userRouter")
const uploadRoute = require("./routes/uploadRouter")


mongoose.set("strictQuery", false)
dotenv.config()

const app = express()

mongoose.connect(process.env.MONGOOSE_URL, ()=>console.log("database connected"))

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(fileUpload({useTempFiles: true}))


// ROUTES
app.use('/v1/auth', authRoute)
app.use('/v1/user', userRoute)
app.use('/v1/upload', uploadRoute)




app.listen(process.env.PORT)
app.get('/', (req, res)=> res.send("hello"))