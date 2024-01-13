const form = document.getElementById('form-valido');

let formValid = false;

function validandoNumero(campoA,campoB){
    return campoB > campoA;
}

    form.addEventListener('submit', function(cancela){
    cancela.preventDefault();

    let campoA = parseInt(document.getElementById('campoA').value);
    let campoB = parseInt(document.getElementById('campoB').value);


    if (validandoNumero(campoA,campoB)){
        document.querySelector('.msg-erro').style.display = 'none';
        document.querySelector('.msg-sucess').style.display = 'block';

        
        campoA.value =' ';
        campoA.value =' ';
    }  
    
    else {
        document.querySelector('.msg-erro').style.display = 'block';
        document.querySelector('.msg-sucess').style.display = 'none';
    }
});
