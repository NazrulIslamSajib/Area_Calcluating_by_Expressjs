const PORT = 3000; 
const app = require('./app');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/rectangle", (req, res) => {
    const length = parseFloat(req.body.length);
    const width = parseFloat(req.body.width);
    const area = length * width;

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Rectangle Area</title>
            <style>
                body {
                    background-color: #f0f8ff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    font-family: Arial, sans-serif;
                    margin: 0;
                    color: #333;
                }
                .container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    max-width: 400px;
                }
                h1 {
                    color: #007bff;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Rectangle Area</h1>
                <p>Your length is ${length} and width is ${width}. The area is ${area}.</p>
            </div>
        </body>
        </html>
    `);
});

app.post("/triangle", (req, res) => {
    const side1 = parseFloat(req.body.side1);
    const side2 = parseFloat(req.body.side2);
    const side3 = parseFloat(req.body.side3);

    //  semi-perimeter
    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Triangle Area</title>
            <style>
                body {
                    background-color: #f0f8ff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    font-family: Arial, sans-serif;
                    margin: 0;
                    color: #333;
                }
                .container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    max-width: 400px;
                }
                h1 {
                    color: #007bff;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Triangle Area</h1>
                <p>Your sides are ${side1}, ${side2}, and ${side3}. The area is ${area}.</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Your server is running at http://localhost:${PORT}`);
});
