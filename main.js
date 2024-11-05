
//Selectores
const prevBtn = document.querySelector("#boton-anterior");
const nextBtn = document.querySelector("#boton-siguiente");
const revista = document.querySelector("#revista");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5")

let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

//Acciones
prevBtn.addEventListener("click",paginaAnterior);
nextBtn.addEventListener("click",proximaPagina);

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
        proximaPagina();
    } else if (e.key === 'ArrowLeft') {
        paginaAnterior();
    }
});

//Funciones

function abrirRevista(){
    revista.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";

}
function cerrarRevista(isAtBeginning){
    if(isAtBeginning) {
        revista.style.transform = "translateX(0%)";
    } else {
        revista.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}


function proximaPagina(){

    if(currentLocation < maxLocation){
        switch(currentLocation){

            case 1:
                abrirRevista();
                paper1.classList.add("volteado");
                paper1.style.zIndex = 0;
                break;
            case 2:
                paper2.classList.add("volteado");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("volteado");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("volteado");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paper5.classList.add("volteado");
                paper5.style.zIndex = 5;
                break;
                cerrarRevista(false);
                break;
            default:
                console.log('Ha ocurrido un error inesperado')

        }
        currentLocation++;
    }

}
function paginaAnterior(){

    if(currentLocation > 1) {

        console.log(currentLocation);
        switch(currentLocation) {



            
            case 2:
                cerrarRevista(true);
                paper1.classList.remove("volteado");
                paper1.style.zIndex = 5;
                break;
                
            case 3:
                paper2.classList.remove("volteado");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("volteado");
                paper3.style.zIndex = 3;
                break;

            case 5:
                paper4.classList.remove("volteado");
                paper4.style.zIndex = 2;
                break;
            case 6:
                abrirRevista();
                paper5.classList.remove("volteado");
                paper5.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state"); 
        }
    currentLocation--;
    }
}
