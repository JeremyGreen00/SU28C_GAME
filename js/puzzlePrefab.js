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

	justPlaced = false;
	victory = false;
	currid = "";

	//	A unique 'cover' object for checking win
	this.coverage = [this.sh.length];
	
	for (var i = 0; i < this.sh.length; i++) 
	{
		//	Place appropiate 'shell' pieces
		game.add.image(this.x + this.sh[i].x * gridSize, 
						this.y + this.sh[i].y * gridSize,'shell');

		//	Find width and height of frame or shell
		if(this.sh[i].x > this.width) this.width = this.sh[i].x;
		if(this.sh[i].y > this.height) this.height = this.sh[i].y;

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

		if(randomRotation == true)
		{
			var r = game.rnd.integerInRange(0, 3);
			for(var q = 0; q < r; q++)
			{
				this.CHUNKS[i].rotate();
			}
		}

		j = j + pieceSizes[i];
	}
}

Puzzle.prototype.constructor = Puzzle;

// override Phaser.Sprite update
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

		//	Grab all the pieces
		for (var i = 0; i < this.CHUNKS.length; i++) 
		{
			var cov = this.CHUNKS[i].getCoverage();

			//	Check every shell is covered by some piece
			for (var j = 0; j < cov.length; j++) 
			{
				for (var k = 0; k < this.coverage.length; k++) 
				{
					if (this.coverage[k].x == cov[j].x &&
						this.coverage[k].y == cov[j].y)
						this.coverage[k].c = true;
					//	Could probably simplify with some sort of data map
				}
			}
		}
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
//	PUZZLE PIECE PREFAB
//	contains nessasary info for piece interaction
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*var PPiece =
{
	x: 0;
	y: 0;
	s: Object;
	bits: Object;
	grid: 1;
}*/

//	Piece prefab constructor function
var PPiece = function(pos_x, pos_y, pos)
{
	//	Variables for moving
	this.moving = false;
	this.offsetX = 0;
	this.offsetY = 0;
	this.canRotate = false;

	//	Variables for object data
	this.x = pos_x;
	this.y = pos_y;
	this.s = pos;
	this.bits = [this.s.length];

	//	Images just for highlights
	this.highlighted = [this.s.length];

	//	Generate a unique id string for this piece
	this.pid = makeRandomString();

	//	Balance data
	var balX = 0;
	var balY = 0;

	//	Get average off balance for x and y
	for (var i = 0; i < this.s.length; i++) 
	{
		balX += this.s[i].x;
		balY += this.s[i].y;
	}

	balX = Math.round(balX / this.s.length,0);
	balY = Math.round(balY / this.s.length,0);

	//	If x pos are off balance from center, rebalance
	if (balX > 0 || balX < 0)
	{
		for (var i = 0; i < this.s.length; i++) 
		{
			this.s[i].x -= balX;
		}
	}

	//	If y pos are off balance from center, rebalance
	if (balY > 0 || balY < 0)
	{
		for (var i = 0; i < this.s.length; i++) 
		{
			this.s[i].y -= balY;
		}
	}

	//	Inits images
	for (var i = 0; i < this.s.length; i++) 
	{
		this.bits[i] = game.add.image(this.x + this.s[i].x * gridSize, 
										this.y + this.s[i].y * gridSize,'piece');

		this.highlighted[i] = game.add.image(this.x + this.s[i].x * gridSize, 
										this.y + this.s[i].y * gridSize,'highlight');
	}
}

//	Constructor and other
//PPiece.prototype = Object.create(PPiece);
PPiece.prototype.constructor = PPiece;

