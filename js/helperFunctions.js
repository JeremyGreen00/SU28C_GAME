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
    var colors = [0xFF9999, 0x99FF99, 0xFFFF99, 0x9999FF, 0xFF99FF, 0x99FFFF];

    return colors[Math.round(Math.random() * (colors.length-1))];
}

//	Toggles music
var musicOnClick = function(button)
{
	if (music_isplaying == false)
	{
		//piano_song.play('',0,0.25,true);
		piano_song.mute = false;
		button.loadTexture('musicOn');
		music_isplaying = true;
	}
	else
	{
		piano_song.mute = true;
		button.loadTexture('musicOff');
		music_isplaying = false;
	}
}

//	Reset button
var resetOnClick = function(button)
{
	//setLevels();
	//fadeOut(game.state.getCurrentState().key, 20);
	//game.state.restart();
	if(reset_button.puzreset!=null) reset_button.puzreset.reset();
}

//	starts game
var startOnClick = function(button)
{
	currlvl = 0;
	fadeOut('Play', 20);
}

//	continues from last left off game
var continueOnClick = function(button)
{
	fadeOut('Play', 20);
}

//	continues from last left off game
var lvlselOnClick = function(button)
{
	fadeOut('lvlselect', 20);
}

//	starts game
var creditsOnClick = function(button)
{
	//game.add.text(16, 16, 'Click and drag pieces to cover the grey space\npress spacebar to rotate',
	//	 { fontSize: '32px', fill: '#fff' });
	fadeOut('GameOver', 50);
}

//	shows controls
var controlsOnClick = function(button)
{
	if (button.disptxt.alpha == 0) button.disptxt.alpha = 1;
	else button.disptxt.alpha = 0;
	game.world.bringToTop(button.disptxt);
}

//	Return to menu
var menuOnClick = function(button)
{
	fadeOut('Start', 20);
}

//	Loads the next state
var nextlvlOnClick = function(button)
{
	currlvl++;
	if (currlvl<totalLvls) 
		fadeOut('Play',20);
	else
		fadeOut('GameOver',50);	
}

//	Creates new block
var blockOnClick = function(button)
{
	if (button.canSpawn && victory == false) 
	{
		button.lvl.addp(700 + Math.random()*8, 344 + Math.random()*8, [{x:0,y:0}]);

		button.canSpawn = false;

		// 	Set to true so timer auto destroys once done
		var timer = game.time.create(true);

		button.img.scale.x = 0;
		button.img.scale.y = 0;

		//	Add a timed event
		for (var i = 0; i < 450; i++) 
		{
			timer.add( i * 10, 
				function(timevar)
				{
					button.img.scale.x += 0.001;
					button.img.scale.y += 0.001;
					if(button.img.scale.y >= 0.45) button.canSpawn = true;
				},
				this);
		}

		//	Start the timer. Very important
		timer.start();
	}
}

//	Generate menu ui buttons
var TopUI = function(game, lvl)
{
	//	Description text
	desc_text = game.add.text(4, 40, '', { font: 'Press Start 2P', fontSize: '16px', fill: '#000'});

	//	Menu button
	menu_button = game.add.button(4, 4, 'menu', menuOnClick, this);
	menu_button.scale.setTo(2);
	menu_button.onInputOver.add(function() {desc_text.text = 'menu';}, this);
	menu_button.onInputOut.add(function() {desc_text.text = '';}, this);

	//	Music button
	if (music_isplaying)
	{
		music_button = game.add.button(4*2 + 32, 4, 'musicOn', musicOnClick, this);

	}
	else 
	{
		music_button = game.add.button(4*2 + 32, 4, 'musicOff', musicOnClick, this);
	}
	music_button.scale.setTo(2);
	music_button.onInputOver.add(function() {desc_text.text = '  music';}, this);
	music_button.onInputOut.add(function() {desc_text.text = '';}, this);

	//	Reset button
	reset_button = game.add.button(4*3 + 32*2, 4, 'reset', resetOnClick, this);
	reset_button.scale.setTo(2);
	reset_button.onInputOver.add(function() {desc_text.text = '    reset';}, this);
	reset_button.onInputOut.add(function() {desc_text.text = '';}, this);
	if(lvl != null) reset_button.puzreset = lvl.level;

	//  controls button to display controls
	control_button = game.add.button(4*4 + 32*3, 4, 'controls', controlsOnClick, this);
	control_button.scale.setTo(2);
	control_button.disptxt = game.add.text(game.width/2, 40, 
		'Click and drag pieces\nCover the grid\nRight click to rotate',
		 { font: 'Press Start 2P', fontSize: '16px', fill: '#000', align: 'center'});
	if (currlvl != 0) control_button.disptxt.alpha = 0;
	control_button.disptxt.anchor.setTo(0.5,0);
	control_button.onInputOver.add(function() {desc_text.text = '      controls';}, this);
	control_button.onInputOut.add(function() {desc_text.text = '';}, this);
}

//	Create general assets
var basicScene = function(game, lvl)
{
	TopUI(game, lvl);

	//	Show current level no
	var l = game.add.text(game.width/2, 4, 'LEVEL: ' + (currlvl + 1), { fontSize: '16px', fill: '#000' });
	l.font = 'Press Start 2P';
	l.anchor.setTo(0.5,0);

	//  Hint button for helping with puzzle
	hint_button = game.add.button(game.width - 23*4 - 4, 4, 'hint', 
		function(button) 
		{ 
			button.currlvl.hint(hintbits[currlvl]);
		}, 
		this);
	hint_button.scale.setTo(4);
	hint_button.currlvl = lvl.level;

	//	The button for spawning new pieces
	if(currlvl>=11)
	{
		var gri_img = game.add.image( game.width - 64 - 16, game.height - 128 - 40, 'grinderfill');
		grindbutton = game.add.button(game.width - 64 - 16, game.height - 128 - 40, 'grinder', blockOnClick, this);
		grindbutton.anchor.setTo(0.5,0.5);
		grindbutton.scale.setTo(0.5);
		grindbutton.lvl = lvl.level;
		grindbutton.img = gri_img;
		grindbutton.img.anchor.setTo(0.5,0.5);
		grindbutton.img.scale.setTo(0.5);
		grindbutton.canSpawn = true;

	}

	lvl.levelwon = false;
}

//	Run the scene
var basicUpdate = function(game,lvl)
{
	if (victory && lvl.levelwon == false) 
	{
		lvl.Narritive.set('You win! Click for next level');

		//	If new level, unlock
		if (unlockedlvl - 1 <= currlvl + 1) unlockedlvl = currlvl + 2;

		lvl.Narritive.stop();
		win_sound.play('',0,0.5,false);
		lvl.levelwon = true;
		lvl.level.hide();

		var b = game.add.button(game.width - 64, game.height/2, 'next', nextlvlOnClick, this);
		b.anchor.setTo(0.5);
		b.scale.setTo(3);
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