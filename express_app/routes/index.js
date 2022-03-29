// https://docs.retool.com/docs/api-requests#uploading-a-file-via-a-post-request

const express = require('express');
const multer = require('multer')
const fs = require('fs');
const { time } = require('console');

const router = express.Router();
const upload = multer({ dest: 'tmp/' })


router.post('/upload', upload.single('file'), function(req, res) {
  const file = req.file
  console.log({ file })
  fs.rename('tmp/' + file.filename, 'tmp/' + Date.now() + file.originalname, (err) => {
    if (err) console.log('ERROR:', err)
  })

  res.sendStatus(200)
})

module.exports = router