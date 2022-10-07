Nama : Indra Oktavianto Putra

<!-- link dbdiagram tabel cars -->

link: (https://dbdiagram.io/d/6262ca521072ae0b6ad14e7c)

<!-- query create tabel dbdiagram -->

Table cars {
id bigint [pk, increment]
name varchar
price integer
size varchar
photo text
created_at timestamp
updated_at timestamp
}

<!-- list end point -->

app.post("/add", carsController.create);
app.post("/edit/:id", carsController.update);
app.get("/getById/:id", carsController.getById);
app.post("/delete-car/:id", carsController.deleteCar);

// get endpoint ejs -----------------
app.get("/", carsController.renderCars);

app.get("/add", (req, res) => {
res.render("add", {
title: "Challenge 5 || Add New Car",
});
});

app.get("/edit/:id", carsController.renderGetById);
