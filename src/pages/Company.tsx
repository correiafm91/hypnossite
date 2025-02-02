import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Button */}
        <Button
          onClick={() => navigate(-1)}
          className="bg-transparent hover:bg-white/10 text-white"
        >
          ← Voltar
        </Button>

        {/* Logo and Title */}
        <div className="flex flex-col items-center space-y-6 animate-fade-up">
          <img
            src="/lovable-uploads/78c8de24-13be-484b-be57-a6a9a6b86afc.png"
            alt="Hypnos Logo"
            className="w-32 h-32"
          />
          <h1 className="text-3xl font-bold text-center">
            Conheça a gente e os nossos resultados
          </h1>
        </div>

        {/* Company Description */}
        <Card className="bg-black border-gray-800 animate-fade-up">
          <CardContent className="p-6 space-y-6 text-lg">
            <h2 className="text-2xl font-bold mb-4">
              HYPNOS – Textos que Transforma Palavras em Dinheiro
            </h2>
            <div className="space-y-4 text-left">
              <p>
                Toda compra começa na mente. Antes do clique, do pedido ou do
                pagamento, existe um pensamento, uma emoção, um impulso. A Hypnos
                domina essa arte.
              </p>
              <p>
                Não escrevemos textos bonitos. Criamos mensagens hipnóticas, que
                capturam atenção, quebram objeções e conduzem o público até a única
                conclusão possível: comprar de você.
              </p>
              <p>
                Nosso diferencial? Não vendemos textos soltos. Entregamos um
                sistema completo de persuasão.
              </p>
              <p>
                No nosso pacote estratégico, você recebe landing pages que
                convertem, anúncios que vendem, VSLs que prendem atenção, e-mails
                que engajam e até a bio perfeita para magnetizar seguidores certos.
                Mas não paramos por aí. Ensinamos você a usar cada peça no momento
                certo, garantindo que seu negócio continue escalando mesmo depois
                da entrega.
              </p>
              <p>
                E enquanto você aplica, nós monitoramos. Ajustamos, otimizamos e
                refinamos até sua copy atingir o nível máximo de conversão.
              </p>
              <p>
                Se sua comunicação não está imprimindo dinheiro, ela está te
                custando caro. A Hypnos resolve.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-8 animate-fade-up">
          <h2 className="text-2xl font-bold text-center">Resultados surreais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "/lovable-uploads/bdad797e-39a6-450e-8406-828d428094c7.png",
              "/lovable-uploads/7dc06793-3e7e-431a-a95f-5fc3954724aa.png",
              "/lovable-uploads/13983ebc-a0e7-4335-aa39-7f0753334c4a.png"
            ].map((img, index) => (
              <div
                key={index}
                className="relative cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Document ${index + 1}`}
                  className="w-full rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fade-up"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] rounded-lg animate-scale-up"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Company;