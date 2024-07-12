import app from "./app.js";

const { PORT } = process.env;

if (!PORT) {
    throw new Error("Missing PORT environment variable.");
}
// Start the server
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
