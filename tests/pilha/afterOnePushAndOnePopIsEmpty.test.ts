import { describeName } from "../../data/describe.data"
import Stack from "../../model/Stack"
import { assert } from 'chai'
describe(describeName.stack, () => {

    test('Depois de adicionar um e remover um a pilha deve estar vazia', () => {
        const stack = new Stack()
        stack.push(0)
        stack.pop()
        assert.isTrue(stack.isEmpty())
        assert.equal(0, stack.getSize())
    })
})
