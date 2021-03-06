const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./apiR")(app);
require("./htmlR")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});