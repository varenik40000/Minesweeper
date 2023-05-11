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

