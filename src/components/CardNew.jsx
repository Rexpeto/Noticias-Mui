import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Typography,
    Link,
    Grid,
} from "@mui/material";

const CardNew = ({ notice }) => {
    const { title, urlToImage, url } = notice;

    return (
        <Grid item md={4} lg={6}>
            <Card>
                {urlToImage && (
                    <CardMedia
                        component="img"
                        alt="imagen"
                        image={urlToImage}
                    />
                )}
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                            fontSize: 20,
                        }}
                    >
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={url}>Leer articulo</Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardNew;
