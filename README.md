PLP Bookstore (MongoDB Assignment)

This project is about a simple bookstore database.

HOW TO RUN:
1. START MONGODB

If you installed MongoDB on your computer → just make sure it’s running.

Default link: mongodb://localhost:27017


2. ADD BOOKS TO THE DATABASE

Open a terminal in this folder.

Run:

node insert.js

This will put sample books inside a database called plp_bookstore.


3. PLAY WITH QUERIES

Open MongoDB Shell (type mongosh in terminal).

Use the database:

use plp_bookstore

Copy queries from queries.js and paste them into the shell one by one.

You’ll see results right away.


WHAT'S INSIDE

1. insert.js → puts books into the database.

2. queries.js → has all the MongoDB queries (CRUD, advanced, aggregation, indexing).



