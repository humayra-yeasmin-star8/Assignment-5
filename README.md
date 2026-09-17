
DevStack is a simple website where users can explore different technologies and build their own technology stack.

🛠️ Technologies Used

* React
* TypeScript
* Tailwind CSS
* JSON
* Vite

✨ Features

- Shows technology cards with useful information.
- Users can add technologies to their stack.
- Users can remove one or all technologies from their stack.


Questions

1. What is JSX, and why is it used in React?

=JSX lets us write HTML-like code inside JavaScript or TypeScript. It makes creating the UI easier in React.

2. What is the difference between props and state?

=Props are data passed from a parent to a child. State is data that can change inside a component.

3. What does useState do, and where did you use it?

=useState is used to store changing data. I used it to store the technologies added to Your Stack.

4. What does useEffect do, and why did you need it to load the JSON data?

=useEffect is used for side effects. I used it to fetch and load the technology data from the JSON file when the app starts.

useEffect(() => {
  fetchTechData();
}, []);

5. Why does every .map() item need a unique key?

=The key helps React identify each item in a list.
key={tech.id}

6. What is conditional rendering?

=Conditional rendering means showing something based on a condition.

7. How do you pass data from parent to child?

=We pass data using props. A child can send something back by calling a function passed from the parent.
For example, I pass technology and onAdd from App to TechCard.
