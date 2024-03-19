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
exports.MovieRepo = void 0;
const Movie_1 = require("../model/Movie");
class MovieRepo {
    create(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Movie_1.Movie.create({
                    title: movie.title,
                    genre: movie.genre,
                    releaseDate: movie.releaseDate,
                    language: movie.language,
                    rating: movie.rating,
                });
            }
            catch (err) {
                throw new Error("Failed to create movie.");
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Movie_1.Movie.findAll();
            }
            catch (err) {
                throw new Error("No movies found.");
            }
        });
    }
    findById(movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMovie = yield Movie_1.Movie.findOne({
                    where: {
                        id: movieId
                    }
                });
                if (!newMovie) {
                    throw new Error("Movie not found!");
                }
                return newMovie;
            }
            catch (err) {
                throw new Error("Method not implemented.");
            }
        });
    }
    update(movie) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMovie = yield Movie_1.Movie.findOne({
                    where: {
                        id: movie.id
                    }
                });
                if (!newMovie) {
                    throw new Error("Movie not found!");
                }
                newMovie.title = movie.title;
                newMovie.genre = movie.genre;
                newMovie.releaseDate = movie.releaseDate;
                newMovie.language = movie.language;
                newMovie.rating = movie.rating;
                yield newMovie.save();
            }
            catch (err) {
                throw new Error("Failed to update movie.");
            }
        });
    }
    deleteById(movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMovie = yield Movie_1.Movie.findOne({
                    where: {
                        id: movieId
                    }
                });
                if (!newMovie) {
                    throw new Error("Movie not found!");
                }
                yield newMovie.destroy();
            }
            catch (err) {
                throw new Error("Failed to delete movie");
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movies = yield Movie_1.Movie.findAll();
                if (movies && movies.length == 0) {
                    throw new Error("Movies not found!");
                }
                for (const movie of movies) {
                    yield movie.destroy();
                }
            }
            catch (err) {
                throw new Error("Failed to delete all movies! ");
            }
        });
    }
    findByTitle(movieTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMovie = yield Movie_1.Movie.findOne({
                    where: {
                        title: movieTitle
                    }
                });
                if (!newMovie) {
                    throw new Error("Movie not found!");
                }
                return newMovie;
            }
            catch (err) {
                throw new Error("Failed to find movie");
            }
        });
    }
    findRecent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allMovies = yield Movie_1.Movie.findAll();
                const recentMovies = allMovies.slice(allMovies.length - 3, allMovies.length);
                return recentMovies;
            }
            catch (err) {
                throw new Error("Failed to find recent movies");
            }
        });
    }
}
exports.MovieRepo = MovieRepo;
