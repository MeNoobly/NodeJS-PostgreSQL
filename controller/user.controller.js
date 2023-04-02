import db from "../db.js";

class UserController {
    async createUser(request, response) {
        const { name, surname } = request.body;
        const newPerson = await db.query(
            "INSERT INTO person (name, surname) values ($1,$2) RETURNING *",
            [name, surname]
        );
        response.json(newPerson.rows[0]);
    }
    async getUsers(request, response) {
        const users = await db.query("SELECT * FROM person");
        response.json(users.rows);
    }
    async getOneUser(request, response) {
        const id = request.params.id;
        const users = await db.query("SELECT * FROM person WHERE id = $1", [
            id,
        ]);
        response.json(users.rows[0]);
    }
    async updateUser(request, response) {
        const { id, name, surname } = request.body;
        const user = await db.query(
            "UPDATE person SET name = $1, surname = $2 WHERE id = $3 RETURNING *",
            [name, surname, id]
        );
        response.json(user.rows[0]);
    }
    async deleteUser(request, response) {
        const id = request.params.id;
        const users = await db.query("DELETE FROM person WHERE id = $1", [id]);
        response.json(users.rows[0]);
    }
}

export default new UserController();
