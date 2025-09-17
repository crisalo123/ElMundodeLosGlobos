import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import { GrUpdate } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { LuInfo } from "react-icons/lu";
import logoType  from '@/assets/img/logotype.png'
import vanti from '@/assets/img/vanti.jpeg'


import { Table } from '../../core/ui/Table'



import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { listTable } from '../types/tableHeader';
import Tooltip from '../ui/Tooltip/Tooltip';

import { Modal } from '../ui/Modal';
import { Button } from '../ui';
import { ModalPayProduct } from '../ui/Modal/modalPayProduct';



export interface ListComponentProps {
dataList: listTable[];

}


export const ListComponent = ({ dataList, }: ListComponentProps) => {

  const [showModal, setShowModal] = useState(false)
  const [modalPayProducto, setModalPayProducto] = useState(false)

 const [idCustomer, setIdCustomer] = useState<number | string>(0)
 const columnHelper = createColumnHelper<listTable>()
  
 const navigatee = useNavigate()
  
 const handleUpdate = (path:string, id:number) => {
  navigatee(`/home/${path}/actualizarPage/${id}`)
 }

 



    
   const columns = [
  columnHelper.accessor('id', {
    header: () => <div className='text-primary'>#</div>,
    cell: info => info.getValue()
  }),
  columnHelper.accessor('puntaje', {
    header: () => <div className='text-primary'>Puntaje</div>,
    cell: info => info.getValue()
  }),
  columnHelper.accessor('parametro', {
    header: () => <div className='text-primary'>Parámetro</div>,
    cell: info => info.getValue()
  }),
  columnHelper.accessor('criterio', {
    header: () => <div className='text-primary'>Criterio</div>,
    cell: info => info.getValue()
  }),
  columnHelper.accessor('acciones', {
    header: () => <div className='text-primary'>Acciones</div>,
    cell: ({row}) => (
       <div className="flex justify-center space-x-4 text-success-800">
         <Tooltip text="Villetera">
  <FaWallet
    onClick={() => {
      setIdCustomer(row.original.id)
      setShowModal(true)
    }}
    className="w-5 h-5 cursor-pointer"
  />
</Tooltip>
          <Tooltip text="Información">
            <LuInfo onClick={() => {
              setIdCustomer(row.original.id)
            }} className="w-5 h-5 cursor-pointer " />
          </Tooltip>
          <Tooltip text="Actualizar">
            <GrUpdate onClick={() => handleUpdate(module,row.original.id)}   className="w-5 h-5 cursor-pointer " />
          </Tooltip>
          <Tooltip text="Eliminar">
            <MdDeleteOutline className="w-5 h-5 cursor-pointer " />
          </Tooltip>
        </div>
    )
  })
];
  const table = useReactTable({
    columns,
    data: dataList,
    getCoreRowModel: getCoreRowModel()
  })


  return (
    <>  
      <section >
        <Table className="table-previous md:w-full md:table-fixed">
          {table.getHeaderGroups().map((headerGrup) => (
            <Table.Row
              className=' rounded-lg overflow-hidden text-sm'
              key={headerGrup.id}
              style={{ borderInline: '10px', height: '0px' }}
            >
              {headerGrup.headers.map((header, index) => (
                <Table.HeaderCell
                  className={index === headerGrup.headers.length - 1 ? ' mx-2' : ''}
                  key={header.id}
                  style={{ borderInline: '10px', height: '0px' }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          ))}
        
          <Table.Body className='bg-white'>
            {table.getRowModel().rows.map((row) => (
              <Table.Row className='!bg-white text-sm' key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell
                    className='!bg-white'
                    key={cell.id}
                  >
                    <span > {flexRender(cell.column.columnDef.cell, cell.getContext())}</span>
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
            {dataList.length === 0 && (
              <Table.Row style={{ borderInline: '10px', height: '10px' }}>
                <Table.Cell
                  className='italic text-center text-gray-600 font-extrabold !bg-white text-sm'
                  colSpan={100}
                >
                  Sin registros.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </section>

      <Modal size='sm' show={showModal} onClose={() => setShowModal(false)}>
        <div className='grid grid-cols-1 gap-4 p-4'>
          <img src={logoType} alt="Logo" className='w-32 h-20 mx-auto ' />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              
              <div className='col-span-1 border-[1px] border-success-500 '>
                <img src={vanti} alt="Logo" className=' mx-auto' />
                </div>
                <div className='col-span-2 '> 
            <h1>Factura de gas conjunto Monte Redondo</h1>
             <p className='font-semibold'>Numero de contrato: <span className='font-normal'>1231434234234</span></p>
             <p className='font-semibold'>Direccion:<span className='font-normal' >Calle 27b suer # 12j-63</span></p>
             <p className='font-semibold'>Mes:<span className='font-normal'>Agosto</span></p>
              <p className='font-semibold'>Valor a pagar:<span className='font-normal'> $ 120.000</span></p>
              </div>
          </div>
          <div className='col-span-1 flex justify-center items-center mt-4'>
            <Button onClick={() => setModalPayProducto(true)} className='bg-success-800 text-white hover:bg-success-600' >
               Pagar Factura
              </Button>
          </div>
        </div>
      </Modal>

      <ModalPayProduct
        showModal={modalPayProducto}
        onSucces={() => setModalPayProducto(false)}
      />

   </>
  )
}

