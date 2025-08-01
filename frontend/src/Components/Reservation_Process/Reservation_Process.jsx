import React from "react";
import "./Reservation_Process.css";

const Process = [
  {
    id: 1,
    num: "1",
    process_heading: "Pick a few places",
    description:
      "Explore hundreds of high-quality rooms, studios, and apartments. Save favorites and book it. Finding your dream home could not be easier!",
  },
  {
    id: 2,
    num: "2",
    process_heading: "Accepting a reservations",
    description:
      "You will receive the acceptance of the reservation from the owner in just a couple of hours. You will not have to wait long for an answer and torment yourself with guesses.",
  },
  {
    id: 3,
    num: "3",
    process_heading: "Payment",
    description:
      "All that is necessary after receiving a response, is to send the payment and you are almost at the finish line!",
  },
  {
    id: 4,
    num: "4",
    process_heading: "Get your keys!",
    description:
      " Your accommodation is reserved, get ready to move as soon as possible and check in on your chosen date.",
  },
];

const Reservation_Process = () => {
  return (
    <>
      <div data-aos="fade-up" className="Reservation_Process">
        <div className="top">
          <p>Reservation Process</p>
          <h2>Fast, intuitive and absolutely safe !</h2>
        </div>
        <div className="bottom">
          {Process.map((items, index) => {
            return (
              <div key={index} data-aos="fade-up" className="bottom-text">
                <h1>{items.num}</h1>
                <h2>{items.process_heading}</h2>
                <p>{items.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Reservation_Process;
