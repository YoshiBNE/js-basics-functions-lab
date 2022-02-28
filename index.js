// Code your solution in this file!
function distanceFromHqInBlocks(val) {
    return Math.abs(42-val);
}

function distanceFromHqInFeet(val) {
    let block=264;
    let distance = distanceFromHqInBlocks(val);
    return distance*block;
}

function distanceTravelledInFeet(block1, block2) {
    let distBlock = Math.abs(block1-block2);
    return distBlock*264;
}

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    let fare;
    if (dist <= 400) {
        fare = 0;
    } else if (dist > 400 && dist < 2000) {
        fare = (dist-400)*0.02;
    } else if (dist >= 2000 && dist < 2500) {
        fare = 25;
    } else {
        fare = 'cannot travel that far';
    }
    return fare;
}