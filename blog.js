import mongoose from "mongoose"
import { stringify } from "querystring"

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        summary: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    },
    
    {
        timestamps: true
    }
)
const Blogs = mongoose.model("Blogs", blogSchema)

export default Blogs;