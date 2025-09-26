import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HotelList from "./components/HotelList";
import { useState } from "react";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sideBar";

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

  let [hotelList, setHotelList] = useState(hotel);
  let [totalAmount, setTotalAmount] = useState(0);
  let [totalRooms, setTotalRooms] = useState(0);

  const incrementRoomsBooked = (index) => {
    console.log("Increment Rooms Booked Called");
    let newHotelList = [...hotelList];
    let newTotalAmount = totalAmount;

    newHotelList[index].roomsBooked += 1;
    newTotalAmount += newHotelList[index].price;

    setHotelList(newHotelList);
    setTotalAmount(newTotalAmount);
    setTotalRooms(totalRooms + 1);
  };

  const decreamentRoomsBooked = (index) => {
    let newHotelList = [...hotelList];
    let newTotalAmount = totalAmount;

    if (newHotelList[index].roomsBooked > 0) {
      newHotelList[index].roomsBooked -= 1;
      newTotalAmount -= newHotelList[index].price;

      setHotelList(newHotelList);
      setTotalAmount(newTotalAmount);
      setTotalRooms(totalRooms - 1);
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
                  roomCount={totalRooms}
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
