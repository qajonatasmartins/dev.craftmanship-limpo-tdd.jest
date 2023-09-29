import { describeName } from "../../data/describe.data"
import Stack from "../../model/Stack"
import { assert } from 'chai'
describe(describeName.stack, () => {

    test('Pilha vazia', () => {
        const stack = new Stack()
        assert.isTrue(stack.isEmpty())
    })
})
