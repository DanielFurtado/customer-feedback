import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import FeedbackResultsComments from './feedback-results-comments';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe(('Feedback Results'), () => {
  it('renders', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <FeedbackResultsComments />
        </Router>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});