//Dinamica das divs
function mostrarCalc(){
    phidden.style.display = 'block';
}

function closeResult(){
    result.style.display = 'none';
    dados_info.style.display = 'block';
}

//Cálculo churrascometro
let qadultos = document.getElementById('adultos');
let qcriancas = document.getElementById('criancas');
let qhoras = document.getElementById('duracao');

function mostrarResult(){    
    const adult = qadultos.value;
    const children = qcriancas.value;
    const time = qhoras.value;
    console.log(adult);
    console.log(children);
    console.log(time);

    if (time == 0){
        alert('Insira a quantidade de horas de churrasco!!!');
        return;
    } else if (children == 0 && adult == 0){
        alert('Insira os participantes do churrasco!!!')
        return
    } else {
        if (time > 7){
            carne = 650;
            cerveja = 2500;
            bebida = 1500;
        } else {
            carne = 450;
            cerveja = 1500;
            bebida = 800;
        }

        let totalCarne = (carne * adult) + ((carne * children) / 2);
        let totalCerveja = (cerveja * adult);
        let totalBebida = (bebida * adult) + ((bebida * children) / 2);

        phidden.style.display = 'none';
        dados_info.style.display = 'none';
        result.style.display = 'flex';


        

    }
}