import axios from "axios";
import { createContext, useState, useEffect } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    //* State article
    const [news, setNews] = useState([]);

    //* State Category
    const [category, setCategory] = useState("general");

    //* State page result
    const [page, setPage] = useState(1);

    //* State total page
    const [totalPage, setTotalPage] = useState(0);

    const handdlerChangeCategory = (e) => {
        setPage(1);
        setCategory(e.target.value);
    };

    //* UseEffect request api
    useEffect(() => {
        const requestNews = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ve&page=${page}&category=${category}&apiKey=${
                import.meta.env.VITE_API_KEY
            }`;

            const {
                data: { articles },
                data: { totalResults },
            } = await axios(url);

            setTotalPage(totalResults);

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
