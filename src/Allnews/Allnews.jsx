import { useEffect, useState } from "react";
import News from "../News/News";
import { Link } from "react-router-dom";

const Allnews = () => {
    const [newes, setNewes] = useState([])
    useEffect( () => {
        fetch('http://localhost:3000/news')
        .then(res => res.json())
        .then(data => setNewes(data))
    }, [])
    return (
        <div className="row gap-4 justify-content-center row-cols-1 row-cols-md-4">
        {
            newes.map(news => <Link style={{ textDecoration: 'none' }} to={`/news/${news.id}`}
            key = {news.id}
            > <News
            
            news= {news}>
                
            </News> </Link>)
        }
            
        </div>
    );
};

export default Allnews;