const API = process.env.REACT_APP_TASKS_API
const API_KEY = process.env.REACT_APP_TASKS_API_KEY

async function login(email, password){
  const res = await fetch(`${API}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api': API_KEY,
    },
    body: JSON.stringify({
      email,
      password
    })
  })
  const response = await res.json()
  return response
}

async function signUp(email, password){
  // TODO
}

async function getUserTasks(userId, token){
  const res = await fetch(`${API}users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'api': API_KEY,
      'Authorization': `Bearer ${token}`
    }
  })
  const user = await res.json()
  return user.tasks
}

async function createTask(userId, description, token){
  const res = await fetch(`${API}tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api': API_KEY,
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      user: userId,
      description
    })
  })
  const response = await res.json()
  return response
}

async function updateTask(taskId, isCompleted, token){
  const res = await fetch(`${API}tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'api': API_KEY,
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      isCompleted
    }),
  })
  const response = await res.json()
  return response
}

async function deleteTask(taskId, token){
  const res = await fetch(`${API}tasks/${taskId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'api': API_KEY,
      'Authorization': `Bearer ${token}`
    }
  })
  const response = await res.json()
  return response
}

export { login, signUp, getUserTasks, createTask, updateTask, deleteTask }