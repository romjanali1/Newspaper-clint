import { useLoaderData } from "react-router-dom";
import Singel_catagory from "../Singel_catagory/Singel_catagory";

const Category = () => {
    const news = useLoaderData();
    return (
        <div className="row gap-4 justify-content-center row-cols-1 row-cols-md-4">
            
            {
                news.map( category => <Singel_catagory
                key={category.id}
                category = {category}
                ></Singel_catagory>)
            }
            
        </div>
    );
};

export default Category;