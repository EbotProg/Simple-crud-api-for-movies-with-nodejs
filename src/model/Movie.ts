import { Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";

@Table({
    tableName: Movie.MOVIE_TABLE_NAME
})
export class Movie extends Model {

    public static MOVIE_TABLE_NAME = "movie" as string; 
    public static MOVIE_TABLE_ID = "id" as string; 
    public static MOVIE_TITLE = "title" as string; 
    public static MOVIE_GENRE = "genre" as string; 
    public static MOVIE_RELEASE_DATE = "genre" as string; 
    public static MOVIE_LANGUAGE = "language" as string; 
    public static MOVIE_RATING = "rating" as string; 

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: Movie.MOVIE_TABLE_NAME
    })
    id!:number

    @Column({
        type: DataType.STRING,
        field: Movie.MOVIE_TITLE
    })
    title!:string

    @Column({
        type: DataType.STRING,
        field: Movie.MOVIE_GENRE
    })
    genre!:string;

    @Column({
        type: DataType.DATE,
        field: Movie.MOVIE_RELEASE_DATE
    })
    releaseDate!:any;

    @Column({
        type: DataType.STRING,
        field: Movie.MOVIE_LANGUAGE
    })
    language!:string;

    @Column({
        type: DataType.INTEGER,
        field: Movie.MOVIE_RATING
    })
    rating!:number;
}