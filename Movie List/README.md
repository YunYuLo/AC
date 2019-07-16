# MovieList
## Searching Button - process
1. 新增 search bar 的 UI 元件
    ```html
    <!--search bar-->
        <div class="row" id="search-bar">
          <form id="search" class="form-inline">
            <label class="sr-only" for="inlineFormInputName2">Name</label>
            <input type="text" class="form-control mb-2 mr-sm-2" id="search-input" placeholder="search name ...">
            <button type="submit" class="btn btn-primary mb-2">Search</button>
          </form>
        </div>
    ```
    當你把 form 和 button 放在一起時，<button> 的預設行為是「將表單內容透過 HTTP request 提交給遠端伺服器」，除非使用 Ajax 技術發送非同步請求，否則一般的 HTTP request 都會刷新瀏覽器畫面。
    ```javascript
      //終止預設行為
      event.preventDefault()
    ```
2. 將搜尋表單綁定點擊事件，觸發搜尋功能
    ```javascript
    .addEventListener('submit', event => {
    })
    ```
3. 比對搜尋關鍵字與電影標題
    - [正規表達式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) (Regular Expression，簡稱 regexp)：表達字串的模式([pattern](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp))
    - [線上工具–Regex Tester](https://www.regexpal.com)
    ```javascript
    let searchInput = 'ant' //user input key words
    const regex = new RegExp(searchInput, 'i') //input key and set rules
    let results = data.filter(
    movie => movie.title.match(regex) //whether element from data match the key words
    )
    console.log(results)
    ```
    - [JavaScript 陣列(Array)處理方法](https://wcc723.github.io/javascript/2017/06/29/es6-native-array/)
4. 將匹配結果回傳到網頁畫面上

## Favorite Button - process
1. 在電影卡片上增加收藏按鈕
2. 監聽收藏按鈕的點擊事件
3. 點擊事件觸發時，取得電影項目並儲存到另一個清單
    ```javascript
    function addFavoriteItem (id) {
    //取出local storage 裡的 value，若使用者是第一次使用收藏功能，則會找不到東西，所以需要建立一個空 Array。
    const list = JSON.parse(localStorage.getItem('favoriteMovies')) || []
    //從電影總表中找出 id 符合條件的電影物件
    const movie = data.find(item => item.id === Number(id))
    
    if (list.some(item => item.id === Number(id))) {
    alert(`${movie.title} is already in your favorite list.`)
    } else {
    list.push(movie)
    alert(`Added ${movie.title} to your favorite list!`)
    }
    localStorage.setItem('favoriteMovies', JSON.stringify(list))
    }
    ```
    - [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
    - [Array.some()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some)tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
4. 在 favorite.html 輸出清單

## About [local storage](https://www.w3schools.com/htmL/html5_webstorage.asp)
- 資料會以類似 JSON 的 Key-Value pair 的格式儲存，key 和 value 都需要是字串 (string)
- [Manipulate](https://www.huanlintalk.com/2012/06/html5-web-storage.html)
    - localStorage.setItem('key', 'value') 存入
    - localStorage.getItem('key') 取出
    - localStorage.removeItem('key') 移除
- local storage 裡的 value 是 string type，也就是存入 data 時需要呼叫 [JSON.stringify(obj)，而取出時需要呼叫 JSON.parse(value)](https://cythilya.github.io/2015/05/09/javascript-json-parse-stringify/)

## Delete Button - process
- 運用 id 值刪除電影
- [Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
- [Array.splice(start[, deleteCount])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)changes the contents of an array by removing or replacing existing elements and/or adding new elements
