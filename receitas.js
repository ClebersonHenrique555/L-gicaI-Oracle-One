<meta charset="UTF-8">

<h1>Receitas do Yan</h1>

<script>
    var ingredientes = [];

    var quantidade = parseInt(prompt("Quantos ingredientes você vai adicionar?"));

    var contador = 1;

    while( contador <= quantidade) {

        var ingrediente = prompt("Informe o ingrediente " + contador);
        for(var i=0; i<contador;i++){
            if(ingredientes[contador]!=ingrediente){
                ingredientes.push(ingrediente);
            }
        }
        
        contador++;
        
    }

    document.write(ingredientes);


</script>
</head>
<body>
    
</body>
</html>
