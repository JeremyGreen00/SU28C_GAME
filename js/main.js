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
var unlockedlvl = 1;

// sound variables
var click_sound;
var swish_sound;
var win_sound;
var drop_sound;
var grind_sound;

// songs
var piano_song;
var restless_song;
var corp_song;
var curr_song = 'song1';
var song_volume = 0.05;

var music_isplaying = true;

//	Get the style from the css file
var style;

var createText;

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

		//	Game pieces
		game.load.image('piece', 'img/pieceGrey.png');

		//	Textbox items
		game.load.image('play', 'img/buttons/play.png');
		game.load.image('pause', 'img/buttons/pause.png');
		game.load.image('play_hide', 'img/buttons/play_hide.png');
		game.load.image('play_show', 'img/buttons/play_show.png');

		//	Game buttons
		//	icon
		game.load.image('menu', 'img/buttons/menu.png');
		game.load.image('volume', 'img/buttons/volume.png');
		game.load.image('volumemute', 'img/buttons/volumemute.png');
		game.load.image('reset', 'img/buttons/reset.png');
		game.load.image('help', 'img/buttons/help.png');

		//	Credits
		game.load.image('credits', 'img/credit_scene.png');

		//	Level select icons
		game.load.atlas('iconsAtlas','img/lvl_icons/lvl_icons.png','img/lvl_icons/lvl_icons.json');
		game.load.atlas('bbb','img/bbb.png','img/bbb.json',Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

		for (var i = 1; i <= totalLvls; i++)
		{
			//	Voice clips
			game.load.audio('line_'+i, 'audio/voice/line_'+i+'.ogg');
		}

		//	Sound assets
		game.load.audio('swish', 'audio/se/Swish.ogg');
		game.load.audio('click', 'audio/se/click.wav');
		game.load.audio('drop', 'audio/se/dropdown.ogg');
		game.load.audio('win', 'audio/se/win.wav');
		game.load.audio('grind_se', 'audio/se/turning.ogg');

		//	Music
		game.load.audio('song1', 'audio/bgm/storytelling-piano.ogg');
		game.load.audio('song2', 'audio/bgm/restless.ogg');
		game.load.audio('song3', 'audio/bgm/upbeat-corporate.ogg');

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
		grind_sound = game.add.audio('grind_se');

		piano_song = game.add.audio('song1');
		restless_song = game.add.audio('song2');
		corp_song = game.add.audio('song3');

		this.loadimg = game.add.image(game.width/2,game.height/2,'piece');
		this.loadimg.anchor.setTo(0.5);
		this.loadimg.tint = randomColor();

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
		if (game.cache.isSoundDecoded('song1','song2','song3','line_1','line_2'))
		{
			game.state.start('Start');
			piano_song.play('',0,song_volume,true);
		}
		this.loadimg.angle += 1;
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
		game.add.image(0,0,'bbb','background');
		game.add.image(0,0,'bbb','main_menu');

		//	Set level data
		setLevels();

		//	Start at the beginning
		start_button = game.add.button(game.width/2, game.height/2 + 48 * 2, 'bbb', startOnClick, this,
			'start','start','start');
		start_button.anchor.setTo(0.5);
		start_button.scale.setTo(3);
		start_button.tint = randomColor();

		//	Continue button, go to current active level
		if(justLoaded)
		{
			continue_button = game.add.button(game.width/2, game.height/2 + 48, 'bbb', continueOnClick, this,
				'continue','continue','continue');
			continue_button.anchor.setTo(0.5);
			continue_button.scale.setTo(3);
			continue_button.tint = randomColor();
		}

		//	Credits button takes player to credits scene
		credits_button = game.add.button(game.width/2, game.height/2 + 48 * 3, 'bbb', creditsOnClick, this,
			'credit','credit','credit');
		credits_button.anchor.setTo(0.5);
		credits_button.scale.setTo(3);
		credits_button.tint = randomColor();

		//	Level select menu button
		lvlsel_button = game.add.button(game.width/2, game.height/2 + 48 * 4, 'bbb', lvlselOnClick, this,
			'level select','level select','level select');
		lvlsel_button.anchor.setTo(0.5);
		lvlsel_button.scale.setTo(3);
		lvlsel_button.tint = randomColor();

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
		game.add.image(0,0,'bbb','background');

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
		this.lvlsprte = game.add.sprite( this.level.x + pos[currlvl].imgoffSetX, 
										this.level.y + pos[currlvl].imgoffSetY,
										'bbb',imgs[currlvl]);

		//	Add animations if any
		this.lvlsprte.animations.add('animation',animations[currlvl],6,animloop[currlvl]);
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

		//	Set appropriat music
		if(currlvl>=0 && currlvl<=5)
			music_change('song1');
		else if(currlvl>=6 && currlvl<=11)
			music_change('song2');
		else if(currlvl>=12 && currlvl<=17)
			music_change('song3');


		//game.time.advancedTiming = true;
		//this.fpstext = game.add.text(16, 16+64, 'fps = ', { fontSize: '32px', fill: '#000' });

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
//	Shows credits
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var GameOver = function(game) {};
GameOver.prototype = 
{
	create: function() 
	{
		// create assets

		//  Background
		game.stage.backgroundColor = '#eeeeee';
		game.add.image(0,0,'bbb','background');
		game.add.image(0,0,'credits');

		currlvl = 0;

		TopUI(game);

		back_button = game.add.button(game.width/2, game.height- 64, 'bbb', 
			function(button) 
			{
				//console.log(currlvl);
				fadeOut('Start',30);
			}, 
		this, 'back','back','back');
		back_button.scale.setTo(4);
		back_button.anchor.setTo(0.5,1);
		back_button.tint = randomColor();

		fadein(50);
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
	create: function() 
	{

		//  Background
		game.stage.backgroundColor = '#eeeeee';
		game.add.image(0,0,'bbb','background');

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

		// button to unlock all levels
		if(unlockedlvl != totalLvls)
		{
			unlocklvl_button = game.add.button(game.width/2, game.height - 48, 'bbb',
				function(button) 
				{
					unlockedlvl = totalLvls;
					fadeOut('lvlselect',20);
				}, this, 'unlocklvls','unlocklvls','unlocklvls');
			unlocklvl_button.anchor.setTo(0.5);
			unlocklvl_button.scale.setTo(3);
			unlocklvl_button.tint = randomColor();
		}

		TopUI(game);

		fadein(20);
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