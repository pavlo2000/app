import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList'
import Context from '../context'
import Loader from '../Loader'
import firebase from 'firebase'
import fire from './config/Fire'
const AddTodo = React.lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(import('./Todo/AddTodo'))
      })
    })
)
let idd = 1;
function Home() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=0')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          console.log(todos)
          setTodos(todos)
          setLoading(false)
        })
      })
  }, [])
let todos1 = []

//firebase.initializeApp(fire)
  let database = firebase.firestore();
database.settings({ timestampsInSnapshots: true })

let iddd = [];
/* function getuserdata() {
  database.collection(firebase.auth().currentUser.uid).orderBy('todo').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      
      let obg = {
        completed: false,
        id: idd,
        title: change.doc.data().todo,
        todosid: change.doc.data().todosid
      }
      console.log(change)
      iddd.push(change.key)
      console.log(change.key)
      todos1.push(obg)
      idd++;
      console.log(change.doc.data());
      console.log(change.doc.data().todo)
    });
    setTodos(todos1)
    while(todos.length>0)
    {
      todos.pop()
    }
    while(todos1.length>0)
    {
      todos1.pop()
    }
    
    console.log(todos1)
    
  })
}
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
let q =1;
  
function removeTodo(idd, event) {
    todos.map(todo => {
      
      console.log('todooskd')
      if (todo.id === idd) {
        console.log('todooskd')
        q = todo.todosid
      }
    })
    setTodos(todos.filter(todo => todo.id !== idd))
   database.collection(firebase.auth().currentUser.uid).doc(q.toString()).delete()
    console.log(q)
  idd--;
  }

  function addTodo(title) {
    database.collection(firebase.auth().currentUser.uid).doc(idd.toString()).set({
      todo: title,
      todosid: idd.toString()
  });
  idd++;
    setTodos(
      todos.concat([
        {
          title,
          todosid: idd.toString(),
          id: Date.now(),
          completed: false

        }
      ])
    )
  } */
  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
let q=''
  function removeTodo(id) {
    todos.map(todo => {
      if (todo.id === id) {
        console.log("uea")
        q = todo.todosid 
        console.log( todo.todosid)
        console.log(q)
      }
      return todo
    })
    database.collection(firebase.auth().currentUser.uid).doc(q.toString()).delete()
    setTodos(todos.filter(todo => todo.id !== id))
    idd--;
  }
let getdata = []
  function getuserdata (){
    database.collection(firebase.auth().currentUser.uid).get().then(
      querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          console.log(doc.data())
            getdata.push(
              {
                title : doc.data().todo,
                todosid: doc.data().todosid,
                id: idd,
                completed: false
              })
              idd++
            
        })
        setTodos(getdata)
      }
    )
  }
  function addTodo(title) {
    database.collection(firebase.auth().currentUser.uid).doc(idd.toString()).set({
      todo: title,
      todosid: idd.toString()
  });
  idd++;
    setTodos(
      todos.concat([
        {
          title,
          todosid: idd.toString(),
          id: Date.now(),
          completed: false
        }
      ])
    )
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
      
     <button onClick={getuserdata}>get</button> 
             <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default Home
