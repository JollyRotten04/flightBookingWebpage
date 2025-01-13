import '../App.css'
import backgroundImage from '../assets/backgroundImage.png';
import imageDestinations3 from '../assets/imageDestination3.png';

function HomeMain(){
    return(
        <>
             <style>
                {`
                    .text-2xs {
                        font-size: 0.625rem; /* 10px */
                    }

                    .text-3xs {
                        font-size: 0.5rem; /* 10px */
                    }
                `}
            </style>
            
            {/* First Container */}
            <div id="contentContainer" className="flex flex-col h-full gap-6">

                <div id="wrapperContainer" className="relative">

                    {/* Cover Image */}
                    <img src={backgroundImage} className="w-full h-full" alt="" />

                    <p id="mainLabel" className="absolute inset-y-1/2 left-0 right-0 mx-auto text-white text-lg font-sans">We all have the right to travel</p>

                    {/* Flight Booking Option Container  */}
                    <div id="flightBookingOptionContainer" className="absolute p-2 left-0 right-0 gap-2 mx-auto bottom-0 h-fit w-11/12 bg-slate-50 rounded-2xl opacity-75 shadow-xl flex flex-col" style={{ bottom: '-2rem', boxSizing: 'border-box'}}>

                        {/* Top Container */}
                        <div id="topContainer" className="w-full h-3/5 flex justify-between">

                            {/* Origin Dropdown and Label Container */}
                            <div id="originContainer" className="flex flex-col w-24">

                                {/* Origin Label */}
                                <p id="originLabel" className="text-2xs font-semibold font-sans">Origin:</p>

                                {/* Origin Dropdown */}
                                <button id="originDropdownButton" data-dropdown-toggle="originDropdown" className="justify-between text-black bg-white hover:bg-white w-full h-full focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-2xs px-2 py-1 text-center inline-flex items-center dark:bg-slate-100 dark:hover:bg-slate-100 dark:focus:ring-slate-100" type="button">Sample 1 
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                <div id="originDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sample 2</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sample 3</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sample 4</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sample 5</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Destination Container */}
                            <div id="destinationContainer" className="flex flex-col w-24">

                                {/* Origin Label */}
                                <p id="destinationLabel" className="text-2xs font-semibold font-sans">Destination:</p>

                                {/* Origin Dropdown */}
                                <button id="destinationDropdownButton" data-dropdown-toggle="destinationDropdown" className="justify-between text-black bg-white hover:bg-white w-full h-full focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-2xs px-2 py-1 text-center inline-flex items-center dark:bg-slate-100 dark:hover:bg-slate-100 dark:focus:ring-slate-100" type="button">Sample 1 
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                <div id="destinationDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sample 2</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sample 3</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sample 4</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sample 5</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Trip Type Container */}
                            <div id="tripTypeContainer" className="flex flex-col w-24">

                                {/* Trip Type Label */}
                                <p id="triptypeLabel" className="text-2xs font-semibold font-sans">Trip Type:</p>

                                {/* Trip Type Dropdown */}
                                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="justify-between text-black bg-white hover:bg-white w-full h-full focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-2xs px-2 py-1 text-center inline-flex items-center dark:bg-slate-100 dark:hover:bg-slate-100 dark:focus:ring-slate-100" type="button">Select Type
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Round Trip</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">One Way</a>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Container */}
                        <div className="w-full h-full" id="bottomContainer">
                            <button id="searchFlightButton" className="text-xs bg-orange-500 text-white font-bold p-1">Search Flight</button>
                        </div>
                    </div>
                </div>

                {/* Scrollable Container */}
                <div id="scrollableContainer" className="overflow-scroll h-full px-4 py-4 font-sans" style={{boxSizing: 'border-box'}}>

                    {/* Hottest Topics */}
                    <div id="hottestTopicsContainer" className="h-full flex flex-col">
                        <p id="hottestDestinationsLabel" className="text-md font-extrabold w-fit text-white">Hottest Destinations</p>

                        {/* Choices Container */}
                        <div id="choicesContainer" className="flex-1 pb-16 flex flex-col gap-4" style={{boxSizing: 'border-box'}}>

                            {/* Top Container */}
                            <div id="topContainer" className="h-1/2 flex gap-2">

                                {/* Left Container */}
                                <div id="leftContainer" className="w-1/2 h-full">
                                    <img src={imageDestinations3} className="h-full w-full object-cover rounded-2xl" alt="" />
                                </div>

                                {/* Right Container */}
                                <div id="rightContainer" className="flex-1 h-full w-full flex flex-col gap-2">

                                    {/* Top Container */}
                                    <div id="topContainer" className="h-1/2">
                                        <img src={backgroundImage} className="h-full w-full object-cover rounded-xl" alt="" />
                                    </div>

                                    {/* Bottom Container Container */}
                                    <div id="bottomContainer" className="h-1/2 flex gap-2">
                                    
                                        <div id="leftContainer">
                                            <img src={backgroundImage} className="h-full object-cover rounded-xl" alt="" />
                                        </div>

                                        <div id="rightContainer">
                                            <img src={backgroundImage} className="h-full object-cover rounded-xl" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Container */}
                            <div id="bottomContainer" className="h-1/2">
                                <img src={backgroundImage} className="h-full w-full object-cover rounded-2xl" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeMain