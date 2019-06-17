const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

const selectAll = 'SELECT * from restaurantData';

const connection = mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'root',
	password:'',
	database:'restaurant-database'
});

connection.connect(err => {
	if(err){
		return err;
	}
});

app.use(cors());

app.get('/', (req, res) => {
	res.send('Go to /restaurants to check')
});

app.get('/restarants', (req, res) => {
	connection.query(selectAll, (err, results) => {
		if(err) {
			return res.send(err)
		} else {
			return res.json({
				data: results
			})
		}
	});
});
