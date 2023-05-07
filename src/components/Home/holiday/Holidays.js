import React from 'react'
import HolidayCard from './HolidayCard'

const cards = [
  {
    head: "Maharajas' Express",
    detail: "Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.",
    img: "https://www.irctc.co.in/nget/assets/images/exterior.jpg"
  },
  {
    head: "International Packages",
    detail: "Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.",
    img: "https://www.irctc.co.in/nget/assets/images/Thailand.jpg"
  },
  {
    head: "Domestic Air Packages",
    detail: "Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!",
    img: "https://www.irctc.co.in/nget/assets/images/Kashmir.jpg"
  },
  {
    head: "Bharat Gaurav Tourist Train",
    detail: "IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.",
    img: "https://www.irctc.co.in/nget/assets/images/Bharat_Gaurav.jpg"
  }
  , {
    head: "Rail Tour Packages",
    detail: "IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.",
    img: "https://www.irctc.co.in/nget/assets/images/Manali.jpg"
  },

]
export default function Holidays() {
  return (
    <div >
      <div className="container-fluid p-5 d-flex flex-column justify-content-center align-items-center  bg-light " >
        <h1 className='fw-bold'>HOLIDAYS</h1>

        <div className="container d-flex flex-wrap ">
        {
          cards.map((item)=>(

          <div className="">

            <HolidayCard head={item.head} detail={item.detail} img={item.img}/>
          </div>
          ))

        }
        </div>
        <h5 className='d-flex justify-content-center '>
          <span className='font-monospace fw-bold text-decoration-underline'>ReadMore</span>
          <span class="material-symbols-outlined">arrow_forward</span>
        </h5>
      </div>
    </div>
  )
}
