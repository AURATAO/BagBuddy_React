const Footer = ()=> {

    return (
    <footer className="container py-8 m-auto">
        <div className="mx-3 lg:hidden">
          <div className="w-full pb-6 lg:hidden">
            <img src="./src/assets/images/Logo.png"  alt="logo" className="w-40" />
            <p className="body3 text-darkgray-3 pt-3">
              "BagBuddy helps travelers create personalized packing lists based on
              their travel plans and preferences. "
            </p>
          </div>
          <hr className="border-t border-lightgray-3" />
          {/* Flexbox layout for links */}
          <div className="w-full py-6 lg:hidden">
            <div
              className="flex flex-col pb-6 md:flex-row items-center gap-3 md:justify-center md:w-full"
            >
              <div className="flex justify-start items-center w-full md:w-auto">
                <p className="w-full md:w-auto">
                  <a href="#" className="body3 text-darkgray-3 block">Subscription</a>
                </p>
                <p className="w-full md:w-auto">
                  <a href="#" className="body3 text-darkgray-3 block">Resources</a>
                </p>
              </div>
              <div className="flex justify-start items-center w-full md:w-auto">
                <p className="w-full md:w-auto">
                  <a href="#" className="body3 text-darkgray-3 block">Account</a>
                </p>
                <p className="w-full md:w-auto">
                  <a href="#" className="body3 text-darkgray-3 block">Privacy Policy</a>
                </p>
              </div>
            </div>
            {/* Additional information sections*/ }
            <div className="w-full">
              <div>
                <h6>Email</h6>
                <p>
                  <a href="" className="body3 text-darkgray-3">auratao.model@gmail.com</a>
                </p>
              </div>
              <div>
                <h6>Number</h6>
                <p>
                  <a href="" className="body3 text-darkgray-3">+39 3519056243</a>
                </p>
              </div>
              <div>
                <h6>GitHub</h6>
                <p>
                  <a href="" className="body3 text-darkgray-3"
                    >https://github.com/AURATAO</a>
                </p>
              </div> 
            </div>
          </div>
          {/*lg screen footer*/}
        </div>
        <div className="hidden pb-10 lg:flex">
          <div className="flex justify-between items-center w-full">
            <img src="./src/assets/images/Logo.png"alt="logo" className="w-40" />
            <ul className="flex justify-center items-center gap-8">
              <li>
                <a href="#" className="body3 text-darkgray-3 block">Subscription</a>
              </li>
              <li><a href="#" className="body3 text-darkgray-3 block">Resources</a></li>
              <li><a href="#" className="body3 text-darkgray-3 block">Account</a></li>
              <li>
                <a href="#" className="body3 text-darkgray-3 block">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="justify-between items-center w-full pb-10 hidden lg:flex">
          <p className="body3 text-darkgray-3 pt-3">
            "BagBuddy helps travelers create personalized packing lists based on their
            travel plans and preferences. "
          </p>
          <div className="flex justify-end items-center gap-8">
            <div>
              <h6>Email</h6>
              <p>
                <a href="mailto:auratao.model@gmail.com" className="body3 text-darkgray-3"
                  >auratao.model@gmail.com</a>
              </p>
            </div>
            <div>
              <h6>Number</h6>
              <p>
                <a
                  href="tel:+393519056243"
                  className="body3 text-darkgray-3 whitespace-nowrap"
                  >+39 3519056243</a>
              </p>
            </div>
            <div>
              <h6>GitHub</h6>
              <p>
                <a href="https://github.com/AURATAO" className="body3 text-darkgray-3"
                  >https://github.com/AURATAO</a>
              </p>
            </div>
          </div>
        </div>
        <hr className="border-t border-lightgray-3 mx-3" />
        <div
          className="py-6 lg:border-t lg:border-lightgray-3 lg:text-center lg:flex lg:justify-center lg:items-center"
        >
          <p className="body3 text-darkgray-3 mx-3">
            © 2024 BagBuddy. All rights reserved.
          </p>
        </div>
    </footer>
    )
};

export default Footer;