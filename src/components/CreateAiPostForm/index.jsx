import React from 'react';
import { Button, FormInput } from '../index.js';
import {Link} from "react-router-dom";

const CreateAiPostForm = ({
  handleSubmit,
  register,
  isValid,
  errors,
  submitRequestHandler,
  onChangeFunc,
  clickFunc,
}) => {
  return (
    <div className="border py-10 px-5 rounded bg-white/65 rounded-2xl">
      <form onSubmit={handleSubmit(submitRequestHandler)} className="flex flex-col justify-between items-center">
        <div className="w-full flex justify-center">
          <h2 className="text-3xl font-medium mb-14">
            Enter prompt to generate image from A.I.
          </h2>
          
        </div>
        
        <div className="w-full flex flex-col">
          <FormInput
            inputType="text"
            registerName="prompt"
            placeholder="Your prompt to generate image..."
            register={register}
            error={errors?.prompt?.message}
            regexName="promptAi"
            pre_function={onChangeFunc}
          />
          <div className=" font-medium mb-5">
            <Button
              isActive={isValid}
              text="Generate"
              type="button"
              onClick={clickFunc}
              
            />
          </div>
          <FormInput
            inputType="text"
            registerName="description"
            placeholder="Your description..."
            register={register}
            error={errors?.description?.message}
            regexName="postDescription"
          />
        </div>
        <h3 className=" font-medium mb-5">
            Wait for the image to appear befor posting...
          </h3>
        <div className=" font-medium">
          <Button isActive={isValid} text="Post" type="submit" />
        </div>
        <Link
                    className={"text-blue-400 hover:text-blue-600 hover:underline mt-4"}
                    to={ "/createPost"}
                >{"Upload your own image"}</Link>
      </form>
    </div>
  );
};

export default CreateAiPostForm;
