import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className="d-flex flex-wrap">
            {
                categories.map(categori => <span className="px-2" key={categori.id}>
                    <Link className="link-underline-light" to={`/category/${categori.id}`}>{categori.category}</Link>

                </span>)
            }
            
        </div>
    );
};

export default NewsCategories;