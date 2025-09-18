    import express from 'express';
    
    const app = express();
    const port = 3000;

    app.get('/', (req, res) => {
      res.send('Hello from Dockerized Node.js!');
    });

    app.get('/health', (req, res) => {
      res.send('Okay!');
    });

    // echo endpoint that returns the request headers
    app.get('/echo', (req, res) => {
      res.json(req.headers);
    });

    // get two integer query parameters and return their sum
    app.get('/add', (req, res) => {
      const a = parseInt(req.query.a);
      const b = parseInt(req.query.b);
      if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Invalid query parameters');
      }
      res.send((a + b).toString());
    });

    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });