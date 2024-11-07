const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Sample data
const data = {
  users: [
    {
      user_id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "hashed_password",
      role: "buyer",
      favorite_properties: ["101", "102"],
      bookings: ["201"]
    },
    {
      user_id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "hashed_password",
      role: "seller",
      listings: ["103", "104"]
    }
  ],
  properties: [
    {
      property_id: "101",
      title: "Luxury Apartment in Downtown",
      description: "A beautiful 2-bedroom apartment in the heart of the city.",
      price: 1200000,
      location: {
        address: "123 Main St, City, State",
        latitude: 40.7128,
        longitude: -74.0060
      },
      images: ["image1.jpg", "image2.jpg"],
      seller_id: "2",
      property_type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      square_feet: 1200,
      amenities: ["Parking", "Gym", "Pool"],
      date_listed: "2024-10-01",
      status: "available"
    },
    {
      property_id: "102",
      title: "Suburban Family Home",
      description: "Spacious 4-bedroom home with a backyard and garage.",
      price: 850000,
      location: {
        address: "456 Elm St, Suburbia, State",
        latitude: 41.2033,
        longitude: -77.1945
      },
      images: ["image3.jpg", "image4.jpg"],
      seller_id: "2",
      property_type: "House",
      bedrooms: 4,
      bathrooms: 3,
      square_feet: 2500,
      amenities: ["Garage", "Backyard", "Fireplace"],
      date_listed: "2024-09-15",
      status: "available"
    }
  ],
  bookings: [
    {
      booking_id: "201",
      user_id: "1",
      property_id: "101",
      visit_date: "2024-11-15",
      status: "confirmed",
      notes: "Looking forward to the visit!"
    }
  ],
  reviews: [
    {
      review_id: "301",
      property_id: "101",
      user_id: "1",
      rating: 4.5,
      comment: "Great location and amenities, but a bit noisy.",
      date: "2024-11-01"
    },
    {
      review_id: "302",
      property_id: "102",
      user_id: "1",
      rating: 5,
      comment: "Perfect family home, loved the spacious backyard!",
      date: "2024-11-03"
    }
  ]
};

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Real Estate API');
  });
  
// Get all users
app.get('/users', (req, res) => {
  res.json(data.users);
});

// Get user by ID
app.get('/users/:id', (req, res) => {
  const user = data.users.find(u => u.user_id === req.params.id);
  user ? res.json(user) : res.status(404).send("User not found");
});

// Get all properties
app.get('/properties', (req, res) => {
  res.json(data.properties);
});

// Get property by ID
app.get('/properties/:id', (req, res) => {
  const property = data.properties.find(p => p.property_id === req.params.id);
  property ? res.json(property) : res.status(404).send("Property not found");
});

// Get all bookings
app.get('/bookings', (req, res) => {
  res.json(data.bookings);
});

// Get booking by ID
app.get('/bookings/:id', (req, res) => {
  const booking = data.bookings.find(b => b.booking_id === req.params.id);
  booking ? res.json(booking) : res.status(404).send("Booking not found");
});

// Get all reviews
app.get('/reviews', (req, res) => {
  res.json(data.reviews);
});

// Get review by ID
app.get('/reviews/:id', (req, res) => {
  const review = data.reviews.find(r => r.review_id === req.params.id);
  review ? res.json(review) : res.status(404).send("Review not found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
