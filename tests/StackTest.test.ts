import Stack from "../model/Stack"

describe('Livro Crashmanship Limpo', () => {

    const stack = new Stack()

    test('nothing', () => {
        expect(stack.isEmpty()).toEqual(true)
    })

    test('after one push is not empty', () => {
        expect(stack.push()).toEqual(stack.isEmpty())
    })
})
