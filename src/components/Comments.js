import {useEffect, useState} from "react";

import Comment from "./Comment";


export default function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });
    }, [])
    return (
        <div className={'body'}>
            <ul>
                {
                    comments.map(value => <li><Comment body={value}/></li>)
                }
            </ul>

        </div>
    );
}