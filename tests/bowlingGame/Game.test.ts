import { describeName } from "../../data/describe.data"
import Game from "../../model/Game"
import { assert } from "chai"

describe(describeName.bowlingGame, () => {

    test('Criar um jogo', () => {
        let g = new Game()
        g.roll(0)
    })

    test('Todos um', () => {
        let g = new Game()
        g.rollMany(20, 1)
        assert.equal(20, g.score())
    })

    test('Um Spare', () => {
        let g = new Game()
        g.rollMany(2, 5)
        g.roll(7)
        g.rollMany(17, 0)
        assert.equal(24, g.score())
    })

    test('Um Strike', () => {
        let g = new Game()
        g.roll(10)
        g.roll(2)
        g.roll(3)
        g.rollMany(16, 0)
        assert.equal(20, g.score())
    })

    test('Gutter Game como "Jogo nas Canaletas" ou "Partida nas Canaletas"', () => {
        let g = new Game()
        g.rollMany(20, 0)
        assert.equal(0, g.score())
    })

    test('Jogo perfeito', () => {
        let g = new Game()
        g.rollMany(12, 10)
        assert.equal(300, g.score())
    })
})