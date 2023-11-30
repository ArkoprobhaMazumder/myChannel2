import { useEffect, useState } from "react";
import "./main.css";

const Main = () => {
    const [parseData, setParseData] = useState({ articles: [] });
    const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f17f0420b36b4fea8fb34b11f3fa51eb";

    useEffect(() => {

        const showNews = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setParseData({ articles: data.articles });
            } catch (error) {
                console.log(error)
            }
        }
        showNews();
    }, [])

    return (
        <div className="container">
            {
                parseData.articles.map((item) => {
                    return (
                        <div className="mainBox" key={item.url}>
                            <img src={item.urlToImage} alt="img" />
                            <div className="text">
                                <h2>{item.title}</h2>
                                <h4>{item.content}</h4>
                            </div>
                            <a href={item.url} target="_blank">read more</a>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Main
