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

//  The Google WebFont Loader.
WebFontConfig = 
{
    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['East Sea Dokdo','Press Start 2P']
    }
};

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

		game.stage.smoothed = false;
		//  Background 
		game.load.image('bg', 'img/background.jpg');

		//	Game pieces
		game.load.image('piece', 'img/pieceGrey.png');
		game.load.image('highlight', 'img/selectionGrey.png');
		game.load.image('shell', 'img/shell.png');
		game.load.image('shadow', 'img/blackbox.png');

		//	Menu items
		game.load.image('start', 'img/buttons/start.png');
		game.load.image('credits', 'img/buttons/credit.png');
		game.load.image('lvlsel', 'img/buttons/level select.png');
		game.load.image('continue', 'img/buttons/continue.png');

		//	Game buttons
		//	icon
		game.load.image('musicOn', 'img/buttons/volume.png');
		game.load.image('musicOff', 'img/buttons/volume(mute).png');
		game.load.image('reset', 'img/buttons/reset.png');
		game.load.image('exit', 'img/buttons/exit.png');
		//	text
		game.load.image('menu', 'img/buttons/menu.png');
		game.load.image('hint', 'img/buttons/hint.png');
		game.load.image('controls', 'img/buttons/controls.png');
		game.load.image('hintH', 'img/buttons/hint_highlight.png');
		game.load.image('next', 'img/buttons/next.png');
		game.load.image('grinder', 'img/buttons/brain.png');

		//	Game sprites
		game.load.image('lvl1', 'img/sprites/sprite1.png');
		game.load.image('lvl2', 'img/sprites/sprite2.png');
		game.load.image('lvl3', 'img/sprites/sprite3.png');
		game.load.image('lvl4', 'img/sprites/sprite4.png');
		game.load.image('lvl5', 'img/sprites/sprite5.png');
		game.load.image('lvl6', 'img/sprites/sprite6.png');
		game.load.image('lvl7', 'img/sprites/sprite7.png');
		game.load.image('lvl8', 'img/sprites/sprite8.png');
		game.load.image('lvl9', 'img/sprites/sprite9.png');
		/*game.load.image('lvl10', 'img/sprites/sprite10.png');
		game.load.image('lvl11', 'img/sprites/sprite11.png');
		game.load.image('lvl12', 'img/sprites/sprite12.png');
		game.load.image('lvl13', 'img/sprites/sprite13.png');
		game.load.image('lvl14', 'img/sprites/sprite14.png');
		game.load.image('lvl15', 'img/sprites/sprite15.png');
		game.load.image('lvl16', 'img/sprites/sprite16.png');
		game.load.image('lvl17', 'img/sprites/sprite17.png');
		game.load.image('lvl18', 'img/sprites/sprite18.png');*/

		//	Level select icons
		game.load.atlas('iconsAtlas','img/lvl_icons/lvl_icons.png','img/lvl_icons/lvl_icons.json');

		//	Sound assets
		game.load.audio('click', 'audio/se/click.wav');
		game.load.audio('drop', 'audio/se/dropdown.ogg');
		game.load.audio('win', 'audio/se/win.wav');

		//	Music
		game.load.audio('song1', 'audio/bgm/storytelling-piano.ogg');

		//  Load the Google WebFont Loader script
    	game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
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
		//	Background
		game.add.image(0,0,'bg');

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
		start_button.anchor.setTo(0.5);
		start_button.scale.setTo(3);

		if(currlvl!=0)
		{
			continue_button = game.add.button(game.width/2, game.height/2 - 64, 'continue', continueOnClick, this);
			continue_button.anchor.setTo(0.5);
			continue_button.scale.setTo(3);
		}

		credits_button = game.add.button(game.width/2, game.height/2 + 64, 'credits', creditsOnClick, this);
		credits_button.anchor.setTo(0.5);
		credits_button.scale.setTo(3);

		lvlsel_button = game.add.button(game.width/2, game.height/2 + 128, 'lvlsel', lvlselOnClick, this);
		lvlsel_button.anchor.setTo(0.5);
		lvlsel_button.scale.setTo(3);
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
		victory = false;

		//  Background
		game.stage.backgroundColor = '#eeeeee';
		game.add.image(0,0,'bg');

		//	Load a new puzzle into the level
		this.level = new Puzzle(game, 
			pos[currlvl].x, 
			pos[currlvl].y, 
			pieces[currlvl],
			puzzles[currlvl],
			true);

		//	Load a new narration and subtitles into the level
		this.Narritive = new Subbox(game,
			texts[currlvl]);

		//	Load the level sprite
		this.lvlsprte = game.add.image( this.level.x + pos[currlvl].imgoffSetX, 
										this.level.y + pos[currlvl].imgoffSetY,
										imgs[currlvl]);
		//	Make image invisible at start
		this.lvlsprte.alpha = 0;
		//	Scale the image so it's the right size
		this.lvlsprte.scale.setTo(imgscale[currlvl]);

		//	Add extra bits if necessary
		for (var i = 0; i < extrabits[currlvl].length; i++)
		{
			this.level.addp(64 + Math.random() * 600, 32 + Math.random() * 400,extrabits[currlvl][i]);
		}

		//  Setups basic buttons and functions
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

		//  Background
		game.stage.backgroundColor = '#eeeeee';
		game.add.image(0,0,'bg');

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

		//  Background
		game.stage.backgroundColor = '#eeeeee';
		game.add.image(0,0,'bg');

		//	Buttons
		for (var i = 1; i <= totalLvls; i++) 
		{
			var bx = -64-16 + (i * 128) % (game.width ) + Math.floor( (i * 128) / (game.width ) ) * 32;
			var by = 128 + Math.floor( (i * 128) / (game.width ) ) * 128;

			lvl_button = game.add.button(bx, by, 'iconsAtlas', 
				function(button) 
				{ 
					currlvl = button.lvlid; 
					//console.log(currlvl);
					game.state.start('Play'); 
				}, 
			this, 'Base_lvl ('+i+')', 'Base_lvl ('+i+')', 'Base_lvl ('+i+')');

			lvl_button.lvlid = i-1;
		}

		TopUI(game,this);
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