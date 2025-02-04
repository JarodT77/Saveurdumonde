import { Link } from "react-router-dom";

function Profil() {
    return(
        <section className="relative bg-[url('/images/loc-lac.png')] bg-cover bg-center before:absolute before:inset-0 before:bg-transparent lg:before:bg-stone-900">
  {/* Overlay noir pour assombrir l'image de fond */}
 

  {/* Titre affiché seulement sur mobile, en dehors de la div */}
  <div className="relative pt-4 text-center text-orange-600 font-inclusive-sans text-4xl lg:hidden">
    <h1>Restaurant<br/>Saveur Du Monde</h1>
    <hr className="border-t-2 border-white w-20 my-2 mx-auto pb-8" />
  </div>

  {/* Conteneur principal (Mobile : Seulement paragraphe / Grand écran : Grid avec image et texte) */}
  <div className="mx-8 rounded-lg p-8 bg-stone-900 opacity-80 lg:bg-transparent lg:opacity-100 lg:grid lg:grid-cols-2 relative">
    
    {/* Colonne de gauche : Image (Affichée seulement sur grand écran) */}
    <div className="hidden lg:flex flex-col justify-center items-center">
      <img src="/images/loc-lac.png" className="w-lg rounded-2xl" />
    </div>

    {/* Colonne de droite : Titre + Texte (Affiché ensemble uniquement sur grand écran) */}
    <div className="flex flex-col justify-center">
      {/* Titre visible uniquement sur grand écran */}
      <h1 className="hidden lg:block text-orange-600 font-inclusive-sans text-4xl text-center">
        Restaurant<br/>Saveur Du Monde
        <hr className="border-t-2 border-white w-20 my-2 mx-auto pb-8 mt-8" />
      </h1>
    


      {/* Paragraphe (Toujours visible, sur mobile dans bg-stone-900) */}
      <p className="relative text-white text-center px-8 py-8 font-glegoo lg:text-2xl">
        Découvrez une cuisine aux mille saveurs dans notre restaurant situé à Torcy Bay1. 
        Apprécié pour son ambiance et la qualité de ses plats, on vous propose des incontournables 
        comme le Poulet braisé à l’antillaise, les Nems au poulet croustillants, ou encore 
        le Saraman d’Angkor et l’Amok, véritables trésors de la gastronomie cambodgienne.
      </p>
      <div className="flex justify-center pt-6 lg:pt-8">
      <Link to="/menu">
            <button className="relative bg-orange-600 text-white font-glegoo p-4 rounded-2xl lg:px-14 lg:text-2xl">Decouvrir la carte</button>
      </Link>
            </div>

    </div>
  </div>

  {/* Trait sous la section */}
  <hr className="border-t-2 border-white w-20 mx-auto mt-8 pb-8" />
</section>

    );
}

export default Profil;