-- DROP DATABASE
DROP DATABASE IF EXISTS wwblog_db;
-- CREATE DATABASE
CREATE DATABASE wwblog_db;

\c wwblog_db;

--Create the following tables: users, posts, comments

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(50) NOT NULL UNIQUE, 
    email VARCHAR(100) NOT NULL UNIQUE, 
    password_hash TEXT NOT NULL
);

CREATE TABLE user_tokens(
        id SERIAL PRIMARY KEY, 
        user_id INT REFERENCES users(id),
        token TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL, 
    subheading VARCHAR(255) NOT NULL, 
    content TEXT NOT NULL, 
    user_id INT REFERENCES users(id), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ai_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL, 
    subheading VARCHAR(255) NOT NULL, 
    content TEXT NOT NULL, 
    user_id INT REFERENCES users(id), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY, 
    content TEXT NOT NULL, 
    user_post_id INT REFERENCES user_posts(id), 
    user_id INT REFERENCES users(id), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

