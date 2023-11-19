const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser'); 
const mysql = require('mysql'); 
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'server'
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO registration (`name`,`email`,`password`) VALUES (?)"
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if(err) return res.json({Error: "Error for hashing password"})
        const values = [
            req.body.name,
            req.body.email,
            hash
        ]
        db.query(sql, [values], (err, result) => {
            if(err) return res.json({Error: "Error in inserting data in server"})
            return res.json({Status: "Success"});
        })
    })
    
})

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json({Error: "Please log in to access dashboard"});
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) {
                return res.json({Error: "Details do not match"});
            } else {
                req.name = decoded.name;
                next();
            }
        })
    }
}

app.get('/dashboard',verifyUser, (req, res) => {
 return res.json({Status: "Success", name: req.name});
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM registration WHERE email = ?";
    db.query(sql, [req.body.email], (err, data) => {
        if(err) return res.json({Error: "Login error in server"});
        if(data.length > 0) {
           bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
            if(err) return res.json({Error: "Password compare error"});
            if(response) {
                const name = data[0].name;
                const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
                res.cookie("token", token)
                return res.json({Status: "Success"});
            } else {
                return res.json({Error: "Password matching error"});
            }
           })
        } else {
            return res.json({Error: "No existing email"});
        }
    })
})

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ Status: 'Success' });
  });

app.listen(8080, () => {
    console.log("Registration is running on port 8080");
});

