<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylephp.css">
    <title>Resultado</title>
    
</head>
<body>

    <main class="container">
        <h1>Dados Enviados</h1>

        <?php
            // echo var_dump($_POST);

            // Capturando os dados inseridos no formulário.
            $nome = $_POST["nome"];
            $sobrenome = $_POST ["sobrenome"];
            $email = $_POST ["email"];
            $senha = $_POST ["senha"];

            // E os apresentando com o "echo".
            echo "<p><strong> O seu nome é: </strong> $nome </p>";
            echo "<p><strong> O seu sobrenome é: </strong> $sobrenome </p>";
            echo "<p><strong> O seu email é: </strong> $email </p>";
            echo "<p><strong> O sua senha é: </strong> $senha </p>";

            
        ?>

        <a href="index.html">Voltar Cadastro</a>
    
    </main>
</body>
</html>