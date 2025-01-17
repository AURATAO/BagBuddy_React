

const HamburgerMenu = ({isOpen})=>{

    return(
        <div id="hamBackdrop"   className={` bg-white bg-opacity-0 z-50 w-full ${isOpen ? "block" : "hidden" }`}>
         <div className="w-full p-6 bg-desktop"  >
           <ul className="py-8 sm:flex sm:flex-col sm:justify-center sm:items-center">
            <li className="mb-8">
                <a href="#" className="text-darkgray-3 hover:text-primary-6">Pre-made Pack List</a>
               </li>
            <li className="mb-8">
                <a href="#" className="mb-8 text-darkgray-3 hover:text-primary-6">Getaway Ideas</a>
            </li>
            
            <li className="mb-8">
                <a href="#" className="mb-8 text-darkgray-3 hover:text-primary-6">Custom Travel Kit</a>
            </li>
            
            <li className="mb-8">
                <a href="#" className="mb-8 text-darkgray-3 hover:text-primary-6">Regional settings</a>
            </li>
            </ul>
        <div className="my-8 w-full sm:flex sm:flex-col sm:justify-center sm:items-center" >
        <button className="sm-btn-secondary w-full mb-6 text-base hover:bg-primary-6 hover:text-white sm:w-1/2">
        <a href="#">Sign up</a>
      </button>
      <button
      className="sm-btn-secondary w-full text-base hover:bg-primary-6 hover:text-white sm:w-1/2">
        <a href="#">Login</a>
      </button>
    </div>
  </div>
</div>

    )
}

export default HamburgerMenu;