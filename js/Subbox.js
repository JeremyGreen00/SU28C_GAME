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

//	Prefabs
//	Subbox Prefab constructor function
var Subbox = function(game, dialogs)
{
	//	Variables for object data
	this.x = 32;
	this.y = game.height * 0.8;

	this.lines = dialogs;

	this.box = game.add.image(this.x, this.y,'shadow');
	this.box.scale.set(23,3);
	this.box.alpha = 0.5;

	this.currtxt = game.add.text(this.x + 16, this.y + 16, this.lines[0], { fontSize: '16px', fill: '#fff' });
}

Subbox.prototype.constructor = Subbox;

Subbox.prototype.set = function(val) 
{
	this.currtxt.text = val;
}

Subbox.prototype.play = function() 
{

}