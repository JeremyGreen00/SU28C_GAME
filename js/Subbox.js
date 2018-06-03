//	Game by Special Unit 28C
//	Design: Yuming Li
//	Art: Dongbo(Bob)
//	Programming: Jeremy Green
//	Sound: Yuming Li

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	SUBBOX PREFAB
//	contains all necessities for narritive
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var SubboxHidden = false;
//	Prefabs
//	Subbox Prefab constructor function
var Subbox = function(game, dialogs)
{
	//	Variables for object data
	this.x = 32;
	this.y = game.height * 0.8;
	this.currline = 0;

	//	init the lines of dialog
	this.lines = dialogs;

	//	init the text box
	this.box = game.add.image(this.x, this.y,'shadow');
	this.box.scale.set(23,3);
	this.box.alpha = 0.5;

	//	Contains text to display
	this.currtxt = game.add.text(this.x + 16, this.y + 16, '', { fontSize: '16px', fill: '#fff' });
	this.currtxt.font = 'Helvetica';

	// 	Set to true so timer auto destroys once done
	this.timer = game.time.create(true);

	//	Add a timed event for every line
	for (var i = 0; i < this.lines.length; i++) 
	{
		this.timer.add( i * 10000, this.nextLine,this);
	}

	//	Start the timer. Very important
	this.timer.start();

	//	Buttons
	//	hide button
	this.hide_button = game.add.button(this.x, this.y, 'play_hide', this.hide, this);
	this.hide_button.scale.setTo(2);
	this.hide_button.anchor.setTo(0,1);

	if (SubboxHidden) 
	{
		SubboxHidden = false;
		this.hide(this.hide_button);
	}

	//	Signal if done
	this.done = false;
}

Subbox.prototype.constructor = Subbox;

Subbox.prototype.set = function(val) 
{
	this.currtxt.text = val;
}

Subbox.prototype.nextLine = function() 
{
	this.currtxt.text = this.lines[this.currline];
	this.currline++;

	if(this.currline >= this.lines.length) this.done = true;
}

Subbox.prototype.stop = function() 
{
	
	this.timer.stop();
}

Subbox.prototype.hide = function(button) 
{
	if (SubboxHidden == false)
	{
		this.timer.pause();

		this.box.y = this.y + 32 * 3;
		this.box.scale.set(23,0.1);

		this.currtxt.alpha = 0;

		this.hide_button.y = this.y + 32 * 3;
		button.loadTexture('play_show');
		SubboxHidden = true;
	}
	else
	{
		this.timer.resume();

		this.box.y = this.y;
		this.box.scale.set(23,3);

		this.currtxt.alpha = 1;

		this.hide_button.y = this.y;
		button.loadTexture('play_hide');
		SubboxHidden = false;
	}
	
}