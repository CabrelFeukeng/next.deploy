"use client";

import { MdDelete} from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { BiPlusCircle } from 'react-icons/bi';
import { AiOutlineWarning } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface RowData {
    id: number | null;
    lieu_depart : string;
    lieu_ariivee : string;
    jour_debut: string;
    jour_fin: string;
    heure_debut: string;
    heure_fin: string;
    nb_place: number | null;
    tarif : number | null;
    comfort : string
}

interface RowDataErrors {
  id: number | null;
  lieu_depart : string;
  lieu_ariivee : string;
  jour_debut: string;
  jour_fin: string;
  heure_debut: string;
  heure_fin: string;
  nb_place: string;
  tarif : string;
  comfort : string
}


interface TableauProps {
  data: RowData[];
  showAlert: boolean;
  formVisible: boolean;
  handleConfirmDelete: () => void;
  handleCancelDelete: () => void;
  handleDeleteClickItem: (index: number) => void;
  formErrors: RowDataErrors;
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
  showAskType : boolean,
  handleShowAskType: () => void;
}

const Table1: React.FC<TableauProps> = ({handleShowAskType, showAskType, handleCancelClick1, handleEditClick,setSelectedRow, handleFormSubmit1, selectedRow, isEditing, handleInputChange1, handleDeleteClickItem, handleConfirmDelete,handleCancelDelete, showAlert, formData, formVisible, data, onDeleteClick, handleFormSubmit, handleInputChange, toggleFormVisibility, formErrors }) => {

    return (
      <div className="container mx-auto p-4">

        {!formVisible && !isEditing && (
        
        <button
          className=" ml-5 bg-customBlue hover:bg-primaryShade1 text-white font-bold py-2 px-4 rounded flex"
          onClick={handleShowAskType}
          
        >
          <BiPlusCircle size={25} color='white'/>
          <h4> ajouter un voyage</h4>
        </button>
        )}


      {!isEditing && formVisible && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 fixed bottom-300 top-70 p-10 left-0 right-0 flex items-center justify-center">
                <div className="w-auto overflow-x-auto max-w-screen overflow-auto max-h-screen rounded-xl p-8 max-w-md shadow-lg bg-white border-blue-500 border">
                <p className='text-center font-bold text-black'>* AJOUT D'UN VOYAGE *</p>
                  <form onSubmit={handleFormSubmit}>
                    <div className="mt-5">
                    <div className="grid grid-cols-2 gap-4 ">

                    <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="lieu_depart">
                          lieu de depart
                        </label>

                        <input
                         className={`w-full bg-white shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline 
                         ${formErrors.lieu_depart ? 'border-red-500' : ''} hover:border-gray-500`}
                          id="lieu_depart"
                          type="text"
                          name="lieu_depart"
                          value={formData.lieu_depart || ''}
                          onChange={handleInputChange}
                        />
                        {formErrors.lieu_depart && (
                          <p className="text-red-500 text-xs italic">{formErrors.lieu_depart}</p>
                        )}

                      </div>

                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="lieu_ariivee">
                          lieu d'arrivée
                        </label>

                        <input
                         className={`bg-white shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline 
                         ${formErrors.lieu_ariivee ? 'border-red-500' : ''} hover:border-gray-500`}
                          id="lieu_ariivee"
                          type="text"
                          name="lieu_ariivee"
                          value={formData.lieu_ariivee || ''}
                          onChange={handleInputChange}
                        />
                        {formErrors.lieu_ariivee && (
                          <p className="text-red-500 text-xs italic">{formErrors.lieu_ariivee}</p>
                        )}

                      </div>

                      
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
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="heure_fin">
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

                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="tarif">
                          tarif
                        </label>

                        <input
                          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                          ${ formErrors.tarif ? 'border-red-500' : ''}hover:border-gray-500`}

                          id="tarif"
                          type="number"
                          name="tarif"
                          value={formData.tarif || ''}
                          onChange={handleInputChange}
                        />
                        {formErrors.tarif && (
                          <p className="text-red-500 text-xs italic">{formErrors.tarif}</p>
                        )}

                      </div>

                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="comfort">
                          niveau de comfort
                        </label>

                        <select
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                        ${ formErrors.comfort ? 'border-red-500' : ''}hover:border-gray-500`}
                          id="comfort"
                          name="comfort"
                          value={formData.comfort}
                          onChange={handleInputChange1}
                        >
                          <option value="1">VIP</option>
                          <option value="2">CLASSIQUE</option>
                        </select>
                        {formErrors.comfort && (
                          <p className="text-red-500 text-xs italic">{formErrors.comfort}</p>
                        )}

                      </div>

                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="nb_place">
                          nombre de place
                        </label>

                        <input
                         className={`bg-white shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline 
                         ${formErrors.nb_place ? 'border-red-500' : ''} hover:border-gray-500`}
                          id="nb_place"
                          type="number"
                          name="nb_place"
                          value={formData.nb_place || ''}
                          onChange={handleInputChange}
                        />
                        {formErrors.nb_place && (
                          <p className="text-red-500 text-xs italic">{formErrors.nb_place}</p>
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


{showAskType && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-accentLightGreen rounded p-8 max-w-md relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        onClick={handleShowAskType}
      >
        <AiOutlineCloseCircle color='red' size={26} />
      </button>
      <div className="flex items-center space-x-4">
        <h1 className='font-bold'>SELECTIONNER LE TYPE DE VOYAGE</h1>
      </div>
      <div className="flex justify-end mt-8 space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={toggleFormVisibility}
        >
          voyage simple
        </button>
        <button
          className="bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={toggleFormVisibility}
        >
          aller et retour
        </button>
      </div>
    </div>
  </div>
)}


         {isEditing && selectedRow &&  (
              <div className=" fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 fixed bottom-300 top-70 p-10 left-0 right-0 flex items-center justify-center bg-opacity-50">
                
                <div className="w-auto overflow-x-auto max-w-screen overflow-auto max-h-screen rounded-xl p-8 max-w-md shadow-lg bg-white border-blue-500 border">

                  <h1 className='text-center font-bold text-black'>* MODIFICATION D'UNE VOYAGE *</h1> 
                  <form onSubmit={handleFormSubmit1}>
                    <div className="overflow-y-auto mt-5">
                    <div className="grid grid-cols-2 gap-4 ">

                    <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="lieu_depart">
                          lieu de depart
                        </label>

                        <input
                         className={`w-full bg-white shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline 
                         ${formErrors.lieu_depart ? 'border-red-500' : ''} hover:border-gray-500`}
                          id="lieu_depart"
                          type="text"
                          name="lieu_depart"
                          value={formData.lieu_depart || ''}
                          onChange={(event) =>
                            setSelectedRow({
                              ...selectedRow,
                              jour_debut: event.target.value,
                            })
                          }
                        />
                        {formErrors.lieu_depart && (
                          <p className="text-red-500 text-xs italic">{formErrors.lieu_depart}</p>
                        )}

                      </div>

                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="lieu_ariivee">
                          lieu d'arrivée
                        </label>

                        <input
                         className={`bg-white shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline 
                         ${formErrors.lieu_ariivee ? 'border-red-500' : ''} hover:border-gray-500`}
                          id="lieu_ariivee"
                          type="text"
                          name="lieu_ariivee"
                          value={formData.lieu_ariivee || ''}
                          onChange={(event) =>
                            setSelectedRow({
                              ...selectedRow,
                              jour_debut: event.target.value,
                            })
                          }
                        />
                        {formErrors.lieu_ariivee && (
                          <p className="text-red-500 text-xs italic">{formErrors.lieu_ariivee}</p>
                        )}

                      </div>

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

                    <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="tarif">
                          tarif
                        </label>

                        <input
                          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                          ${ formErrors.tarif ? 'border-red-500' : ''}hover:border-gray-500`}

                          id="tarif"
                          type="number"
                          name="tarif"
                          value={formData.tarif || ''}
                          onChange={(event) =>
                            setSelectedRow({
                              ...selectedRow,
                              heure_fin: event.target.value,
                            })
                          }
                        />
                        {formErrors.tarif && (
                          <p className="text-red-500 text-xs italic">{formErrors.tarif}</p>
                        )}

                      </div>

                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="comfort">
                          niveau de comfort
                        </label>

                        <select
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                        ${ formErrors.comfort ? 'border-red-500' : ''}hover:border-gray-500`}
                          id="comfort"
                          name="comfort"
                          value={formData.comfort}
                          onChange={(event) =>
                            setSelectedRow({
                              ...selectedRow,
                              heure_fin: event.target.value,
                            })
                          }
                        >
                          <option value="1">VIP</option>
                          <option value="2">CLASSIQUE</option>
                        </select>
                        {formErrors.comfort && (
                          <p className="text-red-500 text-xs italic">{formErrors.comfort}</p>
                        )}

                      </div>

                      <div className="mb-4">
                        <label className="block text-customBlue text-sm font-bold mb-2" htmlFor="nb_place">
                          nombre de place
                        </label>

                        <input
                         className={`bg-white shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline 
                         ${formErrors.nb_place ? 'border-red-500' : ''} hover:border-gray-500`}
                          id="nb_place"
                          type="number"
                          name="nb_place"
                          value={formData.nb_place || ''}
                          onChange={(event) =>
                            setSelectedRow({
                              ...selectedRow,
                              heure_fin: event.target.value,
                            })
                          }
                        />
                        {formErrors.nb_place && (
                          <p className="text-red-500 text-xs italic">{formErrors.nb_place}</p>
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
              <th className="border p-2 bg-secondaryShade1 text-black">lieux </th>
              <th className="border p-2 bg-customBlue text-white">jours</th>
              <th className="border p-2 bg-secondaryShade1 text-black">heures</th>
              <th className="border p-2 bg-customBlue text-white">nombre de places</th>
              <th className="border p-2 bg-secondaryShade1 text-black">modalités</th>
              <th className="border p-2 bg-customBlue text-white">modifier </th>
              <th className="border p-2 bg-secondaryShade1 text-black">supprimer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                <td className="border p-2 text-center">
                  <div className="flex flex-col">
                      <div className="text-customBlue font-semibold">lieu de depart: {row.lieu_depart}</div>
                      <div className="text-blue-500 font-semibold">lieu d'arrivée : {row.lieu_ariivee}</div>
                  </div>
                </td>

                <td className="border p-2 text-center">
                  <div className="flex flex-col">
                      <div className="text-customBlue font-semibold">jour depart: {row.jour_debut}</div>
                      <div className="text-blue-500 font-semibold">jour arrivée : {row.jour_fin}</div>
                  </div>
                </td>

                <td className="border p-2 text-center">
                  <div className="flex flex-col">
                      <div className="text-customBlue font-semibold">heure depart: {row.heure_debut}</div>
                      <div className="text-blue-500 font-semibold">heure arrivéé : {row.heure_fin}</div>
                  </div>
                </td>

                <td className="border p-2 text-center">{row.nb_place} </td>

                <td className="border p-2 text-center">
                  <div className="flex flex-col">
                      <div className="text-customBlue font-semibold">tarif: {row.tarif}Fcfa</div>
                      <div className="text-blue-500 font-semibold">niveau de comfort : {row.comfort}</div>
                  </div>
                </td>

                
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