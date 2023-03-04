import React from "react";

function OwningNovel() {
  return (
    <div className="lg:max-w-4xl w-[90%] mx-auto my-14">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-project_orange to-project_orange/30 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-7 py-6 bg-project_black_shade ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
          <div className="space-y-3 lg:max-w-2xl w-full mx-auto ">
            <p className="text-project_white/50 leading-6 text-center">
             If you are interested in owning the complete rights of these novels and game design, click below
            </p>
            <div className="flex justify-center items-center flex-col space-y-3 p-3 bg-project_black rounded-md">
                <h1 className="lg:text-2xl text-project_white font-extrabold">Current highest bid</h1>
                <div className="flex justify-center items-baseline">
                   <span className="mr-2 text-5xl font-bold text-project_white">$870K</span>
                  <span className="text-gray-500 dark:text-gray-400">USD</span>
                 </div>
              </div>
            <div>
              
              <div className="flex items-center justify-center">
                 <a
              href="mailto:luisfelipejimenezroldan@gmail.com"
              className="block text-project_orange group-hover:text-project_orange/90 transition duration-200 mt-3 bg"
              target="_blank"
            >
              Contact Luis Jiménez  →
            </a>
             </div>
          
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default OwningNovel;
