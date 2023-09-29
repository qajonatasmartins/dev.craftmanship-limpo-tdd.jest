export default class Game {

    private rolls: number[] = new Array(21)
    private currentRoll: number = 0

    public roll(pins: number) {
        this.rolls[this.currentRoll++] = pins
    }

    public rollMany(n: number, pins: number) {
        for (let i = 0; i < n; i++) {
            this.roll(pins)
        }
    }

    public score() {
        let score = 0, frameIndex = 0

        for (let frame = 0; frame < 10; frame++) {
            ({ frameIndex, score } = this.whatIsTheResult(frameIndex, score))
        }
        return score
    }

    private whatIsTheResult(frameIndex: number, score: number) {
        if (this.isStrike(frameIndex)) {
            score += 10 + this.strikeBonus(frameIndex)
            frameIndex++
            return { frameIndex, score }
        }
        if (this.isSpare(frameIndex)) {
            score += 10 + this.spareBonus(frameIndex)
            frameIndex += 2
            return { frameIndex, score }
        }
        score += this.twoBallsInFrame(frameIndex)
        frameIndex += 2

        return { frameIndex, score }
    }

    public oneStrike() {

    }

    private twoBallsInFrame(frameIndex: number) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
    }

    private spareBonus(frameIndex: number) {
        return this.rolls[frameIndex + 2]
    }

    private isStrike(frameIndex: number) {
        return this.rolls[frameIndex] === 10
    }

    public strikeBonus(frameIndex: number) {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]
    }

    public isSpare(frameIndex: number) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
    }
}