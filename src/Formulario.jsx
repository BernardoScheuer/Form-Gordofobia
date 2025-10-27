import React, { useState, useCallback, useEffect } from "react";

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

export default function Formulario() {
  const total = perguntas.length;
  const [respostas, setRespostas] = useState({});
  const [etapa, setEtapa] = useState(0);
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [iniciado, setIniciado] = useState(false);
  const [jaRespondeu, setJaRespondeu] = useState(false);

  // Verifica se já respondeu
  useEffect(() => {
    if (localStorage.getItem("formularioGordofobiaRespondido")) {
      setJaRespondeu(true);
    }
  }, []);

  const enviarFormulario = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setEnviado(true);
      setRespostas({});
      setEtapa(0);
      setLoading(false);
      setIniciado(false);
      setJaRespondeu(true);
      localStorage.setItem("formularioGordofobiaRespondido", "true");
    }, 1200);
  }, []);

  const handleResposta = (valor) => {
    if (loading) return;
    setRespostas((prev) => ({ ...prev, [`q${etapa + 1}`]: valor }));
    if (etapa + 1 < total) {
      setEtapa(etapa + 1);
    } else {
      enviarFormulario();
    }
  };

  if (jaRespondeu) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#050505] p-4">
        <div className="bg-[#0d0d0f] rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">
          <h2 className="text-xl font-bold text-[#00e6ff] mb-4">Formulário de Gordofobia</h2>
          <p className="text-[#9aa6a8] mb-6">Você já respondeu este formulário. Obrigado pela participação!</p>
        </div>
      </div>
    );
  }

  if (!iniciado && !enviado) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#050505] p-4">
        <div className="bg-[#0d0d0f] rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">
          <h2 className="text-xl font-bold text-[#00e6ff] mb-4">Formulário de Gordofobia</h2>
          <p className="text-[#9aa6a8] mb-6">Você gostaria de responder algumas perguntas sobre gordofobia?</p>
          <button
            onClick={() => setIniciado(true)}
            className="w-full p-3 bg-[#00e6ff] text-[#0d0d0f] font-semibold rounded-xl hover:bg-[#7cffb2] transition duration-300 mb-2"
          >
            Sim, quero responder
          </button>
          <a href="/" className="block w-full p-3 bg-[#101217] text-[#e6eef0] font-semibold rounded-xl hover:bg-[#00e6ff22] transition duration-300">Não quero responder</a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050505] p-4">
      <div className="bg-[#0d0d0f] rounded-3xl shadow-2xl p-8 w-full max-w-xl">
        <h2 className="text-xl font-bold text-[#00e6ff] mb-6">Formulário de Gordofobia</h2>
        <p className="text-[#9aa6a8] mb-4">Pergunta {etapa + 1} de {total}</p>
        <h3 className="text-lg font-semibold text-[#e6eef0] mb-6">{perguntas[etapa]}</h3>
        <div className="space-y-3">
          {opcoes[etapa].map((opcao, idx) => (
            <button
              key={idx}
              onClick={() => handleResposta(opcao)}
              className="w-full text-left p-4 bg-[#101217] hover:bg-[#00e6ff22] border border-[#00e6ff22] rounded-xl transition flex justify-between items-center text-[#e6eef0] font-medium shadow-sm hover:shadow-md"
            >
              {opcao}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
