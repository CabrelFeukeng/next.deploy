"use client";
import { useState } from "react";
import Table1 from "./subTable";

interface RowData {
  id: number | null;
  jour_debut: string;
  jour_fin: string;
  heure_debut: string;
  heure_fin: string;
}

const initialFormData: RowData = {
  id: null,
  jour_debut: "",
  jour_fin: "",
  heure_debut: "",
  heure_fin: "",
};

const initialError: RowData = {
  id: null,
  jour_debut: "",
  jour_fin: "",
  heure_debut: "",
  heure_fin: "",
};


export default function TableConducteur() {

  const [id, setId] = useState<number | null>(0);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState<RowData>(initialFormData);
  const [tableData, setTableData] = useState<RowData[]>([]);
  const [formErrors, setFormErrors] = useState<RowData>(initialError);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);

  const handleEditClick = (row: RowData) => {
    setSelectedRow(row);
    setIsEditing(true);
  };



  const handleFormSubmit1 = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedRow) {
      const updatedRowData = tableData.map((row) => {
        if (row.id === selectedRow.id) {
          return selectedRow;
        }
        return row;
      });

      setTableData(updatedRowData);
      setSelectedRow(null);
    }

    setIsEditing(false);
  };

  
  const handleCancelClick = () => {
    setIsEditing(false);
    setSelectedRow(null);
  };




  const [showAlert, setShowAlert] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  
  
  
  const handleDeleteClickItem = (id: number) => {
    setSelectedId(id);
    setShowAlert(true);
  };

  const handleCancelDelete = () => {
    setSelectedId(null);
    setShowAlert(false);
  };

  const handleConfirmDelete = () => {
    if (selectedId !== null) {
      const updatedData = tableData.filter((_, i) => i !== selectedId);
      setTableData(updatedData);
      setSelectedId(null);
      setShowAlert(false);
    }
  };


  const handleDeleteClick = (index: number) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cette ligne ?');
    if (confirmDelete) {
      const updatedData = tableData.filter((_, i) => i !== index);
      setTableData(updatedData);
    }
  };


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.jour_debut || !formData.jour_fin || !formData.heure_debut || !formData.heure_fin) {

      const errors: RowData = {
        id:null,
        jour_debut: "",
        jour_fin: "",
        heure_debut: "",
        heure_fin: "",
    };

      if (!formData.jour_debut) {
        errors.jour_debut = "veuillez ajouter un jour de debut de disponibilité";
      }

      if (!formData.jour_fin) {
        errors.jour_fin = "veuillez ajouter un jour de fin de disponibilité";
      }

      if (!formData.heure_debut) {
        errors.heure_debut = "veuillez ajouter une heure de debut de disponibilité";
      }

      if (!formData.heure_fin) {
        errors.heure_fin = "veuillez ajouter une heure de fin de disponibilité";
      }
      setFormErrors(errors);
      return;
    }

    if (!(id === null)) {
      setId(id+1);
    }
    formData.id = id;
    setTableData([...tableData, formData]);
    setFormData(initialFormData);
    setFormVisible(false);
    setFormErrors(initialError);
   };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
    setFormErrors(initialError);
  };




  return (
    <>
      <div>
        <Table1 handleEditClick={handleEditClick} handleCancelClick1={handleCancelClick} isEditing={isEditing} selectedRow={selectedRow} setSelectedRow={setSelectedRow} handleFormSubmit1={handleFormSubmit1} handleInputChange1={handleInputChange1}  handleDeleteClickItem ={ handleDeleteClickItem} handleCancelDelete={handleCancelDelete} handleConfirmDelete={handleConfirmDelete} showAlert={showAlert} formData={formData} formErrors={formErrors} formVisible={formVisible} data={tableData} onDeleteClick={handleDeleteClick} handleFormSubmit={handleFormSubmit} toggleFormVisibility={toggleFormVisibility} handleInputChange={handleInputChange}/>
      </div>
    </>
  );
}