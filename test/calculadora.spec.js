import assert from 'assert'
import chai from 'chai'
import calculadora from '../src/calculadora.js'


const expect = chai.expect


 describe('Testes de soma',()=> {
    it('Deve somar 4 e 5 resultando em 9', () => {
    let resultado = calculadora.soma(4,5)
    expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = calculadora.soma(-4,5)
        expect(resultado).to.be.eq(1)
    })
})

    describe('Testes de subtração',()=> {
        it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = calculadora.sub(4,5)
        expect(resultado).to.be.eq(-1)
        })
})
describe('Testes de multiplicação',()=> {
    it('Deve multiplicar 2 e 5 resultando em 10', () => {
    let resultado = calculadora.multiplicação(2,5)
    expect(resultado).to.be.eq(10) 
    })
})
describe('Testes de divisão',()=> {
    it('Deve multiplicar 40 e 8 resultando em 5', () => {
    let resultado = calculadora.divisão(40,8)
    expect(resultado).to.be.eq(5) 
    })
})
describe('Testes de maior valor',()=> {
    it('Deve verificar se 7 é maior que 4', () => {
        let resultado = calculadora.max(7,4, '7 é maior que 4')
        expect(resultado).to.be.eq(7)
    })
})
describe('Testes de maior valor entre tres valores inserindo uma string',()=> {
    it('Deve verificar o maior valor entre 8,9,"11"' , () => {
        let resultado = calculadora.max(8,9,"11")
        expect(resultado).to.be.eq(9)
    }) 
})
describe('Testes de média entre dois valores',()=> {
    it('Deve verificar a média entre 20 e 10', () => {
        let resultado = calculadora.media(20,10)
        expect(resultado).to.be.eq(15)
    })
})
describe('Testes de média entre dois valores',()=> {
    it('Deve verificar a média entre 11 e 12', () => {
        let resultado = calculadora.media(11,12)
        expect(resultado).to.be.eq(11.5)
    })

})
describe('Testes de desconto para pagamento a vista',()=> {
    it('Deve verificar se o desconto de 20% foi aplicado sobre o valor da compra' , () => {
        let resultado = calculadora.desconto(50,20,100)
        expect(resultado).to.be.eq(10)
    }) 
})
describe('Testes de desconto para pagamento a vista',()=> {
    it('Deve verificar se o desconto de 20% foi aplicado sobre o valor da compra' , () => {
        let resultado = calculadora.desconto(100,20,50)
        expect(resultado).to.be.eq(10)
    })
})
