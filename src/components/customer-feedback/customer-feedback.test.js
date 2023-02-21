import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import CustomerFeedback from './customer-feedback';

describe(('Customer Feedback component'), () => {
  const feedback = {
    id: 123,
    name: 'Name',
    email: 'test@email.com',
    rating: 5,
    comment: 'this is a comment'
  };

  it('renders', () => {
    const component = renderer.create(
      <CustomerFeedback 
        key={feedback.id} 
        feedback={feedback} 
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});