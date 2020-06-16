const express = require("express");
const app = express();

const Post = require("./api/models/posts)");
const postsData = new Post();

var multer = require("multer")
var storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${getExt(file.mimetype)}`)
    }
})
var upload = multer({storage: "uploads/"})

const getExt = (mimeType) => {
    switch(mimeType) {
        case "image/png":
            return ".png";
        case "image/jpeg":
            return ".jpeg";
    }
}

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

app.use("/uploads", express.static("uploads"))

app.get("/", (req,res) => {
    postsData.add(test);
    res.status(200).send(postsData.get());
})

app.get("/api/posts/:post_id", (req, res) => {
    const postID = req.params.post_id;
    const foundPost = postsData.getIndividualBlog(postId);
    if(foundPost) {
        res.status(200).send(foundPost);
    } else {
        res.status(404).send("Not Found");
    }
})

app.post("/api/posts", upload.single("post-image"), (req, res) => {
    const newPost = {
        "id": `${Date.now()}`,
        "title": req.body.title,
        "content": req.body.content,
        "post-image": req.file.path,
         "added-date": `${Date.now()}`
    }
    postsData.add(newPost);
    res.status(201).send(newPost);
})

app.listen(3000, () => console.log("Listening on http://localhost:3000"))