import { Wrapper } from "@/feature/core/ui/wrapper"
import { RegisterUserForm } from "@/feature/auth/login/register-user-form"
import backgroundLogin from '@/feature/auth/assets/LogoPayBill.png' 
import { InfoRegisterUser } from "@/feature/core/types/user"


 export const RegisterUser = () => {


  const handleSuccess = (values: InfoRegisterUser): void => {
        console.log(values)
    
      }
  return (
    <div className="min-h-screen w-auto items-center justify-center  flex "> 
    <div className='bg-gradient-to-r from-success-200 to-success-500 w-full h-16 absolute top-0'></div> 
       <Wrapper className='flex h-full  items-center justify-center  md:pl-0  '>
        <div className='grid grid-cols-7   w-full  '>
          <div className="col-span-3  hidden  md:block   mx-auto justify-center ">
          <picture>
            <img src={backgroundLogin} alt="backgroundLogin" className="   justify-center flex items-center mx-auto  mt-36 " />
          </picture>
          </div>
          <div id="Formulario" className=" col-span-4 w-[360px] md:w-[630px] mb-5  justify-center mx-auto border-[1px] rounded-md border-success-800 md:mt-[83px] 2xl:mt-0">                      
           <div className="m-4 mb-10 text-center"> 
            <h2 className="text-xl  font-semibold">Datos del Nuevo Usuario</h2>
            <p className="pt-10">Registrarse</p>
            </div>
            <RegisterUserForm className='mx-auto  md:w-11/12 justify-center 2xl:w-[544px] ' onSuccess={handleSuccess} />
            
            <div className='flex flex-col items-center text-center justify-around pb-10 mt-10'>
              <p className='text-sm opacity-75 text-primaryText-50'>
                {`© ${new Date().getFullYear()} Copyright Wahoo - Todos los derechos reservados`}
              </p>
            </div>
            
          </div>
        </div>
      </Wrapper>
      </div>
  )
}

