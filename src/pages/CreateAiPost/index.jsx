import React, { useState } from "react";
import { CreateAiPostForm } from "../../components/index.js";
import { useForm } from "react-hook-form";
import { requests } from "../../api/requests.js";
import { postApi } from "../../store/services/postApi.js";
import AiImage from "../../components/AiImage/AiImage.jsx";


const CreateAiPost = () => {
  
  
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  

  
  
  const onPromptChange = (event) => {
    if (event) {
      
      if (event.target.value) {
        setPrompt(event.target.value)};
        console.log('1')
        console.log(prompt)
      }
      
    }
  
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({ mode: "onSubmit" });
  const [responseError, setResponseError] = useState("");

  // const createPostHandler = ({ file, description }) => {
  //   const formData = new FormData();
  //   formData.append("file", file[0]);
  //   formData.append("description", description);

  //   requests
  //     .createPost(formData)
  //     .then((res) => console.log(res))
  //     .catch((res) => setResponseError(res.response.data.description));
  // };

  const createImageHandler = (prompt) => {
console.log(prompt)
const result = postApi.useGetAiQuery(prompt);
setImageUrl(result.data[0].asset_url)
console.log(imagedata)
  };

  return (
    <div className={"px-20 py-24 content-center flex flex-col justify-center"}>
      <CreateAiPostForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        isValid={isValid}
        submitRequestHandler={createImageHandler}
        onChangeFunc={onPromptChange}
       
      />
      <div className={"text-red-400 mt-10 text-center"}>{responseError}</div>
      <img className={"max-w-sm  mt-10  self-center  object-scale-down rounded-2xl"} alt="preview image" src={image} />
      <img className={"max-w-sm  mt-10  self-center  object-scale-down rounded-2xl"} alt="preview image" src={imageUrl} />
    </div>
  );
};

export default CreateAiPost;


// import React, { useState } from "react";
// import { CreateAiPostForm } from "../../components/index.js";
// import { useForm } from "react-hook-form";
// import { postApi } from "../../store/services/postApi.js";

// const CreateAiPost = () => {

//   // const {
//   //   data: imagedata,
//   //   isLoading,
//   //   isError,
//   //   refetch,
//   // } = postApi.useGetAiQuery(prompt);

//   // response.data[0]asset_url should give result
//   const [image, setImage] = useState(null);
//   const [imageUrl, setImageUrl] = useState('');
//   const [prompt, setPrompt] = useState('');

  

//   const onPromptChange = (event) => {
//     if (event && event.target.value) {
//       setPrompt(event.target.value);
//       console.log('1');
//       console.log(prompt);
//     }
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { isValid, errors },
//     reset,
//   } = useForm({ mode: "onSubmit" });
//   const [responseError, setResponseError] = useState("");

//   const createImageHandler = async ({ prompt }) => {
//     try {
//       console.log(prompt);
//       const result = await postApi.useGetAiQuery({ prompt });
//       console.log(result);
//       setImageUrl(result.data[0]asset_url);  // Assuming your API response contains imageUrl
//     } catch (err) {
//       setResponseError(err.message);
//       console.error('Failed to create image', err);
//     }
//   };

//   return (
//     <div className={"px-20 py-24 content-center flex flex-col justify-center"}>
//       <CreateAiPostForm
//         register={register}
//         errors={errors}
//         handleSubmit={createImageHandler}
//         isValid={isValid}
//         submitRequestHandler={createImageHandler}
//         onChangeFunc={onPromptChange}
//       />
//       <div className={"text-red-400 mt-10 text-center"}>{responseError}</div>
//       <img className={"max-w-sm  mt-10  self-center  object-scale-down rounded-2xl"} alt="preview image" src={image} />
//       <img className={"max-w-sm  mt-10  self-center  object-scale-down rounded-2xl"} alt="preview image" src={imageUrl} />
//     </div>
//   );
// };

// export default CreateAiPost;
