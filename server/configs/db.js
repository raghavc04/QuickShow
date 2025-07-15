import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('✅ MongoDB connected'));
    mongoose.connection.on('error', (err) => console.error('❌ MongoDB error:', err));

    await mongoose.connect(process.env.MONGODB_URI); // Clean and modern
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    throw error;
  }
};

export default connectDB;
