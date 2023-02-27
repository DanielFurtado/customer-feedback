import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import StarRating from './star-rating';

describe(('Star Rating'), () => {
  it('renders', () => {
    const component = renderer.create(
      <StarRating rating={5} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
