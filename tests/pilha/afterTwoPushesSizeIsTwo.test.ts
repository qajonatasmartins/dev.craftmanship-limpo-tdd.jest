import { describeName } from "../../data/describe.data"
import Stack from "../../model/Stack"
import { assert } from 'chai'
describe(describeName.stack, () => {
    test('Depois de adicionar 2 a pilha deve ser igual a 2', () => {
        const stack = new Stack()
        stack.push(0)
        stack.push(0)
        assert.equal(2, stack.getSize())
    })
})
