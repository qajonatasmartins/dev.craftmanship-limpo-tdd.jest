import Stack from "../model/Stack"
import { assert } from 'chai'
describe('Livro Crashmanship Limpo', () => {

    test('nothing', () => {
        const stack = new Stack()
        assert.isTrue(stack.isEmpty())
    })
})
