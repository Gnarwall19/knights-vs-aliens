$(document).ready(function() {

characterImages = ["../images/white-knight.gif", "../images/red-knight.gif", "../images/dragoon.gif", "../images/chompy.gif", "../images/uno.gif", "../images/venom.gif"]

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


//Reload Page
$(".btn").on("click", function() {
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
	$("#enemy-prompt").fadeIn();
});

//Red Knight
$("#red-knight-img").on("click", function() {
	$("#white-knight-img, #dragoon-img").fadeOut();
	$(".choose-knights").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"-250px"}, "slow");
	$("#aliens-container").delay(2000).fadeIn();
	$("#enemy-prompt").fadeIn();
});

//Dragoon
$("#dragoon-img").on("click", function() {
	$("#red-knight-img, #white-knight-img").fadeOut();
	$(".choose-knights").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"-270px"}, "slow");
	$("#aliens-container").delay(2000).fadeIn();
	$("#enemy-prompt").fadeIn();
});


//Choose Your Character: Aliens

//Uno
$("#uno-img").on("click", function() {
	$("#chompy-img, #venom-img").fadeOut();
	$(".choose-aliens").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"-185px"}, "slow");
	$("#knights-container").delay(2000).fadeIn();
	$("#enemy-prompt-knights").fadeIn();
	$(this).css("margin-left", "800px");
	$("#enemy-prompt").hide();
	$("#enemy-prompt-knights").hide();	
});

//Chompy
$("#chompy-img").on("click", function() {
	$("#uno-img, #venom-img").fadeOut();
	$(".choose-aliens").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"310px"}, "slow");
	$("#knights-container").delay(2000).fadeIn();
	$("#enemy-prompt-knights").fadeIn();
});

//Venom
$("#venom-img").on("click", function() {
	$("#uno-img, #chompy-img").fadeOut();
	$(".choose-aliens").fadeOut();
	$(this).css("border", "none");
	$(this).animate({"margin-top":"310px"}, "slow");
	$("#knights-container").delay(2000).fadeIn();
	$("#enemy-prompt-knights").fadeIn();
});

});