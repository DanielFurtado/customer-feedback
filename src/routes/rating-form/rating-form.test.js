import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import RatingForm from './rating-form';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe(('Rating Form'), () => {
  it('renders', () => {
    let component = renderer.create(
      <Provider store={store}>
        <Router>
          <RatingForm />
        </Router>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});