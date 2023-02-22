import uuid from 'react-uuid';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from '../../App.styles';
import FeedbackForm  from '../../components/feedback-form/feedback-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setRating } from '../../store/rating/rating.action';

const RatingForm = () => { 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { reset } = useForm<FormData>();

  const onSubmit: any = (data: object) => {
    const currentRating: any = { id: uuid(), ...data };
    dispatch(setRating(currentRating));
    reset();
    navigate('/results');
  };

  return (
    <Fragment>
      <MainContainer>
        <FeedbackForm onSubmit={onSubmit} />
      </MainContainer>
      <Outlet />
    </Fragment>
  );
};

export default RatingForm;
