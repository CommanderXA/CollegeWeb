connect_db = new Mongo();
database = connect_db.getDB("ruslan_chakichev");
database = connect("localhost:27017/ruslan_chakichev");
database.createCollection("customers");
database.createCollection("orders");
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

names = ['Ivan', 'Alex', 'Petr']
surnames = ['Petrov', 'Kropov', 'Ivanov']
for (let i = 0; i < 3000; i++) {
    database.customers.insert({
        name: {
            name: names[randomNumber(0, 2)],
            surname: surnames[randomNumber(0, 2)]
        },
        balance: randomNumber(0, 100000),
        createdAt: new Date()
    })
}

database.customers.find().forEach(element => {
    ordersNumber = randomNumber(1, 10)
    for (let j = 0; j <= ordersNumber; j++) {
        database.orders.insert({
            customerId: element._id,
            count: randomNumber(1, 100),
            price: randomNumber(20, 100),
            discount: randomNumber(5, 30),
            title: 'Главный Текст',
            product: 'Текст продукта'
        })
    }
});
database.orders.count()
database.customers.totalSize()
database.orders.totalSize()
database.customers.totalSize() + database.orders.totalSize()
