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

	this.shells = [this.sh.length];

	//	A unique 'cover' object for checking win
	this.coverage = [this.sh.length];
	
	for (var i = 0; i < this.sh.length; i++) 
	{
		//	Place appropiate 'shell' pieces
		this.shells[i] = game.add.image(this.x + this.sh[i].x * gridSize, 
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

	//	Hide all the pieces
	for (var i = 0; i < this.CHUNKS.length; i++) 
	{
		for (var j = 0; j < this.CHUNKS[i].s.length; j++) 
		{
			this.CHUNKS[i].shadow[j].alpha = 0;
			this.CHUNKS[i].bits[j].alpha = 0;
			this.CHUNKS[i].highlighted[j].alpha = 0;
		}
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
			this.CHUNKS[i].shadow[j].alpha = 3;
			this.CHUNKS[i].bits[j].alpha = 1;
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	Piece prefab constructor function
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var PPiece = function(pos_x, pos_y, pos)
{
	//	Variables for moving
	this.moving = false;
	this.offsetX = 0;
	this.offsetY = 0;
	this.canRotate = false;
	this.locked = false;

	//	Variables for object data
	this.x = pos_x;
	this.y = pos_y;
	this.width = 0;
	this.height = 0;
	this.s = pos;
	this.color = Math.random() * 0xffffff;

	//	Images for blocks itself
	this.bits = [this.s.length];

	//	Images just for highlights
	this.highlighted = [this.s.length];

	//	Images for shadows
	this.shadow = [this.s.length];

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

		if(this.s[i].x > this.width) this.width = this.s[i].x;
		if(this.s[i].y > this.height) this.height = this.s[i].y;
	}

	balX = Math.round(balX / this.s.length,0);
	balY = Math.round(balY / this.s.length,0);

	//	Set width and height
	this.width = (this.width - balX) * gridSize;
	this.height = (this.height - balY) * gridSize;

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
		//	The shadows
		this.shadow[i] = game.add.image(this.x + this.s[i].x * gridSize - 8, 
										this.y + this.s[i].y * gridSize + 8,'shadow');
		this.shadow[i].alpha = 0.3;

	}
	for (var i = 0; i < this.s.length; i++) 
	{
		//	The blocks
		this.bits[i] = game.add.image(this.x + this.s[i].x * gridSize, 
										this.y + this.s[i].y * gridSize,'piece');
		this.bits[i].tint = this.color;

		//	The highlight
		this.highlighted[i] = game.add.image(this.x + this.s[i].x * gridSize, 
										this.y + this.s[i].y * gridSize,'highlight');
	}
}

//	Constructor and other
//PPiece.prototype = Object.create(PPiece);
PPiece.prototype.constructor = PPiece;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
// 	override Phaser.Sprite update
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
		this.updatePos();
	}
	else if(currid == "" || currid == this.pid)
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

				//	Set currently active piece to this one
				currid = this.pid;
			}
		}
		else
		{
			for (var i = 0; i < this.s.length; i++) 
			{
				this.highlighted[i].alpha = 0; 

				//	Set currently active piece to non
				currid = "";
			}
		}
	}

	//	Check if all conditions for moving are met
	if(game.input.activePointer.leftButton.isDown && highlight && !this.moving && currid == this.pid) 
	{
		//	This piece is now being moved
		this.moving = true;

		//	Move images to top rendering layer
		this.moveToTop();

		//	Play click sound
		click_sound.play('',0,0.75,false);

		//	Unlocked in case locked
		this.unlock();
	}
	else if(!game.input.activePointer.leftButton.isDown && this.moving)
	{
		//	Object no longer being moved
		this.moving = false;

		//	Check that it is still in play area
		this.checkBounds();

		//	Signal to the rest of the code that piece just placed
		justPlaced = true;
	}

	if(game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) && (highlight || this.moving)) 
	{
		this.rotate();
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	Returns the position of each tile
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PPiece.prototype.getCoverage = function() 
{
	var loc = [this.s.length];

	//	bits have to be snapped for the math to work
	var tempx = this.x;
	var tempy = this.y;

	this.snap();

	for (var i = 0; i < this.s.length; i++) 
	{
		loc[i] = {
			x: this.s[i].x * gridSize + this.x,
			y: this.s[i].y * gridSize + this.y,
			c: false
		};
	}

	//	return bits to normal in case not locked
	this.x = tempx;
	this.y = tempy;

	return loc;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	Snap piece to nearest grid tile
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	Rotates piece
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PPiece.prototype.rotate = function() 
{
	//	If difference is less than half way point snap back else snap forward
	for (var i = 0; i < this.s.length; i++) 
	{
		var temp = this.s[i].x;
		this.s[i].x = - this.s[i].y;
		this.s[i].y = temp;

		var tempSiz = this.width;
		this.width = this.height;
		this.height = tempSiz;

	}
	//	Center piece on mouse
	this.offsetX = 16;
	this.offsetY = 16;

	this.x = game.input.x - this.offsetX;
	this.y = game.input.y - this.offsetY;

	this.unlock();

	//	Update to new position
	this.updatePos();

	if(this.moving==false) justPlaced = true;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	Rotates piece without moving to mouse
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PPiece.prototype.rotateNonCent = function() 
{
	//	If difference is less than half way point snap back else snap forward
	for (var i = 0; i < this.s.length; i++) 
	{
		var temp = this.s[i].x;
		this.s[i].x = - this.s[i].y;
		this.s[i].y = temp;

		var tempSiz = this.width;
		this.width = this.height;
		this.height = tempSiz;

	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	Moves pieces to the top
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PPiece.prototype.moveToTop = function() 
{
	//	If difference is less than half way point snap back else snap forward
	for (var i = 0; i < this.s.length; i++) 
	{
		game.world.bringToTop(this.shadow[i]);
	}
	for (var i = 0; i < this.s.length; i++) 
	{
		game.world.bringToTop(this.bits[i]);
		game.world.bringToTop(this.highlighted[i]);
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	Moves pieces to current location
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PPiece.prototype.updatePos = function() 
{
	for (var i = 0; i < this.s.length; i++) 
	{
		this.shadow[i].x = this.x + this.s[i].x * gridSize - 8;
		this.shadow[i].y = this.y + this.s[i].y * gridSize + 8;
		this.bits[i].x = this.x + this.s[i].x * gridSize;
		this.bits[i].y = this.y + this.s[i].y * gridSize;
		this.highlighted[i].x = this.x + this.s[i].x * gridSize;
		this.highlighted[i].y = this.y + this.s[i].y * gridSize;
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	lock piece if in place
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PPiece.prototype.lock = function() 
{
	if(this.locked == false)
	{
		//	Indicate snapping
		for (var i = 0; i < this.s.length; i++) 
		{
			this.shadow[i].alpha = 0;
			//this.bits[i].tint = this.color / 2;
		}

		//	Grid snap when placed		
		this.snap();

		//	Update position after grid snap
		this.updatePos();

		//	Play drop sound
		drop_sound.play('',0,1.0,false);

		this.locked = true;
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	Unlock piece if in place
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PPiece.prototype.unlock = function() 
{
	if(this.locked)
	{
		//	Indicate snapping
		for (var i = 0; i < this.s.length; i++) 
		{
			this.shadow[i].alpha = 0.3;
			//this.bits[i].tint = this.color;
		}
		this.locked = false;
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	Checks piece is in play area
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PPiece.prototype.checkBounds = function() 
{
	if(this.x - this.width < 0)
	{
		this.x = this.width;
	}
	if(this.x + this.width + gridSize > game.width)
	{
		this.x = game.width - this.width - gridSize;
	}
	if(this.y - this.height < 0)
	{
		this.y = this.height;
	}
	if(this.y + this.height + gridSize > game.height)
	{
		this.y = game.height - this.height - gridSize;
	}
	this.updatePos();
}