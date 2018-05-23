//	Game by Special Unit 28C
//	Design: Yuming Li
//	Art: Dongbo(Bob)
//	Programming: Jeremy Green
//	Sound: Yuming Li

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
    
    var wordLen = 20;
    for (var i = 0; i < wordLen; i++) 
    {
        var index = Math.floor(Math.random() * letters.length);
        word += letters.charAt(index);
    }
    return word;
}

//	Returns a random color
var randomColor = function() 
{
    var colors = [0x89cff0, 0xFF9999, 0xFFFF99, 0x99FF99, 0xFF99FF];

    return colors[Math.floor(Math.random() * colors.length)];
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
	setLevels();
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

//	Loads the next state
var nextlvlOnClick = function(button)
{
	currlvl++;
	if (currlvl<totalLvls) 
		game.state.start('Play');
	else
		game.state.start('GameOver');	
}

//	Create general assets
var basicScene = function(game, lvl)
{
	game.stage.backgroundColor = '#89CFF0';
	
	//	Music button
	if (music_isplaying)
	{
		music_button = game.add.button(4, 4, 'musicOn', musicOnClick, this);
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
	menu_button = game.add.button(game.width - 103, 4, 'menu', menuOnClick, this);
	menu_button.scale.setTo(0.1);

	lvl.levelwon = false;
}

//	Run the scene
var basicUpdate = function(game,lvl)
{
	if (victory) 
	{
		lvl.Narritive.set('You win! Click for next level');
		//lvl.Narritive.stop();
		win_sound.play('',0,0.5,false);
		victory = false;
		lvl.levelwon = true;
		lvl.level.hide();

		game.add.button(32, game.width/2, 'next', nextlvlOnClick, this);
	}
	else if (lvl.levelwon == false)
	{
		lvl.level.update();
	}
	if (lvl.levelwon)
	{
		if(lvl.lvlsprte.alpha < 1) lvl.lvlsprte.alpha += 0.01;
	}
}