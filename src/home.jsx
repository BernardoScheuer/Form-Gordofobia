import React from "react";

const stats = [
  {
    id: 1,
    value: "≈ 30%",
    label: "Relatos de discriminação",
    note: "Percentual aproximado de pessoas com excesso de peso que relatam ter sofrido discriminação em ambientes como trabalho, saúde ou educação.",
  },
  {
    id: 2,
    value: "40–60%",
    label: "Preconceito implícito",
    note: "Estudos mostram alta incidência de atitudes negativas implícitas contra pessoas gordas entre profissionais e na população geral.",
  },
  {
    id: 3,
    value: "Maior risco",
    label: "Impacto na saúde mental",
    note: "Gordofobia está associada a maior risco de ansiedade, depressão e transtornos alimentares.",
  },
];



export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e6eef0] font-sans px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#7cffb2] mb-2 drop-shadow">Gordofobia: Entenda, reconheça e combata</h1>
          <p className="text-[#9aa6a8] text-base md:text-lg max-w-2xl mx-auto">Informação, números e caminhos práticos para reduzir o preconceito baseado no peso corporal.</p>
        </header>

        <section className="bg-[#0d0d0f] rounded-xl border border-[#00e6ff22] shadow-lg mb-7 p-5 md:p-7">
          <h2 className="text-[#00e6ff] text-lg font-semibold mb-4">Números e dados (estimativas)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {stats.map(s => (
              <article key={s.id} className="bg-[#101217] rounded-lg border border-[#00e6ff22] shadow-md p-4 hover:shadow-xl transition-all">
                <div className="text-2xl font-bold text-[#7cffb2]">{s.value}</div>
                <div className="mt-2 font-semibold text-[#e6eef0]">{s.label}</div>
                <p className="mt-2 text-sm text-[#9aa6a8]">{s.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#0d0d0f] rounded-xl border border-[#00e6ff22] shadow-lg mb-7 p-5 md:p-7">
          <h2 className="text-[#00e6ff] text-lg font-semibold mb-4">Como a gordofobia se manifesta</h2>
          <ul className="list-disc pl-5 text-[#9aa6a8] space-y-2">
            <li>Comentários e microagressões sobre o corpo.</li>
            <li>Discriminação no trabalho, na saúde e na educação.</li>
            <li>Representações midiáticas estigmatizantes e humor que humilha.</li>
            <li>Associação equivocada entre moralidade, disciplina e peso corporal.</li>
          </ul>
        </section>

        <section className="bg-[#0d0d0f] rounded-xl border border-[#00e6ff22] shadow-lg mb-7 p-5 md:p-7">
          <h2 className="text-[#00e6ff] text-lg font-semibold mb-4">Causas e fatores</h2>
          <ul className="list-disc pl-5 text-[#9aa6a8] space-y-2">
            <li>Normas sociais e culturais que valorizam corpos magros.</li>
            <li>Desinformação sobre saúde e peso (simplicidade excessiva de causas).</li>
            <li>Fatores econômicos e estruturais que afetam acesso a alimentos e cuidados.</li>
            <li>Viés institucional em políticas e práticas de saúde e trabalho.</li>
          </ul>
        </section>

        <section className="bg-[#0d0d0f] rounded-xl border border-[#00e6ff22] shadow-lg mb-7 p-5 md:p-7">
          <h2 className="text-[#00e6ff] text-lg font-semibold mb-4">Impactos e como ajudar</h2>
          <ul className="list-disc pl-5 text-[#9aa6a8] space-y-2">
            <li>Ouça sem julgar; reconheça a experiência da pessoa.</li>
            <li>Evite comentários sobre peso e aparência.</li>
            <li>Busque fontes confiáveis e atualize números com estudos e relatórios.</li>
            <li>Promova políticas inclusivas em espaços de trabalho e saúde.</li>
          </ul>
        </section>

        <footer className="text-center mt-8 text-xs text-[#9aa6a8]">
          <small>Dados ilustrativos — substitua por fontes confiáveis (estudos, relatórios governamentais ou organizações de saúde) onde necessário.</small>
        </footer>
      </div>
    </main>
  );
}
