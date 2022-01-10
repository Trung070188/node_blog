const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
  {
    name: { type: String, require: true },
    mota: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    image: { type: String },
    videoId: { type: String, require: true },
    level: { type: String },
  },
  {
    timestamps: true,
  },
);
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true,

  overrideMethods: 'all',
});
module.exports = mongoose.model('Course', Course);
