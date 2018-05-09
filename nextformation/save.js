var somme = 0;

var fab = 0;


function fabo(n){
  
  for(i=0; i>=n; i+=1){
    
    somme = somme+i;
    console.log(somme+fab);
  }
  
  return somme +fab;
}

fabo(10);

//============================================


var fab = 0;
var somme1 = 0;
var somme2 = 1;


function fabo(n){
  
  for(i=0; i>=n; i+=1){
    
    if(fab=0){
      fab = somme1 +somme2;
      console.log(fab);
      return fab;
      
    }else {
      
      fab += somme2;
      console.log(fab);
      return fab;
    }
    
  }
  
  
}

fabo(10);