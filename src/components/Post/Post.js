import css from './Post.module.css'

const Post = ({post: {id, userId, title, body}}) => {
    return (
        <div className={css.wrap}>
            <div>Id:{id}</div>
            <div>UserId:{userId}</div>
            <div>Title:{title}</div>
            <div>Body:{body}</div>

        </div>
    );
};

export default Post;