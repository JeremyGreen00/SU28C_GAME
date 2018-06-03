//	Game by Special Unit 28C
//	Design: Yuming Li
//	Art: Bob Liu
//	Programming: Jeremy Green

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	EFFECTS FUNCTIONS
//	Awesome cool effects
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	FADE OUT
//	fade out of a scene in style
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//	Fade out from a scene
var fadeOut = function(next_scene, speed = 100)
{
	var fadegrid = 100;

	if (this.isFading === undefined) this.isFading = false;

	if (this.isFading == false)
	{
		this.isFading = true;

		// 	Set to true so timer auto destroys once done
		this.timer = game.time.create(true);

		this.boxes = [];

		var runExpand = function(b)
		{
			if(b.scale.x * (b.width-1) <= fadegrid * 3 + 10)
			{	
				b.scale.x += 10 / speed;
				b.scale.y += 10 / speed;
			}
			else
			{
				b.scale.setTo(3.2);
			}
		}

		for ( var i = 0; i < game.width / fadegrid; i++ )
		{
			for ( var j = 0; j < game.height / fadegrid; j++ )
			{
				
				var box = game.add.image(fadegrid/2 + i * fadegrid, fadegrid/2 + j * fadegrid, 'blankTile');
				box.anchor.setTo(0.5);
				box.scale.setTo(0);
				box.tint =  0x808080;
				//box.alpha = 0.5;

				this.boxes.push(box);

			}
		}

		var i = 0;
		var lim = game.height / fadegrid;

		this.boxes.forEach(function(box) 
		{
			var bx = i % lim;
			var by = Math.floor( i  / (lim) );

			this.timer.add( (bx + by) * speed , 
			function() 
			{
				game.time.events.loop(10, runExpand, this, box);
			}, 
			this);
			i++;
		});

		//	Run the loop
		this.timer.add( ((game.width / fadegrid) + (game.height / fadegrid)) * speed + fadegrid, 
			function(timer) 
			{
				this.isFading = false;
				game.state.start(next_scene);
			}
			,this);

		this.timer.start();
		swish_sound.play('',0,0.75,false);
	}

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	FADE IN
//	Fade in from a scene
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var fadein = function(speed = 100)
{
	var fadegrid = 100;

	// 	Set to true so timer auto destroys once done
	this.timer = game.time.create(true);

	timerEvents = [];

	this.boxes = [];

	var runShrink = function(b)
	{
		if(b.scale.x > 0)
		{	
			b.scale.x -= 10 / speed;
			b.scale.y -= 10 / speed;
		}
		else
		{
			b.scale.setTo(0);
		}
	}

	for ( var i = 0; i < game.width / fadegrid; i++ )
	{
		for ( var j = 0; j < game.height / fadegrid; j++ )
		{
			
			var box = game.add.image(fadegrid/2 + i * fadegrid, fadegrid/2 + j * fadegrid, 'blankTile');
			box.anchor.setTo(0.5);
			box.scale.setTo(3.5);
			box.tint = 0x808080;
			//box.alpha = 0.5;

			this.boxes.push(box);

		}
	}

	var i = 0;
	var lim = game.height / fadegrid;

	this.boxes.forEach(function(box) 
	{
		var bx = i % lim;
		var by = Math.floor( i  / (lim) );

		this.timer.add((bx + by) * speed, 
		function() 
		{
			timerEvents.push(game.time.events.loop(10, runShrink, this, box));
		},
		this);
		i++;
	});

	//	Run the loop
	this.timer.add( ((game.width / fadegrid) + (game.height / fadegrid)) * 100 + speed * 40, 
		function(timer) 
		{
			for (var i=0; i<timerEvents.length; i++)
			{ 
				game.time.events.remove(timerEvents[i]); 
			}
		}
		,this);

	this.timer.start();


}
