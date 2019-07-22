var should = chai.should()
describe('Test fizzbuzz function', function(){
    // [case1] input: 6, expect output: Fizz
    it ('num % 3 === 0', function() {
        let result = fizzBuzz (6)
        let results = 'Fizz'
        result.should.be.deep.equal(results)
    })
    // [case2] input: 10, expect output: Buzz
    it ('num % 5 === 0', function() {
        let result = fizzBuzz (10)
        let results = 'Buzz'
        result.should.be.deep.equal(results)
    })
    // [case3] input: 30, expect output: FizzBuzz
    it ('num % 5 === 0 & num % 3 === 0', function() {
        let result = fizzBuzz (30)
        let results = 'FizzBuzz'
        result.should.be.deep.equal(results)
    })
    // [case4] input: 7, expect output: 7
    it ('num % 5 !== 0 & num % 3 !== 0', function() {
        let result = fizzBuzz (7)
        let results = 7
        result.should.be.deep.equal(results)
    })
})