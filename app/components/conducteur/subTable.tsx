"use client";

import { MdDelete} from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { BiPlusCircle } from 'react-icons/bi';
import { AiOutlineWarning } from 'react-icons/ai';

interface RowData {
    id: number | null;
    jour_debut: string;
    jour_fin: string;
    heure_debut: string;
    heure_fin: string;
}


interface TableauProps {
  data: RowData[];
  showAlert: boolean;
  formVisible: boolean;
  handleConfirmDelete: () => void;
  handleCancelDelete: () => void;
  handleDeleteClickItem: (index: number) => void;
  formErrors: RowData;
  formData: RowData;
  onDeleteClick: (index: number) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange1 : (e: React.ChangeEvent<HTMLSelectElement>) => void
  toggleFormVisibility: () => void;
  isEditing: boolean;
  selectedRow: RowData | null;
  handleFormSubmit1: (event: React.FormEvent<HTMLFormElement>) => void;
  setSelectedRow: (row: RowData | null) => void;
  handleCancelClick1: () => void;
  handleEditClick: (row: RowData) => void;
}

const Table1: React.FC<TableauProps> = ({handleCancelClick1, handleEditClick,setSelectedRow, handleFormSubmit1, selectedRow, isEditing, handleInputChange1, handleDeleteClickItem, handleConfirmDelete,handleCancelDelete, showAlert, formData, formVisible, data, onDeleteClick, handleFormSubmit, handleInputChange, toggleFormVisibility, formErrors }) => {

    return (
      <div className="container mx-auto p-4">

        {!formVisible && !isEditing && (
        
        <button
          className=" ml-5 bg-customBlue hover:bg-primaryShade1 text-white font-bold py-2 px-4 rounded flex"
          onClick={toggleFormVisibility}
          
        >
          <BiPlusCircle size={25} color='white'/>
          <h4> ajouter une disponibilité</h4>
        </button>
        )}


      {!isEditing && formVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 fixed bottom-300 top-70 p-10 left-0 right-0 flex items-center justify-center">
                <div className="rounded-xl p-8 max-w-md shadow-lg bg-white border-blue-500 border">
                <p className="text-center font-bold text-black">* AJOUT D'UNE DISPONIBILITE *</p>
                  <form onSubmit={handleFormSubmit}>
                    <div className="overflow-auto h-64 mt-5">
                    <div className="grid grid-cols-2 gap-4 ">
                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="jour_debut">
                          Jour de debut
                        </label>

                        <input
                         className={`bg-white shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline 
                         ${formErrors.jour_debut ? 'border-red-500' : ''} hover:border-gray-500`}
                          id="jour_debut"
                          type="date"
                          name="jour_debut"
                          value={formData.jour_debut || ''}
                          onChange={handleInputChange}
                        />
                        {formErrors.jour_debut && (
                          <p className="text-red-500 text-xs italic">{formErrors.jour_debut}</p>
                        )}

                      </div>

                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="jour_fin">
                          Jour de fin
                        </label>

                        <input
                          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                          ${ formErrors.jour_fin ? 'border-red-500' : ''}hover:border-gray-500`}

                          id="jour_fin"
                          type="date"
                          name="jour_fin"
                          value={formData.jour_fin || ''}
                          onChange={handleInputChange}
                        />
                        {formErrors.jour_fin && (
                          <p className="text-red-500 text-xs italic">{formErrors.jour_fin}</p>
                        )}

                      </div>

                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="heure_debut">
                          Heure de debut
                        </label>

                        <input
                          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                          ${ formErrors.heure_debut ? 'border-red-500' : ''}hover:border-gray-500`}

                          id="heure_debut"
                          type="time"
                          name="heure_debut"
                          value={formData.heure_debut || ''}
                          onChange={handleInputChange}
                        />
                        {formErrors.heure_debut && (
                          <p className="text-red-500 text-xs italic">{formErrors.heure_debut}</p>
                        )}

                      </div>

                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="heure de fin">
                          Heure de fin
                        </label>

                        <input
                          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                          ${ formErrors.heure_fin ? 'border-red-500' : ''}hover:border-gray-500`}

                          id="heure_fin"
                          type="time"
                          name="heure_fin"
                          value={formData.heure_fin || ''}
                          onChange={handleInputChange}
                        />
                        {formErrors.heure_fin && (
                          <p className="text-red-500 text-xs italic">{formErrors.heure_fin}</p>
                        )}

                      </div>
                    
                      </div>

                      <div className="flex justify-end">
                        <button
                          className="bg-customBlue hover:bg-primaryShade1 text-white font-bold py-2 px-4 rounded mr-2"
                          type="submit"
                        >
                          Valider
                        </button>

                        <button
                          className="bg-secondaryShade1 hover:bg-accentLightGreen text-black font-bold py-2 px-4 rounded"
                          onClick={toggleFormVisibility}
                        >
                          Annuler
                        </button>

                      </div>

                    </div>
                  </form>
                </div>
              </div>
            )}

         {isEditing && selectedRow &&  (
              <div className=" fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 fixed bottom-300 top-70 p-10 left-0 right-0 flex items-center justify-center bg-opacity-50">
                
                <div className="p-8 rounded-xl shadow-lg bg-white border-blue-500 border">
                  <h1 className="text-center font-bold text-black">* MODIFICATION D'UNE DISPONIBILITE *</h1> 
                  <form onSubmit={handleFormSubmit1}>
                    <div className="overflow-y-auto mt-5">
                    <div className="grid grid-cols-2 gap-4 ">
                    <div className="mb-4">
                      <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="jour_debut">
                        Jour de debut
                      </label>

                      <input
                        className={`shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                        ${ formErrors.jour_debut ? 'border-red-500' : ''}hover:border-gray-500`}

                        type="date"
                        id="jour_debut"
                        name="jour_debut"
                        value={selectedRow.jour_debut}
                        onChange={(event) =>
                        setSelectedRow({
                          ...selectedRow,
                          jour_debut: event.target.value,
                        })
                      }
                      />
                      {formErrors.jour_debut && (
                        <p className="text-red-500 text-xs italic">{formErrors.jour_debut}</p>
                      )}

                    </div>

                    <div className="mb-4">
                      <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="jour_fin">
                        Jour de fin
                      </label>

                      <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                        ${ formErrors.jour_fin ? 'border-red-500' : ''}hover:border-gray-500`}

                        type="date"
                        id="jour_fin"
                        name="jour_fin"
                        value={selectedRow.jour_fin}
                        onChange={(event) =>
                        setSelectedRow({
                          ...selectedRow,
                          jour_fin: event.target.value,
                        })
                      }
                      />
                      {formErrors.jour_fin && (
                        <p className="text-red-500 text-xs italic">{formErrors.jour_fin}</p>
                      )}

                    </div>

                    <div className="mb-4">
                      <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="heure_debut">
                        Heure de debut
                      </label>

                      <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                        ${ formErrors.heure_debut ? 'border-red-500' : ''}hover:border-gray-500`}

                        type="time"
                        id="heure_debut"
                        name="heure_debut"
                        value={selectedRow.heure_debut}
                        onChange={(event) =>
                        setSelectedRow({
                          ...selectedRow,
                          heure_debut: event.target.value,
                        })
                      }
                      />
                      {formErrors.heure_debut && (
                        <p className="text-red-500 text-xs italic">{formErrors.heure_debut}</p>
                      )}

                    </div>

                    <div className="mb-4">
                      <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="heure de fin">
                        Heure de fin
                      </label>

                      <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                        ${ formErrors.heure_fin ? 'border-red-500' : ''}hover:border-gray-500`}

                        type="time"
                        id="heure_fin"
                        name="heure_fin"
                        value={selectedRow.heure_fin}
                        onChange={(event) =>
                        setSelectedRow({
                          ...selectedRow,
                          heure_fin: event.target.value,
                        })
                      }
                      />
                      {formErrors.heure_fin && (
                        <p className="text-red-500 text-xs italic">{formErrors.heure_fin}</p>
                      )}

                    </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        className="bg-customBlue hover:bg-primaryShade1 text-white font-bold py-2 px-4 rounded mr-2"
                        type="submit"
                      >
                        Valider
                      </button>

                      <button
                        className="bg-secondaryShade1 hover:bg-accentLightGreen text-black font-bold py-2 px-4 rounded"
                        onClick={handleCancelClick1}
                      >
                        Annuler
                      </button>

                    </div>

                    </div>
                  </form>
                </div>
              </div>
            )}





            



        <table className="w-full border-collapse mx-auto my-4 lg:mx-5 lg:my-5">
          <thead>
            <tr>
              <th className="border p-2 bg-secondaryShade1 text-black">jour debut </th>
              <th className="border p-2 bg-customBlue text-white">jour fin</th>
              <th className="border p-2 bg-secondaryShade1 text-black">heure de debut</th>
              <th className="border p-2 bg-customBlue text-white">heure de fin</th>
              <th className="border p-2 bg-secondaryShade1 text-black">modifier </th>
              <th className="border p-2 bg-customBlue text-white">supprimer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="border p-2 text-center">{row.jour_debut}</td>
                <td className="border p-2 text-center">{row.jour_fin}</td>
                <td className="border p-2 text-center">{row.heure_debut}</td>
                <td className="border p-2 text-center">{row.heure_fin}</td>

                <td className="border p-2 text-center">
                  <button className="edit-button" 
                  onClick={() => handleEditClick(row)}
                  >
                
                      <FaEdit size={15} color="#2D3A96" />
                      
                  </button>
                  
                </td>

                <td className="border p-2 text-center">
                  <button className="delete-button" onClick={() => handleDeleteClickItem(index)}>
                      <MdDelete size={15} color="red" />
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

        {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-accentLightGreen rounded p-8 max-w-md">
            <div className='flex items-center space-x-4'>
              <AiOutlineWarning size={60} color='red'/>
              <p>voulez vous vraiment supprimer cette disponibilité ?</p>
            </div>
            <div className="flex justify-end mt-8 space-x-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleCancelDelete}
              >
                Non
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleConfirmDelete}
              >
                Oui
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    );
  };
  
  export default Table1;