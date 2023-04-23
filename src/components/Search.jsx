import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import useNews from "../hooks/useNews";

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
    const { handdlerChangeCategory, category } = useNews();

    return (
        <form>
            <FormControl fullWidth size="small">
                <InputLabel>Categoría</InputLabel>
                <Select
                    label="Categoría"
                    onChange={(e) => handdlerChangeCategory(e)}
                    value={category}
                >
                    {categorias.map((categoria) => (
                        <MenuItem key={categoria.value} value={categoria.value}>
                            {categoria.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    );
};

export default Search;
