window.onload = function () {
	main ();
}

function main(){
	var puzzlePiece = document.getElementById('puzzlearea').children;
	
	let positionx = 0;
	let positiony = 0;
	let positionbgx = 0;
	let positionbgy = 0;
	let x = 0;
	let y = 0;
	
	var count = 1;

	for (let i = 0; i < puzzlePiece.length; i++) {
		puzzlePiece[i].className = "puzzlepiece";
		puzzlePiece[i].style.backgroundPosition = "100px 100px";
	}

//first row
	for (let i = 0; i <= 3; i++) {
		if (i === 0)
		{
			puzzlePiece[i].style.left = '0px';
			puzzlePiece[i].style.backgroundPosition = '0px 0px';
			puzzlePiece[i].setAttribute("id", "square" + "_" + 0 + "_" + 0);
			puzzlePiece[i].innerHTML = count++;
			puzzlePiece[i].onmouseover = changecolor;
			puzzlePiece[i].onmouseout = defaultcolor;
			puzzlePiece[i].onclick = puzzle;
			continue;
		}
		positionx += 100;
		positionbgx -= 100;
		y += 1;
		puzzlePiece[i].style.left = positionx + 'px';
		puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
		puzzlePiece[i].setAttribute("id", "square" + "_" + 0 + "_" + y);
		puzzlePiece[i].innerHTML = count++;
		puzzlePiece[i].onmouseover = changecolor;
		puzzlePiece[i].onmouseout = defaultcolor;
		puzzlePiece[i].onclick = puzzle;
		}

//second row
	positionx = 0;
	positiony += 100;
	positionbgx = 0;
	positionbgy -= 100;
	x += 1;
	y = 0;
	
	for (let i = 4; i <= 7; i++) {
		if (i === 4) {
			puzzlePiece[i].style.left = '0px';
			puzzlePiece[i].style.top = '100px';
			puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
			puzzlePiece[i].setAttribute("id", "square" + "_" + 1 + "_" + 0);
			puzzlePiece[i].innerHTML = count++;
			puzzlePiece[i].onmouseover = changecolor;
			puzzlePiece[i].onmouseout = defaultcolor;
			puzzlePiece[i].onclick = puzzle;	
			continue;
		}
		positionx += 100;
		positiony -= 100;
		y += 1;
		puzzlePiece[i].style.left = positionx + 'px';
		puzzlePiece[i].style.top = '100px';
		puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
		puzzlePiece[i].setAttribute("id", "square" + "_" + 1 + "_" + y);
		puzzlePiece[i].innerHTML = count++;
		puzzlePiece[i].onmouseover = changecolor;
		puzzlePiece[i].onmouseout = defaultcolor;
		puzzlePiece[i].onclick = puzzle;
	}

//third row
	positionx = 0;
	positiony += 100;
	positionbgx = 0;
	positionbgy -= 100;
	x += 1;
	y = 0;

	for (let i = 8; i <= 11; i++) {
		if (i === 8) {
			puzzlePiece[i].style.left = '0px';
			puzzlePiece[i].style.top = '200px';
			puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
			puzzlePiece[i].setAttribute("id", "square" + "_" + 2 + "_" + 0);
			puzzlePiece[i].innerHTML = count++;
			puzzlePiece[i].onmouseover = changecolor;
			puzzlePiece[i].onmouseout = defaultcolor;
			puzzlePiece[i].onclick = puzzle;
			continue;
		}
		positionx += 100;
		positionbgx -= 100;
		y += 1;
		puzzlePiece[i].style.left = positionx + 'px';
		puzzlePiece[i].style.top = '200px';
		puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
		puzzlePiece[i].setAttribute("id", "square" + "_" + 2 + "_" + y);
		puzzlePiece[i].innerHTML = count++;
		puzzlePiece[i].onmouseover = changecolor;
		puzzlePiece[i].onmouseout = defaultcolor;
		puzzlePiece[i].onclick = puzzle;
	}

//fourth row
	positionx = 0;
	positiony += 100;
	positionbgx = 0;
	positionbgy -= 100;
	x += 1;
	y = 0;
	
	for (let i = 12; i < 15; i++) {
		if (i === 12) {
			puzzlePiece[i].style.left = '0px';
			puzzlePiece[i].style.top = '300px';
			puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
			puzzlePiece[i].setAttribute("id", "square" + "_" + 3 + "_" + 0);
			puzzlePiece[i].innerHTML = count++;
			puzzlePiece[i].onmouseover = changecolor;
			puzzlePiece[i].onmouseout = defaultcolor;
			puzzlePiece[i].onclick = puzzle;
			continue;
		}
		positionx += 100;
		positionbgx -= 100;
		y += 1;
		puzzlePiece[i].style.left = positionx + 'px';
		puzzlePiece[i].style.top = '300px';
		puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
		puzzlePiece[i].setAttribute("id", "square" + "_" + 3 + "_" + y);
		puzzlePiece[i].innerHTML = count++;
		puzzlePiece[i].onmouseover = changecolor;
		puzzlePiece[i].onmouseout = defaultcolor;
		puzzlePiece[i].onclick = puzzle;
	}
	
	document.getElementById("shufflebutton").onclick = shuffle;
	
	
	function validMove(tile) {	
		var neighbors = getNeighbors();
		if (neighbors.indexOf(tile.getAttribute("id")) != -1) {
			return true;
		} else {
			return false;
		}
	}

	function changecolor() {
    if (validMove(this)) {
      this.setAttribute("class", "movablepiece");
    }
  }
  
  //Unhighlights the moveable, selected tile upon removal of the mouse
	function defaultcolor() {
		if (validMove(this)) {
			this.removeAttribute("class", "movablepiece");
		}
	}

  // Helper function to pass clicked tile to moveTiles
	function puzzle(){
		movePuzzles(this);
	}

  // Swaps the selected tile if it's moveable with the empty tile
	function movePuzzles(tile) {
		var tempEX = x;
		var tempEY = y;
		if (validMove(tile)) {
			x = parseInt(tile.style.left) / 100; 
			y = parseInt(tile.style.top) / 100;
			tile.style.top = 100 * tempEY + "px";
			tile.style.left = 100 * tempEX + "px";
			tile.setAttribute("id", "square_" + tempEX + "_" + tempEY);
		}
	}

  // Shuffles the puzzle and places tiles randomly  
	function shuffle() {
		console.log("test");
		for (var i = 0; i < 1000; i++) {
			var neighbors = getNeighbors();
			var rand = parseInt(Math.random() * neighbors.length);
			var tile = document.getElementById(neighbors[rand]);
			movePuzzles(tile);
		}
	}

  // Checks tiles around selected tile to see if they're empty 
	function getNeighbors() {
		y = 3;
		x = 3;
		var up = "square_" + x + "_" + (y - 1);
		var down = "square_" + x + "_" + (y + 1);
		console.log(down);
		var left = "square_" + (x - 1) + "_" + y;
		var right = "square_" + (x + 1) + "_" + y;

		var tiles = [up, down, left, right];
		var realTiles = [];

		for (var i = 0; i < tiles.length; i++) {
			if (document.getElementById(tiles[i]) != null) {
			realTiles.push(tiles[i]);
			}
		}
		return realTiles;
	}
}