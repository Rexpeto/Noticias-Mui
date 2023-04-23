import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginations = () => {
    return (
        <Stack spacing={2} direction="row">
            <Pagination count={10} color="primary" />
        </Stack>
    );
};

export default Paginations;
