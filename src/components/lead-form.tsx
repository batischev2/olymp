import React from 'react'
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Checkbox,
  Link
} from '@heroui/react'
import { Icon } from '@iconify/react'

interface LeadFormProps {
  type: string
  title: string
  onClose: () => void
}

export const LeadForm: React.FC<LeadFormProps> = ({ type, title, onClose }) => {
  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
      }, 2000)
    }, 1500)
  }

  const renderFormFields = () => {
    switch (type) {
      case 'discount':
      case 'callback':
      case 'order':
      case 'solution':
        return (
          <>
            <Input
              label='Имя'
              placeholder='Введите ваше имя'
              value={name}
              onValueChange={setName}
              isRequired
              className='mb-4'
            />
            <Input
              label='Телефон'
              placeholder='+7 (___) ___-__-__'
              value={phone}
              onValueChange={setPhone}
              isRequired
              className='mb-4'
            />
            <Input
              label='Email'
              placeholder='example@mail.ru'
              value={email}
              onValueChange={setEmail}
              className='mb-4'
            />
          </>
        )
      case 'price':
      case 'commercial':
      case 'pdf':
        return (
          <>
            <Input
              label='Имя'
              placeholder='Введите ваше имя'
              value={name}
              onValueChange={setName}
              className='mb-4'
            />
            <Input
              label='Email'
              placeholder='example@mail.ru'
              value={email}
              onValueChange={setEmail}
              isRequired
              className='mb-4'
            />
            <Input
              label='Телефон'
              placeholder='+7 (___) ___-__-__'
              value={phone}
              onValueChange={setPhone}
              className='mb-4'
            />
          </>
        )
      case 'consultation':
      case 'project':
      case 'product':
        return (
          <>
            <Input
              label='Имя'
              placeholder='Введите ваше имя'
              value={name}
              onValueChange={setName}
              isRequired
              className='mb-4'
            />
            <Input
              label='Телефон'
              placeholder='+7 (___) ___-__-__'
              value={phone}
              onValueChange={setPhone}
              isRequired
              className='mb-4'
            />
            <Input
              label='Email'
              placeholder='example@mail.ru'
              value={email}
              onValueChange={setEmail}
              className='mb-4'
            />
            <Textarea
              label='Сообщение'
              placeholder='Опишите ваш запрос подробнее'
              value={message}
              onValueChange={setMessage}
              className='mb-4'
            />
          </>
        )
      default:
        return (
          <>
            <Input
              label='Имя'
              placeholder='Введите ваше имя'
              value={name}
              onValueChange={setName}
              className='mb-4'
            />
            <Input
              label='Телефон'
              placeholder='+7 (___) ___-__-__'
              value={phone}
              onValueChange={setPhone}
              isRequired
              className='mb-4'
            />
            <Input
              label='Email'
              placeholder='example@mail.ru'
              value={email}
              onValueChange={setEmail}
              className='mb-4'
            />
          </>
        )
    }
  }

  return (
    <ModalContent>
      {(onClose) => (
        <>
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
              <form onSubmit={handleSubmit}>
                {renderFormFields()}
                <Checkbox>
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
            )}
          </ModalBody>
          <ModalFooter>
            {!isSuccess && (
              <>
                <Button color='default' variant='light' onPress={onClose}>
                  Отмена
                </Button>
                <Button
                  color='primary'
                  onPress={() => handleSubmit}
                  isLoading={isSubmitting}
                >
                  Отправить
                </Button>
              </>
            )}
          </ModalFooter>
        </>
      )}
    </ModalContent>
  )
}
