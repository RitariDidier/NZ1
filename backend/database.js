const mongoose = require("mongoose");
const connection =
  "mongodb+srv://admin:3pm3iquJ11JnachM@tigcluster.u3x5p.mongodb.net/TIGCluster?retryWrites=true&w=majority";
// const connection = process.env.DB_CONN;
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
