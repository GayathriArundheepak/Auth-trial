const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(express.json()); // For parsing application/json
app.use('/uploads', express.static('uploads')); // Serve profile picture uploads
app.use(cors());
app.use('/api/users', userRoutes); // Use user routes



mongoose.connect('mongodb://127.0.0.1:27017/mernAuth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
// Example route
app.get('/', (req, res) => {
  res.send('CORS enabled');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
