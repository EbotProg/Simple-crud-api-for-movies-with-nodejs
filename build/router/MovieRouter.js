"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const MovieController_1 = __importDefault(require("../controller/MovieController"));
const MovieSchema_1 = require("../schema/MovieSchema");
const validate_1 = __importDefault(require("../helper/validate"));
class MovieRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(MovieSchema_1.createMovieSchema), MovieController_1.default.addMovie);
        this.router.get("", (0, validate_1.default)(MovieSchema_1.updateMovieSchema), MovieController_1.default.getAllMovies);
        this.router.get("/:id", MovieController_1.default.getMovie);
        this.router.put("/:id", MovieController_1.default.updateMovie);
        this.router.delete("/:id", MovieController_1.default.deleteMovie);
        this.router.post("", MovieController_1.default.deleteAllMovies);
        this.router.get("/:query", MovieController_1.default.getMovieByTitle);
        this.router.get("/recent", MovieController_1.default.getRecentMovies);
    }
}
exports.default = new MovieRoutes().router;
