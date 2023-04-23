import useNews from "../hooks/useNews";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginations = () => {
    const { totalPage, handdlerChangePage } = useNews();

    const totalPages = Math.ceil(totalPage / 20);

    return (
        <Stack spacing={2} direction="row">
            <Pagination
                count={totalPages}
                color="primary"
                onChange={(e) => handdlerChangePage(e)}
            />
        </Stack>
    );
};

export default Paginations;
