import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Footer = () => (
  <footer className='flex flex-col text-black-100 mt-5'>
    <div className="flex items-center justify-center space-y-4 px-6 py-4">
      <div className='flex flex-1 justify-between items-center mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
        <div className="flex flex-col">
          <p className="font-bold">&#169; 2023 yacht-Samvel</p>
          <p>Все права защищены</p>
        </div>
        <div className='flex'>
          <a href="https://wa.me/+79530789994" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 mr-4">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://t.me/+79530789994" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
            <FaTelegram size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
