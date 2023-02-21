import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import {BrowserRouter as Router} from 'react-router-dom';
import FeedbackForm from './feedback-form';

describe(('Feedback Form'), () => {  
  it('renders', () => {
    let component = renderer.create(
      <Provider store={store}>
        <Router>
          <FeedbackForm />
        </Router>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the basic fields', () => {
    render(
      <Provider store={store}>
        <Router>
          <FeedbackForm />
        </Router>
      </Provider>
    );

    expect(screen.getByRole('textbox', { 
      name: 'Name' 
    })).toBeInTheDocument();

    expect(screen.getByRole('textbox', { 
      name: 'Email' 
    })).toBeInTheDocument();

    expect(screen.getByRole('spinbutton', { 
      name: 'Rating' 
    })).toBeInTheDocument();

    expect(screen.getByRole('button', { 
      name: 'Submit' 
    })).toBeInTheDocument();
  });
});


