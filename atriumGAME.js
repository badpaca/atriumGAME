//Below is the source code for a simple 2D 
//pixel game I created...
//PLOT
//The golden apples can save your village, 
//but the bad dudes will turn you into mince 
//meat so fast you won't be able to say enchilada!
//✪ = score, ☘ = hi-score

//ENJOY!!!!!

// CAnvas Borders
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 712;
canvas.height = 480;
document.body.appendChild(canvas);

// Background Photo
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtSk1hUjk2SGwxUkk";

// Gold image
var goldReady = false;
var goldImage = new Image();
goldImage.onload = function () {
	goldReady = true;
};
goldImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtbWx5VlpCYzBxSUE";

// Hero image normal facing
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtU2d4Z1RGVHBManc";

//Hero image facing up 
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtWmN5c18tSm43WFE";

//Hero image facing left
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtRU42a2ZJNFVIRjQ";

//Hero image facing right
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtWVpSdm1nc0FfLUU";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtZ09xT3pJeENTWkk";

// Attacker image left
var attackerReady = false;
var attackerImage = new Image();
attackerImage.onload = function() {
	attackerReady = true;
};
attackerImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtV3YxLXh0a3VVTVk"

// Attacker image right
var attackerReady = false;
var attackerImageright = new Image();
attackerImageright.onload = function() {
	attackerReady = true;
};
attackerImageright.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtSjhzQ0pPR191UVk"

// Attacker2 image up
var attacker2Ready = false;
var attacker2Image = new Image();
attacker2Image.onload = function() {
	attacker2Ready = true;
};
attacker2Image.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtbzUwcWotOUJjNFk"

// Attacker2 image down
var attacker2Ready = false;
var attacker2Imageright = new Image();
attacker2Imageright.onload = function() {
	attacker2Ready = true;
};
attacker2Imageright.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtSDhfMksyRXo1R3M"

// Game Variables
var hero = {
	speed: 250 // movement in pixels per second
};
var attacker = { speed: 150 // speed
};
var attacker2 = { speed: 150 // speed
}
var monster = { speed: 80};
var gold = {};
var goldcount = 0;
var hiscore = 0;

// Key Press Functions
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset Function (starts a brand new game[upon refresh])
var reset = function () {
	hero.x = 32 + (Math.random() * (canvas.width - 100));
	hero.y = 32 + (Math.random() * (canvas.height - 100));
	
	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 100));
	monster.y = 32 + (Math.random() * (canvas.height - 100));
	
	// Throw the gold somewhere on the screen randomly
	gold.x = 32 + (Math.random() * (canvas.width - 100));
	gold.y = 32 + (Math.random() * (canvas.height - 100));
	
	// Throw the attacker somewhere on the screen randomly
	attacker.x = 32 + (Math.random() * (canvas.width - 100));
	attacker.y = 32 + (Math.random() * (canvas.height - 100));
	
	// Throw the attacker2 somewhere on the screen randomly
	attacker2.x = 32 + (Math.random() * (canvas.width - 100));
	attacker2.y = 32 + (Math.random() * (canvas.height - 100));
};

//Gameover Function (resets gold counter)
var gameover = function () {
	goldcount = 0;
	reset();
}

// During Reset Function: for resetting during the game, so you don't "portal"
// every time you catch an apple
var resetdur = function () {
	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 100));
	monster.y = 32 + (Math.random() * (canvas.height - 100));
	
	// Throw the gold somewhere on the screen randomly
	gold.x = 32 + (Math.random() * (canvas.width - 100));
	gold.y = 32 + (Math.random() * (canvas.height - 100));
	
	// Throw the attacker somewhere on the screen randomly
	attacker.x = 32 + (Math.random() * (canvas.width - 100));
	attacker.y = 32 + (Math.random() * (canvas.height - 100));
	
	// Throw the attacker2 somewhere on the screen randomly
	attacker2.x = 32 + (Math.random() * (canvas.width - 100));
	attacker2.y = 32 + (Math.random() * (canvas.height - 100));
}

