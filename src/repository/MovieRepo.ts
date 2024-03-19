import { Movie } from "../model/Movie"

interface IMovieRepo {
    create(movie: Movie): Promise<void>;
    findAll(): Promise<Movie[]>;
    findById(movieId: number): Promise<Movie>;
    update(movie: Movie): Promise<void>;
    deleteById(movieId: number): Promise<void>;
    deleteAll(): Promise<void>;
    findByTitle(movieTitle: string): Promise<Movie>;
    findRecent(): Promise<Movie[]>
}

export class MovieRepo implements IMovieRepo {
    async create(movie: Movie): Promise<void> {
        try{

            await Movie.create({
                title : movie.title,
                genre : movie.genre,
                releaseDate : movie.releaseDate,
                language : movie.language,
                rating : movie.rating,
            });
        }
        catch(err) {
            throw new Error("Failed to create movie.");
        }
    }
    async findAll(): Promise<Movie[]> {
        try{
          
            return await Movie.findAll();
        }
        catch(err) {
            throw new Error("No movies found.");
        }
    }
    async findById(movieId: number): Promise<Movie> {
        try{
           const newMovie = await Movie.findOne({
                where: {
                    id: movieId
                }
            })

            if(!newMovie) {
                throw new Error("Movie not found!")
            }
            return newMovie;
        }
        catch(err) {
            throw new Error("Method not implemented.");

        }
    }
    async update(movie: Movie): Promise<void> {
        try{
            const newMovie = await Movie.findOne({
                where: {
                    id: movie.id
                }
            })
           
            if(!newMovie) {
                throw new Error("Movie not found!")
            }

                newMovie.title = movie.title;
                newMovie.genre = movie.genre;
                newMovie.releaseDate = movie.releaseDate;
                newMovie.language = movie.language;
                newMovie.rating = movie.rating;

                await newMovie.save();

        }catch(err) {
            throw new Error("Failed to update movie.");
        }
    }
    async deleteById(movieId: number): Promise<void> {
        try{
           const newMovie = await Movie.findOne({
            where: {
                id: movieId
            }
           })

           if(!newMovie) {
            throw new Error("Movie not found!")
           }

           await newMovie.destroy();
        }
        catch(err) {
            throw new Error("Failed to delete movie")
        }
    }
    async deleteAll(): Promise<void> {
        try{
           const movies = await Movie.findAll();

           if(movies && movies.length == 0){
                throw new Error("Movies not found!")
           }

           for(const movie of movies){
                await movie.destroy();
           }
        }
        catch(err) {
            throw new Error("Failed to delete all movies! ")
        }
    }
    async findByTitle(movieTitle: string | undefined): Promise<Movie> {
       try{
          const newMovie = await Movie.findOne({
            where: {
                title: movieTitle
            }
          })

          if(!newMovie) {
            throw new Error("Movie not found!")
        }
        return newMovie;
          
       }
       catch(err) {
        throw new Error("Failed to find movie")
       } 
    }
    async findRecent(): Promise<Movie[]> {
        try{
          const allMovies = await Movie.findAll();
          const recentMovies = allMovies.slice(allMovies.length - 3, allMovies.length)
          return recentMovies;
        }
        catch(err) {
            throw new Error("Failed to find recent movies")
        }
    }

}