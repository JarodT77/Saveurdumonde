import React from "react";

function Header() {
      return (
        <header className="relative bg-[url('/images/head.jpeg')] bg-cover bg-center h-64 lg:h-100">
        {/* Arrière-plan semi-transparent pour la nav */}
        <div className="absolute inset-0 h-24 bg-black opacity-50"></div>
      
        {/* Navigation */}
        <nav className="relative flex justify-center items-center h-24">
          <img src="/images/logo.png" alt="logo" className="w-20 h-20 lg:ml-16" />
            <ul className="hidden md:flex flex-row gap-12 ml-auto mr-16">
              <li className="text-orange-600 text-lg">Acceuil</li>
              <li className="text-orange-600 text-lg">Menu</li>
              <li className="text-orange-600 text-lg">Restaurant</li>
              <li className="text-orange-600 text-lg">Reservation</li>
            </ul>
        </nav>
        <div className="pt-10 flex flex-col gap-4 lg:pt-42">
        <button className="bg-orange-600 px-4 py-2 mx-32 text-white text-xs font-glegoo rounded-lg lg:mx-150 lg:text-lg">Decouvir la carte</button>
        <button className="bg-orange-600 px-4 py-2 mx-32 text-white text-xs font-glegoo rounded-lg lg:mx-150 lg:text-lg">Reservation</button>
        </div>   
      </header>
      );
}

export default Header;
