import { z } from "zod";

export const createMovieSchema = z.object({
    body: z.object({
        title: z
            .string()
            .min(1, { message: "title must be greater than one character"}),
        genre: z
            .string()
            .min(4, { message: "genre must be greater than one character"}),
        releaseDate: z
            .date(),
        language: z
            .string()
            .min(3, { message: "language must be greater than three characters"}),
        rating: z
            .number()
            .max(1, { message: "rating must not be greater than one character"})     
    })
})

export const updateMovieSchema = z.object({
    params: z.object({ id: z.string() }),
    body: z.object({
        title: z
            .string()
            .min(1, { message: "title must be greater than one character"}),
        genre: z
            .string()
            .min(4, { message: "genre must be greater than one character"}),
        releaseDate: z
            .date(),
        language: z
            .string()
            .min(3, { message: "language must be greater than three characters"}),
        rating: z
            .number()
            .max(1, { message: "rating must not be greater than one character"})     
    })
    .partial(),
 
})