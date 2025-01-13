import '../App.css'

function Header() {

  return (
    <>
      <div className="bg-white w-full h-16 landscape:rounded-t-3xl shadow-lg p-2 px-6 flex justify-between" style={{boxSizing: 'border-box'}}>

        {/* Logo and Name Container */}
        <div id="logoContainer" className="content-center">
          <h1 className="text-sm h-fit">Logo & Name</h1>
        </div>

        {/* Other Options Burger Icon, only shows when portrait in small screens */}
        <div id="hamburgerIconContainer" className="content-center block portrait:lg:hidden portrait:md:hidden landscape:hidden">
          <div id="hamburgerIcon" className="h-fit text-3xl">☰</div>
        </div>

        {/* If Device is landscape, or portrait with medium to large screen size, show these instead */}
        <div id="optionsContainer" className="flex gap-8 items-center hidden portrait:lg:flex portrait:md:flex landscape:flex">
          <h1 className="text-lg h-fit">Book</h1>
          <h1 className="text-lg h-fit">Destinations</h1>
          <h1 className="text-lg h-fit">Promotions</h1>
          <h1 className="text-lg h-fit">Articles</h1>
          <h1 className="text-lg h-fit">Login</h1>
        </div>
      </div>
    </>
  )
}

export default Header