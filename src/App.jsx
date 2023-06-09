import { Container, Grid, Typography } from "@mui/material";
import { NewsProvider } from "./context/NewsProvider";
import Search from "./components/Search";
import ListNews from "./components/ListNews";
import Paginations from "./components/Paginations";

const App = () => {
    return (
        <NewsProvider>
            <Container>
                <header>
                    <Typography
                        variant="h3"
                        component="h1"
                        align="center"
                        sx={{
                            marginBottom: 2,
                        }}
                    >
                        Buscador de Noticias
                    </Typography>
                </header>
                <Grid container direction="row" justifyContent="center">
                    <Grid item md={6} xs={12}>
                        <Search />
                    </Grid>
                </Grid>
                <ListNews />
                <Grid container direction="row" justifyContent="center">
                    <Paginations />
                </Grid>
            </Container>
        </NewsProvider>
    );
};

export default App;
