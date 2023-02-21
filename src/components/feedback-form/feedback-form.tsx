import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { setRating } from '../../store/rating/rating.action';

import { 
  FeedbackFormStyled, 
  FormButtonWrapper, 
  FormGroupComment, 
  FormSection, 
  FormWrapper 
} from './feedback-form.styles';
import { ButtonPrimary } from '../../App.styles';

type FormData = {
  id: string,
  name: string;
  email: string;
  rating: string;
  comment: string;
}

const FeedbackForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, formState: { errors }, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: object) => {
    const currentRating: any = { 
      id: uuid(), 
      ...data 
    };
    dispatch(setRating(currentRating));
    reset();
    navigate('/results');
  };

  return (
    <FeedbackFormStyled noValidate arial-label='Feedback form'>
      <h2>Feedback Form</h2>
      <FormWrapper>
        <FormSection>
          <div className='Form--group'>
            <label htmlFor='name'>Name *</label>
            <input 
              {...register('name', { 
                required: 'Please enter your name.' 
              })}
              type='text'
              id='name'
              className={errors.name && 'input-error'}
              placeholder='Name' 
              name='name'
              aria-label='Name'
              aria-invalid={errors.name ? 'true' : 'false'}
            />
            {errors.name?.type === 'required' && 
              <p className='error' role='alert'>
                {errors.name?.message}
              </p>
            }
          </div>
          <div className='Form--group'>
            <label htmlFor='email'>Email *</label>
            <input 
              {...register('email', { 
                required: 'Please enter your email.',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format.'
                }
              })}
              type='text' 
              id='email'
              className={errors.email && 'input-error'}
              placeholder='Email' 
              name='email' 
              aria-label='Email'
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && 
              <p className='error' role='alert'>
                {errors.email?.message}
              </p>
            }
          </div>
          <div className='Form--group'>
            <label htmlFor='rating'>Rating *</label>
            <input 
              {...register('rating', { 
                required: 'Please select a rating',
                pattern: {
                  value: /^[1-5]$/,
                  message: 'Please enter your rating between 1-5 stars.'
                }
              })}
              type='number' 
              id='rating'
              className={errors.email && 'input-error'}
              placeholder='Rating (1-5 stars)' 
              name='rating' 
              max='5'
              min='1'
              aria-label='Rating'
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {(errors.rating?.type === 'required') && 
              <p className='error' role='alert'>
                {errors.rating?.message}
              </p>
            }
          </div>
        </FormSection>
        <FormSection>
          <FormGroupComment>
            <label htmlFor='comment'>Comment *</label>
            <textarea
              {...register('comment', { 
                required: 'Please enter a comment.' 
              })}
              className={errors.comment && 'input-error'}
              id='comment'
              placeholder='Comment' 
              name='comment' 
              aria-label='Comment'
              aria-invalid={errors.comment ? 'true' : 'false'}
            />
            {errors.comment?.type === 'required' && 
              <p className='error' role='alert'>
                {errors.comment?.message}
              </p>
            }
          </FormGroupComment>
        </FormSection>
      </FormWrapper>
      <FormButtonWrapper>
        <ButtonPrimary type='submit' onClick={handleSubmit(onSubmit)}>
          Submit
        </ButtonPrimary>
      </FormButtonWrapper>
    </FeedbackFormStyled>
  );
};

export default FeedbackForm;