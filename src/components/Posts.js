import {useEffect, useState} from "react";

import Post from "./Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            });
    }, [])

    return (
        <div className={'title'}>
            <ul>
                {
                    posts.map(value => <li><Post title={value}/></li>)
                }
            </ul>

        </div>
    );
}