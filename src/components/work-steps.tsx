import React from 'react'
import { Button } from '@heroui/react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface WorkStepsProps {
  openModal: (type: string, title: string) => void
}

interface Step {
  id: number
  title: string
  description: string
  icon: string
}

export const WorkSteps: React.FC<WorkStepsProps> = ({ openModal }) => {
  const steps: Step[] = [
    {
      id: 1,
      title: 'Заявка',
      description: 'Оставьте заявку на сайте или позвоните нам по телефону',
      icon: 'lucide:file-text'
    },
    {
      id: 2,
      title: 'Консультация',
      description: 'Наш менеджер свяжется с вами для уточнения деталей заказа',
      icon: 'lucide:message-circle'
    },
    {
      id: 3,
      title: 'Договор',
      description: 'Заключаем договор с указанием всех условий поставки',
      icon: 'lucide:file-signature'
    },
    {
      id: 4,
      title: 'Оплата',
      description: 'Производите оплату удобным для вас способом',
      icon: 'lucide:credit-card'
    },
    {
      id: 5,
      title: 'Поставка',
      description: 'Доставляем продукцию в согласованные сроки',
      icon: 'lucide:truck'
    }
  ]

  return (
    <section className='bg-white'>
      <div className='section-container'>
        <h2 className='section-title'>Этапы работы</h2>
        <p className='section-subtitle'>
          Простой и понятный процесс сотрудничества с нашей компанией
        </p>

        <div className='relative mt-16'>
          {/* Connecting line */}
          <div className='absolute top-16 left-0 w-full h-1 bg-gray-200 hidden md:block'></div>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className='flex flex-col items-center text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 relative z-10'>
                  <Icon icon={step.icon} className='text-white text-2xl' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{step.title}</h3>
                <p className='text-gray-600 text-sm'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className='mt-16 text-center'>
          <Button
            color='primary'
            size='lg'
            onPress={() =>
              openModal('consultation', 'Запросить бесплатную консультацию')
            }
          >
            Запросить бесплатную консультацию
          </Button>
          <p className='mt-2 text-sm text-gray-500'>
            Ответим на все вопросы по условиям поставки
          </p>
        </div>
      </div>
    </section>
  )
}
