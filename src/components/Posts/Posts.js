import Post from "../Post/Post";
import css from './Posts.module.css'

const Posts = ({posts}) => {
    return (
        <div className={css.wrap}>
            {posts.map(post => <Post key={post.id} post={post}/>)}


        </div>
    );
};

export default Posts;