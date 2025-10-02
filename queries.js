// MongoDB QUERIES
// 1. FIND ALL BOOKS IN A SPECIFIC GENRE
db.books.find({ genre: "Fiction" })

// 2. FIND BOOKS PUBLISHES AFTER A CERTAIN YEAR 
db.books.find({ published_year: { $gt: 2000 } })

// 3. FIND BOOKS BY A SPECIFIC AUTHOR
db.books.find({ author: "George Orwell" })

// 4. UPDATE THE PRICE OF A SPECIFIC BOOK
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 25.00 } }
)

// 5. DELETE A BOOK BY ITS OWN TITLE
db.books.deleteOne({ title: "Wuthering Heights" })



// TASK 3 - ADVANCED QUERIES
// 1. FIND BOOKS THAT ARE BOTH IN STOCK AND PUBLISHED AFTER 2010
db.books.find(
    { in_stock: true, published_year: { $gt: 2010 } }
)

// 2. USE PROJECTION TO RETURN ONLY TITLE, AUTHOR AND PRICE
db.books.find(
    { in_stock: true, published_year: { $gt: 2010 } },
    { title: 1, author: 1, _id: 0 }
)

// 3. IMPLEMENT SORTING TO DISPLAY BOOKS BY PRICE (both ascending and descending)
// Ascending
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: 1})

// Descending
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).sort({ price: -1 })

// 4. USE THE LIMIT AND SKIP METHODS TO IMPLEMENT PAGINATION (5 books per page)
// Page 1
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).limit(5)

// Page 2
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).skip(5).limit(5)

// Page 3
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 }).skip(10).limit(5)

// TASK 4 - AGGREGATION PIPELINE
// 1. CALCULATE AN AGGREGATION PIPELINE TO CALCULATE THE AVERAGE PRICE OF BOOKS BY GENRE
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// 2. CREATE AN AGGREGATION PIPELINE TO FIND THE AUTHOR WITH THE MOST BOOKS IN THE COLLECTION
db.books.aggregate([
  { $group: { _id: "$author", bookCount: { $sum: 1 } } },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

// 3. IMPLEMENT A PIPELINE THAT GROUPS BOOKS BY PUBLICATION DECADE AND COUNTS THEM
db.books.aggregate([
  { $group: { _id: { $multiply: [ { $floor: {$divide: ["$published_year", 10] } }, 10 ] },
    count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
])

// TASK - 5
// 1. CREATE AN INDEX ON THE TITLE FIELD FOR FASTER SEARCHES
db.books.createIndex({ title: 1 })

// 2. CREATE A COMPOUND INDEX ON AUTHOR AND PUBLISHED YEAR
db.books.createIndex({ author: 1, published_year: -1 })

// 3. USE EXPLAIN() METHOD TO DEMONSTRATE THE PERFORMANCE IMPROVEMENT WITH YOUR INDEXES
db.books.find({ title: "The Hobbit" }).explain("executionStats")





