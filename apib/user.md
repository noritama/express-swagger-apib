# Group ユーザ
 
## user [/users]
### create [POST]
#### 処理概要
 
* ユーザ情報を新しく登録する。
* 登録に成功した場合、アクセストークンを返す。
 
+ Request (application/json)
    + Headers
            Accept: application/json
    + Attributes
        + email: test@example.com (string, required) - メールアドレス（format: email）
        + password: abc123 (string, required) - パスワード（pattern: ^[0-9A-Za-z]{6,16}$）
 
+ Response 201 (application/json)
    + Attributes
        + accessToken: f58ba22059f5a8aa8f346e0f40987adab326041fac99029c909bef2c6300821a (string, required) - アクセストークン


## user [/users/{userId}]
### show [GET]
#### 処理概要
 
* 指定した会員の情報を返す。
* userIdは必須。
 
+ Parameters
    + userId: 300 (number, optional) - ユーザID
 
+ Response 200 (application/json)
    + Attributes
        + user (required)
            + name: wada (string, required)
            + age: 18 (number, required)
            + type: 0 (enum, required) - ユーザ種別(0:無料ユーザ, 1:有料ユーザ)
                + 0 (number)
                + 1 (number)
            + profile (object, required)
            + registered: `2015-06-11T08:40:51Z` (string, required)
            + favorites (array) -- (10)
                + `http://dev.classmethod.jp/` (string)
        + messageHistory (array)
            + (object)
                + id: 22345 (number, required)
                + title: 今日の献立 (string, required)

