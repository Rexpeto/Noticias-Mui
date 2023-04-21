import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Box,
} from "@mui/material";

const categorias = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
];

const Search = () => {
    return (
        <form>
            <FormControl fullWidth size="small">
                <InputLabel>Categoría</InputLabel>
                <Select label="Categoría">
                    {categorias.map((categoria) => (
                        <MenuItem key={categoria.value} value={categoria.value}>
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>
                <Box
                    sx={{
                        marginTop: 2,
                    }}
                >
                    <Button variant="outlined" fullWidth>
                        Buscar
                    </Button>
                </Box>
            </FormControl>
        </form>
    );
};

export default Search;
