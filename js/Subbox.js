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
var SubboxMute = false;
//	Prefabs
//	Subbox Prefab constructor function
var Subbox = function(game, dialogs, voice_over)
{
	//	Variables for object data
	this.x = 32;
	this.y = game.height * 0.8;
	this.currline = 0;

	//	init the lines of dialog
	this.lines = dialogs;
	this.vo = voice_over;
	this.isplaying = true;

	//	init the text box
	this.box = game.add.image(this.x, this.y,'shadow');
	this.box.scale.set(23,3);
	this.box.alpha = 0.5;

	//	Contains text to display
	this.currtxt = game.add.text(this.x + 16, this.y + 16, '', { fontSize: '16px', fill: '#fff' });
	this.currtxt.font = 'Helvetica';

	//	Signal if done
	this.done = true;
	this.start_narr();

	//	Buttons
	//	hide button
	this.hide_button = game.add.button(this.x, this.y, 'play_hide', this.hide, this);
	this.hide_button.scale.setTo(2);
	this.hide_button.anchor.setTo(0,1);

	this.pause_button = game.add.button(this.x + 32 + 4, this.y, 'pause', this.pause, this);
	this.pause_button.scale.setTo(2);
	this.pause_button.anchor.setTo(0,1);

	if(SubboxMute) this.mute_button = game.add.button(this.x + 64 + 8, this.y, 'musicOff', this.mute, this);
	else this.mute_button = game.add.button(this.x + 64 + 8, this.y, 'musicOn', this.mute, this);
	this.mute_button.scale.setTo(2);
	this.mute_button.anchor.setTo(0,1);

	this.replay_button = game.add.button(this.x + 32*3 + 12, this.y, 'reset', this.start_narr, this);
	this.replay_button.scale.setTo(2);
	this.replay_button.anchor.setTo(0,1);

	if (SubboxHidden) 
	{
		SubboxHidden = false;
		this.hide(this.hide_button);
	}
}

Subbox.prototype.constructor = Subbox;

Subbox.prototype.set = function(val) 
{
	this.currtxt.text = val;
}

Subbox.prototype.start_narr = function() 
{
	if(this.done)
	{

		this.vo.stop();

		this.currline = 0;
		this.currtxt.text = "";

		// 	Set to true so timer auto destroys once done
		this.timer = game.time.create(true);

		//	Add a timed event for every line
		for (var i = 0; i < this.lines.length; i++) 
		{
			this.timer.add( i * 60, this.nextLine,this);
		}

		//	Start the timer. Very important
		this.timer.start();
		this.vo.play('',0,0.75,false);

		if(SubboxMute) this.vo.mute = true;

		//	Signal if done
		this.done = false;
	}

}

Subbox.prototype.nextLine = function() 
{
	this.currtxt.text += this.lines[this.currline];
	this.currline++;

	if(this.currline >= this.lines.length) this.done = true;
}

Subbox.prototype.stop = function() 
{
	
	this.timer.stop();
	this.vo.stop();
}

Subbox.prototype.mute = function(button) 
{
	if(SubboxMute)
	{
		SubboxMute = false;
		this.vo.mute = false;
		button.loadTexture('musicOn');
	}
	else
	{
		SubboxMute = true;
		this.vo.mute = true;
		button.loadTexture('musicOff');
	}
}

Subbox.prototype.pause = function(button) 
{
	if(this.isplaying)
	{
		this.isplaying = false;
		this.timer.pause();
		this.vo.pause();
		button.loadTexture('play');
	}
	else
	{
		isplaying = true;
		this.timer.resume();
		this.vo.resume();
		button.loadTexture('pause');
	}
}

Subbox.prototype.hide = function(button) 
{
	if (SubboxHidden == false)
	{
		this.box.y = this.y + 32 * 3;
		this.box.scale.set(23,0.1);

		this.currtxt.alpha = 0;

		this.hide_button.y = this.y + 32 * 3;
		this.pause_button.y = this.y + 32 * 3;
		this.mute_button.y = this.y + 32 * 3;
		this.replay_button = this.y + 32 * 3;
		button.loadTexture('play_show');
		SubboxHidden = true;
	}
	else
	{
		this.box.y = this.y;
		this.box.scale.set(23,3);

		this.currtxt.alpha = 1;

		this.hide_button.y = this.y;
		this.pause_button.y = this.y;
		this.mute_button.y = this.y;
		this.replay_button = this.y;
		button.loadTexture('play_hide');
		SubboxHidden = false;
	}
	
}