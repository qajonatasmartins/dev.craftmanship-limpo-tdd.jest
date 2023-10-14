import Retal from "./Retal"
import { videoType } from "./enum/videoType.enum"
export default class RentalCalculator {

    private rentals: Array<Retal> = []
    days: any
    title: string


    constructor() {
        this.title = ''
        this.days = 0
    }

    public addRental(title: string, days: number) {
        let rental = new Retal(title, days)
        this.rentals.push(rental)
    }

    public getRentalFee() {
        let fee = 0
        for (let rental of this.rentals) {
            if (rental.type === videoType.REGULAR.toString()) {
                fee += rental.getFee()
            } else {
                fee += rental.days * 100
            }
        }
        return fee
    }

    public getRenterPoints() {
        let points = 0
        for (let rental of this.rentals) {
            if (rental.type === videoType.REGULAR.toString()) {
                points += this.pointsFor(rental)
            } else {
                points++
            }
        }
        return points
    }

    public applyGracePeriod(amount: number, days: number, grace: number) {
        if (days > grace) {
            return amount + amount * (days - grace)
        }
        return amount
    }
    // private feeFor(rental: Retal) {
    //     let fee = 0
    //     if (rental.type === videoType.REGULAR) {
    //         fee += this.applyGracePeriod(150, rental.days, 3)
    //     }
    //     else {
    //         fee += rental.days * 100
    //     }
    //     return fee
    // }

    private pointsFor(rental: Retal) {
        let points = 0
        if (rental.type === videoType.REGULAR) {
            points += this.applyGracePeriod(1, rental.days, 3)
        } else {
            points++
        }
        return points
    }
}