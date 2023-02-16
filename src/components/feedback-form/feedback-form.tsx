import { useState } from 'react';
import uuid from 'react-uuid';
import { useForm, Resolver } from 'react-hook-form';
import { FeedbackFormStyled } from './feedback-form.styles';

const FeedbackForm = () => {
  const [feedbackList, setFeedbackList] = useState<any[]>([]);

  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      rating: '',
      comment: ''
    }
  });

  const onSubmit = (data: object) => {
    const currentRating = { id: uuid(), ...data };
    console.log('currentRating', currentRating);
    setFeedbackList([...feedbackList, currentRating]);
    console.log('feedbackList', feedbackList);
    reset();
  };

  return (
    <FeedbackFormStyled onSubmit={handleSubmit(onSubmit)} noValidate arial-label='Feedback form'>
      <h1>Feedback Form</h1>
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
            required: 'Please enter your rating between 1-5 stars.' 
          })}
          type='number' 
          id='rating'
          className={errors.rating && 'input-error'}
          placeholder='Rating (1-5 stars)' 
          name='rating' 
          max='5'
          min='1'
        />
        {errors.rating?.type === 'required' && 
          <p className='error' role='alert'>
            {errors.rating?.message}
          </p>
        }
      </div>
      <div className='Form--group'>
        <label htmlFor='comment'>Comment *</label>
        <textarea
          {...register('comment', { 
            required: 'Please enter a comment.' 
          })}
          className={errors.comment && 'input-error'}
          id='comment'
          placeholder='Comment' 
          name='comment' 
        />
        {errors.comment?.type === 'required' && 
          <p className='error' role='alert'>
            {errors.comment?.message}
          </p>
        }
      </div>
      <div>
        <button type='submit' className='Button--primary'>Submit</button>
      </div>
    </FeedbackFormStyled>
  );
};

export default FeedbackForm;