import { Injectable } from '@angular/core';
import { Movie} from './movie';

@Injectable()


export class MovieService {

    movie: Movie = {
        id: 1,
        name: 'Thor'
    }


    getMovie(): Promise<Movie> {

        return Promise.resolve(this.movie);
    }
}
