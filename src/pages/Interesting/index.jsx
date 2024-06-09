import React, {useEffect, useState} from 'react';
import {requests} from "../../api/requests.js";
import {Loader, Post} from "../../components";

const Interesting = () => {
    const [posts, setPosts] = useState()
    const [page, setPage] = useState(2)
    const PAGE_SIZE = 10

    useEffect(() => {
        requests.getInterestingPosts(page, PAGE_SIZE)
            .then(res => setPosts(res.data))
    }, [])


    if (!posts) return <Loader/>
    return (
        <div className={"px-20 py-24 w-1/2 mx-auto"}>
            {
                posts?.toReversed().map(p => (
                    <Post
                        key={p.id}
                        id={p.id}
                        mediaUrl={p.mediaUrl}
                        description={p.description}
                        comments={p.comments}
                        createdDate={p.createdDate}
                        likes={p.likes}
                        user={p.user}
                    />
                ))
            }
        </div>
    );
};

export default Interesting;