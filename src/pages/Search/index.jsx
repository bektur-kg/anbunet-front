import React, { useEffect, useState } from "react";
import { Button, Loader, Post } from "../../components";
import { requests } from "../../api/requests.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import SearchForm from "../../components/SearchForm/index.jsx";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture.jsx";
import { useDebounce } from "@uidotdev/usehooks";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [login2, setLogin2] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({ mode: "onChange" });
  const [responseError, setResponseError] = useState("");
  const navigate = useNavigate();

const url = "https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar.png"

  const onInputChange = (event) => {
    if (event) {
      if (event.target.value && event.target.value) {
        const value = event.target.value;
        if (login2 != value) {
          setLogin2(value);
          //   debouncedonInputChange();
        }
      }
    } else null;
  };

  const searchUser2 = () => {
    requests.getUserSearch(login2).then((res) => setSearchResults(res.data));
    
    console.log(url)
  };
  const debouncedonInputChange = useDebounce(login2, 500);
  //   const debouncedonInputChange2 = useDebounce(onInputChange, 300);
  const submitRequestHandler = ({ login }) => {
    const data = {
      login,
    };
  };

  const searchUser = ({ login }) => {
    requests.getUserSearch(login).then((res) => setSearchResults(res.data));
  };

  console.log(searchResults);

  useEffect(() => {
    if (login2) {
      searchUser2();
    }
  }, [debouncedonInputChange]);

  // if(!searchResults) return <Loader/>
  return (
    <div className={"w-3/4 mx-auto border py-2 px-3 rounded bg-white/65"}>
      <SearchForm
        formTitle={"Search users"}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        isValid={isValid}
        reset={reset}
        submitRequestHandler={searchUser}
        pre_function_input={onInputChange}
      />
      <div className={"w-full flex justify-center mt-4"}>
        <p className={"text-red-400 text-xl "}>{responseError}</p>
      </div>
      <div>
        {searchResults.map((i) => (
          <div
            key={i.login}
            className={
              "mx-auto py-2 px-3 rounded bg-white/65 flex flex-row items-center"
            }
          >
            {i.login && (
              <>
                <ProfilePicture url={i.profilePicture ? i.profilePicture : url} />


                <Link
                  className={
                    "text-black-800 font-bold text-xl hover:text-blue-800 hover:underline text-center ml-5"
                  }
                  to={`/profile/${i.id}`}
                >
                  {i.login}
                </Link>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
