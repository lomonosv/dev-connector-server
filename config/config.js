const keys = require('./keys');

module.exports = {
	mongoURI: `mongodb://${keys.mongodb.login}:${keys.mongodb.password}@ds135966.mlab.com:35966/dev-connector`
};
