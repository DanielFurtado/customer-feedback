import { ReactComponent as CheckoutLogo } from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckoutLogo />
      </header>
      <main className='Main-container'>
        <p>
          <button className='Button-primary'>Click me!</button>
        </p>
      </main>
    </div>
  );
}

export default App;
