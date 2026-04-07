import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
    
     <Card user='Anshika' age={20} img="https://images.unsplash.com/photo-1706177548537-6a098020558b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     <Card user='Prapti' age={19} img="https://images.unsplash.com/photo-1761475145944-52df2def23e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     <Card user='Antra' age={19} img="https://images.unsplash.com/photo-1767865654598-430f977d28f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
   
    </div>
  )
}

export default App
