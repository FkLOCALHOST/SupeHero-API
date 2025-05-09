import axios from "axios";
import https from "https";

export const GetHeroes = async (req, res) => {
    const BasePath = process.env.URI_API_AUX;
    const agent = new https.Agent({ rejectUnauthorized: false });

    try {
        const url = `${BasePath}/all.json`;
        const response = await axios.get(url, { httpsAgent: agent });

        if (response.data) {
            res.status(200).json({
                message: "Heroes listados",
                data: response.data
            });
        } else {
            res.status(400).json({
                msg: 'Error: la respuesta de la API no tiene el formato esperado.',
                response
            });
        }

    } catch (e) {
        console.error(e);
        res.status(500).json({
            msg: 'Error al listar los héroes',
            error: e.message || 'Error desconocido'
        });
    }
};
