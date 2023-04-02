import { Router } from "express";
import postController from "../controller/post.controller.js";
const router = new Router();

router.post("/post", postController.createPost);
router.get("/post", postController.getPostsByUser);

export default router;
