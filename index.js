let someValue 
function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue-42)
}
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
}
function distanceTravelledInFeet(blockOne,blockTwo){
    return (Math.abs(blockOne-blockTwo)) * 264
}
function calculatesFarePrice(startBlock, destinationBlock){
    let feetTravelled = 264 * Math.abs(startBlock-destinationBlock)
    if (feetTravelled < 400){
        return 0
    }
    else if (feetTravelled < 2000) {
        return (feetTravelled - 400)*.02
    }
    else if (feetTravelled < 2500){
        return 25
    }
    else if (feetTravelled > 2500){
        return 'cannot travel that far'
    }
}



console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(34));
console.log(distanceTravelledInFeet(34,28));
console.log(calculatesFarePrice(11,12));
console.log(calculatesFarePrice(34,32));