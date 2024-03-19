import { Request, Response } from "express";
import { Movie } from "../model/Movie";
import { MovieRepo } from "../repository/MovieRepo";

class MovieController {

    async addMovie(req: Request, res: Response) {
        try {
            
            const newMovie = new Movie();
                newMovie.title = req.body.title;
                newMovie.genre = req.body.genre;
                newMovie.releaseDate = new Date(req.body.releaseDate);
                newMovie.language = req.body.language;
                newMovie.rating = parseInt(req.body.rating);
            

            await new MovieRepo().create(newMovie)

             res.status(201).json({
                status: "Created!",
                message: "Movie created successfully!"
            })
        }
        catch(err) {
             res.status(500).json({
                status: "Internal server error",
                message: "Internal server error"
            })
        }
    }

    async getAllMovies(req: Request, res: Response) {
        try {

            const newMovies = await new MovieRepo().findAll()

             res.status(200).json({
                status: "ok",
                message: "Successfully fetched all movies",
                data: newMovies
            })
        }
        catch(err) {
             res.status(500).json({
                status: "Internal server error",
                message: "Internal server error"
            })
        }
    } 

    async getMovie(req: Request, res: Response) {
        try {

            const id = parseInt(req.params["id"]);
            const newMovie = await new MovieRepo().findById(id);

            res.status(200).json({
                status: "ok",
                message: "Successfully fetched movie",
                data: newMovie
            })
        }
        catch(err) {
            res.status(500).json({
                status: "Internal server error",
                message: "Internal server error"
            })
        }
    }
    
    async updateMovie(req: Request, res: Response) {
        try {
            const id = parseInt(req.params["id"]);
            const newMovie = new Movie();
                newMovie.id = id;
                newMovie.title = req.body.title;
                newMovie.genre = req.body.genre;
                newMovie.releaseDate = req.body.releaseDate;
                newMovie.language = req.body.language;
                newMovie.rating = req.body.rating;
            await new MovieRepo().update(newMovie);

            res.status(200).json({
                status: "ok",
                message: "Successfully updated movie"
            })
        }
        catch(err) {
            res.status(500).json({
                status: "Internal server error",
                message: "Internal server error"
            })
        }
    }

    async deleteMovie(req: Request, res: Response) {
        try { 
            const id = parseInt(req.params["id"]);
            await new MovieRepo().deleteById(id);

            res.status(200).json({
                status: "ok",
                message: "Successfully deleted movie"
            })
        }
        catch(err) {
            res.status(500).json({
                status: "Internal server error",
                message: "Internal server error"
            })
        }
    }

    async deleteAllMovies(req: Request, res: Response) {
        try {
           
            await new MovieRepo().deleteAll();

            res.status(200).json({
                status: "ok",
                message: "Successfully deleted all movies"
            })
        }
        catch(err) {
            res.status(500).json({
                status: "Internal server error",
                message: "Internal server error"
            })
        }
    }

    async getMovieByTitle(req: Request, res: Response) {
        try {

            const title = req.query["title"]?.toString();
            const newMovie = await new MovieRepo().findByTitle(title);
            res.status(200).json({
                status: "ok",
                message: "Successfully fetched movie",
                data: newMovie
            })
        }
        catch(err) {
            res.status(500).json({
                status: "Internal server error",
                message: "Internal server error"
            })
        }
    }

    async getRecentMovies(req: Request, res: Response) {
        try{
            const recentMovies = await new MovieRepo().findRecent();

            res.status(200).json({
                status: "ok",
                message: "Successfully fetched recent movies",
                data: recentMovies
            })
        }
        catch(err) {
            res.status(500).json({
                status: "Internal server error",
                message: "Internal server error"
            })
        }
    }

}

export default new MovieController;