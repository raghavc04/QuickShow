# 🎬 QuickShow – Real-Time Movie Booking App

QuickShow is a full-stack real-time movie booking platform where users can explore movies, check showtimes, book tickets, and make secure payments. It features a powerful admin panel that allows adding movies and shows dynamically using TMDB API integration. Built with modern technologies for performance, scalability, and a seamless developer experience.

---

## 🚀 Tech Stack

- **Frontend**: React + Vite + Tailwind CSS  
- **Backend**: Node.js + Express  
- **Database**: MongoDB  
- **Authentication**: Clerk  
- **Payments**: Stripe  
- **Async Jobs**: Inngest (for background tasks like emails)  
- **Email SMTP**: Brevo  
- **Hosting**: Vercel (client & server)

---

## 🔐 Clerk Admin Access

To enable admin access via Clerk:

1. Go to your [Clerk Dashboard](https://dashboard.clerk.com/)
2. Navigate to **Users > Metadata**
3. Under `Private Metadata`, add this:

role: admin

You can access admin panel: https://raghavquickshow.vercel.app/admin


🛠️ Setup Instructions
1. Clone the Repository
git clone https://github.com/raghavc04/QuickShow.git
cd QuickShow


2. Backend Setup
cd server
npm install


Create a .env file in /server:

# Database
MONGODB_URI=your_mongodb_uri

# Clerk Auth
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Movie DB
TMDB_API_KEY=your_tmdb_token

# SMTP
SENDER_EMAIL=your_email
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Stripe
STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

Start backend: npm run server

3. Frontend Setup
cd ../client
npm install


Create a .env file in /client:
VITE_CURRENCY=$
VITE_BASE_URL=http://localhost:3000
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

Start frontend:npm run dev
Visit: http://localhost:5173

🧩 Inngest Setup
Go to https://app.inngest.com

Connect your server project

Use your INNGEST_EVENT_KEY and SIGNING_KEY in your .env

Inngest handles background jobs such as automated emails and other async workflows.


💳 Stripe Webhook Setup
Go to Stripe Webhooks

Add a new endpoint:your backend deployed link

📦 Features
🔐 Clerk authentication with role-based admin control

🎬 Real-time movie data using TMDB

🪑 Book available seats with lock mechanism

💳 Secure Stripe checkout for payments

📩 Automatic email notifications via SMTP

⚙️ Admin Panel to manage shows and movies

🌍 Deployed on Vercel (Full Stack)





