import Stack from "../model/Stack"
import { assert } from 'chai'
describe('Livro Crashmanship Limpo', () => {

    test('after one push is not empty', () => {
        const stack = new Stack()
        stack.push(0)
        assert.isFalse(stack.isEmpty())
    })
})
