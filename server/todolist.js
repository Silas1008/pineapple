const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM progress";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database");
        } else {
            res.send(result);
        }
    });
});

app.post('/api/insert', (req, res) => {
    const title = req.body.title;
    const task = req.body.task;

    const sqlInsert = "INSERT INTO progress (task, title) VALUES (?, ?);";
    db.query(sqlInsert, [task, title], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error inserting data into the database");
        } else {
            console.log("Data inserted successfully");
            res.status(200).send("Data inserted successfully");
        }
    });
});

app.delete('/api/delete', (req, res) => {
    const id = req.body.id;
    const sqlDelete = "DELETE FROM progress WHERE id = ?";
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error deleting data from the database");
        } else {
            console.log("Data deleted successfully");
            res.status(200).send("Data deleted successfully");
        }
    });
});

app.put('/api/edit/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const task = req.body.task;

    const sqlUpdate = "UPDATE progress SET title = ?, task = ? WHERE id = ?";
    db.query(sqlUpdate, [title, task, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error updating data in the database");
        } else {
            console.log("Data updated successfully");
            res.status(200).send("Data updated successfully");
        }
    });
});

app.listen('8081', () => {
    console.log("todolist is running on port 8081");
});
