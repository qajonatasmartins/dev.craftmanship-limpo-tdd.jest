export default class Stack {

    private size: number = 0
    private elements: Array<number> = []

    public isEmpty(): boolean {
        return this.size === 0
    }

    public push(element: number) {
        this.elements[this.size++] = element
    }

    public pop() {
        if (this.size === 0) {
            this.underflow()
        }
        return this.elements[--this.size]
    }

    public getSize(): number {
        return this.size
    }
    public underflow() {
        throw new Error("Error")
    }
}