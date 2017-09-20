$(document).ready(function() {

characterImages = ["../images/white-knight.gif", "../images/red-knight.gif", "../images/dragoon.gif", "../images/chompy.gif", "../images/uno.gif", "../images/venom.gif"]


var characters = {
	whiteK: {
		name: "White Knight",
		divid: "#white-knight-img",
		hp: 120,
		attack: random(13, 17),
		dodge: 12,
		counter: random(13, 17),
		ultimate: 12,
	},

	redK: {
		name: "Red Knight",
		divid: "#red-knight-img",
		hp: 100,
		attack: random(14, 19),
		dodge: 12,
		counter: random(14, 19),
		ultimate: 12,
	},

	dragoon: {
		name: "Dragoon",
		divid: "#dragoon-img",
		hp: 80,
		attack: random(18, 21),
		dodge: 12,
		counter: random(18, 21),
		ultimate: 12,
	},

	chompy: {
		name: "Chompy",
		divid: "#chompy-img",
		hp: 75,
		attack: random(19, 22),
		dodge: 12,
		counter: random(19, 22),
		ultimate: 12,
	},

	uno: {
		name: "Uno",
		divid: "#uno-img",
		hp: 90,
		attack: random(18, 20),
		dodge: 12,
		counter: random(18, 20),
		ultimate: 12,
	},

	venom: {
		name: "Venom",
		divid: "#venom-img",
		hp: 125,
		attack: random(12, 14),
		dodge: 12,
		counter: random(12, 14),
		ultimate: 12,
	},
}

var stats = {
		hp: 0,
		enemyHp: 0,
		attack: 0,
		dodge: 0,
		counter: 0,
		ultimate: 0,

		selectCounter: 0,

		enemyPicked: false,
	}

//Random number generator
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

//Assigns players character stats
function playerChar(char) {
	stats.hp = char.hp;
	stats.attack = char.attack;
	stats.dodge = char.dodge;
	stats.ultimate = char.ultimate;

	stats.selectCounter++;

}

//Assigns enemy character stats
function enemyChar(char) {
	stats.enemyHp = char.hp;
	stats.counter = char.counter;
	stats.dodge = char.dodge;
	stats.ultimate = char.ultimate;

	stats.enemyPicked = true;
	stats.selectCounter++;

}


//Main battle function (in counter attack based game)
function attack(char) {
	if (stats.enemyPicked) {

		//Calculate enemy's health after successful attack
		stats.enemyHp = stats.enemyHp - stats.attack;
		console.log("Enemy's HP: " + stats.enemyHp);

		//Calculate player's health after counter attack
		stats.hp = stats.hp - stats.counter;
		console.log("Your HP: " + stats.hp);
	}
}


//Select Knights
$(".choose-knights").on("click", function() {
	$("h1").css("visibility", "hidden");
	$(".choose-aliens").css("visibility", "hidden");
	$(this).animate({"left":"350px"}, "slow");
	$("#logo").css("visibility", "hidden");
	$(this).animate({"margin-top":"-400px"}, "slow");
	$("#knights-container").delay(2000).fadeIn();
	$("#back-to-title").delay(2000).fadeIn();
});

//Select Aliens
$(".choose-aliens").on("click", function() {
	$("h1").css("visibility", "hidden");
	$(".choose-knights").css("visibility", "hidden");
	$(this).animate({"left":"-260px"}, "slow");
	$("#logo").css("visibility", "hidden");
	$(this).animate({"margin-top":"-400px"}, "slow");
	$("#aliens-container").delay(2000).fadeIn();
	$("#back-to-title").delay(2000).css("float", "right").fadeIn();

});

//console.log(playerPicked);

//Reload Page
$(".btn").on("click", function() {
	alert("Any unsaved data will be lost. Are you sure you want to Continue?");
	location.reload();
});


//Choose Your Character: Knights

//White Knight
$("#white-knight-img").on("click", function() {
	$("#red-knight-img, #dragoon-img").fadeOut();
	$(".choose-knights").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"-200px"}, "slow");
	$("#aliens-container").delay(2000).fadeIn();

	//Assign characters and stats
	if (stats.selectCounter === 0) {
		playerChar(characters.whiteK);
		console.log(stats.selectCounter);				//*TEST* Should increment counter by 1 making next clicked character flip stats.enemyPicked true
	} else {
		if (stats.enemyChar) {
			console.log("you're already locked in");
		} else {
			enemyChar(characters.whiteK);
		}
	}

});

//Red Knight
$("#red-knight-img").on("click", function() {
	$("#white-knight-img, #dragoon-img").fadeOut();
	$(".choose-knights").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"-250px"}, "slow");
	$("#aliens-container").delay(2000).fadeIn();

	//Assign characters and stats
	if (stats.selectCounter === 0) {
		playerChar(characters.redK);
	} else {
		if (stats.enemyChar) {
			console.log("you're already locked in");
		} else {
			enemyChar(characters.redK);
		}
	}
});

//Dragoon
$("#dragoon-img").on("click", function() {
	$("#red-knight-img, #white-knight-img").fadeOut();
	$(".choose-knights").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"-210px"}, "slow");
	$("#aliens-container").delay(2000).fadeIn();

	//Assign characters and stats
	if (stats.selectCounter === 0) {
		playerChar(characters.dragoon);
	} else {
		if (stats.enemyChar) {
			console.log("you're already locked in");
		} else {
			enemyChar(characters.dragoon);
		}
	}
});


//Choose Your Character: Aliens

//Uno
$("#uno-img").on("click", function() {
	$("#chompy-img, #venom-img").fadeOut();
	$(".choose-aliens").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"-185px"}, "slow");
	$("#knights-container").delay(2000).fadeIn();
	$(this).css("margin-left", "700px");

	//Assign characters and stats
	if (stats.selectCounter === 0) {
		playerChar(characters.uno);
	} else {
		if (stats.enemyChar) {
			console.log("you're already locked in");
		} else {
			enemyChar(characters.uno);
			console.log(stats.enemyPicked);			//*TEST* when picked second, SHOULD display true
		}
	}
});

//Chompy
$("#chompy-img").on("click", function() {
	$("#uno-img, #venom-img").fadeOut();
	$(".choose-aliens").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"-185px"}, "slow");
	$(this).css("margin-left", "700px");
	$("#knights-container").delay(2000).fadeIn();

	//Assign characters and stats
	if (stats.selectCounter === 0) {
		playerChar(characters.chompy);
	} else {
		if (stats.enemyChar) {
			console.log("you're already locked in");
		} else {
			enemyChar(characters.chompy);
		}
	}
});

//Venom
$("#venom-img").on("click", function() {
	$("#uno-img, #chompy-img").fadeOut();
	$(".choose-aliens").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"-200px"}, "slow");
	$(this).css("margin-left", "700px");
	$("#knights-container").delay(2000).fadeIn();
2
	//Assign characters and stats
	if (stats.selectCounter === 0) {
		playerChar(characters.venom);
	} else {
		if (stats.enemyChar) {
			console.log("you're already locked in");
		} else {
			enemyChar(characters.venom);
		}
	}
});

//Testing Attack funciton with keypress
$(document).keypress(function(event) {
	if (event.key.toLowerCase() == 'a') {
		attack();
	}
});


});