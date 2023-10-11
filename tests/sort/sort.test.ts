import { assert } from "chai"
import { describeName } from "../../data/describe.data"
import Sort from "../../model/Sort"

describe(describeName.sort, () => {

    const sort = new Sort()

    test('Sorted - Array são iguais', () => {
        assert.deepEqual([1, 1, 2, 3, 5, 9], sort.sortList([3, 2, 5, 9, 1, 1]))
    })
})