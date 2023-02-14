import { Key } from 'react';
import { ReactComponent as CheckoutLogo } from './logo.svg';

import FeedbackForm from './components/feedback-form/feedback-form';
import FeedbackResults from './components/feedback-results/feedback-results';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App--header">
        <CheckoutLogo />
      </header>
      <main className='Main--container'>
        <FeedbackForm />
        <hr />
        <FeedbackResults />
      </main>
    </div>
  );
}

export default App;
