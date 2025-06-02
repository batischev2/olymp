import React from 'react'
import { Card, CardBody, Button } from '@heroui/react'
import { motion } from 'framer-motion'

interface ProjectExamplesProps {
  openModal: (type: string, title: string) => void
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  type: string
}

export const ProjectExamples: React.FC<ProjectExamplesProps> = ({
  openModal
}) => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Теплоизоляция промышленного трубопровода',
      description:
        'Использование матов МП-100 для теплоизоляции трубопровода высокого давления на нефтеперерабатывающем заводе',
      image:
        'https://olimp-teplo.ru/wp-content/uploads/2025/05/teploizolyaciya-truboprovodov.webp',
      type: 'Промышленный объект'
    },
    {
      id: 2,
      title: 'Изоляция котельного оборудования',
      description:
        'Применение матов МП-75 для теплоизоляции котельного оборудования в муниципальной котельной',
      image:
        'https://olimp-teplo.ru/wp-content/uploads/2025/05/mineralnaya-vata-teploizolyatsiya-dlya-trub.jpg',
      type: 'Энергетический объект'
    },
    {
      id: 3,
      title: 'Теплоизоляция воздуховодов',
      description:
        'Использование минеральной ваты для теплоизоляции системы вентиляции в торговом центре',
      image: 'https://olimp-teplo.ru/wp-content/uploads/2025/05/vyacau.webp',
      type: 'Коммерческий объект'
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
    <section id='projects' className='bg-gray-50'>
      <div className='section-container'>
        <h2 className='section-title'>Примеры использования продукции</h2>
        <p className='section-subtitle'>
          Наши материалы успешно применяются на различных объектах промышленного
          и гражданского строительства
        </p>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className='product-card h-full'>
                <div className='aspect-video w-full overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <CardBody className='p-4'>
                  <div className='text-xs font-medium text-primary-600 mb-2'>
                    {project.type}
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 text-sm mb-4'>
                    {project.description}
                  </p>
                  <Button
                    color='primary'
                    variant='light'
                    className='w-full'
                    onPress={() =>
                      openModal(
                        'project',
                        `Подробнее о проекте: ${project.title}`
                      )
                    }
                  >
                    Подробнее о проекте
                  </Button>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className='mt-12 text-center'>
          <Button
            color='primary'
            size='lg'
            onPress={() =>
              openModal('solution', 'Подобрать решение для объекта')
            }
          >
            Подберём оптимальное решение
          </Button>
          <p className='mt-2 text-sm text-gray-500'>
            Индивидуальный подход к каждому проекту
          </p>
        </div>
      </div>
    </section>
  )
}
