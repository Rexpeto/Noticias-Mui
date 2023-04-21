import { createContext, useState, useEffect } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    return (
        <NewsContext.Provider
            value={{
                hola: "hola",
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};

export default NewsContext;
