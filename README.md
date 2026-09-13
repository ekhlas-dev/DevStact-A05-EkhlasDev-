# DevStack

DevStack is a modern technology stack builder where users can explore different web technologies and create their own development stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- JSON
- React Hooks

## Features

1. **Explore Technologies**
   - Users can browse different technologies such as React, Vue.js, Node.js, PostgreSQL, Redis, JavaScript, and TypeScript.

2. **Build Your Own Stack**
   - Users can add technologies to their personal stack and remove them whenever they want.

3. **Search and Filter**
   - Users can search technologies by name and filter them by category.

---

## React Questions & Answers

### 1. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is data managed inside a component that can change over time.

---

### 2. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.

In this project, I used it to manage selected technologies, search text, category, loading, and error states.

---

### 3. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used it to fetch the JSON data when the component first loads.

---

### 4. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list.

It helps React efficiently update, add, or remove items from the UI.

---

### 5. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it to show the selected technologies or an empty stack message.

```tsx
{selectedTechnologies.length > 0 ? (
  selectedTechnologies.map((technology) => (
    <StackItem key={technology.id} technology={technology} />
  ))
) : (
  <p>No technology selected</p>
)}


