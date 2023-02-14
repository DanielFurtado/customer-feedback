import { ReactComponent as CheckoutLogo } from './logo.svg';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <header className="App--header">
        <CheckoutLogo />
      </header>
      <main className='Main--container'>
        <form className='Form'>
          <h1>Feedback Form</h1>
          <div className='Form--group'>
            <label htmlFor='name'>Name *</label>
            <input 
              type='text'
              id='name'
              placeholder='Name' 
              name='name' 
            />
          </div>
          <div className='Form--group'>
            <label htmlFor='email'>Email *</label>
            <input 
              type='text' 
              id='email'
              placeholder='Email' 
              name='email' 
            />
          </div>
          <div className='Form--group'>
            <label htmlFor='rating'>Rating *</label>
            <input 
              type='text' 
              id='rating'
              placeholder='Rating (1-5 stars)' 
              name='rating' 
            />
          </div>
          <div className='Form--group'>
            <label htmlFor='comment'>Comment *</label>
            <input 
              type='textarea' 
              className='Form--textarea'
              id='comment'
              placeholder='Comment' 
              name='comment' 
            />
          </div>
          <div>
            <button type='submit' className='Button--primary'>Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default App;
