import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { CreateAiPostForm } from '../../components/index.js';
import { postApi, uploadPost } from '../../store/services/postApi.js';

const CreateAiPost = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const dispatch = useDispatch();

  const onPromptChange = (event) => {
    if (event && event.target.value) {
      setPrompt(event.target.value);
    }
  };

  const { register, handleSubmit, formState: { isValid, errors }, reset } = useForm({ mode: 'onSubmit' });
  const [responseError, setResponseError] = useState('');

  const createImageHandler = async () => {
    try {
      const response = await fetch('https://api.limewire.com/api/image/generation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Version': 'v1',
          'Accept': 'application/json',
          'Authorization': `Bearer lmwr_sk_lhSUZ5NUf1_BGFFd3Z0Lj61IiBsUWeeXOixg1duVWeEO7aka`,
        },
        body: JSON.stringify({
          prompt: prompt,
          aspect_ratio: '1:1',
        }),
      });
      const result = await response.json();
      if (result && result.data && result.data[0] && result.data[0].asset_url) {
        setImageUrl(result.data[0].asset_url);
      } else {
        throw new Error('Failed to generate image');
      }
    } catch (err) {
      setResponseError('Failed to generate image');
      console.error('Error generating image:', err);
    }
  };

  const createPostHandler = async (data) => {
    try {
      if (imageUrl) {
        const postData = new FormData();
        postData.append('file', imageUrl);
        postData.append('description', data.description);

        const response = await uploadPost(postData);
        console.log('Post created successfully:', response);
        reset();
        setImageUrl('');
      }
    } catch (err) {
      setResponseError('Failed to create post');
      console.error('Failed to create post', err);
    }
  };

  return (
    <div className="px-20 py-24 content-center flex flex-col justify-center">
      <CreateAiPostForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        isValid={isValid}
        submitRequestHandler={createPostHandler} 
        onChangeFunc={onPromptChange}
        clickFunc={createImageHandler} 
      />
      <div className="text-red-400 mt-10 text-center">{responseError}</div>
      <img className="max-w-sm mt-10 self-center object-scale-down rounded-2xl" alt="preview image" src={imageUrl} />
    </div>
  );
};

export default CreateAiPost;
