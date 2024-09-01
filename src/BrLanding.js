import React from 'react';
import { IceCream, Star, Truck, ShoppingBag, Smartphone, Tag } from 'lucide-react';
import blueIce from './images/blueIce.webp'
import BrLogo from "./images/brlogo.png"
import pinkIce from './images/pinkIce.jpeg'
import pistaIce from './images/pistaImg.webp'
import androidImg from './images/android.avif'
const BrLanding = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-[#2463EB] to-[#C65BCF] overflow-x-clip">
      <header className="bg-blue-600 text-white p-4 flex justify-center">

        <img src={BrLogo} alt="brlogo"height="auto" width="120px" className='flex rounded-xl'></img>
        {/* <h1 className="text-3xl font-bold text-center">Baskin Robbins</h1> */}
      </header>
      
      <main className="container mx-auto px-4 py-8 ">
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-pink-300 ">Welcome to Flavor Paradise!</h2>
          <p className="text-lg text-white">Indulge in our world-famous flavors and exciting new offers!</p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FeatureCard 
            icon={<IceCream className="w-12 h-12 text-pink-500" />}
            title="31 Flavors and More"
            description="Explore our iconic selection, including exclusive online flavors!"
          />
          <FeatureCard 
            icon={<ShoppingBag className="w-12 h-12 text-blue-500" />}
            title="Convenient Take Away"
            description="Order ahead and pick up your favorites at your nearest store."
          />
          <FeatureCard 
            icon={<Tag className="w-12 h-12 text-green-500" />}
            title="Exclusive Online Offers"
            description="Enjoy special discounts and promotions available only on our website and app!"
          />
        </section>

        <section className="bg-pink-100 p-8 rounded-lg shadow-md mb-12" >
            <div className='flex flex-row gap-[50px] justify-center'>

            <div className=' '>
                <img className="rounded-lg" src={androidImg} width="250px" height="50px" alt="Raspberry blast"></img>

                </div>

<div className='flex flex-col '>
<h3 className="text-xl font-semibold mb-4 text-center text-blue-600">Download Our Mobile App</h3>
          <p className="text-gray-700 text-center mb-6 max-w-[250px]">Get the full Baskin Robbins experience on your phone. Order, earn rewards, and discover new flavors!</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded-full flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              App Store
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              Google Play
            </button>
          </div>
</div>
            </div>
        
         
        </section>
        
        <section className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-blue">New Online Exclusive Flavors</h3>
          <p className="text-white mb-6">Try our latest creations, available only for online orders!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg">
                <div className='flex justify-center '>
                <img className="rounded-full" src={blueIce} width="100px" height="50px" alt="Raspberry blast"></img>

                </div>
              <h4 className="font-semibold text-blue-600">Blue Raspberry Blast</h4>
              <p className="text-sm text-gray-600">A refreshing twist on a classic flavor</p>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg">
            <div className='flex justify-center '>
                <img className="rounded-full" src={pinkIce} width="100px" height="30px" alt="Raspberry blast"></img>

                </div>
              <h4 className="font-semibold text-pink-600">Strawberry Cheesecake Supreme</h4>
              <p className="text-sm text-gray-600">Creamy cheesecake with real strawberry swirls</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg">
            <div className='flex justify-center '>
                <img className="rounded-full" src={pistaIce} width="100px" height="30px" alt="Raspberry blast"></img>

                </div>
              <h4 className="font-semibold text-purple-600">Pistachio Dream</h4>
              <p className="text-sm text-gray-600">A soothing blend of floral and sweet</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-blue-600 text-white p-4 mt-12">
        <p className="text-center">&copy; 2024 Baskin Robbins. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-pink-200">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-center text-blue-600">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default BrLanding;