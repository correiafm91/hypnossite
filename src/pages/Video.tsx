import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Video = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    // Add Respondi form script
    const script = document.createElement('script');
    script.async = true;
    script.id = 'respondi_src';
    script.src = 'https://embed.respondi.app/embed.js';
    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <Link to="/" className="inline-block mb-8">
        <ArrowLeft className="w-8 h-8 icon-link" />
      </Link>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl text-center mb-8 animate-fade-up">
          Pegue seu café e aperte o play no video
        </h1>
        
        <div className="aspect-video w-full bg-gray-900 rounded-lg animate-scale-up mb-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/go0aOyHOvjI"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {!showForm ? (
          <Button 
            onClick={handleShowForm}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg mx-auto block"
          >
            Negócio fechado
          </Button>
        ) : (
          <div className="w-full animate-fade-up">
            <div
              data-respondi-container=""
              data-respondi-mode="regular"
              data-respondi-src="https://form.respondi.app/kPZ73POt"
              data-respondi-width="100%"
              data-respondi-height="600px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Video;