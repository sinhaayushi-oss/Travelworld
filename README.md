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
<img width="1900" height="914" alt="home page (1)" src="https://github.com/user-attachments/assets/ab151841-b2a7-471d-b113-e21bb180039e" />
<img width="1903" height="914" alt="home page (2)" src="https://github.com/user-attachments/assets/6e9e3baf-b9d0-4ef6-9bc5-89961dd9fab0" />
<img width="1897" height="912" alt="home page (3)" src="https://github.com/user-attachments/assets/e8ac756e-6301-4d38-9d99-00a0c8e0f8e8" />
<img width="1898" height="909" alt="home page (4)" src="https://github.com/user-attachments/assets/409f9898-bcb9-4d85-8163-a0cde8785c3b" />
<img width="1897" height="905" alt="home page(5)" src="https://github.com/user-attachments/assets/c4d466b5-cb3b-4801-9d91-56d49a2a62d6" />


### Listing Details Page
<img width="1897" height="907" alt="view listing details (1)" src="https://github.com/user-attachments/assets/c825ca52-7d7c-485b-a1d8-bb29f3552000" />
<img width="1270" height="896" alt="view listing details" src="https://github.com/user-attachments/assets/64091500-cb52-458c-9926-b47aeb4ced2a" />

### Create Listing Page
<img width="1886" height="893" alt="creating new listing" src="https://github.com/user-attachments/assets/9c5ebe04-2de2-4d03-bd22-0142e47bf297" />

### Edit Listing Page
<img width="1885" height="909" alt="edit the listings" src="https://github.com/user-attachments/assets/1ed5821d-8a0c-46c6-adf7-da73ed67c974" />




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
