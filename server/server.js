import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from 'inngest/express';
import { inngest, functions } from './inngest/index.js';

import showRouter from './routes/showRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import adminRouter from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';
import { stripeWebhooks } from './controllers/stripeWebhooks.js';

const app = express();
const port = 3000;

try {
  // 1️⃣ Connect to MongoDB FIRST
  await connectDB();

  // 2️⃣ Setup Stripe Webhooks (must be raw before json middleware)
  app.use('/api/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

  // 3️⃣ Global Middleware
  app.use(express.json());
  app.use(cors());
  app.use(clerkMiddleware());

  // 4️⃣ API Routes
  app.get('/', (req, res) => res.send('Server is Live!'));
  app.use('/api/inngest', serve({ client: inngest, functions }));
  app.use('/api/show', showRouter);
  app.use('/api/booking', bookingRouter);
  app.use('/api/admin', adminRouter);
  app.use('/api/user', userRouter);

  // 5️⃣ Start Server AFTER MongoDB is ready
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
} catch (err) {
  console.error('❌ Server startup failed:', err.message);
  process.exit(1); // Exit process if DB fails
}
