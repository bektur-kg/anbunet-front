import React, {useState} from "react"
import {CreatePostForm} from "../../components/index.js"
import {useForm} from "react-hook-form"
import {requests} from "../../api/requests.js"

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
        formState: {isValid, errors},
        reset,
    } = useForm({mode: "onChange"})
    const [responseError, setResponseError] = useState("")
    const [isPostCreated, setIsPostCreated] = useState(false)

    const createPostHandler = ({file, description}) => {
        const formData = new FormData()
        formData.append("file", file[0])
        formData.append("description", description)

        requests
            .createPost(formData)
            .then((res) => setIsPostCreated(true))
            .catch((res) => setResponseError(res.response.data.description))
            .finally(reset)
    }

    return (
        <div className={"px-20 py-24"}>
            <CreatePostForm
                register={register}
                errors={errors}
                handleSubmit={handleSubmit}
                isValid={isValid}
                submitRequestHandler={createPostHandler}
                pre_function_input={onImageChange}
            />
            <div className={"text-red-400 mt-5 text-center"}>{responseError}</div>
            {
                isPostCreated && <div className={"text-emerald-400 text-xl mt-5 text-center"}>Post Created Successfully! </div>
            }
           <div className={'flex justify-center'}> <img className={"max-w-sm  mt-2   object-scale-down rounded-2xl"} alt="preview image" src={image} />
           </div>
        </div>
        
    )
}

export default CreatePost;
