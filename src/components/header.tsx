import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link
} from '@heroui/react'
import { Icon } from '@iconify/react'

interface HeaderProps {
  openModal: (title: string) => void
}

export const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <Navbar
      maxWidth='xl'
      className='bg-white shadow-sm'
      height='var(--header-height)'
    >
      <NavbarBrand>
        <img
          src='https://olimp-teplo.ru/wp-content/uploads/elementor/thumbs/group-215-r2u3h06ei5sumudbdq0b0hewj7ku3ofd793tzekzh6.png'
          alt='Olimp-Teplo'
          className='w-full h-full object-cover max-w-48'
        />
      </NavbarBrand>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link href='#catalog' color='foreground'>
            Каталог
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#advantages' color='foreground'>
            Преимущества
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#certificates' color='foreground'>
            Сертификаты
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#contacts' color='foreground'>
            Контакты
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem className='hidden md:flex'>
          <div className='flex flex-col items-end'>
            <a href='tel:+78314136541' className='font-medium text-primary'>
              +7 (831) 413-65-41
            </a>
            <span className='text-xs text-gray-500'>Пн-Пт: 9:00-18:00</span>
          </div>
        </NavbarItem>
        <NavbarItem>
          <Button
            color='primary'
            variant='solid'
            startContent={<Icon icon='lucide:phone' />}
            onPress={() => openModal('Заказать обратный звонок')}
          >
            <span className='hidden sm:inline'>Обратный звонок</span>
            <span className='sm:hidden'>Звонок</span>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
