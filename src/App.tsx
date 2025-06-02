import React from 'react'
import { Header } from './components/header'
import { HeroSection } from './components/hero-section'
import { ProductCatalog } from './components/product-catalog'
import { MatsMPSection } from './components/mats-mp-section'
import { ContactForm } from './components/contact-form'
import { ProjectExamples } from './components/project-examples'
import { CompanyAdvantages } from './components/company-advantages'
import { Certificates } from './components/certificates'
import { WorkSteps } from './components/work-steps'
import { PaymentDelivery } from './components/payment-delivery'
import { ContactSection } from './components/contact-section'
import { Footer } from './components/footer'
import { Modal, useDisclosure } from '@heroui/react'
import { LeadForm } from './components/lead-form'

export default function App() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const [modalType, setModalType] = React.useState<string>('discount')
  const [modalTitle, setModalTitle] = React.useState<string>('')

  const openModal = (type: string, title: string) => {
    setModalType(type)
    setModalTitle(title)
    onOpen()
  }

  return (
    <div className='min-h-screen bg-background'>
      <Header openModal={openModal} />

      <main>
        <HeroSection openModal={openModal} />
        <ProductCatalog openModal={openModal} />
        <MatsMPSection openModal={openModal} />
        <ContactForm />
        <ProjectExamples openModal={openModal} />
        <CompanyAdvantages openModal={openModal} />
        <Certificates />
        <WorkSteps openModal={openModal} />
        <PaymentDelivery openModal={openModal} />
        <ContactSection />
      </main>

      <Footer />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='md'>
        <LeadForm type={modalType} title={modalTitle} onClose={onClose} />
      </Modal>
    </div>
  )
}
