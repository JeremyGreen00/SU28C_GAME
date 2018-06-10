
var totalLvls = 18;

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
var animations = [totalLvls];
var animloop = [totalLvls];

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
	imgs[lc] = 'sprite1';
	//	Scramble rotate pieces?
	rot[lc] = true;
	//	Narrative text
	texts[lc] = "   I think designing a game is just like solving a puzzle where you put blocks into a frame." +
				"\nBlocks are what you have learned from your life, and the frame is what you want your" + 
				"\ngame to be.";
	//	Sprite scale if off 
	imgscale[lc] = 1;
	//	Extra bits to generate (example at bottom)
	extrabits[lc] = [];
	//	Index of pieces to highlight for hint
	hintbits[lc] = [0];
	animations[lc] = [imgs[lc]];
	animloop[lc] = false;

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

	imgs[lc] = 'level 2 frame 1';
	rot[lc] = true;

	texts[lc] = "   The game creation process is fun and exciting, because you become the creator. You" +
				"\nhave the opportunity to transform your knowledge into something bigger than yourself. ";

	imgscale[lc] = 0.5;
	extrabits[lc] = [];
	hintbits[lc] = [2,3];
	animations[lc] = ['level 2 frame 1','level 2 frame 2','level 2 frame 3','level 2 frame 4',
					'level 2 frame 5','level 2 frame 6','level 2 frame 7'];
	animloop[lc] = true;

	// Level 3
    ++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 24, imgoffSetY: 0};
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

	imgs[lc] = 'level 3 frame 1';
	rot[lc] = true;

	texts[lc] = "   When you don’t know how to progress, you can ask for help. If you are stuck, you can" + 
				"\nclick on the hint button at the top-right corner of the screen.";

	imgscale[lc] = 3;
	extrabits[lc] = [];
	hintbits[lc] = [0,1,2];
	animations[lc] =  ['level 3 frame 1','level 3 frame 2','level 3 frame 3','level 3 frame 4',
					'level 3 frame 5','level 3 frame 6','level 3 frame 5','level 3 frame 4',
					'level 3 frame 3','level 3 frame 2','level 3 frame 1'];
	animloop[lc] = true;
    
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

	imgs[lc] = 'level 4 frame 1';
	rot[lc] = true;

	texts[lc] = "   When you get lost in your thoughts, it might be helpful to reset your mind. If you" +
				"\nmess up, you can click on the reset button at the top-left corner.";

	imgscale[lc] = 0.45 * 12;
	extrabits[lc] = [];
	hintbits[lc] = [2,3,4];
	animations[lc] = ['level 4 frame 1','level 4 frame 2','level 4 frame 3','level 4 frame 4',
					'level 4 frame 5','level 4 frame 6','level 4 frame 7','level 4 frame 8'];
	animloop[lc] = true;

	// Level 5
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

	imgs[lc] = 'sprite5';
	rot[lc] = true;

	texts[lc] = "   Even though making the game is so much fun, it is actually difficult to make"+
				"\nthe game fun because fun cannot be measured.";

	imgscale[lc] = 0.8 * 19.07;
	extrabits[lc] = [];
	hintbits[lc] = [4];
	animations[lc] = [imgs[lc]];
	animloop[lc] = false;

	// Level 6
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

	imgs[lc] = 'sprite6';
	rot[lc] = true;
    
    texts[lc] = "   It might be overwhelming at first, but once you realize the limitation of what you "+
				"\ncan do, it will become much easier. We can’t just put whatever we want into the game.";

	imgscale[lc] = 0.54 * 12.05;
	extrabits[lc] = 
		[];
	hintbits[lc] = [1,2,3];
	animations[lc] = [imgs[lc]];
	animloop[lc] = false;

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

    imgs[lc] = 'sprite7';
    rot[lc] = true;
    
    texts[lc] = "   Ideas are not always good. You will learn how to say ‘no’ to some ideas, even though"+
    			"\nthey seem brilliant. Sometimes you may even have to abandon the whole plan. It can be"+
    			"\npainful.";

	imgscale[lc] = 10.66;
	extrabits[lc] = [];
	hintbits[lc] = [0,1];
	animations[lc] = [imgs[lc]];
	animloop[lc] = false;
    
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

    imgs[lc] = 'sprite8';
    rot[lc] = true;
    
    texts[lc] = "   When you have turned your filtered ideas into beautiful visions, you might think that" +
    			"\nyou are half done. However, it is just the preparation.";

	imgscale[lc] = 0.54 * 2;
	extrabits[lc] = [];
	hintbits[lc] = [9,10,11];
	animations[lc] = [imgs[lc]];
	animloop[lc] = false;
    
    
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

    imgs[lc] = 'sprite9';
    rot[lc] = true;
    
    texts[lc] = "   Breaking down your visions into mechanics and systems is the first thing you need to do."+
    			"\nIt might be more difficult than you would imagine.";

	imgscale[lc] = 1;
	extrabits[lc] = [];
	hintbits[lc] = [9,19];
	animations[lc] = [imgs[lc]];
	animloop[lc] = false;

    
    // Level 10
    ++lc;
    pos[lc] = {x: game.width/2, y: game.height/2 - 64, imgoffSetX: 0, imgoffSetY: 16};
    puzzles[lc] =
	[{x:1,y:3},{x:1,y:4},{x:2,y:3},{x:3,y:3},{x:3,y:4},
     {x:2,y:4},{x:2,y:5},{x:1,y:5},{x:3,y:5},{x:2,y:6},
     {x:1,y:6},{x:1,y:7},{x:2,y:7},{x:3,y:7},{x:3,y:6},
     {x:0,y:7},{x:0,y:8},{x:1,y:8},{x:0,y:9},
     {x:1,y:9},{x:1,y:10},{x:2,y:10},
     {x:2,y:9},{x:2,y:8},{x:3,y:8},
     {x:3,y:9},{x:3,y:10},{x:4,y:10},
     {x:4,y:9},{x:5,y:9},{x:6,y:9},{x:6,y:8},
     {x:7,y:8},{x:8,y:8},{x:8,y:7},
     {x:9,y:7},{x:10,y:7},{x:10,y:6},
     {x:11,y:6},{x:11,y:7},{x:11,y:8},{x:10,y:8},
     {x:10,y:9},{x:10,y:10},{x:9,y:10},
     {x:11,y:9},{x:11,y:10},{x:12,y:10},
     {x:12,y:6},{x:12,y:5},{x:13,y:5},{x:14,y:5},{x:14,y:4},
     {x:15,y:4},{x:16,y:4},{x:16,y:3},
     {x:17,y:3},{x:18,y:3},{x:18,y:2},
     {x:18,y:1},{x:18,y:0},{x:19,y:0},
     {x:19,y:1},{x:19,y:2},{x:19,y:3},{x:20,y:3}];

    pieces[lc] = [5,5,5,4,3,3,3,4,3,3,4,3,3,5,3,3,3,4];

    imgs[lc] = 'level 10 frame 1';
    rot[lc] = true;
    
    texts[lc] = "   You also have to balance your game. How fast can your character run? How high can your" +
                "\ncharacter jump? How much damage can your character deal?";

	imgscale[lc] = 0.8;
	extrabits[lc] = [];
	hintbits[lc] = [0,1,2];
	animations[lc] = ['level 10 frame 1','level 10 frame 2','level 10 frame 3','level 10 frame 4',
					'level 10 frame 5','level 10 frame 6','level 10 frame 7','level 10 frame 7'
					,'level 10 frame 7','level 10 frame 7','level 10 frame 7','level 10 frame 7'
					,'level 10 frame 7','level 10 frame 7','level 10 frame 7','level 10 frame 7'];
	animloop[lc] = false;

    // Level 11
    ++lc;
    pos[lc] = {x: game.width/2, y: game.height/2 - 32, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:2,y:0},{x:2,y:1},{x:2,y:2},{x:2,y:3},
     {x:2,y:4},{x:1,y:4},{x:2,y:5},
     {x:1,y:5},{x:0,y:5},{x:0,y:6},
     {x:1,y:6},{x:1,y:7},{x:1,y:8},{x:1,y:9},
     {x:2,y:6},{x:3,y:6},{x:4,y:6},{x:3,y:5},
     {x:4,y:5},{x:5,y:5},{x:5,y:6},
     {x:6,y:6},{x:6,y:5},{x:7,y:5},{x:8,y:5},{x:8,y:4},
     {x:7,y:4},{x:7,y:3},{x:7,y:2},{x:8,y:3},
     {x:8,y:2},{x:9,y:2},{x:9,y:3},
     {x:10,y:3},{x:10,y:4},{x:9,y:4},
     {x:9,y:5},{x:9,y:6},{x:8,y:6},{x:7,y:6},{x:7,y:7},
     {x:7,y:8},{x:7,y:9},{x:8,y:9},
     {x:8,y:8},{x:8,y:7},{x:9,y:7},
     {x:10,y:6},{x:10,y:7},{x:10,y:8},{x:10,y:9},
     {x:10,y:5},{x:11,y:5},{x:11,y:6},
     {x:12,y:6},{x:12,y:7},{x:12,y:8},{x:12,y:9}];

    pieces[lc] = [4,3,3,4,4,3,5,4,3,3,5,3,3,4,3,4];

    imgs[lc] = 'level 11 frame 1';
    rot[lc] = true;
    
    texts[lc] = "   Eventually, you will run out of energy and you might question yourself: 'should I give up," +
                "\nwas it the right call to even start, or am I just wasting my time?' After all, exhaustion is" +
                "\none of the greatest enemies of game designers.";

	imgscale[lc] = 0.7;
	extrabits[lc] = [];
	hintbits[lc] = [6,10];
	animations[lc] = ['level 11 frame 1','level 11 frame 2','level 11 frame 3','level 11 frame 4',
					 'level 11 frame 5','level 11 frame 6','level 11 frame 7','level 11 frame 6'
					,'level 11 frame 7','level 11 frame 6','level 11 frame 7','level 11 frame 5'
					,'level 11 frame 4','level 11 frame 3','level 11 frame 2','level 11 frame 1'];
	animloop[lc] = true;

    // Level 12
    ++lc;
    pos[lc] = {x: game.width/2, y: game.height/2 - 32, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:2,y:1},{x:2,y:2},{x:2,y:3},{x:2,y:4},
     {x:3,y:2},{x:4,y:2},{x:3,y:3},{x:4,y:3},
     {x:3,y:4},{x:3,y:5},{x:2,y:5},{x:3,y:6},
     {x:2,y:6},{x:1,y:6},{x:2,y:7},{x:2,y:8},
     {x:1,y:8},{x:0,y:8},{x:1,y:7},
     {x:3,y:8},{x:3,y:7},{x:4,y:7},{x:5,y:7},{x:5,y:6},
     {x:7,y:2},{x:7,y:1},{x:7,y:0},{x:8,y:0},
     {x:6,y:2},{x:6,y:3},{x:7,y:3},{x:8,y:3},{x:8,y:2},
     {x:8,y:4},{x:8,y:5},{x:7,y:5},{x:9,y:5},{x:8,y:6},
     {x:3,y:1},{x:5,y:2},{x:6,y:1},{x:6,y:0},{x:9,y:3},{x:7,y:4},{x:6,y:4},{x:5,y:4},{x:4,y:4},
     {x:4,y:5},{x:5,y:5},{x:6,y:5},{x:4,y:6},{x:6,y:6},{x:7,y:6},{x:9,y:6},{x:10,y:6},
     {x:6,y:7},{x:7,y:7},{x:8,y:7},{x:9,y:7},{x:10,y:7},{x:4,y:8},{x:5,y:8},{x:6,y:8},{x:7,y:8},{x:8,y:8},{x:9,y:8},{x:10,y:8}];

    pieces[lc] = [4,4,4,4,3,5,4,5,5];

    imgs[lc] = 'level 12 frame 0';
    rot[lc] = true;
    
    texts[lc] = "   If this is a class assignment or an assigned job, you won’t be given too much time to rest." +
                "\nSometimes, you must keep grinding your brain even though you are not at your peak" + 
                "\ncondition.";

	imgscale[lc] = 0.38;
	extrabits[lc] = [];
	hintbits[lc] = [];
	animations[lc] = ['level 12 frame 0','level 12 frame 0','level 12 frame 0','level 12 frame 0',
					'level 12 frame 0','level 12 frame 0','level 12 frame 0','level 12 frame 0',
					'level 12 frame 0','level 12 frame 0','level 12 frame 0','level 12 frame 0',
					'level 12 frame 0','level 12 frame 1','level 12 frame 2','level 12 frame 3',
					'level 12 frame 4','level 12 frame 5','level 12 frame 6','level 12 frame 7'
					,'level 12 frame 7','level 12 frame 7','level 12 frame 7','level 12 frame 7'
					,'level 12 frame 7','level 12 frame 7','level 12 frame 7','level 12 frame 7'
					,'level 12 frame 7','level 12 frame 7','level 12 frame 7','level 12 frame 7'];
	animloop[lc] = false;
    
    
    // Level 13
    ++lc;
    pos[lc] = {x: game.width/2, y: game.height/2 - 32, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:1,y:0},{x:1,y:1},{x:0,y:1},{x:2,y:1},
     {x:0,y:2},{x:1,y:2},{x:1,y:3},{x:2,y:2},
     {x:3,y:1},{x:4,y:1},{x:3,y:2},
     {x:4,y:2},{x:5,y:2},{x:5,y:1},
     {x:6,y:1},{x:7,y:1},{x:7,y:0},{x:8,y:1},
     {x:8,y:2},{x:7,y:2},{x:6,y:2},{x:7,y:3},
     {x:6,y:3},{x:6,y:4},{x:5,y:3},
     {x:5,y:4},{x:4,y:4},{x:4,y:3},{x:3,y:4},
     {x:3,y:3},{x:2,y:3},{x:2,y:4},
     {x:1,y:4},{x:1,y:5},{x:2,y:5},
     {x:3,y:5},{x:4,y:5},{x:5,y:5},{x:4,y:6},
     {x:6,y:5},{x:7,y:5},{x:7,y:4},
     {x:7,y:6},{x:6,y:6},{x:6,y:7},{x:5,y:6},
     {x:7,y:7},{x:7,y:8},{x:6,y:8},
     {x:5,y:8},{x:5,y:7},{x:4,y:8},
     {x:4,y:7},{x:3,y:7},{x:3,y:8},
     {x:3,y:6},{x:2,y:6},{x:1,y:6},{x:2,y:7},
     {x:2,y:8},{x:1,y:8},{x:1,y:7}];

    pieces[lc] = [4,4,3,3,4,4,3,4,3,3,4,3,4,3,3,3,4,3];

    imgs[lc] = 'sprite13';
    rot[lc] = true;
    
    texts[lc] = "   The point of this game is to help you avoid exhaustion. It’s difficult, but possible. We have" +
                "\nsome tips for you.";

	imgscale[lc] = 0.48 * 12;
	extrabits[lc] = [];
	hintbits[lc] = [0,4];
	animations[lc] = [imgs[lc]];
	animloop[lc] = true;
    
    // Level 14
    ++lc;
    pos[lc] = {x: game.width/2, y: game.height/2 - 64, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:1,y:2},{x:1,y:3},{x:2,y:3},{x:3,y:3},{x:3,y:2},
     {x:4,y:3},{x:5,y:3},{x:5,y:2},{x:5,y:4},
     {x:1,y:4},{x:1,y:5},{x:1,y:6},{x:2,y:5},
     {x:3,y:5},{x:4,y:5},{x:4,y:6},
     {x:3,y:6},{x:2,y:6},{x:2,y:7},
     {x:2,y:8},{x:1,y:8},{x:1,y:7},
     {x:0,y:9},{x:0,y:10},{x:0,y:11},{x:0,y:12},
     {x:1,y:12},{x:2,y:12},{x:3,y:12},{x:3,y:11},
     {x:3,y:10},{x:3,y:9},{x:4,y:9},{x:5,y:9},{x:5,y:10},
     {x:5,y:11},{x:5,y:12},{x:6,y:12},{x:7,y:12},
     {x:8,y:12},{x:8,y:11},{x:8,y:10},{x:8,y:9},
     {x:7,y:8},{x:6,y:8},{x:6,y:7},{x:6,y:6},{x:7,y:6},
     {x:7,y:7},{x:8,y:7},{x:8,y:6},
     {x:8,y:5},{x:8,y:4},{x:7,y:5},{x:6,y:5},
     {x:8,y:2},{x:9,y:2},{x:9,y:1},
     {x:10,y:0},{x:10,y:1},{x:10,y:2},{x:10,y:3},
     {x:11,y:1},{x:11,y:2},{x:12,y:2},
     {x:11,y:3},{x:11,y:4},{x:10,y:4},{x:9,y:4},{x:9,y:3},
     {x:12,y:4},{x:12,y:5},{x:12,y:6},{x:11,y:5},
     {x:11,y:6},{x:11,y:7},{x:12,y:7},
     {x:10,y:8},{x:9,y:8},{x:10,y:9},{x:10,y:10},
     {x:10,y:11},{x:10,y:12},{x:11,y:12},{x:12,y:12},
     {x:12,y:11},{x:11,y:11},{x:12,y:10},{x:12,y:9}];

    pieces[lc] = [5,4,4,3,3,3,4,4,5,4,4,5,3,4,3,4,3,5,4,3,4,4,4];

    imgs[lc] = 'level 14 frame 1';
    rot[lc] = true;
    
    texts[lc] = "   1st: Limit the scope of your game. Inexperienced designers tend to make games that is" +
                "\nunreasonably big. In fact, a small, polished game is usually better than a large, incomplete" +
                "\none.";

	imgscale[lc] = 0.71 * 12;
	extrabits[lc] = [];
	hintbits[lc] = [0,8,11,17];
	animations[lc] = ['level 14 frame 1','level 14 frame 2','level 14 frame 3','level 14 frame 4',
					'level 14 frame 5','level 14 frame 6','level 14 frame 7','level 14 frame 8',
					'level 14 frame 9','level 14 frame 10','level 14 frame 11'];
	animloop[lc] = true;
    
    // Level 15
    ++lc;
    pos[lc] = {x: game.width/2, y: game.height/2 - 64, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:2,y:0},{x:2,y:1},{x:1,y:1},{x:3,y:1},
     {x:1,y:2},{x:2,y:2},{x:3,y:2},{x:2,y:3},
     {x:1,y:4},{x:1,y:5},{x:0,y:5},
     {x:2,y:4},{x:3,y:4},{x:2,y:5},
     {x:3,y:5},{x:3,y:6},{x:4,y:5},
     {x:1,y:6},{x:2,y:6},{x:2,y:7},{x:2,y:8},{x:3,y:8},
     {x:1,y:8},{x:1,y:9},{x:2,y:9},{x:3,y:9},
     {x:0,y:9},{x:0,y:10},{x:1,y:10},
     {x:2,y:10},{x:3,y:10},{x:4,y:10},{x:4,y:9},
     {x:9,y:1},{x:10,y:1},{x:10,y:0},
     {x:11,y:1},{x:11,y:2},{x:10,y:2},{x:9,y:2},
     {x:10,y:3},{x:10,y:4},{x:11,y:4},
     {x:9,y:4},{x:9,y:5},{x:8,y:5},
     {x:10,y:5},{x:10,y:6},{x:10,y:7},{x:9,y:6},
     {x:11,y:6},{x:11,y:5},{x:12,y:5},
     {x:10,y:8},{x:9,y:8},{x:9,y:9},{x:11,y:8},{x:11,y:9},
     {x:8,y:9},{x:8,y:10},{x:9,y:10},
     {x:10,y:9},{x:10,y:10},{x:11,y:10},{x:12,y:10},{x:12,y:9}];

    pieces[lc] = [4,4,3,3,3,5,4,3,4,3,4,3,3,4,3,5,3,5];

    imgs[lc] = 'sprite15';
    rot[lc] = true;
    
    texts[lc] = "   2nd: Schedule high-priority tasks. Rearrange your production plan so that you have all" +
                "\nthe important tasks on top. Don’t spend a whole day fixing a minor bug in the middle of" +
                "\na sprint.";

	imgscale[lc] = 0.66 * 11;
	extrabits[lc] = [];
	hintbits[lc] = [5,15];
	animations[lc] = [imgs[lc]];
	animloop[lc] = false;
    
    // Level 16
    ++lc;
    pos[lc] = {x: game.width/2 - 64, y: game.height/2 - 96, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:7,y:4},{x:7,y:5},{x:8,y:4},{x:9,y:4},{x:9,y:5},
     {x:8,y:5},{x:8,y:6},{x:8,y:7},{x:7,y:6},{x:9,y:6},
     {x:7,y:7},{x:7,y:8},{x:8,y:8},{x:9,y:8},{x:9,y:7},
     {x:7,y:9},{x:7,y:10},{x:8,y:9},{x:9,y:9},{x:9,y:10},
     {x:8,y:10},{x:8,y:11},{x:8,y:12},{x:7,y:11},{x:9,y:11},
     {x:7,y:12},{x:7,y:13},{x:8,y:13},{x:9,y:13},{x:9,y:12},
     {x:7,y:14},{x:8,y:14},{x:8,y:15},{x:9,y:14},
     {x:6,y:5},{x:6,y:6},{x:6,y:7},{x:5,y:6},
     {x:5,y:7},{x:5,y:8},{x:6,y:8},
     {x:5,y:9},{x:6,y:9},{x:6,y:10},
     {x:10,y:5},{x:10,y:6},{x:10,y:7},{x:11,y:6},
     {x:11,y:7},{x:11,y:8},{x:10,y:8},
     {x:11,y:9},{x:10,y:9},{x:10,y:10}];

    pieces[lc] = [5,5,5,5,5,5,4,4,3,3,4,3,3];

    imgs[lc] = 'level 16 frame 1';
    rot[lc] = true;
    
    texts[lc] = "   3rd: Exploit your free time. Do not design only when you design; instead, design at" +
                "\nanytime. A change of scenery drives creativity. Many of my ideas were found in the shower.";

	imgscale[lc] = 0.7 * 12;
	extrabits[lc] = [];
	hintbits[lc] = [1,4];
	animations[lc] = ['level 16 frame 1','level 16 frame 1','level 16 frame 1','level 16 frame 1'
					,'level 16 frame 1','level 16 frame 1','level 16 frame 1','level 16 frame 1'
					,'level 16 frame 1','level 16 frame 1','level 16 frame 1','level 16 frame 1'
					,'level 16 frame 1','level 16 frame 1','level 16 frame 1','level 16 frame 1'
					,'level 16 frame 2','level 16 frame 3','level 16 frame 4','level 16 frame 5'];
	animloop[lc] = false;
    
    // Level 17
    ++lc;
    pos[lc] = {x: game.width/2 , y: game.height/2 - 64, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:1,y:1},
     {x:0,y:1},{x:0,y:2},{x:0,y:3},{x:1,y:3},
     {x:2,y:1},{x:2,y:2},{x:2,y:3},{x:1,y:2},{x:3,y:2},
     {x:0,y:4},{x:0,y:5},{x:0,y:6},{x:1,y:4},
     {x:2,y:4},{x:3,y:4},{x:4,y:4},{x:3,y:3},{x:3,y:5},
     {x:2,y:5},{x:1,y:5},{x:1,y:6},{x:1,y:7},
     {x:2,y:6},{x:3,y:6},{x:3,y:7},
     {x:2,y:7},{x:2,y:8},{x:2,y:9},{x:2,y:10},
     {x:4,y:5},{x:5,y:5},{x:6,y:5},{x:5,y:4},{x:5,y:6},
     {x:4,y:6},{x:4,y:7},{x:5,y:7},
     {x:6,y:4},{x:7,y:4},{x:8,y:4},{x:9,y:4},
     {x:7,y:5},{x:7,y:6},{x:7,y:7},{x:6,y:6},{x:8,y:6},
     {x:6,y:7},{x:6,y:8},{x:6,y:9},{x:6,y:10},
     {x:8,y:7},{x:8,y:8},{x:8,y:9},{x:8,y:10},
     {x:8,y:5},{x:9,y:5},{x:9,y:6},
     {x:9,y:7},{x:9,y:8},{x:10,y:8}];

    pieces[lc] = [4,4,5,4,5,4,3,4,5,3,4,5,4,4,3,3];

    imgs[lc] = 'level 17 frame 1';
    rot[lc] = true;
    
    texts[lc] = "   Last: Expect the unexpected. You need time to fix bugs, resolve schedule conflicts with" +
                "\nyour teammates and recover from illnesses. It would be wise to leave space in your plan" +
                "\nfor the accidents.";

	imgscale[lc] = 0.35 * 12;
	extrabits[lc] = [];
	hintbits[lc] = [2,4,8];
	animations[lc] = ['level 17 frame 1','level 17 frame 2','level 17 frame 3','level 17 frame 4',
						'level 17 frame 5','level 17 frame 6','level 17 frame 7','level 17 frame 8',
						'level 17 frame 9'];
	animloop[lc] = true;
    
    // Level 18
    ++lc;
    pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
    puzzles[lc] =
	[{x:0,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:2,y:0},
     {x:3,y:0},{x:3,y:1},{x:3,y:2},{x:3,y:3},
     {x:1,y:2},{x:2,y:2},{x:2,y:3},{x:2,y:4},{x:3,y:4},
     {x:2,y:5},{x:1,y:5},{x:1,y:6},
     {x:3,y:5},{x:4,y:5},{x:4,y:6},
     {x:4,y:2},{x:5,y:2},{x:6,y:2},{x:7,y:2},
     {x:8,y:2},{x:9,y:2},{x:10,y:2},{x:9,y:1},{x:9,y:3},
     {x:9,y:0},{x:10,y:0},{x:10,y:1},
     {x:10,y:3},{x:10,y:4},{x:9,y:4},
     {x:8,y:5},{x:9,y:5},{x:9,y:6},
     {x:10,y:6},{x:10,y:5},{x:11,y:5},
     {x:11,y:2},{x:12,y:2},{x:13,y:2},{x:14,y:2},
     {x:15,y:2},{x:16,y:2},{x:17,y:2},{x:16,y:1},{x:16,y:3},
     {x:16,y:0},{x:17,y:0},{x:17,y:1},
     {x:18,y:2},{x:19,y:2},{x:19,y:1},
     {x:17,y:3},{x:17,y:4},{x:16,y:4},
     {x:16,y:5},{x:16,y:6},{x:17,y:5},{x:17,y:6}];

    pieces[lc] = [5,4,5,3,3,4,5,3,3,3,3,4,5,3,3,3,4];

    imgs[lc] = 'sprite18';
    rot[lc] = true;
    
    texts[lc] = "Finally, never give up and remember we are always with you. Thanks for playing.";

	imgscale[lc] = 0.7 * 8;
	extrabits[lc] = [];
	hintbits[lc] = [0,6,12];
	animations[lc] = [imgs[lc]];
	animloop[lc] = false;
    
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
	animations[lc] = [imgs[lc]];
	animloop[lc] = false;
	*/
}