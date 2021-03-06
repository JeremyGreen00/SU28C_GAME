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

//	used to fix a bug
var can_change_state = true;

//	Fade out from a scene
var fadeOut = function(next_scene, speed = 100)
{
	//	Sizes of each individual square
	var fadegrid = 100;

	can_change_state = false;

	if (this.isFading === undefined) this.isFading = false;

	if (this.isFading == false)
	{
		this.isFading = true;

		// 	Set to true so timer auto destroys once done
		this.timer = game.time.create(true);

		this.boxes = [];

		//	Expand square to grid size 100
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

		//	Generate all the boxes for screen transition
		for ( var i = 0; i < game.width / fadegrid; i++ )
		{
			for ( var j = 0; j < game.height / fadegrid; j++ )
			{
				
				var box = game.add.image(fadegrid/2 + i * fadegrid, fadegrid/2 + j * fadegrid, 'bbb','whiteBox');
				box.anchor.setTo(0.5);
				box.scale.setTo(0);
				box.tint =  0x808080;
				//box.alpha = 0.5;

				this.boxes.push(box);

			}
		}

		var i = 0;
		var lim = game.height / fadegrid;

		//	Set up a timing mechanism so each square eventuall fills whole screen
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

		//	When done load next scene
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
			
			var box = game.add.image(fadegrid/2 + i * fadegrid, fadegrid/2 + j * fadegrid, 'bbb','whiteBox');
			box.anchor.setTo(0.5);
			box.scale.setTo(3.5);
			box.tint = 0x808080;
			//box.alpha = 0.5;

			this.boxes.push(box);

		}
	}

	var i = 0;
	var lim = game.height / fadegrid;

	//	Generate all the boxes and setup to shrink away
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

	//	removes the events from the game after effect is done
	this.timer.add( ((game.width / fadegrid) + (game.height / fadegrid)) * speed + fadegrid * 4, 
		function(timer) 
		{
			can_change_state = true;
			for (var i=0; i<timerEvents.length; i++)
			{ 
				game.time.events.remove(timerEvents[i]); 
			}
		}
		,this);

	this.timer.start();


}
