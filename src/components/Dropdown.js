import { Link } from 'react-router-dom'

const Dropdown = ({ open }) => {
  return (
    <div
      className={
        open
          ? 'grid grid-row-4 text-center items-center bg-yellow-500'
          : 'hidden'
      }
    >
      <Link to='/' className='p-4'>
        Home
      </Link>
      <Link to='/' className='p-4'>
        Menu
      </Link>
      <Link to='/' className='p-4'>
        About
      </Link>
      <Link to='/' className='p-4'>
        Contact
      </Link>
    </div>
  )
}

export default Dropdown
