//	Game by Special Unit 28C
//	Design: Yuming Li
//	Art: Dongbo(Bob)
//	Programming: Jeremy Green
//	Sound: Yuming Li

//	Gloabal Var
var gridSize = 32;
var justPlaced = false;
var victory = false;
var currid = "";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PREFAB
//	contains the shell and a collection of pieces
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//	Prefabs
//	Puzzle Prefab constructor function
var Puzzle = function(game, pos_x, pos_y, pieceSizes, shape, randomRotation)
{
	//	Variables for object data
	this.x = pos_x - pos_x % gridSize;
	this.y = pos_y - pos_y % gridSize;
	this.sh = shape;
	this.width = 0;
	this.height = 0;

	this.fade = false;

	justPlaced = false;
	victory = false;
	currid = "";

	this.shells = [this.sh.length];

	//	A unique 'cover' object for checking win
	this.coverage = [this.sh.length];

	//	get width and height
	for (var i = 0; i < this.sh.length; i++) 
	{
		//	Find width and height of frame or shell
		if(this.sh[i].x > this.width) this.width = this.sh[i].x;
		if(this.sh[i].y > this.height) this.height = this.sh[i].y;
	}

	//	center object
	this.x -= Math.round(this.width/2) * gridSize;
	this.y -= Math.round(this.height/2) * gridSize;
	
	//	Draw shells and init cover checker
	for (var i = 0; i < this.sh.length; i++) 
	{
		//	Place appropiate 'shell' pieces
		this.shells[i] = game.add.image(this.x + this.sh[i].x * gridSize, 
						this.y + this.sh[i].y * gridSize,'shell');

		//	Create area to cover
		this.coverage[i] = {	
			x: this.x + this.sh[i].x * gridSize,
			y: this.y + this.sh[i].y * gridSize,
			c: false
			};
	}

	//	Split shell into multiple chuncks
	this.CHUNKS = [pieceSizes.length];

	//	Variable for spacing
	var j = 0;

	//	Calculate and place all pieces into the upper canvas
	for (var i = 0; i < pieceSizes.length; i++) 
	{
		var chunkx = (j * gridSize + 32) % game.width;
		var chunky = 64 + Math.floor((j * gridSize + 32) / game.width)*gridSize*3;

		this.CHUNKS[i] = new PPiece(chunkx, chunky, this.sh.slice(j,j + pieceSizes[i]));

		//	Randomly rotate piece if for more difficulty if necessary
		if(randomRotation == true)
		{
			var r = game.rnd.integerInRange(0, 3);
			for(var q = 0; q < r; q++)
			{
				this.CHUNKS[i].rotateNonCent();
			}
		}

		this.CHUNKS[i].checkBounds();

		j = j + pieceSizes[i];
	}
}

Puzzle.prototype.constructor = Puzzle;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PREFAB
// 	Puzzle update function
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Puzzle.prototype.update = function() 
{
	//	Update every piece
	for (var i = 0; i < this.CHUNKS.length; i++) 
	{
		this.CHUNKS[i].update();
	}

	//	Check if won
	if (justPlaced)
	{
		//	Don't want to check every frame
		justPlaced = false;

		//	Check locked pieces first
		this.checkCov(true);

		//	Then check unlocked pieces
		this.checkCov(false);

		// check if all shells filled
		victory = true;
		for (var k = 0; k < this.coverage.length; k++) 
		{
			if(this.coverage[k].c == false && victory == true) 
			{
				victory = false;
			}

			//	Reset to coverage to false just in case
			this.coverage[k].c = false;
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PREFAB
// 	Add additional piece to puzzle
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Puzzle.prototype.addp = function(x,y,shape) 
{
	//	Add new piece
	var p = new PPiece(x, y, shape);
	p.checkBounds();
	this.CHUNKS.push(p);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PREFAB
// 	Puzzle checks for coverage
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Puzzle.prototype.checkCov = function(isLocked) 
{

	//	Grab all the pieces
	for (var i = 0; i < this.CHUNKS.length; i++) 
	{
		//	Find only the locked or unlocked pieces
		while(i < this.CHUNKS.length && this.CHUNKS[i].locked != isLocked)
		{
			++i;
		}

		//	Only run if specified piece exists
		if(i < this.CHUNKS.length)
		{
			//	Get the area covered by the pieces
			var cov = this.CHUNKS[i].getCoverage();

			//	Determine whether piece should be locked 
			//	(irrelevent when checking locked pieces)
			var lockP = true;

			//	Check every shell is covered by some piece
			for (var j = 0; j < cov.length && lockP; j++) 
			{
				for (var k = 0; k < this.coverage.length && cov[j].c==false; k++) 
				{
					if (this.coverage[k].x == cov[j].x &&
						this.coverage[k].y == cov[j].y &&
						this.coverage[k].c == false)
					{
						this.coverage[k].c = true;
						cov[j].c = true;
					}
					//	Could probably simplify with some sort of data map
				}
				//	Check if piece aligned
				if(cov[j].c == false)
				{
					lockP = false;
				}
			}

			if (lockP)
			{
				this.CHUNKS[i].lock();
			}
		}
	}	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PREFAB
// 	Hide the current puzzle from view
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Puzzle.prototype.hide = function() 
{
	for (var i = 0; i < this.sh.length; i++) 
	{
		//	Hide all shells
		this.shells[i].alpha = 0;
	}

	for (var i = 0; i < this.CHUNKS.length; i++) 
	{
		for (var j = 0; j < this.CHUNKS[i].s.length; j++) 
		{
			this.CHUNKS[i].shadow[j].x = this.CHUNKS[i].x + this.CHUNKS[i].s[j].x * gridSize;
			this.CHUNKS[i].shadow[j].y = this.CHUNKS[i].y + this.CHUNKS[i].s[j].y * gridSize;
			this.CHUNKS[i].shadow[j].alpha = 0.3;
			this.CHUNKS[i].highlighted[j].alpha = 0;
		}
	}

	//	Hide all the pieces
	this.CHUNKS[0].fadeTimer.start();
	for (var i = 1; i < this.CHUNKS.length; i++) 
	{
		this.CHUNKS[i].fadeTimer.start(i * 100 + Math.random() * 500);
	}	
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PREFAB
// 	Shows the current puzzle from view
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Puzzle.prototype.show = function() 
{
	for (var i = 0; i < this.sh.length; i++) 
	{
		//	Hide all shells
		this.shells[i].alpha = 1;
	}

	//	Hide all the pieces
	for (var i = 0; i < this.CHUNKS.length; i++) 
	{
		for (var j = 0; j < this.CHUNKS[i].s.length; j++) 
		{
			this.CHUNKS[i].shadow[j].alpha = 0.3;
			this.CHUNKS[i].bits[j].alpha = 1;
		}
	}	
}