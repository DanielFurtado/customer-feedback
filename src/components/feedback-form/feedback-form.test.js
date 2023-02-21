import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import {BrowserRouter as Router} from 'react-router-dom';
import FeedbackForm from './feedback-form';

describe(('Feedback Form'), () => {
  it('renders', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <FeedbackForm />
        </Router>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});