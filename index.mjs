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

    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });