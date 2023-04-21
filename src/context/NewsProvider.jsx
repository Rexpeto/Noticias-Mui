import { createContext, useState, useEffect } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    //* State Category
    const [category, setCategory] = useState("general");

    const handdlerChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    return (
        <NewsContext.Provider
            value={{
                handdlerChangeCategory,
                category,
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export default NewsContext;
