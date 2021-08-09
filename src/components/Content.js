import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'

const Content = () => {
  return (
    <div class='grid md:grid-cols-3 gap-2 grid-cols-1'>
      <div className='card'>
        <img src={img1} alt='girl' className='h-full rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl  mb-2'>Cute Girl</h2>
        </div>
      </div>

      <div className='card'>
        <img src={img2} alt='girl' className='h-full rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl  mb-2'>Cute Girl</h2>
        </div>
      </div>

      <div className='card'>
        <img src={img3} alt='girl' className='h-full rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl  mb-2'>Cute Girl</h2>
        </div>
      </div>
    </div>
  )
}

export default Content
