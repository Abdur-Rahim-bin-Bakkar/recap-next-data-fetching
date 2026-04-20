import React, { use } from 'react';

const res = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

const PostsPage = () => {
    const posts2 = use(res)
    console.log(posts2)
    return (
        <div>
            <h1>post are coming sone:{posts2.length} </h1>
        </div>
    );
};

export default PostsPage;