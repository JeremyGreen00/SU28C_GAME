/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	HELPER FUNCTIONS
//	random functions to help shorten code
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//	Code from williamclarkson.net | returns a random string
var makeRandomString = function() 
{
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*#%&!";
    var word = "";
    
    var wordLen = 10;
    for (var i = 0; i < wordLen; i++) 
    {
        var index = Math.floor(Math.random() * letters.length);
        word += letters.charAt(index);
    }
    return word;
}

//	Toggles music
var musicOnClick = function(button)
{
	if (music_isplaying == false)
	{
		piano_song.play('',0,0.5,true);
		button.loadTexture('musicOn');
		music_isplaying = true;
	}
	else
	{
		piano_song.stop();
		button.loadTexture('musicOff');
		music_isplaying = false;
	}
}

//	Reset button
var resetOnClick = function(button)
{
	game.state.restart();
}

//	starts game
var startOnClick = function(button)
{
	currlvl = 0;
	game.state.start('Play');
}

//	continues from last left off game
var continueOnClick = function(button)
{
	game.state.start('Play');
}

//	continues from last left off game
var lvlselOnClick = function(button)
{
	game.state.start('lvlselect');
}

//	starts game
var controlsOnClick = function(button)
{
	game.add.text(16, 16, 'Click and drag pieces to cover the grey space\npress spacebar to rotate',
		 { fontSize: '32px', fill: '#fff' });
}

//	Return to menu
var menuOnClick = function(button)
{
	game.state.start('Start');
}

//	Create general assets
var basicScene = function(game, lvl)
{
	game.stage.backgroundColor = '#89CFF0';
	
	//	Music button
	if (music_isplaying)
	{
		music_button = game.add.button(4, 4, 'musicOn', musicOnClick, this);
		piano_song.play('',0,0.5,true);
	}
	else 
	{
		music_button = game.add.button(4, 4, 'musicOff', musicOnClick, this);
	}
	music_button.scale.setTo(0.15);

	//	Reset button
	reset_button = game.add.button(4 + Math.floor(175*0.2), 4, 'reset', resetOnClick, this);
	reset_button.scale.setTo(0.3);

	//	Menu button
	menu_button = game.add.button(game.width - 99, 4, 'menu', menuOnClick, this);
	menu_button.scale.setTo(0.1);

	//	For checking when to load to next state
	lvl.loadNextState = false;
}

//	Run the scene
var basicUpdate = function(game,lvl)
{
	if (victory) 
	{
		lvl.Narritive.set('You win! Click for next level');
		win_sound.play('',0,0.5,false);
		victory = false;
		lvl.waitfornextclick = true;
		lvl.lvlsprte.alpha = 1;
		lvl.level.hide();
	}
	else if(lvl.lvlsprte.alpha == 0)
	{
		lvl.level.update();
	}
	if(game.input.activePointer.leftButton.isDown && lvl.waitfornextclick)
	{
		lvl.waitfornextclick = false;
		currlvl++;
		lvl.loadNextState = true;
	}
}