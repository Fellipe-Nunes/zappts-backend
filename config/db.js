const mongoose = require('mongoose')
const config = require('config')

const connectDB = async (db=process.env.MongoURI || config.get('mongoURI')) => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected')
	} catch (err) {
		console.error(err.message)
		// Exit process with failure
		process.exit(1)
	}
};

module.exports = connectDB