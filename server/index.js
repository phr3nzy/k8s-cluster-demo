const app = require("express")();
const routes = require("./routes");

const { SERVER_PORT = 3000 } = process.env;

app.use("/api", routes);

app.listen(SERVER_PORT, () => {
	console.log(`Listening on port ${SERVER_PORT}`);
});