import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    const script = document.createElement('script');
    script.async = true;
    script.id = 'respondi_src';
    script.src = 'https://embed.respondi.app/embed.js';
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 text-white [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] animate-fade-up">
          O SEGREDO QUE VOCÊ PROCURA ESTÁ AQUI!
        </h1>
        
        <div className="max-w-4xl mx-auto aspect-video mb-8 animate-scale-up">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/go0aOyHOvjI"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <Button 
          onClick={handleShowForm}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl mx-auto block animate-pulse"
        >
          Fechar negócio
        </Button>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] animate-fade-up">
          AINDA NÃO ESTÁ CONVENCIDO? AINDA BEM, POR QUE QUERO TE MOSTRAR MAIS COISAS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
          {[1, 2, 3].map((index) => (
            <img
              key={index}
              src={`/lovable-uploads/doc${index}.png`}
              alt={`Documento ${index}`}
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
        
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Com esses 3 textos que criamos, fazemos mais de 400 mil reais para o bolso desses clientes
        </p>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] animate-fade-up">
          DA PESQUISA AOS LUCROS! COMO FUNCIONA A NOSSA ENTREGA
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            "A gente faz um estudo do seu produto ou serviço",
            "Pesquisa de mercado",
            "Rascunhos de textos",
            "Finalização dos textos e revisão",
            "Aprovação do cliente",
            "Entrega final do documento com os textos"
          ].map((step, index) => (
            <div key={index} className="flex items-center space-x-4 bg-zinc-900 p-6 rounded-lg animate-fade-up">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>

        <Button 
          onClick={handleShowForm}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl mx-auto block mt-16 animate-pulse"
        >
          AGORA ESTOU CONVENCIDO
        </Button>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-zinc-900">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] animate-fade-up">
          O QUE EU VOU COBRAR DE VOCÊ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-black p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Pagamento Único</h3>
            <p className="text-4xl font-bold text-green-500 mb-8">R$ 2.250</p>
            <p className="text-lg mb-4">Entrega completa dos textos</p>
          </div>
          
          <div className="bg-black p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Plano Mensal</h3>
            <p className="text-4xl font-bold text-green-500 mb-8">R$ 1.125</p>
            <p className="text-lg mb-4">Inclui acompanhamento e 5 consultorias mensais</p>
            <p className="text-sm text-gray-400">Este plano não é obrigatório</p>
          </div>
        </div>

        <Button 
          onClick={handleShowForm}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl mx-auto block mt-16 animate-pulse"
        >
          Fechar negócio
        </Button>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 animate-fade-up">
          <div className="w-full max-w-2xl bg-zinc-900 rounded-lg p-8">
            <div
              data-respondi-container=""
              data-respondi-mode="regular"
              data-respondi-src="https://form.respondi.app/kPZ73POt"
              data-respondi-width="100%"
              data-respondi-height="600px"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;