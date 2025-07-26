import { useLoaderData } from "react-router";


const Home = () => {
    const post =useLoaderData();
    console.log(post);
    
    return (
        <div>
            
        </div>
    );
};

export default Home;