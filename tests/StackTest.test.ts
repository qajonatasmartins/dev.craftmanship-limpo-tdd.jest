import MyStack from "../model/MyStack"


describe('Typescript', () => {
    test('nothing', () => {
        const mystack = new MyStack()
        expect(mystack.isEmpty()).toBe(true)
    })
})