// override Phaser.Sprite update
PPiece.prototype.update = function() 
{
	//	Local var to see if this piece is highlighted
	var highlight = false;

	if (this.moving) 
	{
		//	Update postion relative to mouse position
		this.x = game.input.x - this.offsetX;
		this.y = game.input.y - this.offsetY;

		//	If moving update position
		for (var i = 0; i < this.s.length; i++) 
		{
			this.bits[i].x = this.x + this.s[i].x * gridSize;
			this.bits[i].y = this.y + this.s[i].y * gridSize;
			this.highlighted[i].x = this.x + this.s[i].x * gridSize;
			this.highlighted[i].y = this.y + this.s[i].y * gridSize;
		}
	}
	else if(currid == "")
	{
		//	If not moving check if mouse is overlapping
		for (var i = 0; i < this.s.length; i++) 
		{
			if( highlight == false &&
				game.input.x >= this.bits[i].x && game.input.x <= this.bits[i].x + gridSize &&
				game.input.y >= this.bits[i].y && game.input.y <= this.bits[i].y + gridSize )
			{
				highlight = true;
			}
		}
		//	Calculate offset if highlighted
		if (highlight)
		{
			this.offsetX = game.input.x - this.x;
			this.offsetY = game.input.y - this.y;

			//	change image if highlighted
			for (var i = 0; i < this.s.length; i++) 
			{
				this.highlighted[i].alpha = 1; 
			}
		}
		else
		{
			for (var i = 0; i < this.s.length; i++) 
			{
				this.highlighted[i].alpha = 0; 
			}
		}
	}

	//	Check if all conditions for moving are met
	if(game.input.activePointer.leftButton.isDown && highlight && !this.moving && currid == "") 
	{
		//	This piece is now being moved
		this.moving = true;

		//	Play click sound
		click_sound.play('',0,0.75,false);

		//	Set currently active piece to this one
		currid = this.pid;
	}
	else if(!game.input.activePointer.leftButton.isDown && this.moving)
	{
		//	Object no longer being moved
		this.moving = false;

		//	Play drop sound
		drop_sound.play('',0,0.75,false);

		//	This piece is no longer active
		currid = "";

		//	Signal to the rest of the code that piece just placed
		justPlaced = true;

		//	Grid snap when placed		
		this.snap();

		//	Update position after grid snap
		for (var i = 0; i < this.s.length; i++) 
		{
			this.bits[i].x = this.x + this.s[i].x * gridSize;
			this.bits[i].y = this.y + this.s[i].y * gridSize;
			this.highlighted[i].x = this.x + this.s[i].x * gridSize;
			this.highlighted[i].y = this.y + this.s[i].y * gridSize;
		}
	}

	if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && highlight && !this.moving) 
	{
		this.rotate();
	}
}

//	Returns the position of each tile
PPiece.prototype.getCoverage = function() 
{
	var loc = [this.s.length];

	for (var i = 0; i < this.s.length; i++) 
	{
		loc[i] = {
			x: this.s[i].x * gridSize + this.x,
			y: this.s[i].y * gridSize + this.y
		};
	}

	return loc;
}

//	Snap piece to nearest grid tile
PPiece.prototype.snap = function() 
{
	//	If difference is less than half way point snap back else snap forward
	if(this.x % gridSize < 0.5 * gridSize)
	{
		this.x = this.x - this.x % gridSize;
	}
	else
	{
		this.x = this.x - (this.x % gridSize) + gridSize;
	}

	if(this.y % gridSize < 0.5 * gridSize)
	{
		this.y = this.y - this.y % gridSize;
	}
	else
	{
		this.y = this.y - (this.y % gridSize) + gridSize;
	}
}

//	Rotates piece
PPiece.prototype.rotate = function() 
{
	//	If difference is less than half way point snap back else snap forward
	for (var i = 0; i < this.s.length; i++) 
	{
		var temp = this.s[i].x;
		this.s[i].x = - this.s[i].y;
		this.s[i].y = temp;

		this.bits[i].x = this.x + this.s[i].x * gridSize;
		this.bits[i].y = this.y + this.s[i].y * gridSize;
		this.highlighted[i].x = this.x + this.s[i].x * gridSize;
		this.highlighted[i].y = this.y + this.s[i].y * gridSize;
	}
}