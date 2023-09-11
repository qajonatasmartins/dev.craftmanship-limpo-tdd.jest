import Stack from "../model/Stack"
import { assert } from 'chai'
describe('Livro Crashmanship Limpo', () => {

    test('after one push and one pop is empty', () => {
        const stack = new Stack()
        stack.push(0)
        stack.pop()
        assert.isTrue(stack.isEmpty())
        assert.equal(0, stack.getSize())
    })
})
