
import { useForm } from "react-hook-form"
import { Button,  } from "../../ui"
import { InputField } from "../../ui/InputField"

import { Search, SearchSchema } from "./search-schema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation } from "react-router-dom";




type SearchComponentProps = {

 onSearch : (values:Search) => void 
 searchParams: string | number | undefined
}



export const SearchComponent:React.FC<SearchComponentProps> = ({onSearch, searchParams }) => {


  const { register,  handleSubmit , formState, reset} = useForm<Search>({
   resolver: zodResolver(SearchSchema),
   defaultValues: {
    id: searchParams?.toString() ?? ''
  }
  })
    
 
  const { errors } = formState 

  const location = useLocation()
  const locationSearch = location.pathname === '/home'

const handleReset = () => {
  reset({id: ''}) 
  onSearch({id: ''})
}


  return (
    
       
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-semibold mx-6">Lista de Calificaciones</h1> 
      <form  className={` md:flex  ${!locationSearch ? 'md:flex-row-reverse' : 'md:flex-row' }  `} onSubmit={handleSubmit(onSearch , (errors) => console.log(errors))}>
      <div> 
      <InputField {...register('id')}
       disabled={!!searchParams}
        type="number"
        label={ 'Buscar por id'}
        placeholder='Buscar por id' 
         className={`mt-[4px] md:mx-2 w-full ${locationSearch ?  'md:w-72' :'md:w-36'}`}
        error={searchParams ? ''  : errors.id?.message} />
      </div>
       <div className="mt-2" >
       {searchParams ? (
  <Button
    type="button"
    onClick={handleReset}
    className={` ${!locationSearch ? 'md:w-24' : 'md:w-auto w-full'} rounded-md bg-gradient-to-b from-success-100 to-success-600 text-white transition-all hover:brightness-110`}>
    Limpiar
  </Button>
) : (
  <Button
    type="submit"
    className={` ${!locationSearch ? 'md:w-24 ' : 'md:w-auto w-full'} rounded-md bg-gradient-to-b from-success-100 to-success-600 text-white transition-all hover:brightness-110`}>
    Buscar
  </Button>
)}
       </div>
      </form> 
      </div>
    
  )
}

