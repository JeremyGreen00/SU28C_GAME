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
		game.load.image('start', 'img/buttons/temp_start.gif');
		game.load.image('controls', 'img/buttons/temp_controls.png');
		game.load.image('lvlsel', 'img/buttons/temp_levelselect.png');
		game.load.image('continue', 'img/buttons/temp_continue.png');

		//	Game buttons
		game.load.image('musicOn', 'img/buttons/volume.png');
		game.load.image('musicOff', 'img/buttons/volume(mute).png');
		game.load.image('reset', 'img/buttons/reset.png');
		game.load.image('exit', 'img/buttons/exit.png');
		game.load.image('menu', 'img/buttons/menu.png');
		game.load.image('next', 'img/buttons/Next_button.png');

		//	Game sprites
		game.load.image('lvl1', 'img/1/sprite1.png');
		game.load.image('lvl2', 'img/2/sprite2.png');
		game.load.image('lvl3', 'img/3/sprite3.png');
		game.load.image('lvl4', 'img/4/sprite4.png');
		game.load.image('lvl5', 'img/5/sprite5.png');
		game.load.image('lvl6', 'img/6/sprite6.png');
		game.load.image('lvl7', 'img/7/sprite7.png');
		game.load.image('lvl8', 'img/8/sprite8.png');
		game.load.image('lvl9', 'img/9/sprite9.png');
		game.load.image('lvl10', 'img/10/sprite10.png');
		game.load.image('lvl11', 'img/11/sprite11.png');
		game.load.image('lvl12', 'img/12/sprite12.png');
		game.load.image('lvl13', 'img/13/sprite13.png');
		game.load.image('lvl14', 'img/14/sprite14.png');
		game.load.image('lvl15', 'img/15/sprite15.png');
		game.load.image('lvl16', 'img/16/sprite16.png');
		game.load.image('lvl17', 'img/17/sprite17.png');
		game.load.image('lvl18', 'img/18/sprite18.png');

		//	Level select icons
		game.load.atlas('iconsAtlas','img/lvl_icons/lvl_icons.png','img/lvl_icons/lvl_icons.json');

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

		//	Set level data
		setLevels();

		start_button = game.add.button(game.width/2, game.height/2, 'start', startOnClick, this);

		if(currlvl!=0)
			continue_button = game.add.button(game.width/2, game.height/2 - 64, 'continue', continueOnClick, this);

		controls_button = game.add.button(game.width/2, game.height/2 + 64, 'controls', controlsOnClick, this);

		lvlsel_button = game.add.button(game.width/2, game.height/2 + 128, 'lvlsel', lvlselOnClick, this);
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
			true);

		this.Narritive = new Subbox(game,
			texts[currlvl]);

		//	Load the level sprite
		this.lvlsprte = game.add.image( this.level.x + pos[currlvl].imgoffSetX, 
										this.level.y + pos[currlvl].imgoffSetY,
										imgs[currlvl]);
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
		if(game.input.activePointer.isDown)
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
		for (var i = 1; i <= 18; i++) 
		{
			var bx = -64-16 + (i * 128) % (game.width ) + Math.floor( (i * 128) / (game.width ) ) * 32;
			var by = 64 + Math.floor( (i * 128) / (game.width ) ) * 128;

			lvl_button = game.add.button(bx, by, 'iconsAtlas', 
				function(button) 
			{ 
				currlvl = button.lvlid; 
				//console.log(currlvl);
				game.state.start('Play'); 
			}, this, 'Base_lvl ('+i+')', 'Base_lvl ('+i+')', 'Base_lvl ('+i+')');

			lvl_button.lvlid = i-1;
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