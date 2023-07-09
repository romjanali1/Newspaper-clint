import { useEffect, useState } from "react";
import News from "../News/News";

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
            newes.map(news => <News
            key= {news.id}
            news= {news}
            ></News>)
        }
            
        </div>
    );
};

export default Allnews;