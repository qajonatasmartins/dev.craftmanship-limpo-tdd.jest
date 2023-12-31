import { describeName } from "../../data/describe.data"
import Stack from "../../model/Stack"
import { assert } from 'chai'
describe(describeName.stack, () => {

    test('afterPushingX_willPopX', () => {
        const stack = new Stack()
        stack.push(99)
        stack.push(88)
        assert.equal(88, stack.pop())
        assert.equal(99, stack.pop())
    })
})
