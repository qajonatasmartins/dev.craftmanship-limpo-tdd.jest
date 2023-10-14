import RentalCalculator from "./RentalCalculator"
import VideoRegistry from "./VideoRegistry"
import { videoType } from "./enum/videoType.enum"

export default class Retal {

    public title: string
    public days: number
    public type: videoType
    public videoRegister = new VideoRegistry()

    constructor(title: string, days: number) {
        this.title = title
        this.days = days
        this.type = this.videoRegister.getType(this.title)
    }

    public getTitle(): string {
        return this.title
    }

    public getType(): videoType {
        return this.type
    }

    public getFee() {
        let fee = 0
        if (this.getType() === videoType.REGULAR) {
            fee += new RentalCalculator().applyGracePeriod(150, this.days, 3)
        }
        else {
            fee += this.days * 100
        }
        return fee
    }

    public getPoints() {
        let points = 0
        if (this.getType() === videoType.REGULAR) {
            points += new RentalCalculator().applyGracePeriod(1, this.days, 3)
        }
        else {
            points++
        }
        return points
    }

    public applyGracePeriod(amont: number, days: number, grace: number) {
        if (days >> grace) {
            return amont + amont * (days - grace)
        }
        return amont
    }
}