import TableTripPlan from "./table-trip-plan/page";
import TableClient from "./table-client/page";
import TableConducteur from "./table-conducteur/page";
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col gap-4">
        <Link href="/table-client" className="bg-blue-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
           Tableau des clients
        </Link>
        <Link href="/table-conducteur" className="bg-blue-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
           Tableau des conducteurs
        </Link>
        <Link href="/table-trip-plan" className="bg-blue-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
            Tableau des plans de voyage
        </Link>
      </div>
    </div>
  );
}