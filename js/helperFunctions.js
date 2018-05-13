/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//	HELPER FUNCTIONS
//	random functions to help shorten code
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//	Code from williamclarkson.net | returns a random string
var makeRandomString = function() 
{
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*#%&!";
    var word = "";
    
    var wordLen = 10;
    for (var i = 0; i < wordLen; i++) 
    {
        var index = Math.floor(Math.random() * letters.length);
        word += letters.charAt(index);
    }
    return word;
}

var musicOnClick = function(button)
{
	if (piano_song.isPlaying == false)
	{
		piano_song.play('',0,0.5,true);
		button.loadTexture('musicOn');
	}
	else
	{
		piano_song.stop();
		button.loadTexture('musicOff');
	}
}

//	Resets level data
var setLevels = function() 
{

	puzzles[0] =
		[{x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3},{x:1,y:4},
		 {x:0,y:5},{x:1,y:5},{x:2,y:5},{x:1,y:6},{x:1,y:7}];

	pieces[0] = [5,5];

	puzzles[1] =
		[{x:0,y:5},{x:1,y:5},{x:2,y:5},
		 {x:3,y:4},{x:4,y:4},{x:5,y:4},{x:3,y:5},{x:4,y:5},{x:5,y:5},
		 {x:4,y:6},{x:4,y:7},{x:5,y:7},
		 {x:4,y:3},{x:5,y:3},{x:6,y:3},{x:6,y:2},
		 {x:7,y:1},{x:7,y:2},{x:7,y:3},{x:7,y:4},{x:8,y:4},
		 {x:9,y:0},{x:8,y:0},{x:8,y:1},{x:8,y:2},{x:9,y:2}];

	pieces[1] = [3,6,3,4,5,5];

	puzzles[2] =
		[{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:1,y:2},{x:1,y:3},
		 {x:4,y:2},{x:4,y:3},{x:5,y:2},
		 {x:2,y:0},{x:2,y:1},{x:3,y:0},{x:3,y:1},
		 {x:2,y:2},{x:2,y:3},{x:2,y:4},{x:3,y:2},{x:3,y:3},{x:3,y:4}];

	pieces[2] = [5,3,4,6];

	puzzles[3] =
		[{x:3,y:0},{x:3,y:1},{x:3,y:2},{x:2,y:1},{x:2,y:2},{x:1,y:2},
		 {x:1,y:3},{x:2,y:3},{x:3,y:3},{x:1,y:4},{x:2,y:4},{x:3,y:4},
		 {x:2,y:5},{x:2,y:6},{x:3,y:6},{x:4,y:6},
		 {x:0,y:6},{x:0,y:7},{x:1,y:6},{x:1,y:7},
		 {x:9,y:6},{x:10,y:6},{x:10,y:7},{x:10,y:8},
		 {x:2,y:7},{x:3,y:7},{x:4,y:7},{x:5,y:7},{x:6,y:7},{x:7,y:7},
		 {x:7,y:9},{x:8,y:9},{x:9,y:9},{x:9,y:8},{x:9,y:7},
		 {x:6,y:6},{x:7,y:6},{x:8,y:6},{x:8,y:7},{x:8,y:8},{x:7,y:8},
		 {x:8,y:5},{x:8,y:4},{x:9,y:5},{x:9,y:4}];

	pieces[3] = [6,6,4,4,4,6,5,6,4];

	/*
	puzzles[1] =
		[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:0,y:1},{x:1,y:1},{x:2,y:1},{x:0,y:2},{x:1,y:2},{x:0,y:3},
		 {x:3,y:1},{x:2,y:2},{x:1,y:3},{x:2,y:3},{x:3,y:2},{x:3,y:3},
		 {x:4,y:0},{x:4,y:1},{x:4,y:2},{x:5,y:1},{x:5,y:2},{x:6,y:2},
		 {x:0,y:4},{x:1,y:4},{x:2,y:4},{x:1,y:5},{x:2,y:5},{x:2,y:6},
		 {x:4,y:3},{x:5,y:3},{x:6,y:3},{x:3,y:4},{x:4,y:4},{x:5,y:4},{x:3,y:5},{x:4,y:5},{x:3,y:6}];

	pieces[1] = [10,6,6,6,9];
	*/
}