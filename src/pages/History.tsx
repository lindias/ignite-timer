import { Status } from "../components/Status";

export function History() {
  return (
    <main className="flex flex-1 p-14 flex-col">
      <h1 className="text-2xl font-bold text-gray-100">Meu histórico</h1>
      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm rounded-tl-lg pl-6">
                Tarefa
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm">
                Duração
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm">
                Início
              </th>
              <th className="bg-gray-600 p-4 text-left text-gray-100 text-sm rounded-tr-lg pr-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed w-1/2 pl-6">
                Conserto de débitos técnicos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                25 minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                Há cerca de 2 meses
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed pr-6">
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed w-1/2 pl-6">
                Conserto de débitos técnicos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                25 minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                Há cerca de 2 meses
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed pr-6">
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed w-1/2 pl-6">
                Conserto de débitos técnicos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                25 minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                Há cerca de 2 meses
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed pr-6">
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed w-1/2 pl-6">
                Conserto de débitos técnicos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                25 minutos
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed">
                Há cerca de 2 meses
              </td>
              <td className="bg-gray-700 border-t-4 border-gray-800 p-4 text-sm leading-relaxed pr-6">
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
