
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

		
	//	LEVEL 0
	pos[0] = {x: game.width/2 - 64, y: game.height/2 - 64};
	puzzles[0] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:0},{x:1,y:1},{x:2,y:0},
		 {x:1,y:2},{x:2,y:2},{x:2,y:1}];

	pieces[0] = [6,3];

	imgs[0] = 'lvl1';
	rot[0] = false;

	texts[0] = ['Level 1 text',
				 'Example line 2'];

	imgscale[0] = 1;
	extrabits[0] = [];

	//	LEVEL 1
	pos[1] = {x: game.width/2 - 64, y: game.height/2 - 64};
	puzzles[1] =
		[{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3},{x:1,y:4},
		 {x:0,y:5},{x:1,y:5},{x:2,y:5},{x:1,y:6},{x:1,y:7}];

	pieces[1] = [5,5];

	imgs[1] = 'lvl2';
	rot[1] = false;

	texts[1] = ['Click and drag pieces, spacebar to rotate',
				 'Example line 2'];

	imgscale[1] = 0.3;
	extrabits[1] = [];

	//	LEVEL 2
	pos[2] = {x: game.width/2 - 64, y: game.height/2 - 64};
	puzzles[2] =
		[{x:0,y:5},{x:1,y:5},{x:2,y:5},
		 {x:3,y:4},{x:4,y:4},{x:5,y:4},{x:3,y:5},{x:4,y:5},{x:5,y:5},
		 {x:4,y:6},{x:4,y:7},{x:5,y:7},
		 {x:4,y:3},{x:5,y:3},{x:6,y:3},{x:6,y:2},
		 {x:7,y:1},{x:7,y:2},{x:7,y:3},{x:7,y:4},{x:8,y:4},
		 {x:9,y:0},{x:8,y:0},{x:8,y:1},{x:8,y:2},{x:9,y:2}];

	pieces[2] = [3,6,3,4,5,5];

	imgs[2] = 'lvl5';
	rot[2] = false;

	texts[2] = ['Click and drag pieces, spacebar to rotate',
				 'Example line 2'];

	imgscale[2] = 0.3;
	extrabits[2] = [];

	//	LEVEL 3
	pos[3] = {x: game.width/2 - 64, y: game.height/2 - 64};
	puzzles[3] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:2},{x:1,y:3},
		 {x:4,y:2},{x:4,y:3},{x:5,y:2},
		 {x:2,y:0},{x:2,y:1},{x:3,y:0},{x:3,y:1},
		 {x:2,y:2},{x:2,y:3},{x:2,y:4},{x:3,y:2},{x:3,y:3},{x:3,y:4}];

	pieces[3] = [5,3,4,6];

	imgs[3] = 'lvl8';
	rot[3] = true;

	texts[3] = ['Click and drag pieces, spacebar to rotate',
				 'Example line 2'];

	imgscale[3] = 0.3;
	extrabits[3] = 
		[[{x:3,y:0},{x:3,y:1},{x:3,y:2},{x:2,y:1},{x:2,y:2},{x:1,y:2}],
		 [{x:1,y:3},{x:2,y:3},{x:3,y:3},{x:1,y:4},{x:2,y:4},{x:3,y:4}],
		 [{x:2,y:5},{x:2,y:6},{x:3,y:6},{x:4,y:6}]];

	//	LEVEL 4
	pos[4] = {x: game.width/2 - 128, y: game.height/2 - 128};
	puzzles[4] =
		[{x:3,y:0},{x:3,y:1},{x:3,y:2},{x:2,y:1},{x:2,y:2},{x:1,y:2},
		 {x:1,y:3},{x:2,y:3},{x:3,y:3},{x:1,y:4},{x:2,y:4},{x:3,y:4},
		 {x:2,y:5},{x:2,y:6},{x:3,y:6},{x:4,y:6},
		 {x:0,y:6},{x:0,y:7},{x:1,y:6},{x:1,y:7},
		 {x:9,y:6},{x:10,y:6},{x:10,y:7},{x:10,y:8},
		 {x:2,y:7},{x:3,y:7},{x:4,y:7},{x:5,y:7},{x:6,y:7},{x:7,y:7},
		 {x:7,y:9},{x:8,y:9},{x:9,y:9},{x:9,y:8},{x:9,y:7},
		 {x:6,y:6},{x:7,y:6},{x:8,y:6},{x:8,y:7},{x:8,y:8},{x:7,y:8},
		 {x:8,y:5},{x:8,y:4},{x:9,y:5},{x:9,y:4}];

	pieces[4] = [6,6,4,4,4,6,5,6,4];

	imgs[4] = 'lvl11';
	rot[4] = true;

	texts[4] = ['Click and drag pieces, spacebar to rotate',
				 'Example line 2'];

	imgscale[4] = 0.3;
	extrabits[4] = [];


	/*
	//	LEVEL 1
	puzzles[1] =
		[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:2},{x:1,y:2},{x:0,y:3},
		 {x:3,y:1},{x:2,y:2},{x:1,y:3},{x:2,y:3},{x:3,y:2},{x:3,y:3},
		 {x:4,y:0},{x:4,y:1},{x:4,y:2},{x:5,y:1},{x:5,y:2},{x:6,y:2},
		 {x:0,y:4},{x:1,y:4},{x:2,y:4},{x:1,y:5},{x:2,y:5},{x:2,y:6},
		 {x:4,y:3},{x:5,y:3},{x:6,y:3},{x:3,y:4},{x:4,y:4},{x:5,y:4},{x:3,y:5},{x:4,y:5},{x:3,y:6}];

	pieces[1] = [10,6,6,6,9];
	*/
}