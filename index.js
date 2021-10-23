const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
    res.send('hello node express');
})

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '0194875588' },
    { id: 1, name: 'Shabnoor', email: 'noor@gmail.com', phone: '0194875588' },
    { id: 2, name: 'Labony', email: 'kazi@gmail.com', phone: '0194875588' },
    { id: 3, name: 'Joly', email: 'joly@gmail.com', phone: '0194875588' },
    { id: 4, name: 'Heera', email: 'heera@gmail.com', phone: '0194875588' },
    { id: 5, name: 'Aklima', email: 'aklima@gmail.com', phone: '0194875588' },
    { id: 6, name: 'Cherry', email: 'cherry@gmail.com', phone: '0194875588' },
    { id: 7, name: 'Nargis', email: 'nargis@gmail.com', phone: '0194875588' },
    { id: 8, name: 'Mukta', email: 'mukta@gmail.com', phone: '0194875588' },
    {
        id: 9, name: 'Ira', email: 'ira@gmail.com', phone: '0194875574'
    }];

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else { res.send(users) }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body)
    // res.send('post got')
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})
app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
    // console.log(req.params.id);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('tok mango');
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'grren coconut', 'guava'])
})



app.listen(port, () => {
    console.log('Listening to port', port);
})