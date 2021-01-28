const app = express()

app.post('/api/v1/papers', function(req, res) {
  req.body({"title": "hello2","author": "world2"});  
  req.send('Post request completed!')
})