const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));

const userSchema = new Schema({
  _id: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  profileImg: {
    type: String,
  },
  password: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  accountType: String,
  alerts: [{
    title: String,
    urlQuery: String,
    items: [{
      contactInfo: {
        firstName: String,
        homePhone: String,
        cellPhone: String,
      },
      pageStats: {
        listingNumber: String,
        expirationDate: String,
        pageViews: String,
        favorited: String,
        sellerType: String,
        memberSince: String,
      },
      listingDetails: {
        title: String,
        location: String,
        price: String,
        description: String,
      },
      images: [{
        small: String,
        large: String,
      }],
    }],
  }],
}, /* { autoIndex: false, } */);

const User = mongoose.model('User', userSchema);

module.exports = User;
