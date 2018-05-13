//	Game by Special Unit 28C
//	Design: Yuming Li
//	Art: Dongbo(Bob)
//	Programming: Jeremy Green
//	Sound: Yuming Li

// init game
var game = new Phaser.Game(800, 600, Phaser.AUTO);

// sound variables
var click_sound;
var win_sound;
var drop_sound;
var piano_song;

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
		game.load.image('piece', 'img/piece.png');
		game.load.image('highlight', 'img/selection.png');
		game.load.image('shell', 'img/shell.png');

		//	Menu items
		game.load.image('musicOn', 'img/volume.png');
		game.load.image('musicOff', 'img/volume(mute).png');
		game.load.image('reset', 'img/reset.png');
		game.load.image('exit', 'img/exit.png');

		//	Game sprites
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
			game.state.start('Play');
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
var currlvl = 0;

var PlayState = function(game) {};
PlayState.prototype = 
{
	create: function() 
	{
		setLevels();
		// create assets
		game.stage.backgroundColor = '#172d3b';
		
		//	Music button
		music_button = game.add.button(4, 4, 'musicOff', musicOnClick, this);
		music_button.scale.setTo(0.3);

		this.level = new Puzzle(game, game.width/2 - 64, game.height/2 - 32, 
			pieces[currlvl],puzzles[currlvl],rot[currlvl]);

		this.lvlsprte = game.add.image(64, game.height/2 - 32,imgs[currlvl]);
		this.lvlsprte.alpha = 0;
		this.lvlsprte.scale.setTo(0.3);

		this.wintext = game.add.text(16, 48, '', { fontSize: '32px', fill: '#fff' });
		this.controls = game.add.text(16, game.height - 48, 
			'Click and drag pieces, spacebar to rotate', { fontSize: '16px', fill: '#fff' });
		//game.time.advancedTiming = true;
		//this.fpstext = game.add.text(16, 16, 'fps = ', { fontSize: '32px', fill: '#fff' });
		
	},

	update: function() 
	{
		// run game loop

		//this.fpstext.text = 'fps = ' + game.time.fps;

		if (victory) 
		{
			this.wintext.text = 'You win! Click for next level';
			win_sound.play('',0,0.5,false);
			victory = false;
			this.waitfornextclick = true;
			this.lvlsprte.alpha = 1;
		}
		else
		{
			this.level.update();
		}
		if(game.input.activePointer.leftButton.isDown && this.waitfornextclick)
		{
			this.waitfornextclick = false;
			currlvl++;
			if (currlvl<4) 
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
		currlvl = 0;
		setLevels();
		// create assets
		this.wintext = game.add.text(16, 48, 
			'Congradulations, you have beaten the demo\nClick to start again', { fontSize: '32px', fill: '#fff' });
	},

	update: function() 
	{
		// run game loop
		if(game.input.activePointer.leftButton.isDown)
		{
			game.state.start('Play');
		}

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
game.state.add('GameOver',GameOver);

game.state.start('Boot');