import React from 'react'
import { Button, Card, CardBody, Checkbox, Link } from '@heroui/react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'

interface HeroSectionProps {
  openModal: (title: string) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ openModal }) => {
  const [isChecked, setIsChecked] = React.useState(false)

  const [phone, setPhone] = React.useState('')

  const form = React.useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    if (!form.current) return

    if (!isChecked) {
      return toast.error(
        'Для начала ознакомьтесь с Пользовательским соглашением!'
      )
    }

    emailjs
      .sendForm('service_e15l5pq', 'template_hxvlllt', form.current, {
        publicKey: '5qd7jiGymq6cMEuob'
      })
      .then(
        () => {
          e.target.reset()
          toast.success('Спасибо, ваша заявка отправлена!')
        },
        (error) => {
          e.target.reset()
          toast.error('Извините, произошла ошибка!', error.text)
        }
      )
  }

  return (
    <section className='relative bg-gray-100 overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <img
          src='https://olimp-teplo.ru/wp-content/uploads/2025/02/group-223.png'
          alt='Теплоизоляционные материалы'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 hero-gradient'></div>
      </div>

      <div className='section-container relative z-10 flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-3/5 text-white mb-8 md:mb-0'>
          <motion.h1
            className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Качественные прошивные маты и минеральная вата оптом
          </motion.h1>

          <motion.p
            className='text-lg md:text-xl mb-8 max-w-2xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Эксклюзивные условия для новых клиентов. Скидка 10% на первую
            партию!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size='lg'
              color='primary'
              className='bg-white text-primary hover:bg-gray-100'
              onPress={() => openModal('Получить скидку 10% на первую партию')}
            >
              Получить скидку
            </Button>
          </motion.div>
        </div>

        <div className='w-full md:w-2/5'>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className='bg-white/95 shadow-lg'>
              <CardBody className='p-6'>
                <h3 className='text-xl font-bold text-primary mb-4'>
                  Быстрый заказ
                </h3>
                <p className='text-gray-600 mb-4'>
                  Оставьте контактные данные, и наш менеджер свяжется с вами в
                  ближайшее время для уточнения деталей заказа.
                </p>

                <form
                  id='main-form'
                  ref={form}
                  onSubmit={(e) => sendEmail(e)}
                  className='space-y-4'
                >
                  <div className='form-group'>
                    <label htmlFor='name' className='form-label'>
                      Имя
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='form-input'
                      placeholder='Ваше имя'
                      required
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='phone' className='form-label'>
                      Телефон
                    </label>
                    <InputMask
                      id='phone'
                      name='phone'
                      className='form-input'
                      mask='+7 (999) 999-99-99'
                      alwaysShowMask
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='email' className='form-label'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='form-input'
                      placeholder='example@mail.ru'
                      required
                    />
                  </div>

                  <Button
                    form='main-form'
                    color='primary'
                    type='submit'
                    endContent={<Icon icon='lucide:send' />}
                  >
                    Отправить заявку
                  </Button>

                  <Checkbox isSelected={isChecked} onValueChange={setIsChecked}>
                    <div className='text-xs text-gray-500'>
                      Я ознакомлен(а) с{' '}
                      <Link
                        href='https://olimp-teplo.ru/privacy-policy/'
                        underline='always'
                      >
                        Пользовательским соглашением
                      </Link>
                    </div>
                  </Checkbox>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
