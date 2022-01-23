import css from './UserDetails.module.css'

const UserDetails = ({user, detUserId}) => {
    const {id, name, username, email} = user;
    return (
        <div className={css.wrap}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <button onClick={() => detUserId(id)}>Posts</button>

        </div>
    );
};

export default UserDetails;