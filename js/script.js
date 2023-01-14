
var peso = document.getElementById('peso');

peso.addEventListener('keyup',function(e){
        
    //console.log(e.key);
    if(e.key == 'Enter'){
        calcularimc();
    }

})


function calcularimc(){
    //alert('ok');

     var altura = document.getElementById('altura').value;
     var peso = document.getElementById('peso').value;

    //console.log(altura);
    // console.log(peso);

    if(altura != '' && peso != ''){
        
        var imc = peso / (altura * altura);
        console.log(imc);

        var resultado = document.getElementById('resultado');
        var valorimc = document.getElementById('valorimc');
        var ajuda = document.getElementById('ajuda');

        resultado.style.visibility = 'visible';
        valorimc.innerHTML = imc.toFixed(1);

        if(imc < 18.5 || imc >= 30){
            resultado.style.backgroundColor = 'red';
            ajuda.style.visibility = 'visible';
        }

        else if(imc >= 18.5 && imc <= 24.99){
            resultado.style.backgroundColor = 'green';
            ajuda.style.visibility = 'hidden'
        }

        else if(imc >= 25 && imc <= 29.99){
            resultado.style.backgroundColor = 'orange';
            ajuda.style.visibility = 'visible';
        }

    }else{
        alert('Preencha os campos!');
    }

}