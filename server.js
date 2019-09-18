let express = require('express')
let path = require('path')
let cors = require('cors')
let bodyParser = require('body-parser')
let RewriteMiddleware = require('express-htaccess-middleware');
let RewriteOptions = {
  file: path.resolve(__dirname, '.htaccess'),
  verbose: (process.env.ENV_NODE == 'development'),
  watch: (process.env.ENV_NODE == 'development'),
};

let app = express();
app.listen(3030, function() {
 console.log("app listening on port: 3030")
});
app.use(cors());
app.use(RewriteMiddleware(RewriteOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
app.use(express.static(path.resolve(__dirname,'./public' )));

