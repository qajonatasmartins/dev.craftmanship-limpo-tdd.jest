import Movie from "./Movie"
import Retal from "./Retal"

export default class ChildrenMovie extends Movie {

    constructor(title: string) {
        super(title)
    }

    public getFee(days: number, retal: Retal): number {
        console.log(days, retal)
        return days * 100
    }

    public getPoints(days: number, retal: Retal): number {
        console.log(days, retal)
        return 1
    }
}