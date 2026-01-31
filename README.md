# 🍕 Fast React Pizza Co.

A modern pizza ordering application built with React and Redux, where customers can browse a dynamic menu and order delicious pizzas without the need for authentication.

## 🔗 Live Demo

[View Live Project](https://fast-react-pizza-co.netlify.app)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Business Requirements](#business-requirements)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## 📖 About the Project

Fast React Pizza Co. is a streamlined pizza ordering application that prioritizes simplicity and user experience. Customers can quickly browse the menu, add pizzas to their cart, and place orders without the hassle of creating an account or logging in.

---

## 💼 Business Requirements

This project was built to meet the following business requirements:

- **Simple User Experience**: Users can order one or more pizzas from a menu with minimal friction
- **No Authentication Required**: Just input your name and start ordering
- **Dynamic Menu**: Pizza menu is loaded from an API and can be updated in real-time
- **Shopping Cart**: Add multiple pizzas before placing your order
- **Easy Checkout**: Only requires name, phone number, and delivery address
- **GPS Location Support**: Optional GPS location input to streamline delivery
- **Priority Orders**: Mark orders as "priority" for an additional 20% fee
- **API Integration**: Orders are submitted via POST request to the backend API
- **Cash on Delivery**: No online payment processing needed
- **Order Tracking**: Each order receives a unique ID for easy lookup
- **Post-Order Priority Upgrade**: Ability to upgrade to priority status even after order placement

---

## ✨ Features

- 🍕 Browse dynamic pizza menu loaded from API
- 🛒 Add multiple pizzas to cart with quantity selection
- 📍 Optional GPS location integration for delivery
- ⚡ Priority order option for faster delivery
- 🔍 Order lookup by unique order ID
- 📱 Responsive design for all devices
- 🎨 Modern UI with Tailwind CSS
- 🔄 State management with Redux

---

## 🛠️ Technologies Used

- **[React](https://react.dev/)** - UI library for building the interface
- **[Redux](https://redux.js.org/)** - State management
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Build tool and development server

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/fast-react-pizza.git
   ```

2. Navigate to the project directory
   ```bash
   cd fast-react-pizza
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 📁 Project Structure

```
fast-react-pizza/
├── src/
│   ├── features/          # Feature-based components
│   │   ├── cart/         # Shopping cart functionality
│   │   ├── menu/         # Pizza menu display
│   │   ├── order/        # Order placement and tracking
│   │   └── user/         # User information handling
│   ├── services/         # API calls and services
│   ├── ui/              # Reusable UI components
│   ├── utils/           # Utility functions
│   └── store.js         # Redux store configuration
├── public/              # Static assets
└── package.json
```

---

## 📄 License

This project is for educational purposes.

---

**[⬆ Back to Top](#-fast-react-pizza-co)**
