var should = chai.should()
  
  describe('Test searchTitle function', function () {
      //case 1 str === data.title
    it('should return movies which title match search input', function () {
      // let a  fake data list to do test
        let testDataList = [
        { title: 'Ant-Man and the Wasp' },
        { title: 'Ant-Man' },
        { title: 'Thor' }
      ]

      //test function
      let result = searchTitle(testDataList, 'ant')
      
      //expected results
      let results = [
        { title: 'Ant-Man and the Wasp' },
        { title: 'Ant-Man' }
      ]
      result.should.be.deep.equal(results)
    })

    //case 2 str !== data.title
    it('should return empty array when no movie found', function () {
        let testDataList = [
        { title: 'Ant-Man and the Wasp' },
        { title: 'Ant-Man' },
        { title: 'Thor' }
        ]
        let result = searchTitle(testDataList, 'spider')
        let results = []
        result.should.be.deep.equal(results)
    })

    //case 3 str = ''
    it('should return all movies when search input is empty', function () {
        let testDataList = [
          { title: 'Ant-Man and the Wasp' },
          { title: 'Ant-Man' },
          { title: 'Thor' }
        ]
        let result = searchTitle(testDataList, '')
        let results = [
          { title: 'Ant-Man and the Wasp' },
          { title: 'Ant-Man' },
          { title: 'Thor' }
        ]
        result.should.be.deep.equal(results)
    })

    //case 4 data = []
    it('should return empty array when movie list is empty', function () {
        let testDataList = []
        let result = searchTitle(testDataList, 'ant')
        let results = []
        result.should.be.deep.equal(results)
      })
  })