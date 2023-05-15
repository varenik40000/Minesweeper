let board = [],
  rows = 8,
  columns = 8,
  minesCount = 5,
  
  // btnStart = document.querySelectorAll('.btn-start')[0],
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

function start() {
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
      let field = document.createElement('div');
      field.id = `${i}-${j}`;
      document.getElementById('board').append(field);
      row.push(field)
    }
    board.push(row);
  }
  console.log('board', board);
}
start()