import React from 'react'
import { Card, CardBody, Button } from '@heroui/react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface CompanyAdvantagesProps {
  openModal: (title: string) => void
}

interface Advantage {
  id: number
  title: string
  description: string
  icon: string
}

export const CompanyAdvantages: React.FC<CompanyAdvantagesProps> = ({
  openModal
}) => {
  const advantages: Advantage[] = [
    {
      id: 1,
      title: 'Высокое качество продукции',
      description:
        'Все материалы соответствуют требованиям ГОСТ и имеют необходимые сертификаты качества',
      icon: 'lucide:badge-check'
    },
    {
      id: 2,
      title: 'Собственное производство',
      description:
        'Контроль качества на всех этапах производства и возможность изготовления по индивидуальным параметрам',
      icon: 'lucide:factory'
    },
    {
      id: 3,
      title: 'Выгодные условия для оптовиков',
      description:
        'Специальные цены при оптовых закупках и гибкая система скидок для постоянных клиентов',
      icon: 'lucide:percent'
    },
    {
      id: 4,
      title: 'Быстрая доставка',
      description:
        'Доставка по Москве и Московской области собственным транспортом, отправка в регионы транспортными компаниями',
      icon: 'lucide:truck'
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id='advantages' className='bg-white'>
      <div className='section-container'>
        <h2 className='section-title'>Преимущества компании</h2>
        <p className='section-subtitle'>
          Почему клиенты выбирают нас для поставки теплоизоляционных материалов
        </p>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          {advantages.map((advantage) => (
            <motion.div key={advantage.id} variants={item}>
              <Card className='h-full'>
                <CardBody className='p-6 text-center'>
                  <div className='flex justify-center mb-4'>
                    <div className='w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center'>
                      <Icon
                        icon={advantage.icon}
                        className='text-primary text-2xl'
                      />
                    </div>
                  </div>
                  <h3 className='text-lg font-semibold mb-3'>
                    {advantage.title}
                  </h3>
                  <p className='text-gray-600 text-sm'>
                    {advantage.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className='mt-12 bg-primary-50 rounded-lg p-6 md:p-8'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-6 md:mb-0 md:mr-6'>
              <h3 className='text-xl md:text-2xl font-bold text-primary mb-2'>
                Получите индивидуальное коммерческое предложение
              </h3>
              <p className='text-gray-600'>
                Рассчитаем оптимальное предложение с учетом объема заказа и
                специфики вашего объекта
              </p>
            </div>
            <Button
              color='primary'
              size='lg'
              onPress={() => openModal('Получить коммерческое предложение')}
            >
              Получить предложение
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
