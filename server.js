const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const articles = [
  {
    id: '1',
    title: 'Sheep',
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    title: 'Lambs',
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    title: 'Wolves',
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '4',
    title: 'Worms',
    text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

app.get('/articles', (req, res) => {
  res.json(articles);
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Can not find that resource' });
});

app.listen(4000, () => {
  console.log('listening on 4000');
});
