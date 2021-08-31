// Code your solution in this file!
function distanceFromHqInBlocks(street1){
    if (street1 > 42) return street1 - 42
    else return 42 - street1
}

function distanceFromHqInFeet(street1){
    if (street1 > 42) return (street1 - 42) * 264
    else return (42 - street1) * 264
}
function distanceTravelledInFeet(street1, street2){
    if (street1 > street2) {
        return (street1 - street2) * 264
    } else {
        return (street2 - street1) * 264
    } 
}
function calculatesFarePrice(start, destination){
    const feetTraveled = distanceTravelledInFeet(start, destination)
    console.log(distanceTravelledInFeet(start, destination))
    // if (start > destination)
        if (2000 > feetTraveled && feetTraveled > 400){
            return (feetTraveled - 400) * .02
        }else if (feetTraveled > 2500){
            return 'cannot travel that far'
        }else if (2500 > feetTraveled && feetTraveled > 2000){
            return 25
        }else if (feetTraveled - 400 <= 0){
            return 0
        }
            
}