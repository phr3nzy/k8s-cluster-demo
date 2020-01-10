const router = require("express")();

router.get("/", (req, res) => {
	res.status(200).json({ message: "Welcome to the server service!" });
});

router.get("/status", (req, res) => {
	res.status(200).json({ status: "Server online" });
});

router.post("*", (req, res) => {
	res.status(404).json({ error: "Route not found!" });
});

router.put("*", (req, res) => {
	res.status(404).json({ error: "Route not found!" });
});

router.patch("*", (req, res) => {
	res.status(404).json({ error: "Route not found!" });
});

router.delete("*", (req, res) => {
	res.status(404).json({ error: "Route not found!" });
});

module.exports = router;