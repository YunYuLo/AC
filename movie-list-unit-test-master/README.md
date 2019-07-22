# Alpha Camp Week8.
## Test Movie List 
### `searchTitle()`
   - 參數：`data` 電影資料和 `str`搜尋字串
   - expect (data.title === str) return true
   
### 測試需考慮的要點
   - 搜尋成功 
   - 搜尋失敗：查無相符資料
   - **邊界值 (border value)** : 考慮到極端的情況 eg.使用者忘記輸入就按下 enter,資料庫壞掉等
    
### *陣列的深入比對 (deep comparison)*
即使陣列內的值相等，但實際上他們是屬於不同的記憶體區塊（不同的物件），因此return false，利用Chai.js提供了一個[deep](http://www.chaijs.com/api/bdd/#method_deep)方法排除。

```
[1,2,3] === [1,2,3] //return false

//In test process
//...
result.should.be.deep.equal(results)
```
