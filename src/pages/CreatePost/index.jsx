import React, { useState } from "react";
import { CreatePostForm } from "../../components/index.js";
import { useForm } from "react-hook-form";
import { requests } from "../../api/requests.js";

const CreatePost = () => {
  const [image, setImage] = useState('./128px-placeholder.png');
  const onImageChange = (event) => {
    if (event) {
      console.log(event);
      if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
        console.log('1')
      }
      if (!event.target.value.includes("fakepath")) {
        setDescription(event.target.value);
      }
    } else {
      setImage(imgplace);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({ mode: "onChange" });
  const [responseError, setResponseError] = useState("");

  const createPostHandler = ({ file, description }) => {
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("description", description);

    requests
      .createPost(formData)
      .then((res) => console.log(res))
      .catch((res) => setResponseError(res.response.data.description));
  };

  return (
    <div className={"px-20 py-24 content-center flex flex-col justify-center"}>
      <CreatePostForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        isValid={isValid}
        submitRequestHandler={createPostHandler}
        pre_function_input={onImageChange}
      />
      <div className={"text-red-400 mt-10 text-center"}>{responseError}</div>
      <img className={"max-w-sm  mt-10  self-center  object-scale-down rounded-2xl"} alt="preview image" src={image} />
    </div>
  );
};

export default CreatePost;
