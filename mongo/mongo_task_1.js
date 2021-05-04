conn = new Mongo();
db = conn.getDB("aostrikov");

db = connect("localhost:27017/aostrikov");
db.createCollection("customers");
db.createCollection("orders");

firstNames = ['John', 'James', 'Steve', 'Rayan']
lastNames = ['Barns', 'Johnson', 'Goodsen', 'Brown']

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

for (let i = 0; i < 3000; i++) {
    db.customers.insert({
        name: {
            first: firstNames[getRandomIntInclusive(0, 3)],
            last: lastNames[getRandomIntInclusive(0, 3)]
        },
        balance: getRandomIntInclusive(0, 100000),
        createdAt: new Date()
    })
}

db.customers.find().forEach(element => {
    numOrders = getRandomIntInclusive(1, 10)
    for (let j = 0; j <= numOrders; j++) {
        db.orders.insert({
            customerId: element._id,
            count: getRandomIntInclusive(1, 100),
            price: getRandomIntInclusive(20, 100),
            discount: getRandomIntInclusive(5, 30),
            title: 'Some Title',
            product: 'Some Product'
        })
    }
});

db.orders.count()
db.customers.totalSize()
db.orders.totalSize()
db.customers.totalSize() + db.orders.totalSize()
