import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { BrowserRouter as Router } from 'react-router-dom';
import FeedbackForm from './feedback-form';

describe(('Feedback Form'), () => {  
  const renderFeedbackForm = () => {
    return render(
      <Provider store={store}>
        <Router>
          <FeedbackForm />
        </Router>
      </Provider>
    );
  };

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
    renderFeedbackForm();

    expect(screen.getByRole('textbox', { 
      name: 'Name' 
    })).toBeInTheDocument();

    expect(screen.getByRole('textbox', { 
      name: 'Email' 
    })).toBeInTheDocument();

    expect(screen.getByRole('spinbutton', { 
      name: 'Rating' 
    })).toBeInTheDocument();

    expect(screen.getByRole('textbox', { 
      name: 'Comment' 
    })).toBeInTheDocument();

    expect(screen.getByRole('button', { 
      name: 'Submit' 
    })).toBeInTheDocument();
  });

  it('shows error messages', async () => {
    renderFeedbackForm();

    fireEvent.input(screen.getByRole('textbox', { name: 'Email' }), {
      target: { value: 'test wrong email' }
    });

    fireEvent.click(screen.getByText(/submit/i));
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a comment.')).toBeInTheDocument();
    }); 
    expect(screen.getByText('Entered value does not match email format.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a comment.')).toBeInTheDocument();
    expect(screen.getByText('Please select a rating')).toBeInTheDocument();
  });
});
