$(document).ready(function() {

	var choosenCharacter;
	var choosenEnemy;
	var playerPicked = false;

var characters = {
	whiteK: {
		name: "White Knight",
		divid: "#white-knight-img",
		hp: 10,
		attack: 12,
		dodge: 12,
		counter: 12,
		ultimate: 12,
	},

	redK: {
		name: "Red Knight",
		divid: "#red-knight-img",
		hp: 10,
		attack: 12,
		dodge: 12,
		counter: 12,
		ultimate: 12,
	},

	dragoon: {
		name: "Dragoon",
		divid: "#dragoon-img",
		hp: 10,
		attack: 12,
		dodge: 12,
		counter: 12,
		ultimate: 12,
	},

	chompy: {
		name: "Chompy",
		divid: "#chompy-img",
		hp: 10,
		attack: 12,
		dodge: 12,
		counter: 12,
		ultimate: 12,
	},

	uno: {
		name: "Uno",
		divid: "#uno-img",
		hp: 10,
		attack: 12,
		dodge: 12,
		counter: 12,
		ultimate: 12,
	},

	venom: {
		name: "Venom",
		divid: "#venom-img",
		hp: 10,
		attack: 12,
		dodge: 12,
		counter: 12,
		ultimate: 12,
	}
}

var stats = {
		hp: 0,
		attack: 0,
		dodge: 0,
		counter: 0,
		ultimate: 0,
	}

function selectPlayer(char) {
	$(char.divid).hide();

	stats.hp = char.hp;
	stats.attack = char.attack;
	stats.dodge = char.dodge;
	stats.counter = char.counter;
	stats.ultimate = char.ultimate;

	console.log(stats);

}





	$("#white-knight-img").on("click", function() {
		var choosenCharacter = characters.whiteK;
		console.log(choosenCharacter);

		//TEST runs char through selectPlayer
		selectPlayer(characters.whiteK);
		//TEST transitions to alien page... Make a separate func?
		window.location.href="aliens.html";
		$("#alien-heading").hide();

	});

	$("#red-knight-img").on("click", function() {
		var choosenCharacter = characters.redK;
		console.log(choosenCharacter);
	});

	$("#dragoon-img").on("click", function() {
		var choosenCharacter = characters.dragoon;
		console.log(choosenCharacter);
	});

	$("#uno-img").on("click", function() {
		var choosenCharacter = characters.uno;
		console.log(choosenCharacter);
	});

	$("#chompy-img").on("click", function() {
		var choosenCharacter = characters.chompy;
		console.log(choosenCharacter);
	});

	$("#venom-img").on("click", function() {
		var choosenCharacter = characters.venom;
		console.log(choosenCharacter);
	});

	if (choosenCharacter = characters.uno) {
		playerPicked = true;
		console.log(playerPicked);
	}




});