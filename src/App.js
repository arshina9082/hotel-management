import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HotelList from "./components/HotelList";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sideBar";
import axios from 'axios';


function App() {
  const hotel = [
    {
      name: "ITC Grand",
      price: 10000,
      roomsBooked: 0,
      image: "/assets/itc-chola.webp",
    },
    {
      name: "Hotel Taj",
      price: 10000,
      roomsBooked: 0,
      image: "/assets/le-meridien.webp",
    },
    {
      name: "ITC Grand",
      price: 10000,
      roomsBooked: 0,
      image: "/assets/itc-chola.webp",
    },
    {
      name: "Hotel Taj",
      price: 10000,
      roomsBooked: 0,
      image: "/assets/le-meridien.webp",
    },
    {
      name: "ITC Grand",
      price: 10000,
      roomsBooked: 0,
      image: "/assets/itc-chola.webp",
    },
    {
      name: "Hotel Taj",
      price: 10000,
      roomsBooked: 0,
      image: "/assets/le-meridien.webp",
    },
    {
      name: "ITC Grand",
      price: 10000,
      roomsBooked: 0,
      image: "/assets/itc-chola.webp",
    },
    {
      name: "Hotel Taj",
      price: 10000,
      roomsBooked: 0,
      image: "/assets/le-meridien.webp",
    },
  ];

  let [hotelList, setHotelList] = useState(hotel)
  let [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:3000/api/hotels")
      .then(res => {
        const transformeddata = res.data.map(hotel => ({
          id: hotel._id,
          name: hotel.hotel_name,
          address: hotel.address,
          timezone: hotel.timezone,
          price: 10000,
          roomsBooked: 0,
          image: hotel._id % 2 == 0 ? "/assets/le-meridien.webp" : "/assets/itc-chola.webp"
        }));
        setHotelList(transformeddata);
        console.log(res)
      }).catch(err => {
        console.log("Error in fetching hotels");
      })
  }, []);

  const incrementRoomsBooked = (index) => {
    console.log("Increment Rooms Booked Called");
    let newHotelList = [...hotelList];
    let newTotalAmount = totalAmount;

    newHotelList[index].roomsBooked += 1;
    newTotalAmount += newHotelList[index].price;

    setHotelList(newHotelList);
    setTotalAmount(newTotalAmount);
  };

  const decreamentRoomsBooked = (index) => {
    let newHotelList = [...hotelList];
    let newTotalAmount = totalAmount;

    if (newHotelList[index].roomsBooked > 0) {
      newHotelList[index].roomsBooked -= 1;
      newTotalAmount -= newHotelList[index].price;

      setHotelList(newHotelList);
      setTotalAmount(newTotalAmount);
    }
  };

  const resetData = () => {
    let newHotelList = [...hotelList];
    newHotelList.map((hotel) => (hotel.roomsBooked = 0));
    setHotelList(newHotelList);
    setTotalAmount(0);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route
          path="/home"
          element={
            <>
              <NavBar></NavBar>
              <main className="d-flex justify-content-between mx-3 flex-row w-100 screen-height">
                <span className="d-flex flex-column col-10 overflow-auto">
                  <HotelList
                    hotelList={hotelList}
                    incrementRoomsBooked={incrementRoomsBooked}
                    decreamentRoomsBooked={decreamentRoomsBooked}
                  />
                </span>
                <hr className="border  opacity-50 screen-height mb-3" />
                <Sidebar
                  className="col-2 position-sticky"
                  totalAmount={totalAmount}
                  roomCount={hotelList}
                />
              </main>
              <Footer totalAmount={totalAmount} resetData={resetData}></Footer>
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
