import axios from "axios";
import { createContext, useState, useEffect } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    //* State article
    const [news, setNews] = useState([]);

    //* State Category
    const [category, setCategory] = useState("general");

    const handdlerChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    //* UseEffect request api
    useEffect(() => {
        const requestNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${category}&apiKey=${
                import.meta.env.VITE_API_KEY
            }`;

            const {
                data: { articles },
            } = await axios(url);

            setNews(articles);
        };

        requestNews();
    }, [category]);

    return (
        <NewsContext.Provider
            value={{
                handdlerChangeCategory,
                category,
                news,
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export default NewsContext;
