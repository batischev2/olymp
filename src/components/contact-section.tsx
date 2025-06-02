import React from 'react'
import { Card, CardBody, Button } from '@heroui/react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export const ContactSection: React.FC = () => {
  return (
    <section id='contacts' className='bg-white'>
      <div className='section-container'>
        <h2 className='section-title'>Контакты</h2>
        <p className='section-subtitle'>
          Свяжитесь с нами любым удобным способом
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8'>
          <motion.div
            className='lg:col-span-1'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='h-full'>
              <CardBody className='p-6'>
                <h3 className='text-xl font-semibold mb-6'>Наши контакты</h3>

                <div className='space-y-6'>
                  <div className='flex items-start'>
                    <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 mt-1'>
                      <Icon icon='lucide:phone' className='text-primary' />
                    </div>
                    <div>
                      <h4 className='font-medium mb-1'>Телефоны</h4>
                      <p className='text-gray-600 mb-1'>
                        <a
                          href='tel:+78314136541'
                          className='hover:text-primary'
                        >
                          +7 (831) 413-65-41
                        </a>
                      </p>
                      <p className='text-gray-600'>
                        <a
                          href='tel:+79200069990'
                          className='hover:text-primary'
                        >
                          +7 (920) 006-99-90
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 mt-1'>
                      <Icon icon='lucide:mail' className='text-primary' />
                    </div>
                    <div>
                      <h4 className='font-medium mb-1'>Email</h4>
                      <p className='text-gray-600'>
                        <a
                          href='mailto:olimp-teplo@bk.ru'
                          className='hover:text-primary'
                        >
                          olimp-teplo@bk.ru
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 mt-1'>
                      <Icon icon='lucide:map-pin' className='text-primary' />
                    </div>
                    <div>
                      <h4 className='font-medium mb-1'>Адрес</h4>
                      <p className='text-gray-600'>
                        г. Нижний Новгород, ул. Монастырка, д.1в
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start'>
                    <div className='w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 mt-1'>
                      <Icon icon='lucide:clock' className='text-primary' />
                    </div>
                    <div>
                      <h4 className='font-medium mb-1'>Режим работы</h4>
                      <p className='text-gray-600'>
                        Пн-Пт: 9:00-18:00
                        <br />
                        Сб-Вс: выходной
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            className='lg:col-span-2'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='h-full'>
              <CardBody className='p-0'>
                <iframe
                  src='https://yandex.ru/map-widget/v1/?um=constructor%3Ac2309d8f9441d2091c5b359d41ee9a5bbcc76243721167c627bc757999884295&amp;source=constructor'
                  width='100%'
                  height='456'
                ></iframe>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        <div className='mt-12 bg-gray-50 rounded-lg p-6 md:p-8'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-6 md:mb-0 md:mr-6'>
              <h3 className='text-xl md:text-2xl font-bold text-primary mb-2'>
                Остались вопросы?
              </h3>
              <p className='text-gray-600'>
                Закажите обратный звонок, и наш менеджер свяжется с вами в
                ближайшее время
              </p>
            </div>
            <form className='w-full md:w-auto flex flex-col md:flex-row gap-3'>
              <input
                type='tel'
                placeholder='Ваш телефон'
                className='form-input md:w-64'
              />
              <Button color='primary' type='submit'>
                Заказать звонок
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
