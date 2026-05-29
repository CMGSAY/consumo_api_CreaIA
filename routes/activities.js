
const express = require("express");

const router = express.Router();


router.post("/generate", async (req, res) => {

    const name = req.body.name;
    const lastname = req.body.lastname;


    try {

        const activityResponse = await fetch(
            "https://bored-api.appbrewery.com/random"
        );

        const activityData = await activityResponse.json();

        const activity = activityData.activity;

        const dogResponse = await fetch(
            "https://dog.ceo/api/breeds/image/random"
        );

        const dogData = await dogResponse.json();

        const dogImage = dogData.message;


        res.send(`

            <!DOCTYPE html>
            <html lang="es">

            <head>

                <meta charset="UTF-8">

                <title>Resultado</title>

                <style>

                    body {

                        display: flex;
                        justify-content: center;
                        align-items: center;

                        height: 100vh;

                        margin: 0;

                        background-color: #f2f2f2;

                        font-family: Arial;
                    }

                    .card {

                        background-color: white;

                        padding: 30px;

                        border-radius: 15px;

                        text-align: center;

                        box-shadow: 0px 0px 15px rgba(0,0,0,0.2);

                        width: 500px;
                    }

                    h1 {
                        color: #333;
                    }

                    p {

                        font-size: 20px;

                        margin: 20px 0;
                    }

                    img {

                        width: 300px;

                        height: 300px;

                        object-fit: cover;

                        border-radius: 10px;
                    }

                    a {

                        display: inline-block;

                        margin-top: 20px;

                        text-decoration: none;

                        background-color: #007bff;

                        color: white;

                        padding: 10px 20px;

                        border-radius: 8px;
                    }

                </style>

            </head>

            <body>

                <div class="card">

                    <!-- Saludo personalizado -->
                    <h1>
                        Hola ${name} ${lastname}
                    </h1>

                    <!-- Actividad -->
                    <p>
                        ${activity}
                    </p>

                    <!-- Imagen -->
                    <img src="${dogImage}" alt="Perro">

                    <br>

                    <!-- Volver -->
                    <a href="/">
                        Volver al inicio
                    </a>

                </div>

            </body>

            </html>

        `);

    } catch (error) {

        console.log(error);

        res.send(`
            <h1>Error al obtener los datos de las APIs</h1>
        `);
    }
});


module.exports = router;