import { useReducer } from "react"
import HomePage from "./components/HomePage"
import MyNavbar from "./components/MyNavbar"
import todoReducer from "./reducers/TodoReducer"
import authReducer from "./reducers/authReducer"
import LoginContext from "./context/loginContext"
import TodoContext from "./context/todoContext"



const App = () => {
  const  [user, loginDispatch] = useReducer(authReducer, '');

  const [todos, todoDispatch] = useReducer(todoReducer,[])

  return (
  <>
  {/* <Counter/> */}
{/* <Todo/> */}
{/* <Login/> */}

<TodoContext.Provider value={{todos,todoDispatch}}>
  <LoginContext.Provider value={{user,loginDispatch}}>
  <MyNavbar/>
  <HomePage/>
  </LoginContext.Provider>

</TodoContext.Provider>

  </>
  )
}

export default App