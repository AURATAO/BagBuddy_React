
const Premade = ()=> {

    return (
          <div className="m-auto text-center py-8">
          <div className="md:flex md:justify-between md:items-center md:gap-10">
            <img
              src="./images/PackList.png"
              alt="packlist"
              className="hidden md:flex md:w-1/2"
            />
            <div
              className="text-center flex flex-col justify-center md:text-left md:justify-start"
            >
              <h2 className="text-darkgray-5 pb-2">
                Ready-Made Lists for Hassle-Free Packing!
              </h2>
              <p className="darkgray-3 pb-6 mx-3">
                Download ready-made packing lists for different types of trips
                as PDF. Log in for a personalized packing experience and create
                your own custom lists!
              </p>
              <img
                src="./images/PackList.png"
                alt="packlist"
                className="md:hidden"
              />
              <div className="flex justify-center md:justify-start md:lHead">
                <button
                  id="PremadeListdropDownBtn"
                  className="releative sm-btn-primary flex justify-between items-center gap-3 hover:bg-primary-5"
                >
                  Get The Pack List
                  <img
                    src="./images/icon/whiteArrow.png"
                    alt="arrow-icon"
                  />
                </button>

                <div
                  id="premadeListMenu"
                  className="hidden absolute border border-lightgray-4 rounded-2xl bg-white"
                >
                  <div className="p-4 text-start">
                    <a
                      href="#"
                      className="block text-lightgray-4 text-base py-2 hover:text-primary-6"
                      >Download Sleepover Packlist</a>
                    <a
                      href="#"
                      className="block text-lightgray-4 text-base py-2 hover:text-primary-6"
                      >Download Beach vacation Packlist</a >
                    <a
                      href="#"
                      className="block text-lightgray-4 text-base py-2 hover:text-primary-6"
                      >Download Business Packlist</a>
                    <a
                      href="#"
                      className="block text-lightgray-4 text-base py-2 hover:text-primary-6"
                      >Download Camping Packlist</a >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}


export default Premade;