import { assert } from "chai"
import { describeName } from "../../data/describe.data"
import Customer from "../../model/videoRental/Customer"

describe(describeName.videoRental, () => {

    let customer: any

    beforeEach(() => {
        customer = new Customer()
    })

    function assertFeeAndPoints(title: string, fee: number, points: number) {
        assert.equal(fee, customer.getRentalFee(title))
        assert.equal(points, customer.getRentalPoints())
    }

    test('filme normal um dia', () => {
        customer.addRental("RegularMovie", 1)
        assertFeeAndPoints("RegularMovie", 150, 1)
    })

    test('filme normal dois dias', () => {
        customer.addRental("RegularMovie", 2)
        assertFeeAndPoints("RegularMovie", 150, 1)
    })

    test('filme normal três dias', () => {
        customer.addRental("RegularMovie", 3)
        assertFeeAndPoints("RegularMovie", 150, 1)
    })

    test('filme normal quatro dias', () => {
        customer.addRental("RegularMovie", 4)
        assertFeeAndPoints("RegularMovie", 300, 2)
    })

    test('filme infantil um dias', () => {
        customer.addRental("ChildrenMovie", 1)
        assertFeeAndPoints("ChildrenMovie", 100, 1)
    })
})