import { RegisterUserForm } from "@/feature/auth/login"
import { Modal } from "../../ui/Modal"
import { useLocation } from "react-router-dom"
import logoType  from '@/assets/img/logotype.png'


interface ModalBuyProductProps {
    showModal: boolean;
    onSucces: (values:boolean) => void;
}

export const ModalPayProduct:React.FC<ModalBuyProductProps> = ({showModal, onSucces}) => {
const location = useLocation()
const isLocation = location.pathname.includes('/home')
    

  return (
    <Modal show={showModal} size='xs' className='shadow-2xl w-full rounded-3xl'>
      <Modal.Body>
        <div className="flex flex-col items-center justify-center pt-2">
          <img src={logoType} alt="Logo" className='w-32 h-28 mx-auto' />
            <h1 className="text-lg text-success-800">Información personal para realizar el pago</h1>
        </div>
         <RegisterUserForm  onSucces={onSucces} isLocation={isLocation} className='mx-auto w-11/12 justify-center 2xl:w-[394px] mt-5' onSuccess={() => console.log('success')} />
        </Modal.Body>
      </Modal>
  )
}

