window.onload = function () {
	main();

	function main(){
		var puzzlePiece = document.getElementById('puzzlearea').children;
		let emptySpace = [4,4];
	
		function setPuzzle(){
			let positionx = 0;
			let positiony = 0;
			let positionbgx = 0;
			let positionbgy = 0;
			let x = 1;
			let y = 1;
	

			for (let i = 0; i < puzzlePiece.length; i++) {
				puzzlePiece[i].className = "puzzlepiece";
				puzzlePiece[i].style.backgroundPosition = "100px 100px";
			}

			//first row
			for (let i = 0; i <= 3; i++) {
				if (i === 0){
					puzzlePiece[i].style.left = '0px';
					puzzlePiece[i].style.backgroundPosition = '0px 0px';
					puzzlePiece[i].setAttribute("id", "square" + "_" + 1 + "_" + 1);
					puzzlePiece[i].setAttribute("row", 1);
					puzzlePiece[i].setAttribute("column" , 1);
					continue;
				}
				positionx += 100;
				positionbgx -= 100;
				y += 1;
				puzzlePiece[i].style.left = positionx + 'px';
				puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
				puzzlePiece[i].setAttribute("id", "square" + "_" + 1 + "_" + y);
				puzzlePiece[i].setAttribute("row", 1);
				puzzlePiece[i].setAttribute("column" , y);
			}

			//second row
			positionx = 0;
			positiony += 100;
			positionbgx = 0;
			positionbgy -= 100;
			x += 1;
			y = 1;
	
			for (let i = 4; i <= 7; i++) {
				if (i === 4) {
					puzzlePiece[i].style.left = '0px';
					puzzlePiece[i].style.top = '100px';
					puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
					puzzlePiece[i].setAttribute("id", "square" + "_" + 2 + "_" + 1);
					puzzlePiece[i].setAttribute("row", 2);
					puzzlePiece[i].setAttribute("column" , 1);	
					continue;
				}
				positionx += 100;
				positiony -= 100;
				y += 1;
				puzzlePiece[i].style.left = positionx + 'px';
				puzzlePiece[i].style.top = '100px';
				puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
				puzzlePiece[i].setAttribute("id", "square" + "_" + 2 + "_" + y);
				puzzlePiece[i].setAttribute("row", 2);
				puzzlePiece[i].setAttribute("column" , y);
			}

			//third row
			positionx = 0;
			positiony += 100;
			positionbgx = 0;
			positionbgy -= 100;
			x += 1;
			y = 1;

			for (let i = 8; i <= 11; i++) {
				if (i === 8) {
					puzzlePiece[i].style.left = '0px';
					puzzlePiece[i].style.top = '200px';
					puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
					puzzlePiece[i].setAttribute("id", "square" + "_" + 3 + "_" + 1);
					puzzlePiece[i].setAttribute("row", 3);
					puzzlePiece[i].setAttribute("column" , 1);
					continue;
				}
				positionx += 100;
				positionbgx -= 100;
				y += 1;
				puzzlePiece[i].style.left = positionx + 'px';
				puzzlePiece[i].style.top = '200px';
				puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
				puzzlePiece[i].setAttribute("id", "square" + "_" + 3 + "_" + y);
				puzzlePiece[i].setAttribute("row", 3);
				puzzlePiece[i].setAttribute("column" , y);
			}

			//fourth row
			positionx = 0;
			positiony += 100;
			positionbgx = 0;
			positionbgy -= 100;
			x += 1;
			y = 1;
	
			for (let i = 12; i < 15; i++) {
				if (i === 12) {
					puzzlePiece[i].style.left = '0px';
					puzzlePiece[i].style.top = '300px';
					puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
					puzzlePiece[i].setAttribute("id", "square" + "_" + 4 + "_" + 1);
					puzzlePiece[i].setAttribute("row", 4);
					puzzlePiece[i].setAttribute("column" , 1);
					continue;
				}
				positionx += 100;
				positionbgx -= 100;
				y += 1;
				puzzlePiece[i].style.left = positionx + 'px';
				puzzlePiece[i].style.top = '300px';
				puzzlePiece[i].style.backgroundPosition = `${positionbgx + 'px'} ${positionbgy + 'px'}`;
				puzzlePiece[i].setAttribute("id", "square" + "_" + 4 + "_" + y);
				puzzlePiece[i].setAttribute("row", 4);
				puzzlePiece[i].setAttribute("column" , y);
			}
		}
	
		function addEvent() {
			for (let i = 0; i < puzzlePiece.length; i++) {
				puzzlePiece[i].onmouseover = changeColor;
				puzzlePiece[i].onmouseout = removeColor;
				puzzlePiece[i].onclick = movePuzzle;
			}
			document.getElementById("shufflebutton").onclick = shuffle;
		}

	
		function movePuzzle() {
			let temp = [];
			let row = parseInt(this.getAttribute("row"));
			let column = parseInt(this.getAttribute("column"));
			if (((row - 1) === emptySpace[0] && column === emptySpace[1]) || ((row + 1) === emptySpace[0] && column === emptySpace[1]) ||
			(row === emptySpace[0] && (column - 1) === emptySpace[1]) || (row === emptySpace[0] && (column + 1) === emptySpace[1])){
				temp[0] = emptySpace[0];
				temp[1] = emptySpace[1];
				emptySpace[0] = row;
				emptySpace[1] = column;
				this.setAttribute("id", "square_" + temp[0] + "_" + temp[1]);
				this.setAttribute("row", temp[0]);
				this.setAttribute("column", temp[1]);
				this.style.top = ((temp[0] - 1) * 100) + "px";
				this.style.left =  ((temp[1] - 1) * 100) + "px";
			}
			puzzleComplete();
		}
	
		function changeColor(){
			let row = parseInt(this.getAttribute("row"));
			let column = parseInt(this.getAttribute("column"));
			if (((row - 1) === emptySpace[0] && column === emptySpace[1]) || ((row + 1) === emptySpace[0] && column === emptySpace[1]) ||
			(row === emptySpace[0] && (column - 1) === emptySpace[1]) || (row === emptySpace[0] && (column + 1) === emptySpace[1])){
				this.className += " movablepiece";
			}
		}	
	
		function removeColor(){
			if (this.className.includes("movablepiece")) {
				this.classList.remove("movablepiece");
			}
		}
		
		function shuffle(){
			console.log("test");
		}
		
		function puzzleComplete(){
			if ((parseInt(puzzlePiece[0].getAttribute("row")) == 1) && (parseInt(puzzlePiece[0].getAttribute("column"))) == 1){
				console.log("test");
				if ((parseInt(puzzlePiece[1].getAttribute("row")) == 1) && (parseInt(puzzlePiece[1].getAttribute("column"))) == 2){
					if ((parseInt(puzzlePiece[2].getAttribute("row")) == 1) && (parseInt(puzzlePiece[2].getAttribute("column"))) == 3){
						if ((parseInt(puzzlePiece[3].getAttribute("row")) == 1) && (parseInt(puzzlePiece[3].getAttribute("column"))) == 4){
							if ((parseInt(puzzlePiece[4].getAttribute("row")) == 2) && (parseInt(puzzlePiece[4].getAttribute("column"))) == 1){
								if ((parseInt(puzzlePiece[5].getAttribute("row")) == 2) && (parseInt(puzzlePiece[5].getAttribute("column"))) == 2){
									if ((parseInt(puzzlePiece[6].getAttribute("row")) == 2) && (parseInt(puzzlePiece[6].getAttribute("column"))) == 3){
										if ((parseInt(puzzlePiece[7].getAttribute("row")) == 2) && (parseInt(puzzlePiece[7].getAttribute("column"))) == 4){
											if ((parseInt(puzzlePiece[8].getAttribute("row")) == 3) && (parseInt(puzzlePiece[8].getAttribute("column"))) == 1){
												if ((parseInt(puzzlePiece[9].getAttribute("row")) == 3) && (parseInt(puzzlePiece[9].getAttribute("column"))) == 2){
													if ((parseInt(puzzlePiece[10].getAttribute("row")) == 3) && (parseInt(puzzlePiece[10].getAttribute("column"))) == 3){
														if ((parseInt(puzzlePiece[11].getAttribute("row")) == 3) && (parseInt(puzzlePiece[11].getAttribute("column"))) == 4){
															if ((parseInt(puzzlePiece[12].getAttribute("row")) == 4) && (parseInt(puzzlePiece[12].getAttribute("column"))) == 1){
																if ((parseInt(puzzlePiece[13].getAttribute("row")) == 4) && (parseInt(puzzlePiece[13].getAttribute("column"))) == 2){
																	if ((parseInt(puzzlePiece[14].getAttribute("row")) == 4) && (parseInt(puzzlePiece[14].getAttribute("column"))) == 3){
																		setInterval(youWin, 10);
																	} 
																}
															} 
														}
													} 
												} 
											}
										}
									}
								}
							}
						} 
					} 
				} 
			}
		}
		
		function youWin(){
			for (let i = 0; i < puzzlePieces.length; i++) {
				puzzlePiece[i].style.backgroundImage = " info2180-project2/YouWon.jpg ";
			}
		}
		
		/*function shuffle() {   
			for (let i = 0; i < 1000; i++) {
				var neighbors = getNeighbors();
				var rand = parseInt(Math.random() * neighbors.length);
				var puzzle = document.getElementById(neighbors[rand]);
				movePuzzle();
			}
		}
		
		function getNeighbors() {
			for (let i = 0; i < puzzlePiece.length; i++) {
				let row = parseInt(puzzlePiece[i].getAttribute("row"));
				let column = parseInt(puzzlePiece[i].getAttribute("column"));
				var up = "square_" + row + "_" + (column - 1);
				var down = "square_" + row + "_" + (column + 1);
				var left = "square_" + (row - 1) + "_" + column;
				var right = "square_" + (row + 1) + "_" + column;

				var tiles = [up, down, left, right];
				var realTiles = [];

				for (let p = 0; p < tiles.length; p++) {
					if (document.getElementById(tiles[p]) != null) {
						realTiles.push(tiles[p]);
					}
				}
				return realTiles;
			}
		}*/
		
		setPuzzle();
		addEvent();
	}
};