import { describeName } from "../../data/describe.data"
import Stack from "../../model/Stack"
import { assert } from 'chai'
describe(describeName.stack, () => {

    test('Depois de adicionar 1 a pilha não deve estar vazia', () => {
        const stack = new Stack()
        stack.push(0)
        assert.isFalse(stack.isEmpty())
    })
})
