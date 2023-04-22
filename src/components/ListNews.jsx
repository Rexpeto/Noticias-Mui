import { Grid } from "@mui/material";
import useNews from "../hooks/useNews";
import CardNew from "./CardNew";

const ListNews = () => {
    const { news } = useNews();

    return (
        <Grid container spacing={4} marginY={4}>
                {news.map((notice) => (
                    <CardNew key={notice?.url} notice={notice} />
                ))}
        </Grid>
    );
};

export default ListNews;
