import db from "../db.js";

class PostController {
    async createPost(request, response) {
        const { title, content, userID } = request.body;
        const newPost = await db.query(
            "INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *",
            [title, content, userID]
        );
        response.json(newPost.rows[0]);
    }

    async getPostsByUser(request, response) {
        const id = request.query.id;
        const posts = await db.query("SELECT * FROM post WHERE user_id = $1", [
            id,
        ]);
        response.json(posts.rows);
    }
}

export default new PostController();
