import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import HorizontalBarGraph from './horizontal-bar-graph';

describe(('Feedback Results'), () => {
  const rating = {
    id: 123,
    barColour: '#cccccc',
    label: '5 star',
    startTime: '0.1s',
    percentage: '100'
  };

  it('renders', () => {
    let component = renderer.create(
      <Provider store={store}>
        <Router>
          <HorizontalBarGraph rating={rating} />
        </Router>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct label and percentage', () => {
    render(<HorizontalBarGraph rating={rating} />);
    expect(screen.getByText('5 star')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
});