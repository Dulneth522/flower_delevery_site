Flower Bouquets delivery and selling e-commerce website

A full-stack web application built with *React* and *Spring Boot*.

----------------------------------------------------------------------------------------

🛠 Tech Stack

* **Frontend:** React.js (Hooks, Axios)
* **Backend:** Spring Boot
* **Database:** MySQL
* **Styling:** CSS and Boostrap

--------------------------------------------------------------------------------------

Key Features & Requirements

### 🔐 Security & Admin
* Only Admin can add flowers to the website and any people can send flower boquests to the admin

### 🖼 Image Handling & Database
* **URL Capacity:** The `imageUrl` field is configured to handle strings up to **255 characters**, allowing for long cloud-hosted image links.
* **Null Logic (Frontend):** * If the database is empty (null), the frontend is programmed to automatically render **6 dummy flower images** to maintain the layout.
    * Once data is added, the dummy images are replaced by the real database entries.

---

## 🚀 Getting Started

### Backend Setup (Spring Boot)
1. Run mysql 
2. Run the backend part using interlij or any tool

### Frontend Setup (React)
1. type command "npm run dev" and press enter
   
