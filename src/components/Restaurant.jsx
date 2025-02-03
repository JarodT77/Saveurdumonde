import React from "react";

function Restaurant() {
    return (
        <section className="relative bg-[url('/images/restaurant.jpg')] bg-cover bg-center">
            <div className="max-w-4xl mx-auto text-center pt-6 pb-6">
                <h1 className="text-4xl text-orange-600 font-inclusive-sans">
                    Notre Restaurant
                </h1>
            </div>
            <div className="grid grid-rows-2 gap-6 mx-6 text-center lg:flex lg:justify-center lg:gap-8 lg:mx-auto max-w-4xl">
                {/* Bloc 1 : Info Pratique */}
                <div className="border-3 border-orange-600 px-8 py-6 w-full rounded-lg lg:mx-0">
                    <h1 className="text-white font-glegoo font-bold text-lg">Info Pratique</h1>
                    <h2 className="text-white font-glegoo text-base mt-2">Cuisine:</h2>
                    <p className="text-white font-glegoo text-sm pb-4">Asiatique, exotique, français</p>
                    <h2 className="text-white font-glegoo text-base mt-2">Type de restaurant:</h2>
                    <p className="text-white font-glegoo text-sm pb-4">Plat à la carte, emporté, service à table</p>
                    <h2 className="text-white font-glegoo text-base mt-2">Mode de paiement:</h2>
                    <p className="text-white font-glegoo text-sm">Carte bancaire, chèque vacances, ticket restaurant, espèces</p>
                </div>
                {/* Bloc 2 : Accès */}
                <div className="border-3 border-orange-600 px-8 py-6 w-full rounded-lg lg:mx-0">
                    <h1 className="text-white font-glegoo font-bold text-lg">Accès</h1>
                    <h2 className="text-white font-glegoo text-base mt-2">Voiture:</h2>
                    <p className="text-white font-glegoo text-sm pb-4">Parking centre commercial Bay1</p>
                    <h2 className="text-white font-glegoo text-base mt-2">Transport en commun:</h2>
                    <p className="text-white font-glegoo text-sm">RER A station Torcy</p>
  </div>
</div>
<br/>

        </section>
    );
}

export default Restaurant;
