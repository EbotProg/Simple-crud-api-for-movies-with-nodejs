import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import MovieRouter from "./router/MovieRouter";


class App{
    public app: Application;

    constructor(){
       this.app = express();
       this.databaseSync();
       this.routes();
    }

    protected plugin(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true}))
    }

    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync();
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response)=>{
            res.send("hello world");
        })
        this.app.use("/api/movies", MovieRouter)
    }
}


const port: number = 8000;
const app = new App().app;

app.listen(port, ()=>{
    console.log("Server started successfully");
})