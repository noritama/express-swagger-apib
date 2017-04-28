# Group Swagger

## swagger [/swagger.json]
### show [GET]
####

* swagger.jsonを取得する。

+ Request (application/json)
    + Headers
        Accept: application/json

+ Response 200 (application/json)
    + Attributes
        + swagger (string, required)
        + info (object, required)
        + host (string, required)
        + basePath (string, required)
        + schemas (array)
        + paths (object, required)
        + definitions (object, required)
