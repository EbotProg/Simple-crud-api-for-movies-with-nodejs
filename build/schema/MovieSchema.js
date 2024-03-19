"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovieSchema = exports.createMovieSchema = void 0;
const zod_1 = require("zod");
exports.createMovieSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            .min(1, { message: "title must be greater than one character" }),
        genre: zod_1.z
            .string()
            .min(4, { message: "genre must be greater than one character" }),
        releaseDate: zod_1.z
            .date(),
        language: zod_1.z
            .string()
            .min(3, { message: "language must be greater than three characters" }),
        rating: zod_1.z
            .number()
            .max(1, { message: "rating must not be greater than one character" })
    })
});
exports.updateMovieSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            .min(1, { message: "title must be greater than one character" }),
        genre: zod_1.z
            .string()
            .min(4, { message: "genre must be greater than one character" }),
        releaseDate: zod_1.z
            .date(),
        language: zod_1.z
            .string()
            .min(3, { message: "language must be greater than three characters" }),
        rating: zod_1.z
            .number()
            .max(1, { message: "rating must not be greater than one character" })
    })
        .partial(),
});
