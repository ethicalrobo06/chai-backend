// require("dotenv").config({ path: "./env" })
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
  path: "./env",
})

connectDB()

/*
import express from "express"
const app = express()
// IIFE
;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    app.on("error", () => {
      console.log("ERROR: ", error)
      throw error
    })

    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR:", error)
  }
})()
*/
