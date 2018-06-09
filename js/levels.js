
var totalLvls = 9;

var puzzles = [totalLvls];
var pieces = [totalLvls];
var imgs = [totalLvls];
var rot = [totalLvls];
var msgs = [totalLvls];
var pos = [totalLvls];
var texts = [totalLvls];
var narr = [totalLvls];
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
	texts[lc] = "I think designing a game is just like solving a puzzle where you put blocks into a frame.   " +
				 "\nBlocks are what you have learned from your life,       " + 
				 "\nand the frame is what you want your game to be.";
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

	texts[lc] = "The game creation process is fun and exciting, because you become the creator.      " +
				"\nYou have the opportunity to transform your knowledge into something bigger than yourself. ";

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

	texts[lc] = "When you don’t know how to progress, you can ask for help.        " + 
				"\nIf you are stuck, you can click on the hint button at the \ntop-right corner of the screen.";

	imgscale[lc] = 3;
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

	texts[lc] = "When you get lost in your thoughts, it might be helpful to reset your mind.        " +
				"\nIf you mess up, you can click on the reset button at the top-left corner.";

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

	texts[lc] = "Even though making the game is so much fun,          "+
				"\nit is actually difficult to make the game fun because fun cannot be measured.";

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

	texts[lc] = "It might be overwhelming at first,    "+
				"\nbut once you realize the limitation of what you can do,      "+
				"\nWe can’t just put whatever we want into the game.";

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
    
    texts[lc] = "However, ideas are not always good. You will learn how to say ‘no’ to some ideas,"+
    			" \neven though they seem brilliant."+
    			"\nSometimes you may even have to abandon the whole plan. It can be painful.";

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
    
    texts[lc] = "When you have turned your filtered ideas into beautiful visions,    "+
    			"\nyou might think that you are half done." +
    			"\nHowever, it is just the preparation.";

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
    
    texts[lc] = "Breaking down your visions into mechanics and systems is "+
    			"\nthe first thing you need to do other than dreaming." +
    			"\It might be more difficult than you would imagine.";

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
    
    texts[lc] = "Level 10 text";

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
    
    texts[lc] = "Level 11 text";

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
    
    texts[lc] = "Level 12 text";

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
    
    texts[lc] = "Level 13 text";

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
    
    texts[lc] = "Level 14 text";

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
    
    texts[lc] = "Level 15 text";

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
    
    texts[lc] = "Level 16 text";

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
    
    texts[lc] = "Level 17 text";

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
    
    texts[lc] = "Level 18 text";

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

	texts[lc] = "Level example text";

	imgscale[lc] = 0.3;
	extrabits[lc] = 
		[[{x:3,y:0},{x:3,y:1},{x:3,y:2},{x:2,y:1},{x:2,y:2},{x:1,y:2}],
		 [{x:1,y:3},{x:2,y:3},{x:3,y:3},{x:1,y:4},{x:2,y:4},{x:3,y:4}],
		 [{x:2,y:5},{x:2,y:6},{x:3,y:6},{x:4,y:6}]];
	hintbits[lc] = [0,1];
	*/
}