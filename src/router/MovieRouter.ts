import BaseRoutes from "./base/BaseRouter";
import MovieController from "../controller/MovieController";
import { createMovieSchema, updateMovieSchema } from "../schema/MovieSchema";
import validate from "../helper/validate";

class MovieRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("", validate(createMovieSchema), MovieController.addMovie)
        this.router.get("", validate(updateMovieSchema), MovieController.getAllMovies)
        this.router.get("/:id", MovieController.getMovie)
        this.router.put("/:id", MovieController.updateMovie)
        this.router.delete("/:id", MovieController.deleteMovie)
        this.router.post("", MovieController.deleteAllMovies)
        this.router.get("/:query", MovieController.getMovieByTitle)
        this.router.get("/recent", MovieController.getRecentMovies)
    }
}

export default new MovieRoutes().router;