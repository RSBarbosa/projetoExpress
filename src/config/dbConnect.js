import mongoose from "mongoose"

mongoose.connect("mongodb+srv://alura:alura@alura.fh7aaae.mongodb.net/alura");

let db = mongoose.connection;

export default db;