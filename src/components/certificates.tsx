import React from 'react'
import {
  Card,
  CardBody,
  Modal,
  ModalContent,
  useDisclosure
} from '@heroui/react'
import { motion } from 'framer-motion'

interface Certificate {
  id: number
  title: string
  description: string
  image: string
}

export const Certificates: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [selectedCertificate, setSelectedCertificate] =
    React.useState<Certificate | null>(null)

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Сертификат соответствия ГОСТ',
      description:
        'Подтверждает соответствие продукции требованиям ГОСТ 21880-2022',
      image:
        'https://olimp-teplo.ru/wp-content/uploads/2025/03/maty-sertifikat-sootvetstvie.png'
    },
    {
      id: 2,
      title: 'Сертификат пожарной безопасности',
      description:
        'Подтверждает класс пожарной опасности КМ0 (негорючие материалы)',
      image:
        'https://olimp-teplo.ru/wp-content/uploads/2025/03/sert-minplita-gost.png'
    },
    {
      id: 3,
      title: 'Санитарно-эпидемиологическое заключение',
      description: 'Подтверждает безопасность материалов для здоровья человека',
      image:
        'https://olimp-teplo.ru/wp-content/uploads/2025/05/sertifikta-sootvetstvija.png'
    },
    {
      id: 4,
      title: 'Сертификат системы менеджмента качества',
      description: 'Соответствие системы менеджмента качества ISO 9001:2015',
      image:
        'https://olimp-teplo.ru/wp-content/uploads/2025/03/sert-minplita-gost-sootvetstvie-2022-3.png'
    }
  ]

  const openCertificateModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate)
    onOpen()
  }

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
    <section id='certificates' className='bg-gray-50'>
      <div className='section-container'>
        <h2 className='section-title'>Сертификаты</h2>
        <p className='section-subtitle'>
          Наша продукция имеет все необходимые сертификаты качества и
          соответствует требованиям ГОСТ
        </p>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          {certificates.map((certificate) => (
            <motion.div key={certificate.id} variants={item}>
              <Card
                className='h-full cursor-pointer hover:shadow-lg transition-all duration-300'
                isPressable
                onPress={() => openCertificateModal(certificate)}
              >
                <div className='aspect-[3/4] w-full overflow-hidden'>
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <CardBody className='p-4'>
                  <h3 className='text-base font-semibold mb-2'>
                    {certificate.title}
                  </h3>
                  <p className='text-gray-600 text-sm'>
                    {certificate.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl'>
        <ModalContent>
          {selectedCertificate && (
            <div className='p-6'>
              <h2 className='text-2xl font-bold mb-4'>
                {selectedCertificate.title}
              </h2>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full md:w-1/2'>
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className='w-full h-auto rounded-lg shadow-md'
                  />
                </div>
                <div className='w-full md:w-1/2'>
                  <p className='text-gray-600 mb-4'>
                    {selectedCertificate.description}
                  </p>
                  <h3 className='text-lg font-semibold mb-2'>
                    Информация о сертификате:
                  </h3>
                  <ul className='list-disc pl-5 text-gray-600 space-y-2'>
                    <li>Номер: СРТ-{1000 + selectedCertificate.id}</li>
                    <li>Дата выдачи: {new Date().toLocaleDateString()}</li>
                    <li>
                      Срок действия: до{' '}
                      {new Date(
                        new Date().setFullYear(new Date().getFullYear() + 3)
                      ).toLocaleDateString()}
                    </li>
                    <li>
                      Выдан: ООО "Центр сертификации строительных материалов"
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </section>
  )
}
