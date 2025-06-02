import React from 'react'
import {
  Card,
  CardBody,
  Button,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@heroui/react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface MatsMPSectionProps {
  openModal: (type: string, title: string) => void
}

export const MatsMPSection: React.FC<MatsMPSectionProps> = ({ openModal }) => {
  const specifications = [
    { property: 'Плотность', value: '75 кг/м³' },
    { property: 'Теплопроводность при 25°C', value: '0,036 Вт/(м·К)' },
    { property: 'Температура применения', value: 'от -180°C до +700°C' },
    { property: 'Группа горючести', value: 'НГ (негорючий)' },
    { property: 'Содержание органических веществ', value: 'не более 3,0%' },
    { property: 'Сжимаемость', value: 'не более 40%' },
    { property: 'Упругость', value: 'не менее 70%' },
    { property: 'Влажность', value: 'не более 1,0%' }
  ]

  return (
    <section id='mats-mp' className='bg-gray-50'>
      <div className='section-container'>
        <h2 className='section-title'>Маты МП ГОСТ</h2>
        <p className='section-subtitle'>
          Прошивные маты из минеральной ваты на основе горных пород,
          соответствующие требованиям ГОСТ 21880-2011
        </p>

        <div className='flex flex-col lg:flex-row gap-8 mt-8'>
          <motion.div
            className='w-full lg:w-1/2'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='h-full'>
              <div className='aspect-video w-full overflow-hidden'>
                <img
                  src='https://olimp-teplo.ru/wp-content/uploads/2025/05/img_20250425_152253-scaled.jpg'
                  alt='Маты МП ГОСТ'
                  className='w-full h-full object-cover'
                />
              </div>
              <CardBody className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Описание продукции
                </h3>
                <p className='text-gray-600 mb-4'>
                  Маты прошивные МП ГОСТ представляют собой теплоизоляционный
                  материал, изготовленный из минеральной ваты на основе горных
                  пород базальтовой группы, прошитый металлической проволокой
                  или стеклянной нитью с применением или без применения
                  металлической сетки.
                </p>
                <p className='text-gray-600 mb-4'>
                  Маты МП применяются для тепловой изоляции промышленного
                  оборудования, трубопроводов, воздуховодов, газоходов,
                  электрофильтров и других промышленных объектов с температурой
                  изолируемой поверхности от -180°C до +700°C.
                </p>
                <div className='flex justify-center mt-6'>
                  <Button
                    color='primary'
                    endContent={<Icon icon='lucide:file-text' />}
                    onPress={() =>
                      openModal('pdf', 'Скачать техническое описание')
                    }
                  >
                    Скачать полное техническое описание в PDF
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            className='w-full lg:w-1/2'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className='h-full'>
              <CardBody className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Технические характеристики
                </h3>

                <Table
                  removeWrapper
                  aria-label='Технические характеристики матов МП ГОСТ'
                >
                  <TableHeader>
                    <TableColumn>ХАРАКТЕРИСТИКА</TableColumn>
                    <TableColumn>ЗНАЧЕНИЕ</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {specifications.map((spec, index) => (
                      <TableRow key={index}>
                        <TableCell className='font-medium'>
                          {spec.property}
                        </TableCell>
                        <TableCell>{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <h4 className='text-lg font-semibold mt-8 mb-3'>Размеры</h4>
                <ul className='list-disc pl-5 text-gray-600 space-y-2'>
                  <li>Длина: 1000-2400 мм</li>
                  <li>Ширина: 500-1200 мм</li>
                  <li>Толщина: 40-100 мм</li>
                </ul>

                <h4 className='text-lg font-semibold mt-6 mb-3'>Упаковка</h4>
                <p className='text-gray-600'>
                  Маты упаковываются в полиэтиленовую пленку или крафт-бумагу,
                  поставляются на поддонах.
                </p>

                <div className='flex justify-center mt-8'>
                  <Button
                    color='primary'
                    variant='solid'
                    onPress={() =>
                      openModal(
                        'consultation',
                        'Получить консультацию по матам МП ГОСТ'
                      )
                    }
                  >
                    Получить консультацию специалиста
                  </Button>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
