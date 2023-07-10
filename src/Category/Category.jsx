import { Link, useLoaderData } from "react-router-dom";
import Singel_catagory from "../Singel_catagory/Singel_catagory";

const Category = () => {
    const news = useLoaderData();
    return (
        <div className="row gap-4 justify-content-center row-cols-1 row-cols-md-4">
            
            {
                news.map( category => <Link style={{ textDecoration: 'none' }} to={`/news/${category.id}`}>
                <Singel_catagory
                key={category.id}
                category = {category}
                ></Singel_catagory>
                </Link>)
            }
            
        </div>
    );
};

export default Category;