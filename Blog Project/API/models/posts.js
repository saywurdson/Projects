const PATH = "./data.json";
const fs = require('fs');
const { runInThisContext } = require('vm');


class Post {
    get() {
        return this.readData();
    }
    getIndividualBlog() {
        const posts = this.readData();
        const foundPost = posts.find((post) => post.id == postId);
        return foundPost;
    }
    add(newPost) {
        const currentPosts = this.readData;
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }
    readData() {
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }
    storeData(rawData) {
        let dara = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }
}

module.exports = Post;