import React from "react";

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


const respostasFake = [
  [18, 8, 4],
  [10, 12, 5, 3],
  [7, 13, 6, 4],
  [15, 10, 5],
  [20, 10],
  [8, 12, 7, 3],
  [22, 6, 2],
  [5, 15, 7, 3],
  [16, 10, 4],
  [9, 12, 5, 4]
];

function getPercentages(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  return arr.map(v => Math.round((v / total) * 100));
}

export default function Dados() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e6eef0] px-4 py-8 font-sans flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-[#00e6ff] mb-8 text-center">Resultados do Formulário</h2>
        {perguntas.map((pergunta, idx) => {
          const totalRespostas = respostasFake[idx].reduce((a, b) => a + b, 0);
          return (
            <div key={idx} className="bg-[#0d0d0f] rounded-xl border border-[#00e6ff22] shadow-lg mb-7 p-5">
              <h3 className="text-lg font-semibold text-[#e6eef0] mb-4">{pergunta}</h3>
              <div className="mb-2 text-xs text-gray-400">Total de respostas: {totalRespostas}</div>
              <div className="space-y-3">
                {opcoes[idx].map((opcao, i) => {
                  const porcentagens = getPercentages(respostasFake[idx]);
                  let corBarra = "";
                  let corTexto = "";
                  if (opcao === "Nunca") {
                    corBarra = "bg-red-500";
                    corTexto = "text-white font-bold";
                  } else if (opcao === "Não") {
                    corBarra = "bg-green-300";
                    corTexto = "text-black font-bold";
                  } else if (opcao === "Sim" || opcao === "Sempre" || opcao === "Frequentemente" || opcao === "Muito" || opcao === "Sim, sempre") {
                    corBarra = "bg-green-500";
                    corTexto = "text-white font-bold";
                  } else if (opcao === "Às vezes") {
                    corBarra = "bg-green-300";
                    corTexto = "text-black font-bold";
                  } else if (opcao === "Raramente") {
                    corBarra = "bg-yellow-300";
                    corTexto = "text-black font-bold";
                  } else if (opcao === "Não sei" || opcao === "Depende") {
                    corBarra = "bg-yellow-400";
                    corTexto = "text-black font-bold";
                  } else {
                    corBarra = "bg-blue-500";
                    corTexto = "text-white font-bold";
                  }
                  return (
                    <div key={i} className="flex items-center">
                      <div className="flex-1 rounded-lg border border-[#00e6ff22] bg-[#23272b] p-2 mr-2 relative" style={{ minWidth: '60px', height: '32px' }}>
                        <div className={`${corBarra} absolute left-0 top-0 h-full rounded-lg`} style={{ width: `${porcentagens[i]}%` }}></div>
                        <span className={`relative z-10 ${corTexto}`}>{opcao}</span>
                      </div>
                      <span className="text-gray-300 ml-2">{porcentagens[i]}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
