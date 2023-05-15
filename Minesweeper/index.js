let board = [],
  rows = 8,
  columns = 8,
  minesCount = 5,
  minesLocation = [],
  tilesClicked = 0,
  flagEnabled = false,
  gameOver = false;

function render() {
  let body = document.body;
  return body.innerHTML = `
    <div class="header">
     <div class="container">
       <h1 class="header-title">Minesweeper</h1>
     </div>
    </div>
    <main class="main">
      <div class="container">
        <h1 class="main-title">Mines: <span id="mines-count">0</span></h1>
        <div id="board"></div>
      </div>
    </main>
    <footer class="footer">
     <div class="container">
         <div class="footer__inner">
             <div class="footer_github">© 2022 github</div>
             <div class="footer_rss">Rolling Scopes School</div>
             <div class="footer__contact">
                 <a href="https://t.me/vrnk_40000" class="footer__contact-telegram"></a>
                 <a href=" https://discordapp.com/users/952964146071224330" class="footer__contact-discord"></a>
             </div>
         </div>
     </div>
    </footer>
        `
}

render()

function setMines() {
  let minesNum = minesCount;
  while (minesNum > 0) {
    let rowIndex = Math.floor(Math.random() * rows),
      columnIndex = Math.floor(Math.random() * columns),
      id = `${rowIndex}-${columnIndex}`;
    if (!minesLocation.includes(id)) {
      minesLocation.push(id);
      minesNum -= 1;
    }
  }
  console.log('мины:', minesLocation)
}

function clickField() {
  if (gameOver) {return}
  console.log(this)
  
  if (minesLocation.includes(this.id)){
    gameOver = true;
    revealMines();
    return;
  }
  let coords = this.id.split("-"); 
  checkMine(+(coords[0]), +(coords[1]));
}

function revealMines() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let tile = board[i][j];
      if (minesLocation.includes(tile.id)) {
        tile.style.background = "#ff0303 url('./assets/images/bomb.png') no-repeat center center";
        tile.style.backgroundSize ="35px";
        document.querySelector(".main-title").innerText = "GAME OVER";
      }
    }
  }
}

function checkMine(i, j) {
  
  if (i < 0 || i >= rows || j < 0 || j >= columns) {
      return;
  }
  if (board[i][j].classList.contains("tile-clicked")) {
      return;
  }

  board[i][j].classList.add("tile-clicked");
  tilesClicked += 1;

  let minesFound = 0;
  let arr = [[i - 1, j - 1], [i - 1, j], [i-1, j+1],[i, j - 1],[i, j + 1],[i + 1, j - 1],[i + 1, j],[i + 1, j + 1]]
  console.log(arr)
  
  for (let i =0; i < arr.length; i++){
    minesFound += checkTile(+arr[i][0], +arr[i][1]); 
  }

  if (minesFound > 0) {
      board[i][j].innerText = minesFound;
      board[i][j].classList.add("x" + minesFound.toString());
  }
  else {

    for (let i =0; i < arr.length; i++){
      checkMine(arr[i][0], arr[i][1])
    }
  }

  if (tilesClicked == rows * columns - minesCount) {
      document.getElementById("mines-count").innerText = "Cleared";
      gameOver = true;
  }

}

function checkTile(i, j) {
  if (i < 0 || i >= rows || j < 0 || j >= columns) {
      return 0;
  }
  if (minesLocation.includes(i.toString() + "-" + j.toString())) {
      return 1;
  }
  return 0;
}

function start() {
  setMines()
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      let field = document.createElement('div');
      field.addEventListener("click", clickField);
      field.id = `${i}-${j}`;
      document.getElementById('board').append(field);
      row.push(field)
    }
    board.push(row);
  }
  console.log('board', board);
}
start()