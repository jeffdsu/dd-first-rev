var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var User = mongoose.model('User');

var ColorlessDiamondSchema = new mongoose.Schema({
  color: {
      type: String,
      enum: ['Round', 'Princess', 'Cushion', 'Emerald', 'Oval', 'Radiant', 'Asscher', 'Marquiese', 'Heart', 'Pear'],
  }
  color: {
      type: String,
      enum: ['M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D'],
  }
  clarity: {
      type: String,
      enum: ['I1', 'SI2', 'SI1', 'VS2', 'VS1', 'VVS2', 'IF', 'FL'],
  }
  cut: {
      type: String,
      enum: ['Good', 'VeryGood', 'Ideal', 'AstorIdeal'],
  }
  carat: {
        type: Number,
        min: 0,
        max: 30
  }
  // TODO make this check only 2 decimal places
  price: Number,
}, {timestamps: true});

ArticleSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    title: this.title,
    description: this.description,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,
    favorited: user ? user.isFavorite(this._id) : false,
    favoritesCount: this.favoritesCount,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Article', ArticleSchema);
