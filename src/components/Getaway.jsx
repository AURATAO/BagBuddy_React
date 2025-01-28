const Getaway = ()=>{
    return (
        <>
         <section className="text-center">
          <div className="mx-3 py-10">
            <h2 className="pb-2 color">Inspiration for future getaways</h2>
            <p >
              Discover ideal travel destinations based on current weather
              trends. Our smart analysis, powered by weather data, suggests the
              best spots for your next adventure. Plus, each recommendation
              comes with a ready-made packing list to ensure you're perfectly
              prepared!
            </p>
          </div>

          <div className="pt-6 overflow-x-hidden ms-3 lg:hidden">
            <ul className="flex justify-start items-center gap-4 whitespace-nowrap">
              <li>
                <a
                  href="#"
                  className="body4 text-darkgray-1 font-bold hover:text-primary-6"
                >
                  Seasonal</a>
              </li>
              <li>
                <a
                  href="#"
                  className="body4 text-darkgray-1 font-bold hover:text-primary-6"
                  >Activity-Based</a>
              </li>
              <li>
                <a
                  href="#"
                  className="body4 text-darkgray-1 font-bold hover:text-primary-6"
                  >Special Occasions</a >
              </li>
              <li>
                <a
                  href="#"
                  className="body4 text-darkgray-1 font-bold hover:text-primary-6"
                  >Unique Experiences</a>
              </li>
            </ul>
          </div>
          {/* md button set*/}
          <div
            className="sm-btn-secondary text-xl border-none px-5 py-4 mb-24 gap-5 d-flex justify-between items-center w-9/12 h-16 m-auto drop-shadow-normal hidden lg:flex"
          >
            <button
              className="text-xl font-bold text-darkgray-1 focus:sm-btn-primary focus:text-lg focus:px-2 focus:py-1"
            >
              Seasonal
            </button>
            <button
              className="text-xl font-bold text-darkgray-1 focus:sm-btn-primary focus:text-lg focus:px-2 focus:py-1"
            >
              Activity-Based
            </button>
            <button
              className="text-xl font-bold text-darkgray-1 focus:sm-btn-primary focus:text-lg focus:px-2 focus:py-1"
            >
              Special Occasions
            </button>
            <button
              className="text-xl font-bold text-darkgray-1 focus:sm-btn-primary focus:text-lg focus:px-2 focus:py-1"
            >
              Unique Experiences
            </button>
          </div>
          {/* Location cards */}
          <div
            className="px-3  flex justify-start items-center gap-1 overflow-x-hidden lg:hidden"
          >
            <div className="card p-6 w-[312px] whitespace-nowrap my-8">
              <img
                src="./images/card/london.png"
                alt="london"
                className="w-full h-40 object-cover"
              />
              <div
                className="flex justify-between items-center text-left pt-4 pb-2"
              >
                <h4>
                  Lodnon, <br />
                  UK
                </h4>
                <h1 className="text-primary-6">23°</h1>
              </div>
              <p className="body4 text-darkgray-3 text-left text-wrap pb-4">
                Partly sunny and beautiful in the next month
              </p>
              <hr className="border-t-1 border-lightgray-3 pb-4" />
              <div className="flex justify-between items-center pb-4">
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">RealFeel®</h5>
                  <h5 className="font-normal text-primary-6">20°</h5>
                </div>
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Max UV Index</h5>
                  <h5 className="font-normal text-primary-6">6 High</h5>
                </div>
              </div>
              <div className="flex justify-between items-center pb-4">
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Air Quality</h5>
                  <h5 className="font-normal text-primary-6">Fair</h5>
                </div>
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Humidity</h5>
                  <h5 className="font-normal text-primary-6">68°</h5>
                </div>
              </div>
            </div>
            <div className="card p-6 w-80 whitespace-nowrap my-8">
              <img
                src="./images/card/lisbon.png"
                alt="lisbon"
                className="w-full h-40 object-cover"
              />
              <div
                className="flex justify-between items-center text-left pt-4 pb-2"
              >
                <h4>
                  Lisbon,
                  <br />
                  Portugal
                </h4>
                <h1 className="text-primary-6">20°</h1>
              </div>
              <p className="body4 text-darkgray-3 text-left text-wrap pb-4">
                Pleasant with sunshine and patchy clouds
              </p>
              <hr className="border-t-1 border-lightgray-3 pb-4" />
              <div className="flex justify-between items-center pb-4">
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">RealFeel®</h5>
                  <h5 className="font-normal text-primary-6">19°</h5>
                </div>
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Max UV Index</h5>
                  <h5 className="font-normal text-primary-6">2 Low</h5>
                </div>
              </div>
              <div className="flex justify-between items-center pb-4">
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Air Quality</h5>
                  <h5 className="font-normal text-primary-6">Fair</h5>
                </div>
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Humidity</h5>
                  <h5 className="font-normal text-primary-6">62°</h5>
                </div>
              </div>
            </div>
            <div className="card w-80 whitespace-nowrap p-6 my-8">
              <img
                src="./images/card/lisbon.png"
                alt="lisbon"
                className="w-full h-40 object-cover"
              />
              <div
                className="flex justify-between items-center text-left pt-4 pb-2"
              >
                <h4>
                  Bari,
                  <br />
                  Italy
                </h4>
                <h1 className="text-primary-6">30°</h1>
              </div>
              <p className="body4 text-darkgray-3 text-left text-wrap pb-4">
                Partly sunny and beautiful in the next month
              </p>
              <hr className="border-t-1 border-lightgray-3 pb-4" />
              <div className="flex justify-between items-center pb-4">
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">RealFeel®</h5>
                  <h5 className="font-normal text-primary-6">29°</h5>
                </div>
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Max UV Index</h5>
                  <h5 className="font-normal text-primary-6">9 Very High</h5>
                </div>
              </div>
              <div className="flex justify-between items-center pb-4">
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Air Quality</h5>
                  <h5 className="font-normal text-primary-6">Fair</h5>
                </div>
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Humidity</h5>
                  <h5 className="font-normal text-primary-6">70°</h5>
                </div>
              </div>
            </div>
            <div className="card w-80 whitespace-nowrap p-6 my-8">
              <img
                src="./images/card/lisbon.png"
                alt="lisbon"
                className="w-full h-40 object-cover"
              />
              <div
                className="flex justify-between items-center text-left pt-4 pb-2"
              >
                <h4>
                  Gold Coast,
                  <br />
                  Australia
                </h4>
                <h1 className="text-primary-6">20°</h1>
              </div>
              <p className="body4 text-darkgray-3 text-left text-wrap pb-4">
                Partly cloudy
              </p>
              <hr className="border-t-1 border-lightgray-3 pb-4" />
              <div className="flex justify-between items-center pb-4">
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">RealFeel®</h5>
                  <h5 className="font-normal text-primary-6">19°</h5>
                </div>
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Max UV Index</h5>
                  <h5 className="font-normal text-primary-6">3 moderate</h5>
                </div>
              </div>
              <div className="flex justify-between items-center pb-4">
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Air Quality</h5>
                  <h5 className="font-normal text-primary-6">Fair</h5>
                </div>
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Humidity</h5>
                  <h5 className="font-normal text-primary-6">65°</h5>
                </div>
              </div>
            </div>
            <div className="card  w-80 whitespace-nowrap p-6 my-8">
              <img
                src="./images/card/lisbon.png"
                alt="lisbon"
                className="w-full h-40 object-cover"
              />
              <div
                className="flex justify-between items-center text-left pt-4 pb-2"
              >
                <h4>
                  Copenhagen,
                  <br />
                  Danmark
                </h4>
                <h1 className="text-primary-6">17°</h1>
              </div>
              <p className="body4 text-darkgray-3 text-left text-wrap pb-4">
                Pleasant with sunshine and patchy clouds
              </p>
              <hr className="border-t-1 border-lightgray-3 pb-4" />
              <div className="flex justify-between items-center pb-4">
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">RealFeel®</h5>
                  <h5 className="font-normal text-primary-6">18°</h5>
                </div>
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Max UV Index</h5>
                  <h5 className="font-normal text-primary-6">3 moderate</h5>
                </div>
              </div>
              <div className="flex justify-between items-center pb-4">
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Air Quality</h5>
                  <h5 className="font-normal text-primary-6">Fair</h5>
                </div>
                <div className="text-left w-1/2">
                  <h5 className="font-normal text-darkgray-1 pb-1">Humidity</h5>
                  <h5 className="font-normal text-primary-6">67°</h5>
                </div>
              </div>
            </div>
          </div>
          {/*flip location Cards*/}
          <div
            className="hidden lg:relative lg:flex lg:justify-center lg:space-x-[-30px] "
          >
            {/*card 1*/}
            <div
              className="drop-shadow-normal w-[312px] h-[480px] rounded-32lg locationCard hover:z-30 overflow-hidden z-10"
            >
             {/* this is filp container */}
              <div className="w-full h-full relative cardContainer">
                {/* front */}
                <div className="w-full h-full absolute front">
                  <img
                    src="./images/card/london.png"
                    alt="london-image"
                    className="h-full w-full object-fill"
                  />
                </div>
                {/* back */}
                <div className="bg-white w-full h-full absolute back">
                  <img
                    src="./images/card/london.png"
                    alt="london"
                    className="w-full h-40 object-cover"
                  />
                  <div className="pe-2 ps-2">
                  <div
                    className="flex justify-between items-center text-left pt-4 pb-2"
                  >
                    <h4>
                      Lodnon, <br />
                      UK
                    </h4>
                    <h1 className="text-primary-6">23°</h1>
                  </div>
                  <p className="body4 text-darkgray-3 text-left text-wrap pb-4">
                    Partly sunny and beautiful in the next month
                  </p>
                  <hr className="border-t-1 border-lightgray-3 pb-4" />
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        RealFeel®
                      </h5>
                      <h5 className="font-normal text-primary-6">20°</h5>
                    </div>
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        Max UV Index
                      </h5>
                      <h5 className="font-normal text-primary-6">6 High</h5>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        Air Quality
                      </h5>
                      <h5 className="font-normal text-primary-6">Fair</h5>
                    </div>
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">Humidity</h5>
                      <h5 className="font-normal text-primary-6">68°</h5>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            {/*}card 2*/}
            <div
              className="drop-shadow-normal w-[312px] h-[480px] rounded-32lg locationCard hover:z-40 overflow-hidden mt-12 z-20"
            >
              {/*this is filp container*/}
              <div className="w-full h-full relative cardContainer">
               {/* front*/}
                <div className="w-full h-full absolute front">
                  <img
                    src="./images/card/tom-byrom-hgFX7SydvFk-unsplash 1.png"
                    alt="Lisbon-image"
                    className="h-full w-full object-fill"
                  />
                </div>
                {/*back*/}
                <div className="bg-white w-full h-full absolute back">
                  <img
                    src="./images/card/tom-byrom-hgFX7SydvFk-unsplash 1.png"
                    alt="Lisbon"
                    className="w-full h-40 object-cover"
                  />
                  <div className="pe-2 ps-2">

                  <div
                    className="flex justify-between items-center text-left pt-4 pb-2"
                  >
                    <h4>
                      Lisbon, <br />
                      Portugal
                    </h4>
                    <h1 className="text-primary-6">20°</h1>
                  </div>
                  <p className="body4 text-darkgray-3 text-left text-wrap pb-4">
                    Partly sunny and beautiful in the next month
                  </p>
                  <hr className="border-t-1 border-lightgray-3 pb-4" />
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        RealFeel®
                      </h5>
                      <h5 className="font-normal text-primary-6">19°</h5>
                    </div>
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        Max UV Index
                      </h5>
                      <h5 className="font-normal text-primary-6">2 Low</h5>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        Air Quality
                      </h5>
                      <h5 className="font-normal text-primary-6">Fair</h5>
                    </div>
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">Humidity</h5>
                      <h5 className="font-normal text-primary-6">62°</h5>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            {/*card 3*/}
            <div
              className="drop-shadow-normal w-[312px] h-[480px] rounded-32lg locationCard hover:z-40 overflow-hidden z-30"
            >
              {/*this is filp container*/}
              <div className="w-full h-full relative cardContainer">
                {/*front*/}
                <div className="w-full h-full absolute front">
                  <img
                    src="./images/card/lisbon.png"
                    alt="london-image"
                    className="h-full w-full object-fill"
                  />
                </div>
                {/*back*/}
                <div className="bg-white  w-full h-full absolute back">
                  <img
                    src="./images/card/lisbon.png"
                    alt="london"
                    className="w-full h-40 object-cover"
                  />
                  <div className="pe-2 ps-2">
                  <div
                    className="flex justify-between items-center text-left pt-4 pb-2"
                  >
                    <h4>
                      Bari, <br />
                      Italy
                    </h4>
                    <h1 className="text-primary-6">30°</h1>
                  </div>
                  <p className="body4 text-darkgray-3 text-left text-wrap pb-4">
                    Partly sunny and beautiful in the next month
                  </p>
                  <hr className="border-t-1 border-lightgray-3 pb-4" />
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        RealFeel®
                      </h5>
                      <h5 className="font-normal text-primary-6">29°</h5>
                    </div>
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        Max UV Index
                      </h5>
                      <h5 className="font-normal text-primary-6">9 Very High</h5>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        Air Quality
                      </h5>
                      <h5 className="font-normal text-primary-6">Fair</h5>
                    </div>
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">Humidity</h5>
                      <h5 className="font-normal text-primary-6">70°</h5>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            {/*card 4*/}
            <div
              className="drop-shadow-normal w-[312px] h-[480px] rounded-32lg locationCard hover:z-40 overflow-hidden mt-12 z-20"
            >
              {/*this is filp container */}
              <div className="w-full h-full relative cardContainer">
                {/*front*/}
                <div className="w-full h-full absolute front">
                  <img
                    src="./images/card/copenhagen.png"
                    alt="london-image"
                    className="h-full w-full object-fill"
                  />
                </div>
               {/*back*/}
                <div className="bg-white w-full h-full absolute back">
                  <img
                    src="./images/card/copenhagen.png"
                    alt="london"
                    className="w-full h-40 object-cover"
                  />
                  <div className="pe-2 ps-2">

                  <div
                    className="flex justify-between items-center text-left pt-4 pb-2"
                  >
                    <h4>
                      Copenhagen,<br />
                      Danmark
                    </h4>
                    <h1 className="text-primary-6">17°</h1>
                  </div>
                  <p className="body4 text-darkgray-3 text-left text-wrap pb-4">
                    Pleasant with sunshine and patchy clouds
                  </p>
                  <hr className="border-t-1 border-lightgray-3 pb-4" />
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        RealFeel®
                      </h5>
                      <h5 className="font-normal text-primary-6">20°</h5>
                    </div>
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        Max UV Index
                      </h5>
                      <h5 className="font-normal text-primary-6">3 moderate</h5>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        Air Quality
                      </h5>
                      <h5 className="font-normal text-primary-6">Fair</h5>
                    </div>
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">Humidity</h5>
                      <h5 className="font-normal text-primary-6">67°</h5>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            {/* card 5*/}
            <div
              className="drop-shadow-normal w-[312px] h-[480px] rounded-32lg locationCard hover:z-40 overflow-hidden x-10"
            >
             {/* this is filp container */}
              <div className="w-full h-full relative cardContainer">
                {/* front */}
                <div className="w-full h-full absolute front">
                  <img
                    src="./images/card/austria.png"
                    alt="london-image"
                    className="h-full w-full object-fill"
                  />
                </div>
               {/* back */}
                <div className="bg-white  w-full h-full absolute back">
                  <img
                    src="./images/card/austria.png"
                    alt="london"
                    className="w-full h-40 object-cover"
                  />
                  <div className="pe-2 ps-2">
                 <div
                    className="flex justify-between items-center text-left pt-4 pb-2"
                  >
                    <h4>
                      Gold Coast,<br />
                      Australia
                    </h4>
                    <h1 className="text-primary-6">20°</h1>
                  </div>
                  <p className="body4 text-darkgray-3 text-left text-wrap pb-4">
                    Partly cloudy
                  </p>
                  <hr className="border-t-1 border-lightgray-3 pb-4" />
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        RealFeel®
                       </h5>
                      <h5 className="font-normal text-primary-6">19°</h5>
                    </div>
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        Max UV Index
                      </h5>
                      <h5 className="font-normal text-primary-6">3 moderate</h5>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4">
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">
                        Air Quality
                      </h5>
                      <h5 className="font-normal text-primary-6">Fair</h5>
                    </div>
                    <div className="text-left w-1/2">
                      <h5 className="font-normal text-darkgray-1 pb-1">Humidity</h5>
                      <h5 className="font-normal text-primary-6">65°</h5>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Getaway;