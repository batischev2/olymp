import React from 'react'
import { Card, CardBody, CardFooter, Button } from '@heroui/react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

interface ProductCatalogProps {
  openModal: (title: string) => void
}

interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  openModal
}) => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Маты прошивные МП-75',
      description:
        'Теплоизоляционные маты из минеральной ваты, прошитые металлической проволокой',
      image:
        'https://olimp-teplo.ru/wp-content/uploads/2025/03/maty-proshivny.jpg',
      category: 'Маты прошивные'
    },
    {
      id: 2,
      name: 'Маты прошивные МП-100',
      description:
        'Высокоплотные теплоизоляционные маты для промышленного применения',
      image:
        'https://olimp-teplo.ru/wp-content/uploads/2025/01/maty_mp_ms_75_obkladka_metalsetkoj_s_1_storony_gost_21880-2011.webp',
      category: 'Маты прошивные'
    },
    {
      id: 3,
      name: 'Минеральная вата в рулонах',
      description:
        'Негорючий теплоизоляционный материал на основе горных пород',
      image:
        'https://olimp-teplo.ru/wp-content/uploads/2025/02/foto-dlja-olimp-1.png',
      category: 'Минеральная вата'
    },
    {
      id: 4,
      name: 'Минеральная вата в плитах',
      description:
        'Жесткие теплоизоляционные плиты для различных строительных конструкций',
      image:
        'https://olimp-teplo.ru/wp-content/uploads/2025/01/pzh-100-pzh-120.jpg',
      category: 'Минеральная вата'
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
    <section id='catalog' className='bg-white'>
      <div className='section-container'>
        <h2 className='section-title'>Каталог продукции</h2>
        <p className='section-subtitle'>
          Широкий ассортимент высококачественных теплоизоляционных материалов
          для промышленного и гражданского строительства
        </p>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Card className='product-card h-full'>
                <div className='aspect-video w-full overflow-hidden'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <CardBody className='p-4'>
                  <div className='text-xs font-medium text-primary-600 mb-2'>
                    {product.category}
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
                  <p className='text-gray-600 text-sm'>{product.description}</p>
                </CardBody>
                <CardFooter className='p-4 pt-0 flex justify-between items-center'>
                  <Button
                    color='primary'
                    variant='light'
                    onPress={() =>
                      openModal(`Запрос информации: ${product.name}`)
                    }
                  >
                    Подробнее
                  </Button>
                  <Button
                    color='primary'
                    variant='solid'
                    onPress={() => openModal(`Заказать: ${product.name}`)}
                  >
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className='mt-12 text-center'>
          <Button
            color='primary'
            size='lg'
            endContent={<Icon icon='lucide:download' />}
            onPress={() => openModal('Запросить прайс-лист')}
          >
            Запросить прайс-лист
          </Button>
          <p className='mt-2 text-sm text-gray-500'>
            Актуальные цены и полный ассортимент продукции
          </p>
        </div>
      </div>
    </section>
  )
}
