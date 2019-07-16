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
    const regex = new RegExp(searchInput, 'i') //searching rules
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
4. 在 favorite.html 輸出清單
