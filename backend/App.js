// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// app.use(cors());

// const port = process.env.PORT || 3000;

// // allowCrossDomain function
// allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// }

// app.use(allowCrossDomain);
// app.use(express.json());

// mongoose.connect("mongodb+srv://admin:admin123@devtaminapi.lzx29ep.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
// const connection = mongoose.connection;

// connection.once('open', () => {
//   console.log("MongoDB database connection established successfully");
// });


// const userRouter = require('./routes/users');
// app.use('/users', userRouter);

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

