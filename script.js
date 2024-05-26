function inserir(num) {
    document.querySelector('.box-calculator').innerHTML += num;
}

function clean() {
    document.querySelector('.box-calculator').innerHTML = "";
}

function back() {
    let box = document.querySelector('.box-calculator').innerHTML;
    document.querySelector('.box-calculator').innerHTML = box.substring(
        0, 
        box.length - 1
    )
}

function somar(){
    let box = document.querySelector('.box-calculator').innerHTML;

    if(box){
        document.querySelector('.box-calculator').innerHTML = eval(box)   
    } else{
        document.querySelector('.box-calculator').innerHTML = "Nenhum comando..."
    }
}