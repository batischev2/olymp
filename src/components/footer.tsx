import React from 'react'
import { Link } from '@heroui/react'

export const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='col-span-1 md:col-span-1'>
            <div className='flex items-center gap-2 mb-4'>
              <img
                src='https://olimp-teplo.ru/wp-content/uploads/2024/12/group-214.png'
                alt='Olimp-Teplo'
                className='w-full h-full object-cover max-w-48'
              />
            </div>
          </div>

          <div className='col-span-1'>
            <h3 className='text-lg font-semibold mb-4'>Контакты</h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <span className='text-gray-400'>Телефон:</span>
                <a
                  href='tel:+78314136541'
                  className='text-gray-400 hover:text-white ml-2'
                >
                  +7 (831) 413-65-41
                </a>
              </li>
              <li className='flex items-center'>
                <span className='text-gray-400'>Email:</span>
                <a
                  href='mailto:olimp-teplo@bk.ru'
                  className='text-gray-400 hover:text-white ml-2'
                >
                  olimp-teplo@bk.ru
                </a>
              </li>
              <li className='flex items-center'>
                <span className='text-gray-400'>Адрес:</span>
                <span className='text-gray-400 ml-2'>
                  г. Нижний Новгород, <br /> ул. Монастырка, д. 1в
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} ООО «Олимп». Все права защищены.
          </p>
          <div className='mt-4 md:mt-0'>
            <Link
              href='https://olimp-teplo.ru/privacy-policy/'
              color='foreground'
              className='text-gray-400 hover:text-white text-sm mr-4'
            >
              Политика конфиденциальности
            </Link>
            <Link
              href='https://olimp-teplo.ru/privacy-policy/'
              color='foreground'
              className='text-gray-400 hover:text-white text-sm'
            >
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
