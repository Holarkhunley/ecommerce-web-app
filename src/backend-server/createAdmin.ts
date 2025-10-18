
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/Users.ts'; // or .ts if you're using TS

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.PROD_MONGO_URI as string);

    const hashedPassword = await bcrypt.hash('o1l2a3Code?rsept20$@', 10); // give any password you want

    const admin = new User({
      firstname: 'Admin',
      lastname: 'User',
      email: 'olakunleosunlana@gmail.com',
      phone: '09068066760',
      password: hashedPassword,
      role: 'admin'
    });

    await admin.save();
    console.log(' Admin created successfully');
    process.exit();
  } catch (err) {
    console.error('Error creating admin:', err);
    process.exit(1);
  }
};

createAdmin();
