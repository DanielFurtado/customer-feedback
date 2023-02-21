import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import renderer from 'react-test-renderer';
import App from './App';

it('renders', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
