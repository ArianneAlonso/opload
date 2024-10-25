import { dbproducts } from "../db/db";

const CreateProduct = async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;

        // tosos loos campos deben completardse
        if (!name || !description || !price || !stock) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        // validar que la imgen este subida 
        if (!req.file) {
            return res.status(400).json({ error: "La imagen es obligatoria" });
        }

        //creAR el producto
        const newProduct = {
            name,
            description,
            price,
            stock,
            imageUrl: req.file.path // Suponiendo que `req.file.path` contiene la ruta de la imagen subida
        };

        // Guardar el producto en la "base de datos"
        dbproducts.push(newProduct);

        return res.status(201).json({ message: "Producto creado exitosamente", product: newProduct });
    } catch (error) {
        return res.status(500).json({ error: "Error al crear el producto" });
    }
};

export { CreateProduct };
