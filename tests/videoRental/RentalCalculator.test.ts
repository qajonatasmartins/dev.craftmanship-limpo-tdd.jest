import { assert } from "chai"
import { describeName } from "../../data/describe.data"
import RentalCalculator from "../../model/videoRental/RentalCalculator"

describe(describeName.videoRental, () => {

    let customer: any

    beforeEach(() => {
        customer = new RentalCalculator()
    })

    function assertFeeAndPoints(fee: number, points: number) {
        assert.equal(fee, customer.getRentalFee())
        assert.equal(points, customer.getRenterPoints())
    }

    test('filme normal um dia', () => {
        customer.addRental("RegularMovie", 1)
        assertFeeAndPoints(150, 1)
    })

    test('filme normal dois dias', () => {
        customer.addRental("RegularMovie", 2)
        assertFeeAndPoints(150, 1)
    })

    test('filme normal três dias', () => {
        customer.addRental("RegularMovie", 3)
        assertFeeAndPoints(150, 1)
    })

    test('filme normal quatro dias', () => {
        customer.addRental("RegularMovie", 4)
        assertFeeAndPoints(300, 2)
    })

    test('filme infantil um dias', () => {
        customer.addRental("ChildrenMovie", 1)
        assertFeeAndPoints(100, 1)
    })

    test('filme infantil quatro dias', () => {
        customer.addRental("ChildrenMovie", 4)
        customer.addRental("RegularMovie", 4)
        assertFeeAndPoints(700, 3)
    })
})