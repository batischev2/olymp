import React from 'react'
import { Card, CardBody, Button } from '@heroui/react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface PaymentDeliveryProps {
  openModal: (title: string) => void
}

export const PaymentDelivery: React.FC<PaymentDeliveryProps> = ({
  openModal
}) => {
  return (
    <section className='bg-gray-50'>
      <div className='section-container'>
        <h2 className='section-title'>Оплата, отгрузка, минимальная партия</h2>
        <p className='section-subtitle'>
          Информация об условиях оплаты, вариантах доставки и минимальном объеме
          заказа
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className='h-full'>
              <CardBody className='p-6'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4'>
                    <Icon
                      icon='lucide:credit-card'
                      className='text-primary text-xl'
                    />
                  </div>
                  <h3 className='text-xl font-semibold'>Условия оплаты</h3>
                </div>

                <ul className='list-disc pl-5 text-gray-600 space-y-3 mb-6'>
                  <li>Безналичный расчет для юридических лиц</li>
                  <li>Оплата при получении</li>
                  <li>Возможна оплата наличными или картой</li>
                  <li>Возможность отсрочки платежа для постоянных клиентов</li>
                  <li>НДС 20% включен в стоимость</li>
                </ul>

                <Button
                  color='primary'
                  variant='light'
                  className='w-full'
                  onPress={() => openModal('Уточнить условия оплаты')}
                >
                  Уточнить условия оплаты
                </Button>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className='h-full'>
              <CardBody className='p-6'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4'>
                    <Icon
                      icon='lucide:truck'
                      className='text-primary text-xl'
                    />
                  </div>
                  <h3 className='text-xl font-semibold'>Варианты доставки</h3>
                </div>

                <ul className='list-disc pl-5 text-gray-600 space-y-3 mb-6'>
                  <li>
                    Доставка собственным транспортом по Москве и Московской
                    области
                  </li>
                  <li>Отправка в регионы через транспортные компании</li>
                  <li>Самовывоз со склада в Нижегородской области</li>
                  <li>Срок доставки: 1-3 рабочих дня по Москве и МО</li>
                  <li>Срок доставки в регионы: от 1 до 14 дней</li>
                </ul>

                <Button
                  color='primary'
                  variant='light'
                  className='w-full'
                  onPress={() => openModal('Уточнить условия доставки')}
                >
                  Уточнить условия доставки
                </Button>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className='h-full'>
              <CardBody className='p-6'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4'>
                    <Icon
                      icon='lucide:package'
                      className='text-primary text-xl'
                    />
                  </div>
                  <h3 className='text-xl font-semibold'>Минимальная партия</h3>
                </div>

                <ul className='list-disc pl-5 text-gray-600 space-y-3 mb-6'>
                  <li>Минимальный объем заказа: от 10 м³</li>
                  <li>Специальные условия для оптовых заказов от 50 м³</li>
                  <li>Возможность комплектации сборных заказов</li>
                  <li>Индивидуальные условия для постоянных клиентов</li>
                  <li>Скидки при регулярных поставках</li>
                </ul>

                <Button
                  color='primary'
                  variant='light'
                  className='w-full'
                  onPress={() => openModal('Уточнить минимальный объем заказа')}
                >
                  Уточнить минимальный объем
                </Button>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
