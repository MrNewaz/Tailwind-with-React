import { Link } from 'react-router-dom'

const Navbar = ({ setOpen }) => {
  return (
    <nav
      className={
        'flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
      }
    >
      <Link to='/' className='pl-8'>
        NEWAZ
      </Link>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className='px-4 cursor-pointer md:hidden'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block hidden'>
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
    </nav>
  )
}

export default Navbar
