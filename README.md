# DevStack

DevStack is a simple web application where users can explore different technologies and build their own personalized technology stack.


## 🚀 Live Demo

[View DevStack Live](https://devtecassignment5.netlify.app)

## 🛠️ Tech Stack

**Frontend:** React · TypeScript · Tailwind CSS
**Build Tool:** Vite
**Data:** JSON

## ✨ Features

* 📚 Explore different technologies through technology cards.
* ➕ Add technologies to your personal stack.
* ❌ Remove individual technologies from your stack.
* 🗑️ Remove all technologies from your stack.
* 📱 Responsive user interface.
## 📦 Dependencies

- React 19.2.8
- React DOM 19.2.8
- Tailwind CSS 4.3.3
- DaisyUI 5.7.38
- Vite 8.3.0
- TypeScript 6.0.2
- Oxlint 1.81.0

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/humayra-yeasmin-star8/Assignment-5.git
```

### 2. Navigate to the project

```bash
cd Assignment-5
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local development URL shown in your terminal.

## 🧠 React Concepts Used

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like syntax inside JavaScript or TypeScript. It makes creating and structuring the UI easier in React.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data that can change inside a component and can cause the UI to update.

### 3. What does `useState` do, and where did you use it?

`useState` is used to store and manage changing data in a React component.

In DevStack, I used it to store the technologies added to **Your Stack**.

### 4. What does `useEffect` do, and why did you need it to load the JSON data?

`useEffect` is used to handle side effects in React.

I used it to load the technology data from the JSON file when the application starts.

```javascript
useEffect(() => {
  fetchTechData();
}, []);
```

### 5. Why does every `.map()` item need a unique key?

The `key` helps React identify each item in a list and efficiently track changes when the list is updated.

For example:

```jsx
key={tech.id}
```

### 6. What is conditional rendering?

Conditional rendering means displaying different UI elements depending on a condition.

For example, the application can show different content depending on whether technologies have been added to the user's stack.

### 7. How do you pass data from parent to child?

Data is passed from a parent component to a child component using **props**.

A child component can communicate back to the parent by calling a function passed through props.

For example, in DevStack, I pass `technology` and `onAdd` from `App` to `TechCard`.

## 🔗 Links

* **Live Demo:** https://devtecassignment5.netlify.app
* **Repository:** https://github.com/humayra-yeasmin-star8/Assignment-5
