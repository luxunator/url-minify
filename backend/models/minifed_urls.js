const mongoose = require('mongoose')
const { Schema } = mongoose

//build a schema
const minifiedUrlSchema = new Schema(
   {
      originalUrl: {
         type: String,
         required: true,
      },
      alias: {
         type: String,
         required: true,
      },
      minifiedUrl: {
         type: String,
         required: true,
      },
      views: {
         type: Number,
      },
   },
   { timestamp: true }
)
//make a model using this schema and export it
module.exports = mongoose.model('minified_url_model', minifiedUrlSchema)
