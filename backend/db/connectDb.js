import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
   const conn = await mongoose.connect(process.env.DB_URI);
    console.log('Database connected successfully',conn);
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit process with failure
  }
};
