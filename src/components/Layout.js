import React from 'react';
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className='flex'>
            <Navbar />
            <main className='flex-1'>
                <div className='bg-gray-200 py-4 px-2'>
                    <img className="w-10 h-10 rounded-full ml-auto"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV7Xt_RaFvvC30ynkal2R7afyVTjOYx2wll9HSyygWuPMBGiPhH9KKpALwhEmBxhDmGAw&usqp=CAU"
                         alt="Ahmed Kamel"/>
                </div>
                <div className="px-6 my-6">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;