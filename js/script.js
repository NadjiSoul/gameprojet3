
//Replay

function init(){
	//Hide the button "replay"
	document.getElementById('replay').style.visibility = "hidden";
	//Initialization of players
	players = ['X','O'];
	//The player who starts
	player = players[0];
}

function play(zone) {
	if (player === players[0]) {
         //If the case it's filled
		if (document.getElementById(zone).className.indexOf('filled') >= 0) {
			alert("You can't do that...");
		} else {
			document.getElementById(zone).style.backgroundImage = "url(img/cross.png)";
			document.getElementById(zone).className += " filled";
			document.getElementById(zone).textContent = "  ";
			player = players[1];
		}
	}
	else if (player === players[1]) {
		if (document.getElementById(zone).className.indexOf('filled') >= 0) {
			alert("You can't do that...");
		} else {
			document.getElementById(zone).style.backgroundImage = "url(img/circle.png)";
			document.getElementById(zone).className += " filled";
			document.getElementById(zone).textContent = " ";
			player = players[0];
		}
	}
        check();
    }

function check(){
	one = document.getElementById('zone1').textContent;
	two = document.getElementById('zone2').textContent;
	three = document.getElementById('zone3').textContent;
	four = document.getElementById('zone4').textContent;
	five = document.getElementById('zone5').textContent;
	six = document.getElementById('zone6').textContent;
	seven = document.getElementById('zone7').textContent;
	eight = document.getElementById('zone8').textContent;
	nine = document.getElementById('zone9').textContent;
	//queryselectorall
	if(
		//En ligne
		one === two  === three || 
		four === five && four === six ||
		seven === eight && seven === nine ||
		//En colonne
		one === four && one === seven ||
		two === five && two === eight ||
		three === six && three === nine ||
		//En diagonale
		one === five && one === nine ||
		three === five && three === seven
		){
		if(player = players[0]){
			alert('Player O win');
		}
		else if(player = players[1]){
			alert('Player X win');
		}

		//Rendre visible le boutton replay
		document.getElementById('replay').style.visibility = "visible";
		document.getElementById('replay').onclick = function(){
			location.reload();
		}
	}

}