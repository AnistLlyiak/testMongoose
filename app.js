const Mongoose = require('mongoose');
const Product = require('./models/product');
Mongoose.Promise = global.Promise;

Mongoose.connect('mongodb://@localhost:27017/technocite', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if (error) throw error;
    console.log("connected to technocite db");
})

const descOrder = async () => {
    let record = await Product.aggregate([{
        $sort: {
            price: -1
        }
    }]);
    console.log(record);
}

const nameOrder = async () => {
    let record = await Product.aggregate([{
        $sort: {
            name: 1
        }
    }]);
    console.log(record);
}

const dateOrder = async () => {
    let record = await Product.aggregate([{
        $sort: {
            dateadd: -1
        }
    }]);
    console.log(record);
}

const priceOver = async (priceTag) => {
    let record = await Product.find({
        $gt: {
            price: priceTag
        }
    });
    console.log(record);
}

const outOfStock = async () => {
    let record = await Product.find({
        $lt: {
            stock: 1
        }
    });
    console.log(record);
}

const stockUnder = async (priceTag) => {
    let record = await Product.find({
        $and: [{
                $lt: {
                    stock: 3
                }
            },
            {
                $lt: {
                    price: priceTag
                }
            }
        ]
    });
    console.log(record);
}

const priceInc = async (pricetag) => {
    let record = await Product.updateMany({}, {
        $inc: priceTag
    })
}

const restock = async (restockAmount) => {
    let record = await Product.updateMany({
        $lt: {
            stock: 1
        }
    }, {
        $inc: {
            stock: restockAmount
        }
    })
}

const deleteName = async (delName) => {
    await Product.remove({
        name: delName
    })
}
