## DT Money

&nbsp; This project was made following the Ignite Bootcamp 2022, Chapter 3, (API Consume and performance on React), promoted By Rocketseat®

Main Features:

- Create Transaction
- Show Transactions Summary
- List Transactions
- Search on Transactions List

Concepts to learn/revision about:

- API consume
- State management (locally, globally and scoped)
- React Rendering understanding;
- Performance monitoring
- Performance improvements

### Why a component re-renders

- State, Context and Props changes
- Force Update
- Parent re-renders

### Who React render flow works?

1.  React starts by calling the `render` method of the top-level component, which returns a tree of React elements.
2.  React then compares the new tree of elements with the previous tree to determine which parts of the UI need to be updated.
3.  If there are differences between the two trees, React updates the DOM to reflect the changes.
4.  During this process, React will call several lifecycle methods on the components involved in the update. These methods allow components to perform additional logic before or after rendering.
5.  After all the components have been updated, React will call the `useEffect` Hook to handle any side effects caused by the update.
6.  If the props or state of a component change, the entire process is repeated starting from step 1.
7.  If a component is unmounted, React will call the useEffect Hook with a cleanup function to perform any necessary cleanup before removing it from the DOM.

<br/>

#### React.useCallback

- It is a React Hook that is used to optimize performance by memoizing a function and preventing unnecessary re-renders of child components.
- In general, you should use useCallback when passing down a function as a prop to a child component that may cause the child component to re-render unnecessarily.

<small><strong style="color:red">&nbsp; &nbsp; However, you should also be mindful of not overusing useCallback and only use it when necessary, as it can have a negative impact on performance if used excessively.</strong></small>

### React.useMemo

- It is a React Hook that is used to memoize a value or a computation and prevent unnecessary re-computations on re-renders.
- Its usage follows the same aspects of React.useCallback

<small><strong style="color:red">&nbsp; &nbsp; Mind the overusage like React.useCallback.</strong></small>

#### React.memo

- It is a higher-order component (HOC) provided by React that is used to optimize the performance of functional components by memoizing their output and preventing unnecessary re-renders.
- When a functional component is re-rendered, React has to re-run the entire function and create a new virtual DOM tree, even if the props passed to the component haven't changed. This can be a performance bottleneck, especially for large or complex components.
- You should use React.memo when you have a functional component that is expensive to render and receives the same props frequently, or when you want to prevent unnecessary re-renders of a child component.

<small><strong style="color:red">&nbsp; &nbsp; Its usage follows the same aspects of the previos Hooks described.</strong></small>

### Instructions to run the Project

```bash
npm install
npm run dev:server
npm run dev
```
