const urlISS = 'https://api.wheretheiss.at/v1/satellites/25544'; 

async function getISS() {
    const response = await fetch(urlISS);
    const ISSData = await response.json();
    console.log(ISSData);
    const xPosition = ISSData.latitude;
    const yPosition = ISSData.longitude;
    const velocity = ISSData.velocity; 
    const visibility = ISSData.visibility; 
    document.getElementById('latitude').innerHTML = xPosition;
    document.getElementById('longitude').innerHTML = yPosition;
    document.getElementById('velocity').innerHTML = velocity;
    document.getElementById('visibility').innerHTML = visibility;
}

getISS();