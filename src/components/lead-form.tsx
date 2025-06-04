import React from 'react'
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Checkbox,
  Link
} from '@heroui/react'
import { Icon } from '@iconify/react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import InputMask from 'react-input-mask'

interface LeadFormProps {
  title: string
  onClose: () => void
}

export const LeadForm: React.FC<LeadFormProps> = ({ title }) => {
  const [isChecked, setIsChecked] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

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
          setIsSuccess(true)
        },
        (error) => {
          e.target.reset()
          toast.error('Извините, произошла ошибка!', error.text)
        }
      )
  }

  return (
    <ModalContent>
      <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
      <ModalBody>
        {isSuccess ? (
          <div className='text-center py-8'>
            <div className='w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Icon icon='lucide:check' className='text-success text-2xl' />
            </div>
            <h3 className='text-xl font-semibold text-success mb-2'>
              Заявка отправлена!
            </h3>
            <p className='text-gray-600'>
              Спасибо за обращение! Наш менеджер свяжется с вами в ближайшее
              время.
            </p>
          </div>
        ) : (
          <form id='lead-form' ref={form} onSubmit={(e) => sendEmail(e)}>
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

            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-4'>
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

              <Button
                form='lead-form'
                color='primary'
                type='submit'
                endContent={<Icon icon='lucide:send' />}
              >
                Отправить заявку
              </Button>
            </div>
          </form>
        )}
      </ModalBody>
    </ModalContent>
  )
}
