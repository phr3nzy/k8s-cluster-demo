const app = require("express")();
const routes = require("./routes");

const { API_PORT = 3000 } = process.env;

app.use("/api", routes);

app.listen(API_PORT, () => {
	console.log(`Listening on port ${API_PORT}`);
});