import { Link } from "react-router";


const Card = ({post}) => {
    const {title,body,id}=post;
    return (
            
            <div className="card w-96 bg-base-100 card-lg shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary"><Link to={`/post/${id}`}>Read</Link></button>
                    </div>
                </div>
            </div>
        
    );
};

export default Card;