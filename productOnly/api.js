const client = require('./connection.js')
const express = require('express');
const app = express();


app.listen(3300, () => {
    console.log("Sever is now listening at port 3300");
})

client.connect();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


// xem list product cua shop
app.get('/products/:shop_id', (req, res) => {
    client.query(`Select * from products where shop_id='${req.params.shop_id}'`, (err, result) => {
        if (!err) {
            return res.send(result.rows);
        }else{
            return res.status(500).send(err);
        }
    });
    client.end;
})

// xem chi tiet product 
app.get('/product/:product_id', (req, res) => {
    client.query(`Select * from products where product_id='${req.params.product_id}'`, (err, result) => {
        if (!err) {
            return res.send(result.rows);
        }else{
            return res.status(500).send(err);
        }
    });
    client.end;
})


//them 
app.post('/product', (req, res) => {
    const data = req.body;
    console.log(data.product_id);
    let insertQuery = `insert into products(product_id, shop_id, category_id, "name", description, image, price, remaining_stock) 
                       values('${data.product_id}', '${data.shop_id}', '${data.category_id}', '${data.name}', '${data.description}', '${data.image}', ${data.price}, ${data.remaining_stock})`;
    console.log(insertQuery)
    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Insertion was successful');
        }
        else { console.log(err.message); }
    })
    client.end;
})


//sua
app.put('/product/:product_id', (req, res) => {
    let data = req.body;
    let updateQuery = `update products
                       set 
                       category_id = '${data.category_id}',
                       "name" = '${data.name}',
                       description = '${data.description}',
                       image = '${data.image}',
                       price = '${data.price}',
                       remaining_stock = '${data.remaining_stock}'
                       where product_id = '${data.product_id}'`

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
})


//xoa
app.delete('/product/:product_id', (req, res) => {
    let insertQuery = `delete from products where product_id='${req.params.product_id}'`

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Deletion was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
})

// search product 
app.get('/search', (req, res) => {
    let data = req.body;
    console.log(`Select * from products where name like '%${data.name}%'`)
    client.query(`Select * from products where name like '%${data.name}%'`, (err, result) => {
        if (!err) {
            return res.send(result.rows);
        }else{
            return res.status(500).send(err);
        }
    });
    client.end;
})

//xoa tat ca product cua shop
app.delete('/products/:shop_id', (req, res) => {
    let insertQuery = `delete from products where shop_id='${req.params.shop_id}'`

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Deletion was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
})


// client.connect();