import { createStore } from "redux";

function App() {
  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      case "ZERO":
        return 0;
      default:
        return state;
    }
  };

  const store = createStore(counterReducer);
  store.subscribe(() => {
    const counterState = store.getState();
    console.log("state of the counter: ", counterState);
  });
  store.dispatch({ type: "INCREMENT" });
  store.dispatch({ type: "INCREMENT" });
  store.dispatch({ type: "INCREMENT" });
  store.dispatch({ type: "ZERO" });
  store.dispatch({ type: "DECREMENT" });

  return <div>Hello World</div>;
}

export default App;
