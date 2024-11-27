-- DROP DATABASE
DROP DATABASE IF EXISTS wwblog_db;
-- CREATE DATABASE
CREATE DATABASE wwblog_db;

\c wwblog;

--Create the following tables: users, posts, comments

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username VARCHAR(50) NOT NULL UNIQUE, 
    email VARCHAR(100) NOT NULL UNIQUE, 
    password_hash TEXT NOT NULL
);

CREATE TABLE ai_posts (
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES user_posts(id), 
    user_id VARCHAR (50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL, 
    content TEXT NOT NULL, 
    user_id INT REFERENCES users(id), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY, 
    content TEXT NOT NULL, 
    post_id INT REFERENCES posts(id), 
    user_id INT REFERENCES users(id), 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

