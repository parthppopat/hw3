const ride = rideData[Math.floor(Math.random() * rideData.length)]
const manipulateDOM = function () {
  document.querySelector('.level-of-service').innerHTML = levelOfService
  if (passenger1Name == undefined) {
    document.querySelector('.passenger-1').style.display = 'none'
  } else {
    document.querySelector('.passenger-1-name').innerHTML = passenger1Name
    document.querySelector('.passenger-1-phone').innerHTML = passenger1Phone
    document.querySelector('.passenger-1-number-of-passengers').innerHTML = passenger1NumberOfPassengers > 1 ? `${passenger1NumberOfPassengers} passengers` : '1 passenger'
    document.querySelector('.passenger-1-pickup-address-line-1').innerHTML = passenger1PickupAddressLine1
    document.querySelector('.passenger-1-pickup-address-line-2').innerHTML = passenger1PickupAddressLine2
    document.querySelector('.passenger-1-dropoff-address-line-1').innerHTML = passenger1DropoffAddressLine1
    document.querySelector('.passenger-1-dropoff-address-line-2').innerHTML = passenger1DropoffAddressLine2
  }
  if (passenger2Name == undefined) {
    document.querySelector('.passenger-2').style.display = 'none'
  } else {
    document.querySelector('.passenger-2-name').innerHTML = passenger2Name
    document.querySelector('.passenger-2-phone').innerHTML = passenger2Phone
    document.querySelector('.passenger-2-number-of-passengers').innerHTML = passenger2NumberOfPassengers > 1 ? `${passenger2NumberOfPassengers} passengers` : '1 passenger'
    document.querySelector('.passenger-2-pickup-address-line-1').innerHTML = passenger2PickupAddressLine1
    document.querySelector('.passenger-2-pickup-address-line-2').innerHTML = passenger2PickupAddressLine2
    document.querySelector('.passenger-2-dropoff-address-line-1').innerHTML = passenger2DropoffAddressLine1
    document.querySelector('.passenger-2-dropoff-address-line-2').innerHTML = passenger2DropoffAddressLine2
  }
  if (passenger3Name == undefined) {
    document.querySelector('.passenger-3').style.display = 'none'
  } else {
    document.querySelector('.passenger-3-name').innerHTML = passenger3Name
    document.querySelector('.passenger-3-phone').innerHTML = passenger3Phone
    document.querySelector('.passenger-3-number-of-passengers').innerHTML = passenger3NumberOfPassengers > 1 ? `${passenger3NumberOfPassengers} passengers` : '1 passenger'
    document.querySelector('.passenger-3-pickup-address-line-1').innerHTML = passenger3PickupAddressLine1
    document.querySelector('.passenger-3-pickup-address-line-2').innerHTML = passenger3PickupAddressLine2
    document.querySelector('.passenger-3-dropoff-address-line-1').innerHTML = passenger3DropoffAddressLine1
    document.querySelector('.passenger-3-dropoff-address-line-2').innerHTML = passenger3DropoffAddressLine2
  }
}