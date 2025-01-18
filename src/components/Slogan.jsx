const Slogan = () =>{
    return(
        <div
          className="flex flex-col justify-center items-center py-8 mx-3 sm:flex-row sm:justify-center gap-4"
        >
          <div
            className="flex flex-col justify-center items-center pb-12 w-full lg:items-start"
          >
            <h2 className="text-center pb-6 lg:bigHead lg:text-start">
              BagBuddy, Your Packing Pal!
            </h2>
            <button
              id="scroll-button"
              className="sm-btn-primary hover:bg-primary-5"
            >
              Create Your Own Pack List
            </button>
          </div>
          <img
            src="./src/assets/images/Hero Image.png"
            alt="image"
            className="w-full sm:w-1/2"
          />
        </div>
    )
}

export default Slogan;