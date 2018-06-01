
var totalLvls = 9;

var puzzles = [totalLvls];
var pieces = [totalLvls];
var imgs = [totalLvls];
var rot = [totalLvls];
var msgs = [totalLvls];
var pos = [totalLvls];
var texts = [totalLvls];
var imgscale = [totalLvls];
var hintbits = [totalLvls];

var extrabits = [totalLvls];

//	Sets level data
var setLevels = function() 
{
	var lc = 0;
    
	// Level 1 
	//					Puzzle location			|	Image offseet from puzzle
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	//	Puzzle points/bits
    puzzles[lc] =
	[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},
     {x:1,y:0},{x:2,y:0},{x:1,y:1},{x:2,y:1},
     {x:1,y:2},{x:2,y:2},{x:1,y:3},{x:2,y:3}];
     //	Size of each piece
    pieces[lc] = [4,4,4];
    //	Level sprite to load
	imgs[lc] = 'lvl1';
	//	Scramble rotate pieces?
	rot[lc] = true;
	//	Narrative text
	texts[lc] = ['So let’s begin. Click and drag to fill the space, right click to rotate',
				 'So let’s begin. Click and drag to fill the space, right click to rotate' +
				 '\nWhat does game development mean to you?',
				 'So let’s begin. Click and drag to fill the space, right click to rotate' +
				 '\nWhat does game development mean to you?' + 
				 '\nI think it’s just like playing a puzzle game where you put different blocks into the frame.'];
	//	Sprite scale if off 
	imgscale[lc] = 1;
	//	Extra bits to generate (example at bottom)
	extrabits[lc] = [];
	//	Index of pieces to highlight for hint
	hintbits[lc] = [0,1];

	// Level 2
    ++lc;
	pos[lc] = {x: game.width/2, y: game.height/2 - 64, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
	[{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3},
     {x:1,y:4},{x:1,y:5},{x:2,y:4},{x:2,y:5},
     {x:3,y:3},{x:4,y:3},{x:3,y:4},{x:4,y:4},
     {x:3,y:5},{x:4,y:5},{x:3,y:6},{x:4,y:6},
     {x:3,y:7},{x:3,y:8},{x:3,y:9},{x:3,y:10},
     {x:4,y:7},{x:4,y:8},{x:4,y:9},{x:4,y:10},
     {x:5,y:5},{x:5,y:6},{x:5,y:7},{x:5,y:8},
     {x:6,y:4},{x:6,y:5},{x:6,y:6},{x:6,y:7},
     {x:7,y:6},{x:8,y:6},{x:7,y:7},{x:8,y:7},
     {x:6,y:8},{x:6,y:9},{x:7,y:8},{x:7,y:9}];

    pieces[lc] = [4,4,4,4,4,4,4,4,4,4];

	imgs[lc] = 'lvl2';
	rot[lc] = true;

	texts[lc] = ['The game creation process is fun because you are the creator. ',
				'The game creation process is fun because you are the creator.' +
				'\nYou have all the freedom in the world to put whatever you want in the game.'];

	imgscale[lc] = 0.5;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];

	// Level 3
    ++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
	[{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},
     {x:1,y:1},{x:1,y:2},{x:2,y:2},
     {x:3,y:2},{x:4,y:2},{x:4,y:1},
     {x:1,y:3},{x:1,y:4},{x:1,y:5},{x:1,y:6},
     {x:2,y:3},{x:2,y:4},{x:3,y:3},{x:3,y:4},
     {x:2,y:6},{x:3,y:6},{x:4,y:6},{x:5,y:6},
     {x:4,y:4},{x:4,y:5},{x:5,y:5},
     {x:5,y:4},{x:5,y:3},{x:6,y:3},
     {x:6,y:5},{x:6,y:6},{x:7,y:6}];

    pieces[lc] = [4,3,3,4,4,4,3,3,3];

	imgs[lc] = 'lvl3';
	rot[lc] = true;

	texts[lc] = ['These blocks are like the tools and materials you use in game development.',
				'These blocks are like the tools and materials you use in game development.' + 
				'\nSometimes they are meant to be modified.'];

	imgscale[lc] = 0.8;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
    
    // Level 4
    ++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
	[{x:0,y:0},{x:0,y:1},{x:1,y:0},
     {x:0,y:2},{x:0,y:3},{x:0,y:4},{x:0,y:5},
     {x:1,y:3},{x:1,y:4},{x:2,y:4},
     {x:2,y:3},{x:3,y:3},{x:4,y:3},{x:3,y:4},
     {x:5,y:3},{x:5,y:4},{x:4,y:4},
     {x:0,y:6},{x:0,y:7},{x:1,y:7},
     {x:2,y:7},{x:3,y:7},{x:4,y:7},{x:5,y:7},
     {x:4,y:5},{x:4,y:6},{x:5,y:6},
     {x:6,y:6},{x:7,y:6},{x:6,y:7},
     {x:7,y:7},{x:8,y:7},{x:8,y:6},
     {x:8,y:5},{x:8,y:4},{x:8,y:3},{x:8,y:2},
     {x:8,y:1},{x:8,y:0},{x:7,y:0},
     {x:6,y:0},{x:6,y:1},{x:5,y:0},
     {x:4,y:0},{x:3,y:0},{x:3,y:1}];

    pieces[lc] = [3,4,3,4,3,3,4,3,3,3,4,3,3,3];

	imgs[lc] = 'lvl4';
	rot[lc] = true;

	texts[lc] = ['If you mess up, you can click the reset button at the top of the screen.',
				'If you mess up, you can click the reset button at the top of the screen.' +
				'\nWhen you get lost in your thoughts, it might be helpful to reset your mind.'];

	imgscale[lc] = 0.45;
	extrabits[lc] = [];
	hintbits[lc] = [2,3,4];

	// Level 5
    ++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
	[{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},
     {x:0,y:1},{x:0,y:2},{x:1,y:1},
     {x:1,y:2},{x:2,y:2},{x:2,y:1},{x:3,y:2},
     {x:3,y:1},{x:4,y:1},{x:4,y:2},
     {x:5,y:2},{x:5,y:1},{x:6,y:1},
     {x:7,y:1},{x:7,y:2},{x:6,y:2},
     {x:1,y:3},{x:2,y:3},{x:1,y:4},{x:2,y:4},
     {x:3,y:3},{x:3,y:4},{x:4,y:3},{x:4,y:4},
     {x:5,y:3},{x:6,y:3},{x:5,y:4},
     {x:6,y:4},{x:7,y:4},{x:7,y:3},
     {x:3,y:6},{x:4,y:6},{x:4,y:5},
     {x:6,y:6},{x:7,y:6},{x:7,y:5},
     {x:8,y:2},{x:8,y:3},{x:9,y:2},
     {x:9,y:3},{x:10,y:3},{x:10,y:2},
     {x:11,y:2},{x:12,y:2},{x:13,y:2},{x:14,y:2}];

    pieces[lc] = [4,3,4,3,3,3,4,4,3,3,3,3,3,3,4];

	imgs[lc] = 'lvl5';
	rot[lc] = true;

	texts[lc] = ['It might seem overwhelming at first.',
				'It might seem overwhelming at first.'+
				'\nHowever, some blocks are unique and can only be placed at certain area.',
				'It might seem overwhelming at first.'+
				'\nHowever, some blocks are unique and can only be placed at certain area.'+
				'\nIt will be much easier once you learn the limitation.'];

	imgscale[lc] = 0.54;
	extrabits[lc] = 
		[];
	hintbits[lc] = [0,1];

	// Level 6
    ++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:3,y:2},
     {x:4,y:0},{x:4,y:1},{x:4,y:2},{x:4,y:3},
     {x:4,y:4},{x:4,y:5},{x:5,y:5},{x:3,y:5},
     {x:3,y:4},{x:3,y:3},{x:2,y:3},{x:1,y:3},
     {x:1,y:4},{x:1,y:5},{x:2,y:4},{x:2,y:5},
     {x:6,y:0},{x:7,y:0},{x:6,y:1},
     {x:7,y:1},{x:7,y:2},{x:7,y:3},{x:6,y:2},
     {x:6,y:3},{x:6,y:4},{x:7,y:4},
     {x:9,y:0},{x:9,y:1},{x:9,y:2},{x:9,y:3},
     {x:9,y:4},{x:9,y:5},{x:8,y:5},
     {x:11,y:0},{x:12,y:0},{x:12,y:1},{x:12,y:2},
     {x:11,y:3},{x:11,y:4},{x:11,y:5},{x:12,y:5}];

    pieces[lc] = [4,4,4,4,4,3,4,3,4,3,4,4];

	imgs[lc] = 'lvl6';
	rot[lc] = true;

	texts[lc] = ['Even though making the game is so much fun,'+
				'\nit is actually difficult to make the game fun.'];

	imgscale[lc] = 0.8;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];

    // Level 7
    ++lc;
    pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:0,y:2},{x:0,y:1},{x:1,y:1},{x:2,y:1},
     {x:2,y:0},{x:3,y:0},{x:3,y:1},
     {x:4,y:1},{x:5,y:1},{x:6,y:1},{x:6,y:2},
     {x:1,y:2},{x:1,y:3},{x:2,y:2},{x:3,y:2},{x:3,y:3},
     {x:2,y:3},{x:2,y:4},{x:1,y:4},{x:3,y:4},
     {x:1,y:5},{x:1,y:6},{x:2,y:5},{x:3,y:5},{x:3,y:6},
     {x:2,y:6},{x:2,y:7},{x:1,y:7},{x:3,y:7},
     {x:4,y:2},{x:5,y:2},{x:4,y:3},{x:4,y:4},
     {x:5,y:3},{x:5,y:4},{x:5,y:5},{x:4,y:5},
     {x:4,y:6},{x:4,y:7},{x:5,y:6},{x:5,y:7}];

    pieces[lc] = [4,3,4,5,4,5,4,4,4,4];

    imgs[lc] = 'lvl7';
    rot[lc] = true;
    
    texts[lc] = ['You will eventually learn how to say ‘no’ to some of your ideas,\neven though they seem brilliant at first.',
    			'You will eventually learn how to say ‘no’ to some of your ideas, \neven though they seem brilliant at first.'+
    			'\nSometimes you may even have to abandon the whole plan. It hurts'];

	imgscale[lc] = 1;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
    
    // Level 8
    ++lc;
    pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:0,y:1},{x:0,y:2},{x:0,y:3},{x:1,y:3},
     {x:2,y:3},{x:2,y:4},{x:1,y:4},{x:3,y:4},
     {x:1,y:1},{x:1,y:2},{x:2,y:2},{x:3,y:2},
     {x:1,y:0},{x:2,y:0},{x:3,y:0},{x:2,y:1},
     {x:4,y:0},{x:4,y:1},{x:4,y:2},{x:3,y:1},
     {x:3,y:3},{x:4,y:3},{x:5,y:3},{x:5,y:4},
     {x:5,y:2},{x:5,y:1},{x:6,y:1},{x:7,y:1},
     {x:6,y:2},{x:6,y:3},{x:6,y:4},{x:7,y:3},
     {x:7,y:2},{x:8,y:2},{x:8,y:3},{x:8,y:4},
     {x:9,y:2},{x:10,y:2},{x:9,y:3},
     {x:10,y:3},{x:10,y:4},{x:9,y:4},{x:10,y:5},
     {x:9,y:5},{x:9,y:6},{x:10,y:6},
     {x:11,y:2},{x:12,y:2},{x:13,y:2},{x:14,y:2},
     {x:4,y:4},{x:4,y:5},{x:4,y:6},{x:3,y:6},
     {x:7,y:4},{x:7,y:5},{x:7,y:6},{x:6,y:6}];

    pieces[lc] = [4,4,4,4,4,4,4,4,4,3,4,3,4,4,4];

    imgs[lc] = 'lvl8';
    rot[lc] = true;
    
    texts[lc] = ['Level 8 text',
				 'Example line 2'];

	imgscale[lc] = 0.54;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
    
    
    // Level 9
    ++lc;
    pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:0,y:2},{x:1,y:2},{x:0,y:3},
     {x:2,y:0},{x:2,y:1},{x:3,y:0},
     {x:3,y:1},{x:3,y:2},{x:2,y:2},{x:3,y:3},
     {x:4,y:2},{x:5,y:2},{x:5,y:1},
     {x:2,y:3},{x:2,y:4},{x:2,y:5},{x:3,y:4},
     {x:1,y:5},{x:1,y:6},{x:0,y:6},
     {x:3,y:5},{x:4,y:5},{x:4,y:6},{x:4,y:7},
     
     {x:7,y:0},{x:7,y:1},{x:8,y:0},{x:9,y:0},
     {x:10,y:0},{x:10,y:1},{x:10,y:2},{x:9,y:1},
     {x:8,y:1},{x:8,y:2},{x:8,y:3},{x:7,y:2},{x:9,y:2},
     {x:9,y:3},{x:9,y:4},{x:9,y:5},{x:8,y:4},
     {x:8,y:5},{x:7,y:5},{x:7,y:6},{x:7,y:7},
     {x:10,y:5},{x:11,y:5},{x:11,y:6},
     
     {x:13,y:0},{x:14,y:0},{x:14,y:1},
     {x:13,y:1},{x:13,y:2},{x:14,y:2},
     {x:15,y:2},{x:16,y:2},{x:15,y:3},
     {x:17,y:2},{x:18,y:2},{x:17,y:3},
     {x:13,y:3},{x:13,y:4},{x:14,y:3},
     {x:16,y:3},{x:16,y:4},{x:15,y:4},{x:17,y:4},
     {x:14,y:4},{x:14,y:5},{x:13,y:5},{x:15,y:5},{x:14,y:6},
     {x:13,y:6},{x:13,y:7},{x:13,y:8},{x:12,y:8},
     {x:15,y:6},{x:16,y:6},{x:16,y:7},{x:16,y:8}];

    pieces[lc] = [3,3,4,3,4,3,4, 4,4,5,4,4,3, 3,3,3,3,3,4,5,4,4];

    imgs[lc] = 'lvl9';
    rot[lc] = true;
    
    texts[lc] = ['Level 9 text',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];

    /*
    // Level 10
    ++lc;
    pos[lc] = {x: game.width/2 - 224, y: game.height/2 - 160, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[];

    pieces[lc] = [];

    imgs[lc] = 'lvl10';
    rot[lc] = true;
    
    texts[lc] = ['Level 10 text',
				 'Example line 2'];

	imgscale[lc] = 1.1;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];

    // Level 11
    ++lc;
    pos[lc] = {x: game.width/2 - 160, y: game.height/2 - 160, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[];

    pieces[lc] = [];

    imgs[lc] = 'lvl11';
    rot[lc] = true;
    
    texts[lc] = ['Level 11 text',
				 'Example line 2'];

	imgscale[lc] = 0.66;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];

    // Level 12
    ++lc;
    pos[lc] = {x: game.width/2 - 192, y: game.height/2 - 160, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[];

    pieces[lc] = [];

    imgs[lc] = 'lvl12';
    rot[lc] = true;
    
    texts[lc] = ['Level 12 text',
				 'Example line 2'];

	imgscale[lc] = 0.5;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
    
    // Level 13
    ++lc;
    pos[lc] = {x: game.width/2 - 192, y: game.height/2 - 160, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[];

    pieces[lc] = [];

    imgs[lc] = 'lvl12';
    rot[lc] = true;
    
    texts[lc] = ['Level 13 text',
				 'Example line 2'];

	imgscale[lc] = 0.5;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
    
    // Level 14
    ++lc;
    pos[lc] = {x: game.width/2 - 192, y: game.height/2 - 160, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[];

    pieces[lc] = [];

    imgs[lc] = 'lvl12';
    rot[lc] = true;
    
    texts[lc] = ['Level 14 text',
				 'Example line 2'];

	imgscale[lc] = 0.5;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
    
    // Level 15
    ++lc;
    pos[lc] = {x: game.width/2 - 192, y: game.height/2 - 192, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[];

    pieces[lc] = [];

    imgs[lc] = 'lvl15';
    rot[lc] = true;
    
    texts[lc] = ['Level 15 text',
				 'Example line 2'];

	imgscale[lc] = 0.66;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
    
    // Level 16
    ++lc;
    pos[lc] = {x: game.width/2 - 192, y: game.height/2 - 192, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[];

    pieces[lc] = [];

    imgs[lc] = 'lvl15';
    rot[lc] = true;
    
    texts[lc] = ['Level 16 text',
				 'Example line 2'];

	imgscale[lc] = 0.66;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
    
    // Level 17
    ++lc;
    pos[lc] = {x: game.width/2 - 160, y: game.height/2 - 160, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[];

    pieces[lc] = [];

    imgs[lc] = 'lvl17';
    rot[lc] = true;
    
    texts[lc] = ['Level 17 text',
				 'Example line 2'];

	imgscale[lc] = 0.4;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
    
    // Level 18
    ++lc;
    pos[lc] = {x: game.width/2 - 160, y: game.height/2 - 160, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[];

    pieces[lc] = [];

    imgs[lc] = 'lvl17';
    rot[lc] = true;
    
    texts[lc] = ['Level 18 text',
				 'Example line 2'];

	imgscale[lc] = 0.4;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
    */
    
	/*
	//	LEVEL 1
	puzzles[1] =
		[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:2},{x:1,y:2},{x:0,y:3},
		 {x:3,y:1},{x:2,y:2},{x:1,y:3},{x:2,y:3},{x:3,y:2},{x:3,y:3},
		 {x:4,y:0},{x:4,y:1},{x:4,y:2},{x:5,y:1},{x:5,y:2},{x:6,y:2},
		 {x:0,y:4},{x:1,y:4},{x:2,y:4},{x:1,y:5},{x:2,y:5},{x:2,y:6},
		 {x:4,y:3},{x:5,y:3},{x:6,y:3},{x:3,y:4},{x:4,y:4},{x:5,y:4},{x:3,y:5},{x:4,y:5},{x:3,y:6}];

	pieces[1] = [10,6,6,6,9];

	imgs[lc] = 'lvl1';
	rot[lc] = true;

	texts[lc] = ['Click and drag pieces, spacebar to rotate',
				 'Example line 2'];

	imgscale[lc] = 0.3;
	extrabits[lc] = 
		[[{x:3,y:0},{x:3,y:1},{x:3,y:2},{x:2,y:1},{x:2,y:2},{x:1,y:2}],
		 [{x:1,y:3},{x:2,y:3},{x:3,y:3},{x:1,y:4},{x:2,y:4},{x:3,y:4}],
		 [{x:2,y:5},{x:2,y:6},{x:3,y:6},{x:4,y:6}]];
	hintbits[lc] = [0,1];
	*/
}