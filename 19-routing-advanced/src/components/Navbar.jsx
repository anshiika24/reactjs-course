import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className='flex py-4 items-center px-8 bg-cyan-900 justify-between'>
      <h2 className='text-2xl font-bold'>Anshika</h2>
      <div className='flex gap-10'></div>
      <Link className="text-lg font-medium" to='/'>home</Link>
      <Link className="text-lg font-medium" to='/about'>about</Link>
      <Link className="text-lg font-medium" to='/contact'>contact</Link>
      <Link className="text-lg font-medium" to='/product'>product</Link>
      <Link className="text-lg font-medium" to='/courses'>courses</Link>
    </div>
  )
}

export default Navbar
