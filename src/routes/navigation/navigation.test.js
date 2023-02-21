import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import Navigation from './navigation';

describe(('Feedback Results'), () => {
  it('renders', () => {
    let component = renderer.create(
      <Provider store={store}>
        <Router>
          <Navigation />
        </Router>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct label and percentage', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navigation />
        </Router>
      </Provider>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('menubar')).toBeInTheDocument();
  });
});