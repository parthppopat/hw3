let levelOfService
let passenger1Name
let passenger1Phone
let passenger1NumberOfPassengers
let passenger1PickupAddressLine1
let passenger1PickupAddressLine2
let passenger1DropoffAddressLine1
let passenger1DropoffAddressLine2
let passenger2Name
let passenger2Phone
let passenger2NumberOfPassengers
let passenger2PickupAddressLine1
let passenger2PickupAddressLine2
let passenger2DropoffAddressLine1
let passenger2DropoffAddressLine2
let passenger3Name
let passenger3Phone
let passenger3NumberOfPassengers
let passenger3PickupAddressLine1
let passenger3PickupAddressLine2
let passenger3DropoffAddressLine1
let passenger3DropoffAddressLine2

function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride)

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  numberOfRides = ride.length

  
  if (numberOfRides > 1) {
    levelOfService = 'Noober Pool'


    if (numberOfRides == 2) {
      // Passenger 1 details
      passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
      passenger1Phone = ride[0].passengerDetails.phoneNumber
      passenger1NumberOfPassengers = ride[0].numberOfPassengers
      passenger1PickupAddressLine1 = ride[0].pickupLocation.address
      passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
      passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
      passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip

      // Passenger 2 details
      passenger2Name = ride[1].passengerDetails.first + ' ' + ride[1].passengerDetails.last
      passenger2Phone = ride[1].passengerDetails.phoneNumber
      passenger2NumberOfPassengers = ride[1].numberOfPassengers
      passenger2PickupAddressLine1 = ride[1].pickupLocation.address
      passenger2PickupAddressLine2 = ride[1].pickupLocation.city + ', ' + ride[1].pickupLocation.state + ' ' + ride[1].pickupLocation.zip
      passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
      passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + ', ' + ride[1].dropoffLocation.state + ' ' + ride[1].dropoffLocation.zip

    } else if (numberOfRides == 3) {
      // Passenger 1 details
      passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
      passenger1Phone = ride[0].passengerDetails.phoneNumber
      passenger1NumberOfPassengers = ride[0].numberOfPassengers
      passenger1PickupAddressLine1 = ride[0].pickupLocation.address
      passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
      passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
      passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip

      // Passenger 2 details
      passenger2Name = ride[1].passengerDetails.first + ' ' + ride[1].passengerDetails.last
      passenger2Phone = ride[1].passengerDetails.phoneNumber
      passenger2NumberOfPassengers = ride[1].numberOfPassengers
      passenger2PickupAddressLine1 = ride[1].pickupLocation.address
      passenger2PickupAddressLine2 = ride[1].pickupLocation.city + ', ' + ride[1].pickupLocation.state + ' ' + ride[1].pickupLocation.zip
      passenger2DropoffAddressLine1 = ride[1].dropoffLocation.address
      passenger2DropoffAddressLine2 = ride[1].dropoffLocation.city + ', ' + ride[1].dropoffLocation.state + ' ' + ride[1].dropoffLocation.zip

      // Passenger 3 details
      passenger3Name = ride[2].passengerDetails.first + ' ' + ride[2].passengerDetails.last
      passenger3Phone = ride[2].passengerDetails.phoneNumber
      passenger3NumberOfPassengers = ride[2].numberOfPassengers
      passenger3PickupAddressLine1 = ride[2].pickupLocation.address
      passenger3PickupAddressLine2 = ride[2].pickupLocation.city + ', ' + ride[2].pickupLocation.state + ' ' + ride[2].pickupLocation.zip
      passenger3DropoffAddressLine1 = ride[2].dropoffLocation.address
      passenger3DropoffAddressLine2 = ride[2].dropoffLocation.city + ', ' + ride[2].dropoffLocation.state + ' ' + ride[2].dropoffLocation.zip
    }
  } else {
    passenger1Name = ride[0].passengerDetails.first + ' ' + ride[0].passengerDetails.last
    passenger1Phone = ride[0].passengerDetails.phoneNumber
    passenger1NumberOfPassengers = ride[0].numberOfPassengers
    passenger1PickupAddressLine1 = ride[0].pickupLocation.address
    passenger1PickupAddressLine2 = ride[0].pickupLocation.city + ', ' + ride[0].pickupLocation.state + ' ' + ride[0].pickupLocation.zip
    passenger1DropoffAddressLine1 = ride[0].dropoffLocation.address
    passenger1DropoffAddressLine2 = ride[0].dropoffLocation.city + ', ' + ride[0].dropoffLocation.state + ' ' + ride[0].dropoffLocation.zip
      

    if (ride[0].purpleRequested == true) {
      levelOfService = 'Noober Purple'
    } else if (ride[0].numberOfPassengers > 3) {
        levelOfService = 'Noober XL'
    } else {
        levelOfService = 'Noober X'
    }
    }

    // levelOfService = 'tacos'
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}