import React, { useState, useCallback } from 'react';
import { CheckCircle, AlertTriangle, ChevronRight, RefreshCw } from 'lucide-react';

function Pergunta({ pergunta, opcoes, onSelect, etapa, total, loading }) {
  const progress = (etapa / total) * 100;

  return (
    <div className="flex flex-col gap-6">
      
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      
      <p className="text-sm font-semibold text-blue-600">
        Pergunta {etapa} de {total}
      </p>

      
      <h2 className="text-2xl font-bold text-gray-800 leading-snug">
        {pergunta}
      </h2>

      
      <div className="space-y-3">
        {loading ? (
          <div className="flex justify-center items-center p-4">
            <RefreshCw className="w-6 h-6 animate-spin text-gray-500" />
            <span className="ml-2 text-gray-600">Finalizando formulário...</span>
          </div>
        ) : (
          opcoes.map((opcao, index) => (
            <button
              key={index}
              onClick={() => onSelect(opcao)}
              className="w-full text-left p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 rounded-xl transition duration-200 flex justify-between items-center text-gray-700 font-medium shadow-sm hover:shadow-md"
            >
              {opcao}
              <ChevronRight className="w-5 h-5 text-blue-500" />
            </button>
          ))
        )}
      </div>
    </div>
  );
}




export default function App() {
  const perguntas = [
    "Você acredita que pessoas com sobrepeso ou obesidade recebem oportunidades iguais no trabalho e na escola?",
    "Você já presenciou ou foi informado sobre algum caso de preconceito ou bullying relacionado ao peso?",
    "Você considera que a mídia (TV, internet, redes sociais) retrata pessoas acima do peso de forma justa?",
    "Você acha que comentários ou piadas sobre o peso das pessoas são inofensivos?",
    "Você já presenciou alguém sendo discriminado ou excluído por causa do seu peso?",
    "Em situações sociais (escola, trabalho, transporte público), você se sente confortável interagindo com pessoas de diferentes biotipos?",
    "Você acredita que escolas e empresas deveriam promover mais ações de conscientização sobre gordofobia?",
    "Você acha que os estereótipos sobre o corpo influenciam a forma como as pessoas são tratadas na sociedade?",
    "Na sua opinião, pessoas que sofrem gordofobia deveriam ter mais proteção legal ou políticas específicas?",
    "Você se considera uma pessoa que contribui para combater a gordofobia no seu dia a dia?"
  ];

  const opcoes = [
    ["Sim", "Não", "Não sei"],
    ["Frequentemente", "Às vezes", "Raramente", "Nunca"],
    ["Sempre", "Às vezes", "Raramente", "Nunca"],
    ["Sim", "Não", "Depende"],
    ["Sim", "Não"],
    ["Sempre", "Às vezes", "Raramente", "Nunca"],
    ["Sim", "Não", "Não sei"],
    ["Muito", "Moderadamente", "Pouco", "Nada"],
    ["Sim", "Não", "Não sei"],
    ["Sim, sempre", "Às vezes", "Raramente", "Nunca"]
  ];
  
  const total = perguntas.length;
  
  
  const [respostas, setRespostas] = useState({});
  const [etapa, setEtapa] = useState(0);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false); 


  
  const enviarFormulario = useCallback(() => {
    setLoading(true);
    setError(null);

    
    setTimeout(() => {
      
      console.log("--- Formulário Finalizado ---");
      console.log("Respostas Coletadas:", respostas);
      console.log("-----------------------------");

    
      setEnviado(true);
      setRespostas({}); 
      setEtapa(0); 
      setLoading(false);
    }, 1500); 
  }, [respostas]);


  
  const handleResposta = (valor) => {
    if (loading) return; 
    
    setRespostas(prev => ({ ...prev, [`q${etapa + 1}`]: valor }));
    
    if (etapa + 1 < total) {
      setEtapa(etapa + 1);
    } else {
      
      enviarFormulario();
    }
  };


  

  if (enviado) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center bg-gradient-to-br from-green-50 to-blue-100 p-4">
        <div 
          className="p-8 bg-white rounded-2xl shadow-2xl w-full max-w-sm transition duration-500 ease-in-out transform scale-100"
        >
          <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h2 className="text-3xl font-extrabold text-green-700 mb-2">Obrigado!</h2>
          <p className="text-gray-600">
            Sua participação foi registrada (apenas no console).
          </p>
          <button
            onClick={() => setEnviado(false)}
            className="mt-6 w-full p-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Responder Novamente
          </button>
        </div>
      </div>
    );
  }

  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div
        key={etapa}
        className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg transition duration-500 ease-in-out transform hover:shadow-3xl"
      >
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        <Pergunta
          pergunta={perguntas[etapa]}
          opcoes={opcoes[etapa]}
          onSelect={handleResposta}
          etapa={etapa + 1}
          total={total}
          loading={loading}
        />
      </div>
    </div>
  );
}
