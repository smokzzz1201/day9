const users = [{name: "user001", age: "220"}, {name: "user002", age: "220"}];


module.exports = function(app) {
app.get("/users", (req, res) => {

    res.json(users);
})

app.post("/users", (req, res) => {

    res.send(users);
})
}