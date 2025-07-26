import { useLoaderData } from "react-router";
import Card from "./Card/Card";


const Home = () => {
    const posts =useLoaderData();
    console.log(posts);
    
    return (
        <div className="grid grid-cols-3 gap-y-4 mt-10">
            {
                posts.map(post=><Card post={post}></Card>)
            }
        </div>
    );
};

export default Home;