//	Game by Special Unit 28C
//	Design: Yuming Li
//	Art: Dongbo(Bob)
//	Programming: Jeremy Green
//	Sound: Yuming Li

// init game
var game = new Phaser.Game(800, 600, Phaser.AUTO);

//	current level player is up to
var currlvl = 0;

// sound variables
var click_sound;
var win_sound;
var drop_sound;
var piano_song;

var music_isplaying = false;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	BOOT STATE
//	Throw boot screen then move on
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var BootState =  function(game) {};
BootState.prototype =
{
	init: function() 
	{
		console.log('Boot: init');
		// don't allow losing browser focus to halt game
		this.game.disableVisibilityChange = true;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.refresh();
	},
	preload: function() 
	{
		// preload assets
		game.load.path = 'assets/';
		///load boot image
	},

	create: function() 
	{
		// create assets
		game.state.start('Preload');
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PRELOAD STATE
//	Load in all relevent assets needed for gameplay
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var PreloadState =  function(game) {};
PreloadState.prototype =
{
	preload: function() 
	{
		// preload assets
		//	Game pieces
		game.load.image('piece', 'img/pieceGrey.png');
		game.load.image('highlight', 'img/selectionGrey.png');
		game.load.image('shell', 'img/shell.png');
		game.load.image('shadow', 'img/blackbox.png');

		//	Menu items
		game.load.image('musicOn', 'img/volume.png');
		game.load.image('musicOff', 'img/volume(mute).png');
		game.load.image('reset', 'img/reset.png');
		game.load.image('exit', 'img/exit.png');
		game.load.image('menu', 'img/menu.png');
		game.load.image('start', 'img/temp_start.gif');
		game.load.image('continue', 'img/temp_continue.png');
		game.load.image('controls', 'img/temp_controls.png');
		game.load.image('lvlsel', 'img/temp_levelselect.png');

		//	Game sprites
		game.load.image('lvl1', 'img/1/sprite1.png');
		game.load.image('lvl2', 'img/2/sprite2.png');
		game.load.image('lvl5', 'img/5/sprite5.png');
		game.load.image('lvl8', 'img/8/sprite8.png');
		game.load.image('lvl11', 'img/11/sprite11.png');

		//	Sound assets
		game.load.audio('click', 'audio/se/click.wav');
		game.load.audio('drop', 'audio/se/dropdown.ogg');
		game.load.audio('win', 'audio/se/win.wav');

		//	Music
		game.load.audio('song1', 'audio/bgm/storytelling-piano.ogg');
	},

	create: function() 
	{
		// create assets
		click_sound = game.add.audio('click');
		win_sound = game.add.audio('win');
		drop_sound = game.add.audio('drop');

		piano_song = game.add.audio('song1');

		//piano_song.play('',0,0.75,true);

    	game.input.mouse.capture = true;
	},

	update: function() 
	{
		// run game loop
		if (game.cache.isSoundDecoded('song1'))
		{
			game.state.start('Start');
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	START STATE
//	Basically the main menu, options etc
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var StartState =  function(game) {};
StartState.prototype =
{
	preload: function() 
	{
		// preload assets
	},

	create: function() 
	{
		// create assets
		game.stage.backgroundColor = '#89CFF0';
		setLevels();

		start_button = game.add.button(game.width/2, game.height/2, 'start', startOnClick, this);

		if(currlvl!=0)
			continue_button = game.add.button(game.width/2, game.height/2 - 64, 'continue', continueOnClick, this);

		controls_button = game.add.button(game.width/2, game.height/2 + 64, 'controls', controlsOnClick, this);

		//lvlsel_button = game.add.button(game.width/2, game.height/2 + 128, 'lvlsel', lvlselOnClick, this);
	},

	update: function() 
	{
		// run game loop
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	PLAY STATE
//	Where the game is played
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var PlayState = function(game) {};
PlayState.prototype = 
{
	create: function() 
	{
		// create assets

		this.level = new Puzzle(game, 
			pos[currlvl].x, 
			pos[currlvl].y, 
			pieces[currlvl],
			puzzles[currlvl],
			rot[currlvl]);

		this.Narritive = new Subbox(game,
			texts[currlvl]);

		//	Load the level sprite
		this.lvlsprte = game.add.image(this.level.x, this.level.y,imgs[currlvl]);
		this.lvlsprte.alpha = 0;
		this.lvlsprte.scale.setTo(imgscale[currlvl]);

		//	Add extra bits if necessary
		for (var i = 0; i < extrabits[currlvl].length; i++)
		{
			this.level.addp(64 + Math.random() * 600, 32 + Math.random() * 400,extrabits[currlvl][i]);
		}

		basicScene(game,this);
		//game.time.advancedTiming = true;
		//this.fpstext = game.add.text(16, 16, 'fps = ', { fontSize: '32px', fill: '#fff' });
	},

	update: function() 
	{
		// run game loop

		//this.fpstext.text = 'fps = ' + game.time.fps;
		basicUpdate(game,this);

		if(this.loadNextState)
		{
			if (currlvl<totalLvls) 
				game.state.start('Play');
			else
				game.state.start('GameOver');	
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	GAME OVER STATE
//	Probably won't need this but keep for now
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var GameOver = function(game) {};
GameOver.prototype = 
{
	preload: function() 
	{
		// preload assets
	},

	create: function() 
	{
		// create assets
		this.wintext = game.add.text(16, 48, 
			'Congradulations, you have beaten the demo\nClick to start again', { fontSize: '32px', fill: '#fff' });
		currlvl = 0;
	},

	update: function() 
	{
		// run game loop
		if(game.input.activePointer.leftButton.isDown)
		{
			game.state.start('Start');
		}

	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	LEVEL SELECT STATE
//	Probably won't need this but keep for now
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var LvlSelState = function(game) {};
LvlSelState.prototype = 
{
	preload: function() 
	{
		// preload assets
	},

	create: function() 
	{
		//for (var i = 1; i <= 18; i++) 
		{

			game.add.button(32, game.height/2 - 64, 'shell', 
				function(button) 
			{ 
				currlvl = 2; 
				console.log(currlvl);
				game.state.start('Play'); 
			}, this);
		}

		basicScene(game,this);
	},

	update: function() 
	{
		// run game loop

	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	MISC
//	Random bits
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//	States
game.state.add('Boot',BootState);
game.state.add('Preload',PreloadState);
game.state.add('Start',StartState);
game.state.add('Play' ,PlayState);
game.state.add('lvlselect' ,LvlSelState);
game.state.add('GameOver',GameOver);

game.state.start('Boot');