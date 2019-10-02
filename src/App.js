import React from 'react';
import './App.scss';
import demoShortcutLogo from './demo.shortcut.svg';

/* TODO: вёрстка
1) написать хедер
2) написать футер
3) создать компонент
 */


function App() {
  return (
    <div className="App">
      <header className="App__header">
          header!!
      </header>
      <main>
          I'm main!
      </main>
      <footer className="App__footer footer">
          <div className="footer__shortcut">
              <img src={demoShortcutLogo} className="footer__icon" alt="demo shortcut logo" />
              <span>Сегодня</span>
          </div>
          <div className="footer__shortcut">
              <img src={demoShortcutLogo} className="footer__icon" alt="demo shortcut logo" />
              <span>Статистика</span>
          </div>
      </footer>
    </div>
  );
}

export default App;
