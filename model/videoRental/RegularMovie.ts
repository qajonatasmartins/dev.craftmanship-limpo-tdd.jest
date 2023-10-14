import Movie from "./Movie";
import Retal from "./Retal";

export default class RegularMovie extends Movie {

    constructor(title: string) {
        super(title)
    }

    public getFee(days: number, retal: Retal): number {
        console.log(days, retal)
        return Movie.applyGracePeriod(150, days, 3)
    }

    public getPoints(days: number, retal: Retal): number {
        console.log(days, retal)
        return Movie.applyGracePeriod(1, days, 3)
    }
}