import App from "./app";
const PORT = 9001;

new App().app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
