import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import heroesRoutes from "../src/heroes/heroes.routes.js"

const middlewares = (app) => {
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());
    app.use(helmet());
    app.use(cors());
    app.use(morgan("dev"));

};


const routes = (app) =>{
    app.use("/heroesApi/v1/heroes", heroesRoutes);
}

export const initServer = () => {
    const app = express();
    const timeInit = Date.now();
    try{
        middlewares(app);
        routes(app)
        app.listen(process.env.PORT);
        const elapsedTime = Date.now() - timeInit;
        console.log(`Server running on port ${process.env.PORT} ${elapsedTime}ms`);
    }catch(error){
        console.log(`Server failed to start: ${error}`);
    }
};