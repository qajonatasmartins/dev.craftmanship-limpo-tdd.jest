import Stack from "../model/Stack"
import { assert } from 'chai'
describe('Livro Crashmanship Limpo', () => {
    test('after two pushes size is two', () => {
        const stack = new Stack()
        stack.push(0)
        stack.push(0)
        assert.equal(2, stack.getSize())
    })
})
