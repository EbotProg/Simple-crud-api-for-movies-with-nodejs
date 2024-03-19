"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_typescript_2 = require("sequelize-typescript");
let Movie = class Movie extends sequelize_typescript_1.Model {
};
exports.Movie = Movie;
Movie.MOVIE_TABLE_NAME = "movie";
Movie.MOVIE_TABLE_ID = "id";
Movie.MOVIE_TITLE = "title";
Movie.MOVIE_GENRE = "genre";
Movie.MOVIE_RELEASE_DATE = "genre";
Movie.MOVIE_LANGUAGE = "language";
Movie.MOVIE_RATING = "rating";
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Movie.MOVIE_TABLE_NAME
    }),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: Movie.MOVIE_TITLE
    }),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: Movie.MOVIE_GENRE
    }),
    __metadata("design:type", String)
], Movie.prototype, "genre", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.DATE,
        field: Movie.MOVIE_RELEASE_DATE
    }),
    __metadata("design:type", Object)
], Movie.prototype, "releaseDate", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.STRING,
        field: Movie.MOVIE_LANGUAGE
    }),
    __metadata("design:type", String)
], Movie.prototype, "language", void 0);
__decorate([
    (0, sequelize_typescript_2.Column)({
        type: sequelize_typescript_2.DataType.INTEGER,
        field: Movie.MOVIE_RATING
    }),
    __metadata("design:type", Number)
], Movie.prototype, "rating", void 0);
exports.Movie = Movie = __decorate([
    (0, sequelize_typescript_2.Table)({
        tableName: Movie.MOVIE_TABLE_NAME
    })
], Movie);
