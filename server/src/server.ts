import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  return res.json([
    { id: 1, name: 'Anúncio 1' },
    { id: 2, name: 'Anúncio 2' },
    { id: 3, name: 'Anúncio 3' },
    { id: 4, name: 'Anúncio 4' },
    { id: 5, name: 'Anúncio 5' },
  ]);
});

app.listen(port, () => {
  console.log(`Server listenig on http://localhost:${port}`);
});
