//	Game by Special Unit 28C
//	Design: Yuming Li
//	Art: Dongbo(Bob)
//	Programming: Jeremy Green
//	Sound: Yuming Li

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
	this.s = pos;
	this.width = 0;
	this.height = 0;
	this.Negwidth = this.s[0].x;
	this.Negheight = this.s[0].y;
	this.color = randomColor();

	//	Fade animation timer
	// 	Set to true so timer auto destroys once done
	this.fadeTimer = game.time.create(true);

	//	set the timer to loop
	this.fadeTimer.loop(10, this.fade, this);

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
		if(this.s[i].x < this.Negwidth) this.Negwidth = this.s[i].x;
		if(this.s[i].y < this.Negheight) this.Negheight = this.s[i].y;
	}

	balX = Math.round(balX / this.s.length,0);
	balY = Math.round(balY / this.s.length,0);

	//	Set width and height
	this.width = (1 + this.width - balX) * gridSize;
	this.height = (1 + this.height - balY) * gridSize;
	this.Negwidth = (this.Negwidth - balX) * gridSize;
	this.Negheight = (this.Negheight - balY) * gridSize;

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
										this.y + this.s[i].y * gridSize + 8,'bbb','blackbox');
		this.shadow[i].alpha = 0.3;

	}
	for (var i = 0; i < this.s.length; i++) 
	{
		//	The blocks
		this.bits[i] = game.add.image(this.x + this.s[i].x * gridSize, 
										this.y + this.s[i].y * gridSize,'bbb','pieceGrey');
		this.bits[i].tint = this.color;

		//	The highlight
		this.highlighted[i] = game.add.image(this.x + this.s[i].x * gridSize, 
										this.y + this.s[i].y * gridSize,'bbb','selectionGrey');
	}
}

//	Constructor and other
//PPiece.prototype = Object.create(PPiece);
PPiece.prototype.constructor = PPiece;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
// 	update piece activity
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
	if(game.input.activePointer.isDown && highlight && !this.moving && currid == this.pid) 
	{
		//	This piece is now being moved
		this.moving = true;

		//	Move images to top rendering layer
		this.moveToTop();

		//	Play click sound
		if (click_sound.isPlaying == false) click_sound.play('',0,0.75,false);

		//	Unlocked in case locked
		this.unlock();
	}
	else if(!game.input.activePointer.isDown && this.moving)
	{
		//	Object no longer being moved
		this.moving = false;

		//	Check that it is still in play area
		this.checkBounds();

		//	Signal to the rest of the code that piece just placed
		justPlaced = true;
	}

	//	Rotation reset
	if (game.input.activePointer.isUp || 
		game.input.activePointer.rightButton.justReleased()) this.canRotate = true;

	//	Rotate on input
	if(((game.input.activePointer.isDown && game.input.activePointer.msSinceLastClick < 200) ||
		game.input.activePointer.rightButton.isDown) && 
		(highlight || this.moving)
		&& this.canRotate) 
	{
		this.rotate();
		this.canRotate = false;
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
	this.rotateNonCent();
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
	}

	var tempSiz = this.width;
	this.width = -this.Negheight + 32;
	this.Negheight = this.Negwidth;
	this.Negwidth = -this.height + 32;
	this.height = tempSiz;
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
	if(this.x + this.Negwidth < 0)
	{
		this.x = -this.Negwidth;
	}
	if(this.x + this.width > game.width)
	{
		this.x = game.width - this.width;
	}
	if(this.y + this.Negheight < 0)
	{
		this.y = -this.Negheight;
	}
	if(this.y + this.height > game.height)
	{
		this.y = game.height - this.height;
	}
	this.updatePos();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PUZZLE PIECE PREFAB
//	Checks piece is in play area
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PPiece.prototype.fade = function() 
{
	for (var i = 0; i < Math.floor(1 + (this.fadeTimer.ms / 100)) && i < this.s.length; i++) 
	{
		this.shadow[i].alpha -= 0.015;
		this.shadow[i].x -= 0.5;
		this.shadow[i].y += 0.5;
		this.bits[i].y -= 1;
		this.bits[i].alpha -= 0.05;
	}
}