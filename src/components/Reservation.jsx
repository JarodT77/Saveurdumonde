import React from "react";

function Reservation() {

        return (
            <section className="bg-stone-900 pb-8">
              {/* Titre et téléphone */}
              <div className="text-center pt-6">
                <h1 className="text-orange-600 font-inclusive-sans text-4xl">Faire une <br />réservation</h1>
                <p className="text-white font-glegoo text-sm">
                  Pour réserver, appelez le restaurant au:<br />07 44 99 88 18
                </p>
              </div>
          
              {/* Conteneur principal avec flex */}
              <div className="flex flex-col mx-6 gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-16">
                
                {/* Formulaire + "Contactez-nous" dans le même bloc sur PC */}
                <div className="border-3 border-orange-600 mt-6 rounded-xl p-6 lg:w-2/3 flex lg:flex-row gap-6">
                  
                  {/* Formulaire */}
                  <form className="mt-4 flex flex-col items-center gap-6 lg:items-center">
                    <ul className="flex flex-col gap-6 w-full">
                      <li>
                        <input type="text" id="name" placeholder="Votre nom" className="font-glegoo text-white border-orange-600 border-3 rounded-xl w-82 h-10 lg:w-96" />
                      </li>
                      <li>
                        <input type="email" id="email" placeholder="Votre email" className="font-glegoo text-white border-orange-600 border-3 rounded-xl w-82 h-10 lg:w-96" />
                      </li>
                      <li>
                        <input type="text" id="message" placeholder="Votre message" className="font-glegoo text-white border-orange-600 border-3 rounded-xl w-82 h-32 lg:w-96" />
                      </li>
                    </ul>
                    <button className="font-glegoo text-white bg-orange-600 rounded-xl px-8 py-2 mb-4 w-full lg:w-96">
                      Envoyez
                    </button>
                  </form>
          
                  {/* Contactez-nous (visible seulement sur PC à l'intérieur du formulaire) */}
                  <div className="hidden lg:block text-center lg:max-w-md mx-auto lg:pt-24">
                    <h1 className="font-inclusive-sans text-orange-600 text-4xl lg:pb-4">Contactez-nous !</h1>
                    <p className="font-glegoo text-white text-sm lg:text-xl">
                      Horaire d'ouverture :<br />Mardi-Dimanche<br />12h-14h30 / 19h-22h30
                    </p>
                  </div>
          
                </div>
          
                {/* Contactez-nous (visible sur mobile, en dehors du formulaire) */}
                <div className="text-center mt-2 lg:hidden">
                  <h1 className="font-inclusive-sans text-orange-600 text-4xl lg:pb-4">Contactez-nous !</h1>
                  <p className="font-glegoo text-white text-sm lg:text-xl">
                    Horaire d'ouverture :<br />Mardi-Dimanche<br />12h-14h30 / 19h-22h30
                  </p>
                </div>
          
              </div>
            </section>
          );
          

      
}

export default Reservation;