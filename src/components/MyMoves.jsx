import React, { useState, useEffect } from "react";
import axios from "axios";
import Inventory from "./Inventory"; // Import the Inventory component

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null); // Track selected index

  // Formatted date and time string in the format "MMM DD, YYYY at HH:MM AM/PM"
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const dateOptions = {
      month: "short", // Abbreviated month name (e.g., Jan, Feb)
      day: "2-digit", // Day of the month, 2 digits (e.g., 01, 31)
      year: "numeric", // Full numeric year (e.g., 2024)
    };

    const timeOptions = {
      hour: "numeric", // Numeric hour (e.g., 1, 12)
      minute: "2-digit", // 2-digit minute (e.g., 00, 59)
      hour12: true, // Use 12-hour clock (AM/PM)
    };

    // Format the date and time separately
    const datePart = date.toLocaleDateString("en-US", dateOptions);
    const timePart = date.toLocaleTimeString("en-US", timeOptions);

    return `${datePart} at ${timePart}`; // Combine the formatted date and time into a single string
  };

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("http://test.api.boxigo.in/sample-data/")
      .then((response) => {
        setMovies(response.data.Customer_Estimate_Flow);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Handle view move details
  const handleViewMoveDetails = (index) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-orange-500 border-solid border-r-transparent border-4 border-t-4 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg font-semibold">Loading...</p>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Error: {error.message}</p>
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Moves</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="flex items-start">
              {/* From Address */}
              <div className="p-4 w-1/3">
                <h2 className="text-lg font-semibold">From</h2>
                <p className="mt-2">
                  {movie.from_address.firstName &&
                    movie.from_address.firstName + ", "}
                  {movie.from_address.lastName &&
                    movie.from_address.lastName + ", "}
                  {movie.from_address.fromAddress &&
                    movie.from_address.fromAddress + " "}
                  {movie.from_address.fromCity &&
                    movie.from_address.fromCity + ", "}
                  {movie.from_address.fromLocality &&
                    movie.from_address.fromLocality + " "}
                  {movie.from_address.fromState &&
                    movie.from_address.fromState + " "}
                  {movie.from_address.pincode &&
                    "- " + movie.from_address.pincode}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="flex items-center mt-12 justify-center w-16 h-16 bg-transparent text-orange-500 rounded-full shadow-lg mx-6">
                <i className="fas fa-arrow-right text-2xl"></i>
              </div>

              {/* To Address */}
              <div className="p-4 w-1/3">
                <h2 className="text-lg font-semibold">To</h2>
                <p className="mt-2">
                  {movie.to_address.firstName &&
                    movie.to_address.firstName + ", "}
                  {movie.to_address.toAddress &&
                    movie.to_address.toAddress + " "}
                  {movie.to_address.toCity && movie.to_address.toCity + ", "}
                  {movie.to_address.toLocality &&
                    movie.to_address.toLocality + " "}
                  {movie.to_address.toState && movie.to_address.toState}
                  {movie.to_address.toState && movie.to_address.pincode && " -"}
                  {movie.to_address.pincode && movie.to_address.pincode}
                </p>
              </div>

              {/* Request# */}
              <div className="p-4 w-1/3">
                <h2 className="text-lg font-semibold text-center">Request#</h2>
                <p className="mt-2 text-center text-orange-600">
                  {movie.estimate_id || "N/A"}
                </p>
              </div>
            </div>

            <div className="flex items-center">
              {/* Property size */}
              <div className="flex items-center justify-center w-16 h-16 text-orange-500">
                <i className="fas fa-house text-2xl"></i>
              </div>
              <p className="mr-2">{movie.property_size}</p>
              {/* Number of floor */}
              <div className="flex items-center justify-center w-16 h-16 text-orange-500">
                <i className="fas fa-boxes-stacked text-2xl"></i>
              </div>
              <p className="mr-2">{movie.new_floor_no}</p>
              {/* Distance */}
              <div className="flex items-center justify-center w-16 h-16 text-orange-500">
                <i className="fas fa-location-dot text-2xl"></i>
              </div>
              <p className="mr-2">{movie.distance}</p>

              {/* Order Date */}
              <div className="flex items-center justify-center w-16 h-16 text-orange-500">
                <i className="fas fa-calendar-days text-2xl"></i>
              </div>
              <p className="mr-2">{formatDate(movie.order_date)} {" "} <i className="fas fa-pen text-xl px-2"></i></p>

              {/* Buttons */}
              <div className="flex gap-4 ml-[29%]">
                <button
                  className="border-2 border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition-colors"
                  onClick={() => handleViewMoveDetails(index)}
                >
                  View Move Details
                </button>
                <button className="border-2 border-orange-500 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition-colors">
                  Quotes Awaiting
                </button>
              </div>
            </div>
            {/* Disclaimer */}
            <div className="flex items-center">
              <div className="flex items-center justify-center w-16 h-16 text-orange-500">
                <i className="fas fa-triangle-exclamation text-2xl"></i>
              </div>
              <p className="mr-2">
                Disclaimer : Please update your move date before two days of
                shifting
              </p>
            </div>
            {/* Inventory Section */}
            {selectedIndex === index && (
              <Inventory inventory={movies[index].items.inventory} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
