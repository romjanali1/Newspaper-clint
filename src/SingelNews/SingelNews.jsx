
import Onenews from "../Onenews/Onenews";
import { Link, useLoaderData } from "react-router-dom";

const SingelNews = () => {
    const singelNews = useLoaderData()
   
    return (
        <div>
            {
                singelNews.map(onenews => <Onenews
                key={onenews.id}
                onenews={onenews}>
                    <Link to={`/news/${onenews.id}`}>{onenews.news.singel}</Link>
                </Onenews>)
            }
        </div>
    );
};

export default SingelNews;