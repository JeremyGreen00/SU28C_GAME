//	Game by Special Unit 28C
//	Design: Yuming Li
//	Art: Dongbo(Bob)
//	Programming: Jeremy Green
//	Sound: Yuming Li

// init game
var game = new Phaser.Game(800, 600, Phaser.AUTO);

var justLoaded = false;

//	current level player is up to
var currlvl = 0;
var unlockedlvl = 17;

// sound variables
var click_sound;
var swish_sound;
var win_sound;
var drop_sound;
var piano_song;

var music_isplaying = true;

//	Get the style from the css file
var style;

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

		//	Init from style.css
		style = getComputedStyle(document.body);
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
		game.stage.backgroundColor = style.getPropertyValue('background-color');

		game.stage.smoothed = false;
		//  Background 
		game.load.image('bg', 'img/background.jpg');
		game.load.image('blankTile', 'img/whiteBox.png')

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
		game.load.image('title', 'img/main_menu.png');

		//	Textbox items
		game.load.image('play', 'img/buttons/play.png');
		game.load.image('pause', 'img/buttons/pause.png');
		game.load.image('play_hide', 'img/buttons/play_hide.png');
		game.load.image('play_show', 'img/buttons/play_show.png');

		//	Game buttons
		//	icon
		game.load.image('musicOn', 'img/buttons/volume.png');
		game.load.image('musicOff', 'img/buttons/volume(mute).png');
		game.load.image('reset', 'img/buttons/reset.png');
		game.load.image('exit', 'img/buttons/exit.png');
		//	text
		game.load.image('menu', 'img/buttons/menu.png');
		game.load.image('hint', 'img/buttons/hint.png');
		game.load.image('controls', 'img/buttons/help.png');
		game.load.image('hintH', 'img/buttons/hint_highlight.png');
		game.load.image('next', 'img/buttons/next.png');
		game.load.image('grinder', 'img/buttons/grinder button.png');
		game.load.image('grinderfill', 'img/buttons/grinder button fill.png');

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

		//	Voice clips
		for (var i = 1; i <= totalLvls; i++)
		{
			game.load.audio('line_'+i, 'audio/voice/line_'+i+'.ogg');
		}

		//	Sound assets
		game.load.audio('swish', 'audio/se/Swish.ogg');
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
		swish_sound = game.add.audio('swish');
		click_sound = game.add.audio('click');
		win_sound = game.add.audio('win');
		drop_sound = game.add.audio('drop');

		piano_song = game.add.audio('song1');

		//piano_song.play('',0,0.25,true);
		//	Voice clips
		for (var i = 1; i <= totalLvls; i++)
		{
			narr[i-1] = game.add.audio('line_'+i);
		}

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
		game.add.image(0,0,'title');
		piano_song.play('',0,0.25,true);

		//	Set level data
		setLevels();

		start_button = game.add.button(game.width/2, game.height/2 + 48 * 2, 'start', startOnClick, this);
		start_button.anchor.setTo(0.5);
		start_button.scale.setTo(3);
		start_button.tint = randomColor();

		if(justLoaded)
		{
			continue_button = game.add.button(game.width/2, game.height/2 + 48, 'continue', continueOnClick, this);
			continue_button.anchor.setTo(0.5);
			continue_button.scale.setTo(3);
			continue_button.tint = randomColor();

			lvlsel_button = game.add.button(game.width/2, game.height/2 + 48 * 4, 'lvlsel', lvlselOnClick, this);
			lvlsel_button.anchor.setTo(0.5);
			lvlsel_button.scale.setTo(3);
			lvlsel_button.tint = randomColor();
		}

		credits_button = game.add.button(game.width/2, game.height/2 + 48 * 3, 'credits', creditsOnClick, this);
		credits_button.anchor.setTo(0.5);
		credits_button.scale.setTo(3);
		credits_button.tint = randomColor();

		TopUI(game);

		if (justLoaded == false) fadein(100);
		else fadein(20);

		justLoaded = true;
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
			texts[currlvl],narr[currlvl]);

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

		fadein(20);
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
			'Congradulations, you have beaten the demo\nClick to start again\ninsert credits here', { fontSize: '32px', fill: '#fff' });
		currlvl = 0;

		TopUI(game);
		fadein(50);
	},

	update: function() 
	{
		// run game loop
		if(game.input.activePointer.isDown)
		{
			fadeOut('Start',20);
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

			if (i <= unlockedlvl)
			{
				lvl_button = game.add.button(bx, by, 'iconsAtlas', 
					function(button) 
					{ 
						currlvl = button.lvlid; 
						//console.log(currlvl);
						fadeOut('Play',20); 
					}, 
				this, 'lvl_icon ('+i+')', 'lvl_icon ('+i+')', 'lvl_icon ('+i+')');

				lvl_button.lvlid = i-1;
				lvl_button.tint = randomColor();
				lvl_button.scale.setTo(4);
			}
			else
			{
				lvl_button = game.add.image(bx,by, 'iconsAtlas', 'lvl_icon lock');
				lvl_button.tint = randomColor();
				lvl_button.scale.setTo(4);
			}
		}

		TopUI(game);

		fadein(20);
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