import React from 'react';
import { Activity, Globe, AlertCircle, PlusCircle, Settings } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0e1117] text-[#fafafa] font-sans">
      
      {/* --- BARRA LATERAL (Sidebar estilo Streamlit) --- */}
      <aside className="w-64 bg-[#262730] p-6 flex flex-col gap-6 border-r border-gray-700">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="text-red-500" />
          <h2 className="text-xl font-bold">Uptime Tool</h2>
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-2 font-medium">ADICIONAR NOVO SITE</label>
          <input 
            type="text" 
            placeholder="URL do site..." 
            className="w-full bg-[#0e1117] border border-gray-600 rounded-md p-2 text-sm focus:outline-none focus:border-red-500 transition-colors"
          />
          <button className="w-full mt-3 bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2">
            <PlusCircle size={16} /> Adicionar
          </button>
        </div>

        <div className="mt-auto">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Settings size={18} />
            <span className="text-sm">Configurações</span>
          </button>
        </div>
      </aside>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Dashboard de Monitoramento</h1>
          <p className="text-gray-400">Acompanhe o status dos seus servidores em tempo real.</p>
        </header>

        {/* METRICAS (Cards de cima) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#262730] p-6 rounded-lg border border-gray-700 shadow-sm">
            <div className="flex justify-between items-center mb-2 text-gray-400 text-xs font-bold uppercase tracking-wider">
              Total de Sites <Globe size={14} />
            </div>
            <div className="text-3xl font-mono">03</div>
          </div>

          <div className="bg-[#262730] p-6 rounded-lg border border-gray-700 shadow-sm border-l-4 border-l-green-500">
            <div className="flex justify-between items-center mb-2 text-gray-400 text-xs font-bold uppercase tracking-wider">
              Online <Activity size={14} className="text-green-500" />
            </div>
            <div className="text-3xl font-mono text-green-500">02</div>
          </div>

          <div className="bg-[#262730] p-6 rounded-lg border border-gray-700 shadow-sm border-l-4 border-l-red-500">
            <div className="flex justify-between items-center mb-2 text-gray-400 text-xs font-bold uppercase tracking-wider">
              Offline <AlertCircle size={14} className="text-red-500" />
            </div>
            <div className="text-3xl font-mono text-red-500">01</div>
          </div>
        </div>

        {/* TABELA DE SITES */}
        <div className="bg-[#262730] rounded-lg border border-gray-700 overflow-hidden shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#1a1c23] text-gray-300 text-sm uppercase">
              <tr>
                <th className="p-4 border-b border-gray-700 font-semibold italic">URL do Site</th>
                <th className="p-4 border-b border-gray-700 font-semibold">Status</th>
                <th className="p-4 border-b border-gray-700 font-semibold text-center">Última verificação</th>                
                <th className="p-4 border-b border-gray-700 font-semibold text-center">Ações</th>                

              </tr>
            </thead>
            <tbody className="text-gray-200">
              <tr className="hover:bg-gray-700/30 transition-colors">
                <td className="p-4 border-b border-gray-800 font-mono">https://google.com</td>
                <td className="p-4 border-b border-gray-800">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Online
                  </span>
                </td>
                <td className="p-4 border-b border-gray-800 text-center text-xs text-gray-400">
                23/04/2026 - 15:30:05
                </td>
            
                <td className="p-4 border-b border-gray-800 text-center">
                  <button className="text-xs text-red-400 hover:underline">Remover</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-700/30 transition-colors">
                <td className="p-4 border-b border-gray-800 font-mono">https://meu-site-fora.com.br</td>
                <td className="p-4 border-b border-gray-800">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    Fora do Ar
                  </span>
                </td>
                <td className="p-4 border-b border-gray-800 text-center text-xs text-gray-400">
                23/04/2026 - 15:31:00
                </td>                
                <td className="p-4 border-b border-gray-800 text-center">
                  <button className="text-xs text-red-400 hover:underline">Remover</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}