// Update Game Vars
var update = function (modifier) {
	//Keystroke Updates
	if (38 in keysDown) { //up
		hero.y -= hero.speed * modifier;
		heroImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtWmN5c18tSm43WFE"; //the up facing image
	}
	if (40 in keysDown) { //down
		hero.y += hero.speed * modifier;
		heroImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtU2d4Z1RGVHBManc"; //the down facing image
	}
	if (37 in keysDown) { //left
		hero.x -= hero.speed * modifier;
		heroImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtUmI2b0I2ZmU4bEk"; //the left facing image
	}
	if (39 in keysDown) { //right
		hero.x += hero.speed * modifier;
		heroImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtWVpSdm1nc0FfLUU"; //the right facing image
	}
	
	// Automated Monster MOtion
	attacker.x -= attacker.speed * modifier;
	attacker2.y -= attacker2.speed * modifier;
	monster.x -= monster.speed * modifier;
	monster.y -= monster.speed * modifier;

	// Boundary Conditions
	if (hero.x >= 660) {
			hero.x = 660;
	}
	if (hero.x <=12) {
			hero.x = 12;
	}
	if (hero.y >= 413) {
			hero.y = 413;
	}
	if (hero.y <=12) {
			hero.y = 12;
	}

	if (attacker.x >= 660) {
			attacker.speed = -attacker.speed;
			attackerImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtV3YxLXh0a3VVTVk";
	}
	if (attacker.x <=12) {
			attacker.speed = -attacker.speed;
			attackerImage.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtSjhzQ0pPR191UVk";
	}
	
	if (monster.x >= 660) {
		monster.speed = -monster.speed;
	}
	if (monster.x <= 12) {
		monster.speed = -monster.speed;
	}
	if (monster.y >= 413) {
		monster.speed = -monster.speed;
	}
	if (monster.y <= 12) {
		monster.speed = -monster.speed;
	}
	
	if (attacker2.y >= 413) {
			attacker2.speed = -attacker2.speed;
			attacker2Image.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtbzUwcWotOUJjNFk"
	}
	if (attacker2.y <=12) {
			attacker2.speed = -attacker2.speed;
			attacker2Image.src = "https://drive.google.com/uc?id=0BxkZ178rBWjtSDhfMksyRXo1R3M"
	}
	
	//Death!
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		gameover();
	}
	
	//Got an apple!
	if (
		hero.x <= (gold.x + 32)
		&& gold.x <= (hero.x + 32)
		&& hero.y <= (gold.y + 32)
		&& gold.y <= (hero.y + 32)
	) {
		++goldcount;
		if (hiscore < goldcount) {
			++hiscore;
		}
		resetdur();
	}
	
	//Death!
	if ( 
		hero.x <= (attacker.x + 32)
		&& attacker.x <= (hero.x + 32)
		&& hero.y <= (attacker.y + 32)
		&& attacker.y <= (hero.y + 32)
		) {
			gameover();
		}
		
	//Death!
	if ( 
		hero.x <= (attacker2.x + 32)
		&& attacker2.x <= (hero.x + 32)
		&& hero.y <= (attacker2.y + 32)
		&& attacker2.y <= (hero.y + 32)
		) {
			gameover();
		}
};

// Draw All the Variables
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}
	

	if (goldReady) {
		ctx.drawImage(goldImage, gold.x, gold.y);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
	
	if (attackerReady) {
		ctx.drawImage(attackerImage, attacker.x, attacker.y);
	}
	
	if (attacker2Ready) {
		ctx.drawImage(attacker2Image, attacker2.x, attacker2.y);
	}
	


	// Scoreboard and High Score
	ctx.fillStyle = "rgb(218,165,32)";
	ctx.font = "42px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("✪ " + goldcount, 32, 32);
	ctx.fillText("☘ " + hiscore, 32, 70);
	ctx.fillStyle = "rgb(218,165,32)";
	ctx.font = "18px Helvetica"
	ctx.fillText("© badpaca, 2016",32, 455);
};

// Main Function (gameplay)
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request Line
	requestAnimationFrame(main);
};

// Cross-browser Compatability
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Play Function!!!
var then = Date.now();
reset();
main();