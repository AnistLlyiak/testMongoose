const db = connect('technocite');

db.products.insert([{
        name: 'lait',
        dateadd: new Date(2019, 11, 01),
        price: 8.71,
        stock: 3
    }, {
        name: 'beure',
        dateadd: new Date(2019, 11, 11),
        price: 2.52,
        stock: 11
    }, {
        name: 'moutarde',
        dateadd: new Date(2019, 11, 4),
        price: 2.18,
        stock: 3
    }, {
        name: 'kiri',
        dateadd: new Date(2019, 10, 22),
        price: 4.12,
        stock: 3
    }, {
        name: 'boursin',
        dateadd: new Date(2019, 10, 22),
        price: 1.12,
        stock: 20
    }, {
        name: 'yoplait panier sensation framboise citron',
        dateadd: new Date(2019, 09, 31),
        price: 1.68,
        stock: 5
    }, {
        name: 'yop',
        dateadd: new Date(2019, 10, 22),
        price: 1.17,
        stock: 30
    }, {
        name: 'Starbucks cup noisette macchiato',
        dateadd: new Date(2019, 10, 22),
        price: 4.12,
        stock: 35
    }, {
        name: 'St agaune',
        dateadd: new Date(2019, 09, 17),
        price: 2.99,
        stock: 1
    }, {
        name: 'jambom',
        dateadd: new Date(2019, 11, 16),
        price: 2.99,
        stock: 15
    }, {
        name: 'pomme de terre',
        dateadd: new Date(2019, 10, 22),
        price: 5,
        stock: 46
    }, {
        name: 'fricadelle',
        dateadd: new Date(2019, 10, 22),
        price: 2.12,
        stock: 2
    },
    {
        name: 'Orval',
        dateadd: new Date(2019, 11, 15),
        price: 5.71,
        stock: 0
    }, {
        name: 'raclette',
        dateadd: new Date(2019, 11, 15),
        price: 12.5,
        stock: 0
    }
])