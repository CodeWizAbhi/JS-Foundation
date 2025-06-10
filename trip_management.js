let name = prompt("Enter your name: ");
let stateOption = parseInt(prompt(
  "Choose a state for your trip:\n1. Maharashtra\n2. Himachal\n3. Rajasthan\n4. Kerala\nEnter a Number For State: "
));  
let budget = parseInt(prompt("Enter your total group budget: "));
let members = parseInt(prompt("Enter number of members: "));
let perPersonBudget = budget/members;

let stateMap = {
    1: "Maharashtra",
    2: "Himachal",
    3: "Rajasthan",
    4: "Kerala"
};

let trips = {
    Maharashtra: [
        { location: "Lonavala", min: 2000, max: 5000 },
        { location: "Mahabaleshwar", min: 2000, max: 2500 }
    ],
    Himachal: [
        { location: "Manali", min: 1000, max: 1500 }
    ],
    Rajasthan: [
        { location: "Jaipur", min: 3000, max: 3500 }
    ],
    Kerala: [
        
        { location: "Alleppey", min: 1500, max: 2000 }
    ]
};

let selectedState = stateMap[stateOption];

if (!selectedState || !trips[selectedState]) {
    console.log("Please enter given state");
} else {
    suggestedTrip(selectedState);
}

function suggestedTrip(selectedState) {
    console.log("---------Results--------");
    console.log(`\nName: ${name}`);
    console.log(`State Selected: ${selectedState}`);
    console.log(`Members: ${members}`);
    console.log(`Total Budget: ₹${budget}`);
    console.log(`Budget per Person: ₹${perPersonBudget}`);
    
    console.log(`Suggested Locations:`);
    for (let i = 0; i < trips[selectedState].length; i++) {
        if(trips[selectedState][i].min<=perPersonBudget){
            console.log(`Location ${i+1}- ${trips[selectedState][i].location}`);
            console.log("Range of Plans: ");
            console.log(`Min- ${trips[selectedState][i].min}`);
            console.log(`Max- ${trips[selectedState][i].max}`);
        }else{
            console.log(`Your Budget is Low for ${trips[selectedState][i].location}`);
        }
    }
}
