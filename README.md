# MERN ThinkBoard

A simple **full-stack note-taking app** built with the MERN stack. Perfect for beginners to learn CRUD operations, REST APIs, and real-world backend concepts like rate limiting.

---

## 🌟 Highlights

- 🧱 **Full-Stack App Built with MERN** (MongoDB, Express, React, Node)  
- ✨ **Create, Update, and Delete Notes** with Title & Description  
- 🛠️ **Build and Test a Fully Functional REST API**  
- ⚙️ **Rate Limiting with Upstash Redis** — a real-world concept explained simply  
- 🚀 **Completely Responsive UI**  
- 🌐 Explore **HTTP Methods, Status Codes & SQL vs NoSQL**  
- 📦 **Deployment Guide Included** — add the live app to your resume  
- 📚 Designed for **absolute beginners**  
- 🧪 **.env Setup**  

---

## ⚙️ Backend Setup (`/backend`)

Create a `.env` file in your backend folder and add:

```env
MONGO_URI=<your_mongo_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development
````

---

## 🔧 Run the Backend

```bash
cd backend
npm install
npm run dev
```

---

## 💻 Run the Frontend

```bash
cd frontend
npm install
npm run dev


