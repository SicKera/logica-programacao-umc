<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <h1>
        <?php
            echo "Olá Airton";
        ?>
    <p>
        <?php
        echo "<h1> Olá Mundo </h1>";
        ?>
    </p>

    </h1>

    <h2>Variáveis em PHP</h2>

    <p>
        <?php
            $nome = 'Airton';
            $email = 'airton@hotmail.com';

            echo "Nome: $nome <br>";
            echo "Email $email <br>";

        ?>
    </p>

    <h2>Constantes em PHP</h2>

    <p>
        <?php
            const faculdade = "UMC";
            const cidade = "Mogi das Cruzes";

            echo "Faculdade: " .faculdade ."<br>";
            echo "Cidade: " .cidade ."<br>";

        ?>
    </p>
    
    




</body>
</html>