import Retal from "./Retal"

export default abstract class Movie {

    private title: string

    constructor(title: string) {
        this.title = title
    }

    public getTitle() {
        return this.title
    }

    public abstract getFee(days: number, retal: Retal): number
    public abstract getPoints(days: number, retal: Retal): number
    protected static applyGracePeriod(amont: number, days: number, grace: number): number {
        if (days > grace) {
            return amont + amont * (days - grace)
        }
        return amont
    }
}