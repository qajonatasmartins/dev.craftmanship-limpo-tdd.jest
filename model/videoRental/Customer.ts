import { videoType } from "./enum/videoType.enum"

export default class Customer {

    private days: any

    public addRental(title: string, days: number) {
        this.days = days
        console.log(title)
    }

    public getRentalFee(title: string) {
        if (title === videoType.REGULAR.toString()) {
            return this.applyGracePeriod(150, 3)
        }
        return 100

    }

    public getRentalPoints() {
        return this.applyGracePeriod(1, 3)
    }

    public applyGracePeriod(amount: number, grace: number) {
        if (this.days > grace) {
            return amount + amount * (this.days - grace)
        }
        return amount
    }
}