import { useLoaderData } from "react-router";

const Post = () => {
    const post =useLoaderData();
    const {title,body}=post
    return (
        <div>
            <h2 className="font-bold text-3xl">{title}</h2>
            <p>{body}</p>
            
        </div>
    );
};

export default Post;