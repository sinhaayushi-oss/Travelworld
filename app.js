const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");


async function main() {
    await mongoose.connect("mongodb://localhost:27017/travelworld");
}

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log("Error connecting to MongoDB", err);
  });


app.get("/", (req, res) => {
    res.send("Server is working");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));



//index route to show all listings
app.get("/listing", async (req , res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
});

// new route to show form for creating a new listing
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});


//show route to show details of a single listing
app.get("/listing/:id", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        return res.status(404).send("Listing not found");
    }

    res.render("listings/show.ejs", { listing });
});


//create route to handle form submission for creating a new listing
app.post("/listing", wrapAsync(async (req, res , next) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listing");
}));


//edit route to show form for editing an existing listing
app.get("/listing/:id/edit", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        return res.status(404).send("Listing not found");
    }
    res.render("listings/edit.ejs", { listing });
});


//update route to handle form submission for updating an existing listing
app.put("/listing/:id", async (req, res) => {
    const { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });
    if (!updatedListing) {
        return res.status(404).send("Listing not found");
    }
    res.redirect(`/listing/${updatedListing._id}`);
});


// delete route to handle deletion of a listing
app.delete("/listing/:id", async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listing");
});



app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    });

    await sampleListing.save();

    res.send("Test listing saved!");
});

app.use((err, req, res, next) => {
    res.send("something went wrong!");
});

app.listen(8080, ()=> {
    console.log("Server is running on port 8080");
});


