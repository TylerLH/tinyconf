tinyconf
========

Simple, env-specific config loader for node.js. Uses JSON files for config settings.

## Usage
Install tinyconf via NPM: `npm install --save tinyconf`

Create a config folder in your project containing JSON files using your app's environments (`process.env.NODE_ENV`) for filenames: 

```Bash
mkdir ./config && cd ./config
touch development.json staging.json production.json
```

Development JSON example (./config/development.json):
```JSON
{
  "socket_path": "http://localhost:3000",
  "port": 3001
}
```

Then require tinyconf in your app and you're good to go:
```Coffeescript
# app.coffee
config  = require('tinyconf')()
express = require 'express'
app     = express()
io      = require('socket.io-client')
socket  = io.connect config.socket_path

socket.on 'connect', ->
  socket.emit 'status', msg: "Initializing"

app.listen(config.port || 3001)
```

### Options

**path** - Set an optional path to your config folder. If not set, tinyconf assumes your config folder is in the same directory as your app.

Example: `var config = require('tinyconf')({path: './another_dir/config'});`

