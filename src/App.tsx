import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import RatingForm from './routes/rating-form/rating-form';
import RatingResults from './routes/rating-results/rating-results';
import { AppStyle } from './App.styles';

const App = () => {
  return (
    <AppStyle>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<RatingForm />} />
          <Route path='results' element={<RatingResults />} />
        </Route>
      </Routes>
    </AppStyle>
  );
};

export default App;
