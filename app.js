import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import Blogs from "./blog.js"

const app = express();
app.use(express.json());

// listen to a specified port
app.listen(process.env.PORT, () => {
    console.log("server started!");
    console.log(`Blog API is running on ${process.env.PORT}`)
});

// connecting to database
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("Database connection successful!");
})

// Get all blogs
app.get("/blog", async (req, res) => {
    const blogs = await Blogs.find();
    res.status(200). json(blogs);
});

// Get a particular blog by ID
app.get("/blog/:id",async(req, res) => {
    const id = req.params.id;
    const blog = await Blogs. findById(id);

    // show error if the id dosent match any found in the database
    if (!blog) {
        return res.status(404).send("the blog post with the ID of ${id} ID does not exist.");
    }

    res.status(200).json(blog);
})


// create a new blog post
app.post ("/create", async (req, res) => {
    const {title,author,summary} = req.body;
    const newblog = new Blogs({ title, author, summary});
    await newblog.save();

    res.status(200). send("blog post created successfully!");
});

// Edit a Blog by ID
app.put("/edit/:id", async (req, res) => {
    const id = req.params.id.toString();
    const { title, author, summary } = req.body;
    const editedblog = await Blogs. findByIdAndUpdate (id, { title, author, summary });
    return res.status(200). send("blog post updated successfully!");

})
// Delete a blog by ID
app.delete("/delete/:id" , async (req, res) => {
    const id = req.params.id;
    const editedblog = await Blogs. findByIdAndDelete(id);

    // show an error if specified blog does not exist
    if (!editedblog) {
        return res. status(404).send ("The blog post wiyh the ID of ${id} does not exist.");
    }
    return res.status(404).send("blog post with the Id of ${id} has been deleted successfully!");
})




