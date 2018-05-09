
// A. Structure de données pour la partie

// remplir ici ... 
function Game(){
	// on va remplir l'objet...
	this.initialize = function() {
		this.grid = [
			[null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null],
		];
		this.player = 'x'; // ou 'o'
		this.winner = null;
		this.tokens = {x: 21, o:21};
        this.i =0;
	};

	
  
    this.nextPlayer = function(){ 
      if (this.player==="x"){
        this.player = 'o';
      }else {
        this.player = 'x';
       }
      
    };
  
  this.
    
    
    this.initialize();
	return this;
    
}

var game = new Game();
console.log(game);