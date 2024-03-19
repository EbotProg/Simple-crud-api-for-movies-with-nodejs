"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = require("../model/Movie");
const MovieRepo_1 = require("../repository/MovieRepo");
class MovieController {
    addMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMovie = new Movie_1.Movie();
                newMovie.title = req.body.title;
                newMovie.genre = req.body.genre;
                newMovie.releaseDate = new Date(req.body.releaseDate);
                newMovie.language = req.body.language;
                newMovie.rating = parseInt(req.body.rating);
                yield new MovieRepo_1.MovieRepo().create(newMovie);
                res.status(201).json({
                    status: "Created!",
                    message: "Movie created successfully!"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal server error",
                    message: "Internal server error"
                });
            }
        });
    }
    getAllMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMovies = yield new MovieRepo_1.MovieRepo().findAll();
                res.status(200).json({
                    status: "ok",
                    message: "Successfully fetched all movies",
                    data: newMovies
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal server error",
                    message: "Internal server error"
                });
            }
        });
    }
    getMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const newMovie = yield new MovieRepo_1.MovieRepo().findById(id);
                res.status(200).json({
                    status: "ok",
                    message: "Successfully fetched movie",
                    data: newMovie
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal server error",
                    message: "Internal server error"
                });
            }
        });
    }
    updateMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const newMovie = new Movie_1.Movie();
                newMovie.id = id;
                newMovie.title = req.body.title;
                newMovie.genre = req.body.genre;
                newMovie.releaseDate = req.body.releaseDate;
                newMovie.language = req.body.language;
                newMovie.rating = req.body.rating;
                yield new MovieRepo_1.MovieRepo().update(newMovie);
                res.status(200).json({
                    status: "ok",
                    message: "Successfully updated movie"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal server error",
                    message: "Internal server error"
                });
            }
        });
    }
    deleteMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                yield new MovieRepo_1.MovieRepo().deleteById(id);
                res.status(200).json({
                    status: "ok",
                    message: "Successfully deleted movie"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal server error",
                    message: "Internal server error"
                });
            }
        });
    }
    deleteAllMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new MovieRepo_1.MovieRepo().deleteAll();
                res.status(200).json({
                    status: "ok",
                    message: "Successfully deleted all movies"
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal server error",
                    message: "Internal server error"
                });
            }
        });
    }
    getMovieByTitle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const title = (_a = req.query["title"]) === null || _a === void 0 ? void 0 : _a.toString();
                const newMovie = yield new MovieRepo_1.MovieRepo().findByTitle(title);
                res.status(200).json({
                    status: "ok",
                    message: "Successfully fetched movie",
                    data: newMovie
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal server error",
                    message: "Internal server error"
                });
            }
        });
    }
    getRecentMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const recentMovies = yield new MovieRepo_1.MovieRepo().findRecent();
                res.status(200).json({
                    status: "ok",
                    message: "Successfully fetched recent movies",
                    data: recentMovies
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal server error",
                    message: "Internal server error"
                });
            }
        });
    }
}
exports.default = new MovieController;
