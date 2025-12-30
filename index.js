const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Use a middleware handler to avoid parsing the route pattern
app.use((req, res) => {
	res.send('this is market place backend');
});

app.listen(PORT, () => {
	console.log(`Express server listening on port ${PORT}`);
});

