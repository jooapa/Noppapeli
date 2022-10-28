
//Tee ohjelma, jossa käyttäjä heittää kahta noppaa mieleisensä kierrosmäärän. 
///Ohjelma ilmoittaa suurimman heittokäden summan ja 
///kaikkien heittojen yhteenlasketun summan.


var Noppatulos1 = 0
var Noppatulos2 = 0
var Noppatuloa = []
SuurinNoppa = 0
toinenkerta = 1

YhtSumma = 0
NykySumma = 0
show1 = 0


   
 

function alku(){
            document.getElementById('Face1').style.display = "none";
            document.getElementById('Face2').style.display = "none";
            document.getElementById('Face3').style.display = "none";
            document.getElementById('Face4').style.display = "none";
            document.getElementById('Face5').style.display = "none";
            document.getElementById('Face6').style.display = "none";
            document.getElementById('Face11').style.display = "none";
            document.getElementById('Face22').style.display = "none";
            document.getElementById('Face33').style.display = "none";
            document.getElementById('Face44').style.display = "none";
            document.getElementById('Face55').style.display = "none";
            document.getElementById('Face66').style.display = "none";
}
function heita(){

    Noppatulos1 = Math.floor(Math.random() * 6) + 1;
    Noppatulos2 = Math.floor(Math.random() * 6) + 1;



//----------------------------------------------------------------------
    if(Noppatulos1 == 1){
        document.getElementById('Face1').style.display = "inline";

    }
    else{
        document.getElementById('Face1').style.display = "none";

    }
    if(Noppatulos1 == 2){
        document.getElementById('Face2').style.display = "inline";

    }
    else{
        document.getElementById('Face2').style.display = "none";

    }
    if(Noppatulos1 == 3){
        document.getElementById('Face3').style.display = "inline";

    }
    else{
        document.getElementById('Face3').style.display = "none";

    }
    if(Noppatulos1 == 4){
       document.getElementById('Face4').style.display = "inline";
    }
    else{
        document.getElementById('Face4').style.display = "none";

    }
    if(Noppatulos1 == 5){
        document.getElementById('Face5').style.display = "inline";

    }
    else{
        document.getElementById('Face5').style.display = "none";

    }
    if(Noppatulos1 == 6){
        document.getElementById('Face6').style.display = "inline";

    }
    else{
        document.getElementById('Face6').style.display = "none";

    }


//----------------------------------------------------------------------------



    if(Noppatulos2 == 1){
        document.getElementById('Face11').style.display = "inline";

    }
    else{
        document.getElementById('Face11').style.display = "none";

    }
    if(Noppatulos2 == 2){
        document.getElementById('Face22').style.display = "inline";

    }
    else{
        document.getElementById('Face22').style.display = "none";

    }
    if(Noppatulos2 == 3){
        document.getElementById('Face33').style.display = "inline";

    }
    else{
        document.getElementById('Face33').style.display = "none";

    }
    if(Noppatulos2 == 4){
        document.getElementById('Face44').style.display = "inline";

    }
    else{
        document.getElementById('Face44').style.display = "none";

    }
    if(Noppatulos2 == 5){
        document.getElementById('Face55').style.display = "inline";

    }
    else{
        document.getElementById('Face55').style.display = "none";

    }
    if(Noppatulos2 == 6){
        document.getElementById('Face66').style.display = "inline";

    }
    else{
        document.getElementById('Face66').style.display = "none";

    }

//----------------------------------------------------------------------

/*
    document.getElementById("noppatulos1").innerHTML = Noppatulos1;
    document.getElementById("noppatulos2").innerHTML = Noppatulos2;
*/  
        
    SuurinNoppa1 = Noppatulos1 + Noppatulos2;
    if (SuurinNoppa < SuurinNoppa1){
        SuurinNoppa =+ SuurinNoppa1
    }


    YhtSumma = YhtSumma + Noppatulos1 + Noppatulos2

    NykySumma = Noppatulos1 + Noppatulos2




    NoppaHistory();
}

function NoppaHistory(){
    document.getElementById("noppatulos").innerHTML = "$ Suurin heitto: " + SuurinNoppa + "<br>";
    document.getElementById("summa").innerHTML = "$ Nykyinen Summa: " + NykySumma + "<br>";
    document.getElementById("summa1").innerHTML = "$ Yhteenlaskettu Summa: " + YhtSumma + "<br>";
}