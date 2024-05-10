import React from 'react';
import data from '../components/client/data';
import Image from 'next/image';




interface DataRow {
  id: number;
  nom: string;
  numero: string;
  e_mail: string;
  jour_debut: string;
  jour_fin: string;
  heure_debut: string;
  heure_fin: string
}


interface TableauProps {
  data: DataRow[];
}

const Tableau: React.FC<TableauProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse mx-auto my-4 lg:mx-5 lg:my-5">
      <thead>
        <tr>
          <th className="border p-2 bg-customBlue text-white">Profil</th>    
          <th className="border p-2 bg-secondaryShade1 text-black">Jours </th>
          <th className="border p-2 bg-customBlue text-white">Heures</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="flex justify-center items-center border p-2 space-x-4 ">
              <Image className="w-12 h-12 rounded-full" src="" alt={row.nom} />
              <div className="flex flex-col">
                <div className="text-customBlue font-semibold">{row.e_mail}</div>
                <div className="text-sm text-blue-500 font-bold">{row.numero}</div>
              </div>
            </td>
            
            <td className="border p-2 text-center">
              <div className="flex flex-col">
                  <div className="text-customBlue font-semibold">jour début: {row.jour_debut}</div>
                  <div className="text-sm text-blue-500 font-semibold">jour fin : {row.jour_fin}</div>
              </div>
            </td>
            
            <td className="border p-2 text-center">
              <div className="flex flex-col">
                  <div className="text-customBlue font-semibold">heure début: {row.heure_debut}</div>
                  <div className="text-sm text-blue-500 font-bold">heure fin : {row.heure_fin}</div>
              </div>
            </td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TableClient = () => {
  return(
    <>
    <div>
      <Tableau data={data}/>
    </div>
    </>
  )
}

export default TableClient