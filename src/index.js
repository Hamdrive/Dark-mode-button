import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App() {

  const [theme, setTheme] = useState(false)

  return (
    <div className={theme ? "light-mode" : "dark-mode"}>
      <main>
        <h1>Hello {theme ? "Light" : "Dark"} World!</h1>
        <br />
      </main>

      <div className="theme-toggle">
        <button onClick={() => setTheme((prevTheme) => !prevTheme)}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(

  <App />,

  document.getElementById('root')
);
