
document.getElementById("restart").style.visibility = "hidden";
Kierros = 0
NoppaLuku1 = []
NoppaLuku2 = []
CombNum = 0
Loppuyht = 0
Loppuyht1 = 0
Loppuyht2 = 0
StartBool = true

function Start() {
    var x = document.getElementById("CardDiv");
    console.log(Kierros)
    if (StartBool == false) 
      x.style.display = "block";
      else{
        x.style.display = "none";
      }
 
    
}


function Throw(){
    document.getElementById("nappi").style.visibility = "visible";
   Kierros += 1

    StartBool = false
    console.log(StartBool)
    Start();
    RandoNum();
    let Noppa1= NoppaLuku1[NoppaLuku1.length -1]
    let Noppa2 = NoppaLuku2[NoppaLuku2.length -1]
    
    //document.getElementById("luku1").innerHTML = Noppa1;
    //document.getElementById("luku2").innerHTML = Noppa2;

    var x = document.getElementById("CardDiv");

    if(Noppa1 == 1){
        document.getElementById('Face1').style.display = "inline";
    }
    else{
        document.getElementById('Face1').style.display = "none";
    }
    if(Noppa1 == 2){
        document.getElementById('Face2').style.display = "inline";
    }
    else{
        document.getElementById('Face2').style.display = "none";
    }
    if(Noppa1 == 3){
        document.getElementById('Face3').style.display = "inline";
    }
    else{
        document.getElementById('Face3').style.display = "none";
    }
    if(Noppa1 == 4){
       document.getElementById('Face4').style.display = "inline";
    }
    else{
        document.getElementById('Face4').style.display = "none";
    }
    if(Noppa1 == 5){
        document.getElementById('Face5').style.display = "inline";
    }
    else{
        document.getElementById('Face5').style.display = "none";
    }
    if(Noppa1 == 6){
        document.getElementById('Face6').style.display = "inline";
    }
    else{
        document.getElementById('Face6').style.display = "none";
    }

    if(Noppa2 == 1){
        document.getElementById('Face11').style.display = "inline";
    }
    else{
        document.getElementById('Face11').style.display = "none";
    }
    if(Noppa2 == 2){
        document.getElementById('Face22').style.display = "inline";
    }
    else{
        document.getElementById('Face22').style.display = "none";
    }
    if(Noppa2 == 3){
        document.getElementById('Face33').style.display = "inline";
    }
    else{
        document.getElementById('Face33').style.display = "none";
    }
    if(Noppa2 == 4){
       document.getElementById('Face44').style.display = "inline";
    }
    else{
        document.getElementById('Face44').style.display = "none";
    }
    if(Noppa2 == 5){
        document.getElementById('Face55').style.display = "inline";
    }
    else{
        document.getElementById('Face55').style.display = "none";
    }
    if(Noppa2 == 6){
        document.getElementById('Face66').style.display = "inline";
    }
    else{
        document.getElementById('Face66').style.display = "none";
    }




   if(Kierros == 5){
    document.getElementById("nappi").style.visibility = "hidden";
    document.getElementById("restart").style.visibility = "visible";
    console.log("Kierros")
    Kierros = 0
    CombNumberFunc();
    document.getElementById("yht").style.visibility = "visible";

    document.getElementById("yht").innerHTML = "Noppien yhteenlaskettu summa " + Loppuyht
   }
   else{
    document.getElementById("restart").style.visibility = "hidden";
   }
}

function RandoNum(){
    randomNumber =Math.floor(Math.random() * 6) + 1
    NoppaLuku1.push(randomNumber);
    randomNumber =Math.floor(Math.random() * 6) + 1
    NoppaLuku2.push(randomNumber);
}

function Restart(){
    CombNum = 0
    Loppuyht = 0
    Loppuyht1 = 0
    Loppuyht2 = 0
    NoppaLuku1 = []
    NoppaLuku2 = []
    document.getElementById("yht").style.visibility = "hidden";

    Throw();
}


function CombNumberFunc(){

    for (i = 0; i < NoppaLuku1.length; i++){
        Loppuyht1 += NoppaLuku1[i]
        console.log(NoppaLuku1)
       }
    for (i = 0; i < NoppaLuku2.length; i++){
        Loppuyht2 += NoppaLuku2[i]
        console.log(NoppaLuku2)
       }

       Loppuyht += Loppuyht1 + Loppuyht2

}