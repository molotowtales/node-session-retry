# Read me

Attempt session init x times before failing. Success is detemined by `req.session !== undefined`.

Heavily inspired by https://github.com/expressjs/session/issues/99#issuecomment-63853989.

## Params
session_retry(session_middleware, [tries]).

`tries` is optional, defaults to 3.

## Example of usage
```
var session_middleware = session({});
app.use(require('./session_retry')(session_middleware, 3));
```
