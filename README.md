# Travelworld
A full-stack travel listing web application built with Node.js, Express.js, MongoDB, Mongoose, EJS, and Bootstrap, featuring complete CRUD functionality and RESTful routing.
# 🌍 Travelworld

A full-stack travel listing web application built using Node.js, Express.js, MongoDB, Mongoose, EJS, and Bootstrap.

Travelworld allows users to explore travel destinations, create new listings, update existing listings, and delete listings through a clean and user-friendly interface.

---

## 🚀 Features

- View all travel listings
- View detailed information for a specific listing
- Create new listings
- Edit existing listings
- Delete listings
- MongoDB database integration
- RESTful routing
- Server-side rendering using EJS
- Responsive UI with Bootstrap

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other Packages
- method-override
- ejs-mate

---

## 📂 Project Structure

```
travelworld/
│
├── models/
│   └── listing.js
│
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   └── listings/
│       ├── index.ejs
│       ├── show.ejs
│       ├── new.ejs
│       └── edit.ejs
│
├── public/
│   ├── css/
│   └── js/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/travelworld.git
```

### Move into Project Directory

```bash
cd travelworld
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running locally on:

```bash
mongodb://localhost:27017/travelworld
```

### Initialize Sample Data

```bash
node init/index.js
```

### Run the Application

```bash
node app.js
```

Server will start on:

```bash
http://localhost:8080
```

---

## 📌 Routes

| Method | Route | Description |
|----------|----------|----------|
| GET | /listing | Show all listings |
| GET | /listing/:id | Show listing details |
| GET | /listings/new | Form to create listing |
| POST | /listing | Create new listing |
| GET | /listing/:id/edit | Edit listing form |
| PUT | /listing/:id | Update listing |
| DELETE | /listing/:id | Delete listing |

---

## 🗄️ Listing Schema

```javascript
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: String,
    url: String,
  },
  price: Number,
  location: String,
  country: String,
});
```

---

## 📸 Screenshots

### All Listings Page
(Add Screenshot Here)

### Listing Details Page
(Add Screenshot Here)

### Create Listing Page
(Add Screenshot Here)

### Edit Listing Page
(Add Screenshot Here)

---

## 🎯 Learning Outcomes

Through this project I learned:

- Express Routing
- CRUD Operations
- MongoDB Integration
- Mongoose Models and Schemas
- EJS Templating
- RESTful Architecture
- Bootstrap Styling
- Method Override
- Error Handling in Express

---

## 👩‍💻 Author

**Ayushi Sinha**

B.Tech CSE (AI & ML)  
Vellore Institute of Technology, Bhopal

GitHub: https://github.com/sinhaayushi-oss/Travelworld

LinkedIn: https://www.linkedin.com/in/ayushi-sinha-18531b32a

---

## ⭐ Future Enhancements

- User Authentication
- Authorization
- Image Upload with Cloudinary
- Reviews and Ratings
- Search and Filters
- Interactive Maps
- Booking System

---

If you found this project useful, consider giving it a ⭐ on GitHub.
