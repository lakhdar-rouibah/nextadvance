


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

			verif(elem, tableColumn[elem]);

			//player();
		}
	}

function verif (cols, lns ) {

			var mx = 0;
			var my = 7;
			var compteur = 0;

			for (mx=0; mx<5; mx+=1){
				for(my=7; my>0; my-=1){
					
						
				}
			}

			console.log(grille);
/*
			if(compteur === 4){

				alert('gagner');
			}else {

				
			}
*/player();

}

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









