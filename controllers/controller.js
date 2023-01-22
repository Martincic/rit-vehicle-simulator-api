export default class {
    
    // Random percentage between 0 - 100
    stateOfCharge() {
        return Math.round(Math.random()*100);
    }

    // Random boolean (true/false)
    HVAC() {
        return (Math.random() < 0.5)
    }

    // Random integer between 0 - 300 (kmh)
    speed() {
        return Math.round(Math.random()*300);
    }

    // Random latitude/longitude with 3 decimals
    generateRandomLatLng()
    {
        let num = Math.random()*180;
        let posorneg = Math.floor(Math.random());
        
        if (posorneg == 0) return (num * -1).toFixed(6);
        return num.toFixed(6);
    }
}