# Task Management System

## 📌 Short Description
This is a **Task Management System** that allows users to create, update, delete, and manage tasks with real-time updates. It features drag-and-drop functionality, task categorization, and a modern UI.

---

## 🚀 Live Demo
🔗 **Frontend:** https://comfy-strudel-e0b73f.netlify.app/ 
🔗 **Backend:** https://job2servertask.vercel.app/


---

## 📦 Dependencies

### **Frontend Dependencies:**
```json
"@tailwindcss/vite": "^4.0.7",
"@tanstack/react-query": "^4.36.1",
"axios": "^1.7.9",
"firebase": "^11.3.1",
"react": "^19.0.0",
"react-beautiful-dnd": "^13.1.1",
"react-dom": "^19.0.0",
"react-router-dom": "^7.2.0",
"react-toastify": "^11.0.3",
"tailwindcss": "^4.0.7"
```

### **Backend Dependencies:**
```json
"cors": "^2.8.5",
"dotenv": "^16.4.7",
"express": "^4.21.2",
"mongodb": "^6.13.1"
```

---

## 📥 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/task-management.git
cd task-management
```

### **2️⃣ Install Dependencies**
#### 🔹 **For Frontend:**
```sh
cd client
npm install
```

#### 🔹 **For Backend:**
```sh
cd server
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file in the **server** directory and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
FIREBASE_API_KEY=your_firebase_api_key
```

### **4️⃣ Start the Application**
#### 🔹 **Run Backend Server:**
```sh
cd server
npm start
```

#### 🔹 **Run Frontend:**
```sh
cd client
npm run dev
```

Your app should now be running locally on `http://localhost:5173` (for frontend) and `http://localhost:5000` (for backend).

---

## 🛠 Technologies Used
- **Frontend:** React, Vite, Tailwind CSS, React Router, React Query, Axios, React Toastify, React Beautiful DND
- **Backend:** Express.js, MongoDB, CORS, Dotenv
- **Database:** MongoDB
- **Authentication:** Firebase

---

## 🔧 Features
✅ **Create, Edit, Delete Tasks**  
✅ **Drag and Drop for Task Management**  
✅ **Real-time Updates with WebSockets**  
✅ **Firebase Authentication**  
✅ **Modern UI with Tailwind CSS**  
✅ **Fully Responsive Design**



