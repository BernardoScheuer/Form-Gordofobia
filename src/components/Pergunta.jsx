function Pergunta({ pergunta, opcoes, onSelect, etapa, total }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-6">{pergunta}</h2>
      <div className="flex flex-col gap-3">
        {opcoes.map((opc, i) => (
          <button
            key={i}
            onClick={() => onSelect(opc)}
            className="py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-all"
          >
            {opc}
          </button>
        ))}
      </div>
      <p className="text-gray-500 text-sm mt-6">
        Pergunta {etapa} de {total}
      </p>
    </div>
  );
}

export default Pergunta;
