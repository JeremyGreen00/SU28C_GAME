
var totalLvls = 5;

var puzzles = [totalLvls];
var pieces = [totalLvls];
var imgs = [totalLvls];
var rot = [totalLvls];
var msgs = [totalLvls];
var pos = [totalLvls];
var texts = [totalLvls];
var imgscale = [totalLvls];

var extrabits = [totalLvls];

//	Sets level data
var setLevels = function() 
{
	var lc = 0;
		
	//	LEVEL 1
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:0},
		 {x:1,y:2},{x:2,y:2},{x:2,y:1}];

	pieces[lc] = [6,3];

	imgs[lc] = 'lvl1';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];

	//	LEVEL 2
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: -32};
	puzzles[lc] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:2},{x:1,y:3},
		 {x:4,y:2},{x:4,y:3},{x:5,y:2},
		 {x:2,y:0},{x:2,y:1},{x:3,y:0},{x:3,y:1},
		 {x:2,y:2},{x:2,y:3},{x:2,y:4},{x:3,y:2},{x:3,y:3},{x:3,y:4}];

	pieces[lc] = [5,3,4,6];

	imgs[lc] = 'lvl2';
	rot[lc] = true;

	texts[lc] = ['Click and drag pieces, spacebar to rotate',
				 'Example line 2'];

	imgscale[lc] = 0.4;
	extrabits[lc] = [];

	//	LEVEL 3
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:2,y:0},{x:1,y:1},{x:3,y:1},{x:2,y:2},{x:1,y:3},{x:3,y:3},
		 {x:0,y:4},{x:0,y:5},{x:1,y:6},{x:2,y:6},{x:3,y:6},{x:4,y:5},{x:4,y:4},
		 {x:5,y:4},{x:5,y:5},{x:6,y:5},{x:7,y:4},{x:8,y:3}];

	pieces[lc] = [6,7,5];

	imgs[lc] = 'lvl3';
	rot[lc] = true;

	texts[lc] = ['Click and drag pieces, spacebar to rotate',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];

	//	LEVEL 4
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},
		 {x:0,y:4},{x:1,y:4},{x:2,y:4},
		 {x:3,y:4},{x:4,y:4},{x:5,y:4},
		 {x:0,y:5},{x:0,y:6},{x:0,y:7},{x:0,y:8},{x:1,y:8},
		 {x:2,y:8},{x:3,y:8},{x:4,y:8},{x:5,y:8},
		 {x:6,y:8},{x:7,y:8},{x:8,y:8},{x:9,y:8},
		 {x:9,y:7},{x:9,y:6},{x:8,y:6},{x:7,y:6},
		 {x:5,y:6},{x:6,y:6},
		 {x:9,y:5},{x:9,y:4},{x:9,y:3},{x:9,y:2},{x:9,y:1},
		 {x:9,y:0},{x:8,y:0},{x:7,y:0},{x:7,y:1},{x:7,y:2},
		 {x:6,y:0},{x:5,y:0},
		 {x:4,y:0},{x:3,y:0},{x:3,y:1},{x:3,y:2}];

	pieces[lc] = [5,3,3,5,4,4,4,2,5,5,2,4];

	imgs[lc] = 'lvl4';
	rot[lc] = true;

	texts[lc] = ['Click and drag pieces, spacebar to rotate',
				 'Example line 2'];

	imgscale[lc] = 0.52;
	extrabits[lc] = [];

	//	LEVEL 5
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: -128, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:5},{x:1,y:5},{x:2,y:5},
		 {x:3,y:4},{x:4,y:4},{x:5,y:4},{x:3,y:5},{x:4,y:5},{x:5,y:5},
		 {x:4,y:6},{x:4,y:7},{x:5,y:7},
		 {x:4,y:3},{x:5,y:3},{x:6,y:3},{x:6,y:2},
		 {x:7,y:1},{x:7,y:2},{x:7,y:3},{x:7,y:4},{x:8,y:4},
		 {x:9,y:0},{x:8,y:0},{x:8,y:1},{x:8,y:2},{x:9,y:2}];

	pieces[lc] = [3,6,3,4,5,5];

	imgs[lc] = 'lvl5';
	rot[lc] = true;

	texts[lc] = ['Click and drag pieces, spacebar to rotate',
				 'Example line 2'];

	imgscale[lc] = 0.5;
	extrabits[lc] = [];
		
	//	LEVEL 6
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},
		 {x:0,y:1},{x:0,y:2},{x:0,y:3},{x:0,y:4},
		 {x:1,y:2},{x:1,y:2},
		 {x:5,y:0},{x:5,y:1},{x:5,y:2},{x:5,y:3},
		 {x:6,y:4},{x:7,y:4},
		 {x:8,y:0},{x:8,y:1},{x:8,y:2},{x:8,y:3},
		 {x:10,y:0},{x:10,y:1},{x:10,y:2},{x:10,y:3},{x:10,y:4},{x:11,y:1},
		 {x:13,y:0},{x:13,y:1},{x:13,y:2},{x:13,y:3},{x:13,y:4},{x:12,y:2}];

	pieces[lc] = [4,4,2,4,2,4,6,6];

	imgs[lc] = 'lvl6';
	rot[lc] = true;

	texts[lc] = ['Level 5 text',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];

		
	//	LEVEL 7
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:2,y:0},{x:3,y:0},{x:0,y:2},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1},{x:5,y:1},
		 {x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2},{x:5,y:2},
		 {x:1,y:3},{x:1,y:4},{x:1,y:5},{x:1,y:6},{x:1,y:7},{x:2,y:7},
		 {x:2,y:3},{x:3,y:3},{x:4,y:3},{x:5,y:3},{x:2,y:4},{x:3,y:4},{x:4,y:4},{x:5,y:4},
		 {x:2,y:5},{x:3,y:5},{x:4,y:5},{x:5,y:5},
		 {x:2,y:6},{x:3,y:6},{x:4,y:6},{x:5,y:6},{x:3,y:7},{x:4,y:7},{x:5,y:7}];

	pieces[lc] = [9,5,6,8,4,7];

	imgs[lc] = 'lvl7';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];

		
	//	LEVEL 8
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:9,y:5},{x:8,y:5},{x:7,y:5},
		 {x:6,y:4},{x:5,y:4},{x:4,y:4},{x:6,y:5},{x:5,y:5},{x:4,y:5},
		 {x:5,y:6},{x:5,y:7},{x:4,y:7},
		 {x:5,y:3},{x:4,y:3},{x:3,y:3},{x:3,y:2},
		 {x:2,y:1},{x:2,y:2},{x:2,y:3},{x:2,y:4},{x:1,y:4},
		 {x:0,y:0},{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:0,y:2},

		 {x:0,y:8},{x:0,y:9},{x:0,y:10},{x:1,y:10},{x:1,y:11},
		 {x:4,y:10},{x:4,y:11},{x:5,y:10},
		 {x:2,y:8},{x:2,y:9},{x:3,y:8},{x:3,y:9},
		 {x:2,y:10},{x:2,y:11},{x:2,y:12},{x:3,y:10},{x:3,y:11},{x:3,y:12}];

	pieces[lc] = [3,6,3,4,5,5,5,3,4,6];

	imgs[lc] = 'lvl8';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 0.5;
	extrabits[lc] = [];

		
	//	LEVEL 9
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:2,y:1},{x:3,y:1},{x:4,y:1},{x:2,y:2},{x:3,y:2},{x:4,y:2},{x:3,y:3},
		 {x:3,y:4},{x:4,y:4},{x:5,y:4},{x:6,y:4},{x:6,y:3},
		 {x:2,y:4},{x:1,y:4},{x:0,y:4},{x:0,y:5},
		 {x:3,y:5},{x:3,y:6},{x:3,y:7},{x:2,y:7},{x:1,y:7},{x:1,y:8},
		 {x:4,y:6},{x:5,y:6},{x:5,y:7},{x:5,y:8},{x:6,y:8},

		 {x:8,y:0},{x:9,y:0},{x:10,y:0},{x:8,y:1},{x:9,y:1},{x:10,y:1},
		 {x:9,y:2},{x:9,y:3},{x:9,y:4},{x:10,y:4},{x:11,y:4},
		 {x:9,y:5},{x:9,y:6},{x:9,y:7},{x:9,y:8},{x:10,y:8},

		 {x:14,y:0},{x:15,y:0},{x:16,y:0},{x:14,y:1},{x:15,y:1},{x:16,y:1},
		 {x:15,y:2},{x:15,y:3},{x:15,y:4},{x:15,y:5},{x:16,y:5},{x:17,y:5},{x:18,y:5},
		 {x:14,y:3},{x:13,y:4},{x:14,y:5},
		 {x:15,y:6},{x:15,y:7},{x:15,y:8},{x:16,y:8}];

	pieces[lc] = [7,5,4,6,5,6,5,5,6,7,3,4];

	imgs[lc] = 'lvl9';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 0.5;
	extrabits[lc] = [[{x:0,y:0},{x:0,y:1},{x:1,y:0}]];

		
	//	LEVEL 10
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:6},{x:0,y:7},{x:0,y:8},{x:1,y:6},{x:1,y:7},{x:1,y:8},
		 {x:2,y:5},{x:3,y:5},{x:2,y:6},{x:3,y:6},
		 {x:2,y:8},{x:2,y:7},{x:3,y:7},{x:4,y:7},{x:4,y:6},
		 {x:5,y:6},{x:6,y:6},{x:6,y:5},
		 {x:7,y:5},{x:8,y:5},{x:8,y:4},{x:9,y:4},{x:10,y:4},
		 {x:8,y:6},{x:7,y:7},{x:8,y:7},{x:6,y:8},{x:7,y:8},{x:8,y:8},
		 {x:9,y:7},{x:9,y:8},{x:10,y:8},
		 {x:10,y:3},{x:11,y:3},{x:12,y:3},{x:12,y:2},{x:13,y:2},{x:14,y:2},
		 {x:13,y:1},{x:14,y:1},{x:13,y:0},{x:14,y:0}];

	pieces[lc] = [6,4,5,3,5,6,3,6,4];

	imgs[lc] = 'lvl10';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 1.1;
	extrabits[lc] = [[{x:0,y:2},{x:1,y:2},{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:3,y:0}]];

		
	//	LEVEL 11
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};	
	puzzles[lc] =
		[{x:3,y:0},{x:3,y:1},{x:3,y:2},{x:2,y:1},{x:2,y:2},{x:1,y:2},
		 {x:1,y:3},{x:2,y:3},{x:3,y:3},{x:1,y:4},{x:2,y:4},{x:3,y:4},
		 {x:2,y:5},{x:2,y:6},{x:3,y:6},{x:4,y:6},
		 {x:0,y:6},{x:0,y:7},{x:1,y:6},{x:1,y:7},
		 {x:9,y:6},{x:10,y:6},{x:10,y:7},{x:10,y:8},
		 {x:2,y:7},{x:3,y:7},{x:4,y:7},{x:5,y:7},{x:6,y:7},{x:7,y:7},
		 {x:7,y:9},{x:8,y:9},{x:9,y:9},{x:9,y:8},{x:9,y:7},
		 {x:6,y:6},{x:7,y:6},{x:8,y:6},{x:8,y:7},{x:8,y:8},{x:7,y:8},
		 {x:8,y:5},{x:8,y:4},{x:9,y:5},{x:9,y:4}];

	pieces[lc] = [6,6,4,4,4,6,5,6,4];

	imgs[lc] = 'lvl11';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 0.7;
	extrabits[lc] = [];

		
	//	LEVEL 12
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: -32, imgoffSetY: -32};
	puzzles[lc] =
		[{x:0,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:2},
		 	{x:1,y:2},{x:2,y:2},{x:1,y:3},{x:2,y:3},{x:1,y:4},{x:2,y:4},
		 {x:4,y:0},{x:3,y:1},{x:3,y:2},{x:3,y:3},{x:4,y:1},{x:4,y:2},{x:4,y:3},
		 	{x:5,y:3},{x:6,y:3},{x:7,y:3},{x:5,y:4},{x:6,y:4},{x:7,y:4},
		 {x:7,y:0},{x:9,y:0},{x:7,y:1},{x:8,y:1},{x:9,y:1},{x:10,y:1},{x:8,y:2},{x:9,y:2},
		 	{x:10,y:2},{x:11,y:2},{x:8,y:3},{x:9,y:3},{x:10,y:3},{x:8,y:4},{x:9,y:4},{x:10,y:4},

		 {x:1,y:5},{x:2,y:5},{x:3,y:5},{x:1,y:6},{x:2,y:6},{x:3,y:6},{x:1,y:7},
		 	{x:0,y:8},{x:1,y:8},{x:2,y:8},{x:0,y:9},{x:1,y:9},{x:2,y:9},{x:2,y:7},
		 {x:5,y:5},{x:4,y:6},{x:5,y:6},{x:3,y:7},{x:4,y:7},{x:5,y:7},
		 	{x:3,y:8},{x:4,y:8},{x:5,y:8},{x:3,y:9},{x:4,y:9},{x:5,y:9},
		 {x:6,y:5},{x:6,y:6},{x:6,y:7},{x:6,y:8},{x:7,y:8},
		 	{x:6,y:9},{x:7,y:9},{x:8,y:9},{x:9,y:9},{x:10,y:9},{x:11,y:9},
		 {x:7,y:5},{x:7,y:6},{x:7,y:7},{x:8,y:5},{x:8,y:6},{x:8,y:7},
		 	{x:8,y:8},{x:9,y:8},{x:10,y:8},{x:11,y:8},{x:9,y:7},{x:10,y:7},{x:11,y:7},
		 {x:9,y:5},{x:10,y:5},{x:11,y:5},{x:9,y:6},{x:10,y:6},{x:11,y:6},

		 {x:3,y:4},{x:4,y:4},{x:5,y:5}];

	pieces[lc] = [12,13,16,14,12,11,13,6];

	imgs[lc] = 'lvl12';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 0.5;
	extrabits[lc] = 
		[[{x:0,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:2},{x:1,y:2},{x:2,y:2}],
		 [{x:0,y:0},{x:2,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:2,y:2},{x:3,y:2}]];

		
	//	LEVEL 13
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:0},
		 {x:1,y:2},{x:2,y:2},{x:2,y:1}];

	pieces[lc] = [6,3];

	imgs[lc] = 'lvl1';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];

		
	//	LEVEL 14
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:0},
		 {x:1,y:2},{x:2,y:2},{x:2,y:1}];

	pieces[lc] = [6,3];

	imgs[lc] = 'lvl1';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];

		
	//	LEVEL 15
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:0},
		 {x:1,y:2},{x:2,y:2},{x:2,y:1}];

	pieces[lc] = [6,3];

	imgs[lc] = 'lvl1';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];

		
	//	LEVEL 16
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:0},
		 {x:1,y:2},{x:2,y:2},{x:2,y:1}];

	pieces[lc] = [6,3];

	imgs[lc] = 'lvl1';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];

		
	//	LEVEL 17
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:0},
		 {x:1,y:2},{x:2,y:2},{x:2,y:1}];

	pieces[lc] = [6,3];

	imgs[lc] = 'lvl1';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];

		
	//	LEVEL 18
	++lc;
	pos[lc] = {x: game.width/2, y: game.height/2, imgoffSetX: 0, imgoffSetY: 0};
	puzzles[lc] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:0},
		 {x:1,y:2},{x:2,y:2},{x:2,y:1}];

	pieces[lc] = [6,3];

	imgs[lc] = 'lvl1';
	rot[lc] = true;

	texts[lc] = ['Level 1 text',
				 'Example line 2'];

	imgscale[lc] = 1;
	extrabits[lc] = [];



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
	*/
}