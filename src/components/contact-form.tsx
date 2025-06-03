import React from 'react'
import { Card, CardBody, Button, Checkbox, Link } from '@heroui/react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

export const ContactForm: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(false)

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
    <section className='bg-white'>
      <div className='section-container'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className='max-w-3xl mx-auto shadow-lg'>
            <CardBody className='p-6 md:p-8'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center'>
                  <Icon
                    icon='lucide:message-circle'
                    className='text-white text-xl'
                  />
                </div>
                <h2 className='text-2xl font-bold text-primary'>
                  Бесплатная консультация
                </h2>
              </div>

              <p className='text-gray-600 mb-6'>
                Оставьте свои контактные данные, и наш специалист свяжется с
                вами для бесплатной консультации по выбору теплоизоляционных
                материалов для вашего объекта.
              </p>

              <form
                id='form'
                ref={form}
                onSubmit={(e) => sendEmail(e)}
                className='space-y-4'
              >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      className='form-input'
                      placeholder='+7 (___) ___-__-__'
                      required
                    />
                  </div>
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

                <div className='form-group'>
                  <label htmlFor='message' className='form-label'>
                    Сообщение
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Опишите ваш объект и требования к теплоизоляции'
                    className='form-input'
                    required
                  />
                </div>

                <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                  <Button
                    form='form'
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
                </div>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
