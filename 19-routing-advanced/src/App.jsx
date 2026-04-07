import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Courses from './pages/Courses'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Women from './pages/Women'
import Men from './pages/Men'
import CourseDetails from './pages/CourseDetails'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>

      <Navbar/>
      <Navbar2/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path='women' element={<Women/>}/>
          <Route path='men' element={<Men/>}/>
        </Route>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CourseDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        
      <Footer/>
      
    </div>
  )
}

export default App
