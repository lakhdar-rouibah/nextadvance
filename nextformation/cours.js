
//=============================================== Décalege Gauche ==================================
function tableSwap(table, i, j){
  var b;
  b = table[i];
  table[i] = table[j];
  table[j] = b;
  
}

var t = ["D", "E", "C", "A", "L", "A", "G", "E"];

var sa = ["n", "e", "x", "t","f","o","r","m","a","t","i","o","n"];

var i;

function decG(ta, nc){
  
  for(i=nc; i>1; i-=1){
    
    tableSwap(ta, i-1, (i-2));
  }
  
  
}

decG(sa, 13);

console.log(sa);

///=============================================== Décalage a Droite =================================

function tableSwap(table, i, j){
  var b;
  b = table[i];
  table[i] = table[j];
  table[j] = b;
  
}

var t = ["D", "E", "C", "A", "L", "A", "G", "E"];

var sa = ["n", "e", "x", "t","f","o","r","m","a","t","i","o","n"];

var i;

function decD(ta, nc){
  
  for(i=0; i< nc-1; i+=1){
    
    tableSwap(ta, i+1, (i));
  }
  
  
}

decD(sa, 13);

console.log(sa);


////================================================ Table mini ==========================================================


var m, t, i;


t = [0, 112, 14, 3, -113, 42];
var min = t[0];


function tableMin(t, n){
  
  for(i= 0; i < n; i+=1){
  
    if(min >= t[i]){
      
      min = t[i];
      
    }
    
  }
  
  return min;
}

m = tableMin(t, 6);

console.log(m);

//==============================================  table maxi =====================================================



var m, t, i;


t = [0, 112, 14, 3, -113, 42];
var min = t[0];


function tableMin(t, n){
  
  for(i= 0; i < n; i+=1){
  
    if(min <= t[i]){
      
      min = t[i];
      
    }
    
  }
  
  return min;
}

m = tableMin(t, 6);

console.log(m);

//================================================ cherche Combien =================================================


var t = [0, 1, 0, 0, 1, 1, 1];
var i;
var nb = 0;



function chercheCombien(table, taille, elem){

      for(i=0; i< taille; i+=1){

          if(table[i] == elem){

              nb +=1;
          }



      }

      console.log(nb);
}

chercheCombien(t, 7, 0);

//===============================================  Trie =======================================================


var table =  [3, 6, 8, 9, 2, 1, 6, 8];
var table2 = [1, 2, 4, 5, 7, 9, 10, 11];

var i;

var val;


function estTrie(tab, tai){


    for(i=0; i< tai-1; i+=1){

        if(tab[i+1] > tab[i] ){

          val = true;

        }else {

          val = false;
          i= tai;
        }

    }

      console.log(val);

      return val;
}

estTrie(table2, 8);


//=============================================  Bonus ======================================================




var table = [1, 0, 0, 6, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0];
var i;
var compteur= 0;
var position =0;
var sauvegardeCompteur = 0;

var val = false;


function zeroPosition(tab, tai){

    for(i = 1; i <= tai; i+=1) {
           
//========= pour sauvgarder la position
      
        if( (tab[i] === tab[i-1]) && (val === true) ){

            position = i - sauvegardeCompteur;
            val = false;
          
        }

//======== le compteur

        if( (tab[i] === tab[i-1]) && (val === false) ){

            compteur +=1;
          
            if(sauvegardeCompteur < compteur){
              
              sauvegardeCompteur = compteur;
              val = true;
            }
          
        }
//======= si il est différent 

        if ( (tab[i] !== tab[i-1]) ){
          
            compteur = 0;
            val = false;
            
        }
      
       
      
    }

   return position;
}



console.log(zeroPosition(table, 15));



//===================== fibonacci =========================

function fibo(n){
  
  
    var f0=0, f1=1 , f ;
  
  
  
    for(i=0 ; i  <= n ; i++){
      
        f=f1 +f0 ;
        f0 =f1 ;
        f1 =f ;
      
      console.log(f);
    }
    return f;
}

fibo(10);
























































