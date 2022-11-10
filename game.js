var width = 0
var height = 0
var time = 20
var criamosquitotempo = 1500
var nivel = window.location.search.replace('?','')


switch(nivel){
    case "normal":
        criamosquitotempo = 1500
    case" dificil":
        criamosquitotempo = 1000
    case "hard":
        criamosquitotempo = 750
}

function sizeadjust(){ 
    width = window.innerWidth
    height = window.innerHeight
    console.log(width, height)
}
document.getElementById('seconds').innerHTML = time

sizeadjust()
var position_x = 0
var position_y = 0

var cronometro = setInterval(function(){

    if(time <= 0){
        clearInterval(cronometro)
        clearInterval(creatmosca)
        window.location.href = 'vitoria.html'
    }
    else{
        time-= 1
        document.getElementById('seconds').innerHTML = time
    }
    

},1000)

var lifes = 4
function positionrandom(){
    
    if(document.getElementById('mosquito')){
        if(lifes < 2){
            window.location.href = 'game_over.html'
        }
        else{
            lifes--
        }
        document.getElementById('mosquito').remove()
        document.getElementById('v'+lifes).src = 'imagens/coracao_vazio.png'
        
        

    }

    position_x = Math.floor(Math.random()*width) - 90
    position_y =Math.floor(Math.random()*height) - 90

    position_x = position_x <0 ? 0 : position_x
    position_y = position_y < 0 ? 0 : position_y

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    document.body.appendChild(mosquito)
    mosquito.className = `${siderandom()} ${sizerandom()}`
    mosquito.style.left = position_x + 'px'
    mosquito.style.top = position_y + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function (){
        this.remove()
    }

   
}
positionrandom()

function sizerandom(){
    var classe = Math.floor(Math.random()*3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function siderandom(){
    var classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

}

var creatmosca = setInterval(()=>{
    positionrandom()
},criamosquitotempo)