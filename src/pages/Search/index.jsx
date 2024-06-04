import React, {useEffect, useState} from 'react';
import {Button, Loader, Post} from "../../components";
import {requests} from "../../api/requests.js";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import SearchForm from '../../components/SearchForm/index.jsx';


const Search = () => {
    const [searchResults, setSearchResults] = useState([])

    const {
        register,
        handleSubmit,
        formState: {isValid, errors},
        reset,
    } = useForm({ mode: 'onChange' })
    const [responseError, setResponseError] = useState("");
    const navigate = useNavigate()

    const submitRequestHandler = ({login}) => {
        const data = {
            login
        }

    }

   const searchUser = ({login}) =>{
    requests.getUserSearch(login).then(res => setSearchResults(res.data))
    
   }


    console.log(searchResults)

    // useEffect(() => {
    //     requests.getUserSearch('test').then(res => setSearchResults(res.data))
    // }, []);

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
            />
            <div className={"w-full flex justify-center mt-4"}>
                <p className={"text-red-400 text-xl "}>{responseError}</p>
            </div>
                <div >
                { 
                    searchResults.map(i => (
                      <div className={"mx-auto py-2 px-3 rounded bg-white/65"} key={i.login}>{i.login&&i.login}</div>
                    ))
                }

</div>
            </div>

            
      
    );
};

export default Search;