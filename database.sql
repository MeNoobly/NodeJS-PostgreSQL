CREATE TABLE
    person(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        surname VARCHAR(255)
    );

CREATE TABLE
    post(
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        content VARCHAR(255),
        user_id INTEGER,
        Foreign Key (user_id) REFERENCES person (id)
    );