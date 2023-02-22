import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FeedbackForm from './feedback-form';

describe(('Feedback Form'), () => {  
  it('matches the snapshot', () => {
    let component = renderer.create(<FeedbackForm />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the basic fields', () => {
    render(<FeedbackForm />);
 
     expect(screen.getByRole('textbox', { 
       name: /name/i 
     })).toBeInTheDocument();
 
     expect(screen.getByRole('textbox', { 
       name: /email/i 
     })).toBeInTheDocument();
 
     expect(screen.getByRole('spinbutton', { 
       name: /rating/i 
     })).toBeInTheDocument();
 
     expect(screen.getByRole('textbox', { 
       name: /comment/i 
     })).toBeInTheDocument();
 
     expect(screen.getByRole('button', { 
       name: /submit/i 
     })).toBeInTheDocument();
   })

  it('submits the form successfully', async () => {
    const onSubmit = jest.fn();
    render(<FeedbackForm onSubmit={onSubmit} />);

    fireEvent.input(screen.getByRole('textbox', { name: /name/i }), {
      target: { value: 'David Bowie' }
    });

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: { value: 'test@email.com' }
    });

    fireEvent.input(screen.getByRole('spinbutton', { name: /rating/i }), {
      target: { value: 5 }
    });

    fireEvent.input(screen.getByRole('textbox', { name: /comment/i }), {
      target: { value: 'this is a comment' }
    });

    fireEvent.click(screen.getByText(/submit/i));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  it('shows error messages', async () => {
    render(<FeedbackForm />);

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: { value: 'test wrong email' }
    });

    fireEvent.input(screen.getByRole('spinbutton', { name: /rating/i }), {
      target: { value: '6' }
    });

    fireEvent.click(screen.getByText(/submit/i));
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a comment.')).toBeInTheDocument();
    }); 
    expect(screen.getByText('Entered value does not match email format.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a comment.')).toBeInTheDocument();
    expect(screen.getByText('Please enter your rating between 1-5 stars.')).toBeInTheDocument();
  });
});
