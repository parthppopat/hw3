// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

// 🔥 YOUR CODE GOES HERE 🔥
// Write the recipe (algorithm) in the comments. Then, write the code.
// Find the kind of car passenger wants
// Since Noober Purple overrides all other ride types, first check if it is Noober Purple 
  if (ride.purpleRequested == true) {
// If the above is true, we will provide output rideType as Noober Purple
    rideType = `Noober Purple`
// Check whether there are more than 3 passengers if it is not an Noober Purple
  } else if (ride.numberOfPassengers > 3) {
// If there are > 3 passengers, we will output rideType as Noober XL
    rideType = `Noober XL`
// We will default to Noober X if it is neither Noober Purple nor > 3 passengers
  } else {
    rideType = `Noober X`
  }
// We will now extract passenger's first and last name from their profile and store it in memory
  let passengerFirstname = ride.passengerDetails.first
  let passengerLastname = ride.passengerDetails.last
// We will now extract passenger's first and last nameand store it in memory
  let passengerPhone = ride.passengerDetails.phoneNumber
// We will now extract passenger's address details and store the text in pickupDetails
  let location = ride.pickupLocation
  let pickupDetails = `${location.address}, ${location.city}, ${location.state}, ${location.zip}`
// We will now extract passenger's dropoff location and store the text in dropoffDetails
let dropLocation = ride.dropoffLocation
let dropoffDetails = `${dropLocation.address}, ${dropLocation.city}, ${dropLocation.state}, ${dropLocation.zip}`
// We will now infrom the driver of  the number of passengers
let passengerAmount = ride.numberOfPassengers
// We will now get the full details of the ride displayed on the console
  console.log(`Ride type: ${rideType}
  ${rideType} Passenger: ${passengerFirstname} ${passengerLastname}
  Pickup at: ${pickupDetails}
  Dropoff at: ${dropoffDetails}
  Expected number of riders: ${passengerAmount}
  Phone: ${passengerPhone}`)

// 🔥 YOUR CODE ENDS HERE 🔥
})