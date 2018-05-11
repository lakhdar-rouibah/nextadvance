


var aCube = "<div id='cube' class='cube'> </div>";
var aToken = "<div  class='token'> </div>";
var bouger = false;
var x;
var y;
var element;
var i = 0;
var token;
var numeroT = -1;
var blue = "blue";
var red = "red";
var gammer = red;
var tableColumn = [7, 7, 7, 7, 7];
var grilles = new Array();
var grille = new Array();
var colored ="#dac292";
var comptage = false;
var posLine;
var posColonne;
var initLine =0;
var initColonne=0;
//var mX,mY;


	

	//fonction de initialization
function initialize() {

		var i = 0;
		var l = 0;


		var grids = new Array();
		var grid = new Array();
		
			
			for(i = 0; i<5; i+=1){
				for(l = 0; l<8; l+=1){	

				grids[l] = "<div id='cube"+i+""+l+"' class='cube'> </div>";
				grid[i] = new Array(grids[0], grids[1], grids[2], grids[3], grids[4], grids[5], grids[6], grids[7]);

				}


			}

		

		for (i=0; i<5; i+=1){
			for(l = 0; l<8; l+=1){
				grilles[l] = null;
				grille[i]= new Array(grilles);
			}
		}

		

	display(grid);
		
}

	// function color column

	

function colorColumn(tok, x, y) {


			
			element = document.getElementsByClassName("cube");
			var co;

			if(x > element[i].offsetLeft){

				for (co= 0; co<=35; co+=5){

					element[i+co].style.backgroundColor = "#e6e2d3";

				}

			}

			if(x > element[i].offsetLeft+100){



				i+=1;

				if(i >= 4){

					i = 4;

					for (co= 0; co<=35; co+=5){

						element[i+co].style.backgroundColor = colored;

					}

					
				}

				for (co= 0; co<=35; co+=5){

					element[i+co-1].style.backgroundColor = colored;

				}


			}
			if(x < element[i].offsetLeft){

				i-=1;

				if(i <= 0){

					i = 0;
					
						for (co= 0; co<=35; co+=5){

							element[i+co].style.backgroundColor = colored;

						}


					
				}

				

				for (co= 0; co<=35; co+=5){

					element[i+co+1].style.backgroundColor = colored;

				}




			}	


		lacherToken (tok, i);

}

	//fonction qui affice la grille

function display(grid) {
		
		var column = 0;
		var line = 0;
		for(column= 0; column<5; column+=1){

			for(line = 0; line<8; line+=1){

				divGame.innerHTML += grid[column][line];

			}

		}

	player();
}



	//function lacher token

function lacherToken(tok, elem){

		if(bouger === false){



			tok.style.top = element[elem].offsetTop+tableColumn[elem]*100+"px";
			tok.style.left = element[elem].offsetLeft+"px";
			grille[elem][tableColumn[elem]] = gammer;
			tableColumn[elem] -=1;

			verif();

			//console.log(grille);

			//player();
		}
	}
//================================ verifcation =================================
function verif () {

				//verifPuissance (ln, cl)
		var cptV = verifPuissance (1, 0);
		var cptH = verifPuissance (0, 1);	
		var cptHVP = verifPuissance (1, 1);
		//console.log(cptH);
		var cptHVM = verifPuissance (-1, 1);
        // 

		if( cptV >=4 || cptH >=4 || cptHVP >= 4 || cptHVM >=4) {

				alert('win :'+gammer);
		}else {

			//console.log("cptHVM = "+cptHVM);
			player();
		}



}




	
//=========================================  verif puissance 4 ==========
function verifPuissance (ln, cl){

	var ints;
	var colonne;
	var line ;
	var i = 0;
	var posC;
	var compteur = 0;
	
	
	
		
			for(line=0; line<8; line+=1){
				for(colonne = 0; colonne <5; colonne +=1){
					if((grille[colonne][line] === gammer) ){

						initColonne = colonne;
						initLine = line;
						for(ints = 0; ints < 4; ints+=1){

								if(grille[initColonne][initLine] === gammer ){
									
									initColonne +=cl;
									initLine +=ln;
									compteur +=1;

									
									
									if( compteur >= 4){

											ints = 5;
											return compteur;
										}

									

								}else {

									compteur =0;
								}

								

								if(initColonne > 4 || initLine>7 ){

									compteur =0;
									initColonne = 0;
									initLine =0;
									ints = 5;
									
								}
						}

					}
				}

			}
		
	
}


//============================== fin verification ===============================



onmousemove = function(event) {
						if(bouger === true){

							var mX = event.clientX;
				    		var mY = event.clientY;
				    		token.style.top = mY-30+"px";
							token.style.left =mX-50+"px";

							//colorColumn();
							x = mX;
							y = mY;

							
							colorColumn(token, x, y);
							
							
			    		}	
					};

	//function bouger token

function bougerToken(tok){

	

		tok.addEventListener("mouseover", function() {

			tok.addEventListener("mousedown", function() {

				bouger = true;

				onmousemove(event);

				

			});

			
		});


}

window.addEventListener("mouseup", function() {

				

				bouger = false;
				
				colorColumn(token, x, y);
					
				
});

	//fonction qui bouge le tokens

function tokenDraw(gammer){

		numeroT +=1;

		 zToken.innerHTML += aToken;

		 token = document.getElementsByClassName('token')[numeroT];

		 if(gammer === blue){

		 	token.style.backgroundColor = "#6b5b95";
		 	token.title = "blue";

		 }else {
		 	token.style.backgroundColor = "#ff7b25";
		 	token.title = "red";
		 }

		bougerToken(token);

	}

	//fonction qui change le joueur

function player(){

		if(gammer === red){

			gammer = blue;
			tokenDraw(gammer);

		}else {

			gammer = red;
			tokenDraw(gammer);
		}

		
}





initialize();









