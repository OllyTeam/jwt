const express = require ("express");
const bodyparser = require ("body-parser");
const jsonwebtoken = require ("jsonwebtoken");
const port = 3000;

const SECRET = process.env.SECRET
const app = express();
app.use(bodyparser.json);
users = [{ id: 1, email: 'boymeetsgirl@pageYOffset.con', password:'mrRwanda'}]
const middlewearFunc = (req, res, next) {
  const token = req.body.token;
  const decodedToken = jwt.verify(token, SECRET);
  req.user = decodedToken;
  next()

}


app.post('/signin', (req, res) => {
    const { email, password, id}= req.body;
    const token =jwt.sign({email, id}, SECRET)
    users[0].token = token
    res.header('x-auth-token', token).send(user[0]);
})


app.post('/sweet', middlewearFunc, (req, res) => {
  
})

app.get('/', (req,res) => {
    res.send('HI jwt')
})

app.listen(port , (err) => {
    if (err){
        return console.log('Good', err)
    }

    console.log(`Server listening on port ${port}`)
})