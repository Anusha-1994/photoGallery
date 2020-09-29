const express                   = require('express');
const app                       = express();
const cors                      = require('cors');
const bodyParser                = require('body-parser');
const photoGallery              = require('./controllers/photogallery.service');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.get('/getphotos', (req, res) => {
    photoGallery.get_photos(req, res)
});

app.put('/updateDetails', (req, res) => {
  photoGallery.update_photos(req, res)
})




app.use(errorHandler);

app.listen(8000, () => {
  console.log('App listening on port 8000!')
});



function errorHandler(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
      // jwt authentication error
      return res.status(401).json({ message: 'Invalid Token' });
  }
}