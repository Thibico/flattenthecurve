import { cloneElement } from "react";

export const PROB_INFECTION = 0.6;
export const PROB_INFECTION_DECAY = 0.9;
export const INCUBATION_PERIOD = 20;


export const randInt = (maximum) =>  Math.floor(Math.random() * (maximum - 0 + 1)) + 0;

export const newWorld = (width,numInfected) => {
	const world = {
		People: [...Array(width).keys()].map(x =>
				[...Array(width).keys()].map(y => {
					return makePerson({initX:x,initY:y})
				})
			),
		infections: {infected: numInfected, notInfected: width*width-numInfected}
	}
	
	if (numInfected) {
		let infectedPicks = [];
		while (infectedPicks.length < numInfected) {
			const newRand = randInt(width*width)
			if (!(newRand in infectedPicks)) {
				infectedPicks.push(newRand);
			}
		}
		console.log(infectedPicks);
		infectedPicks.forEach(pick => world.People[Math.floor(pick/width)][pick%width].infected = true);
	}
	return world;
}

export const getNextStateOfWorld = (currentState,neighborAddresses,distancing) => {
	// currentState is an object consisting of
	// People: list of list of Persons, i.e. Persons[x][y] gives you the person at x,y
	// 

	const width = currentState.People.length;
	const People = currentState.People;

	// console.log(People);
	const newInfected = [];

	People.forEach((col,x) => {
		newInfected[x] = [];
		col.forEach((row,y) => {
			const neighbors = getNeighborsForPerson(People[x][y],People,neighborAddresses);
			// console.log(neighbors);
			newInfected[x][y] = People[x][y].calcInfected(neighbors,distancing,People[x][y].infectedDays);
		})
	})

	// console.log(newInfected);

	currentState.infections = {infected:0,notInfected:0};
	People.forEach((col,x) => {
		col.forEach((row,y) => {
			People[x][y].infected = newInfected[x][y];
			if (newInfected[x][y]) { 
				currentState.infections.infected++;
				People[x][y].infectedDays++;
			}
			else currentState.infections.notInfected++;
		})
	})

	return {People:People,infections:currentState.infections}
}

export const getNeighborsForPerson = (person,AllPeople,neighborAddresses) => {
	// console.log(person);
	// console.log(neighborAddresses);
	return {
		0: neighborAddresses[person.x][person.y][0].map(address => {
				return AllPeople[address[0]][address[1]];
			})
	};
}

export const getAllNeighbors = (width) => {
	const l = width-1; // last index
	return [...Array(width).keys()].map(x =>
		[...Array(width).keys()].map(y => {
			if (x < l && y < l && x > 0 && y > 0 ) return {0:[[x-1,y-1],[x,y-1],[x+1,y-1],[x-1,y],[x+1,y],[x-1,y+1],[x,y+1],[x+1,y+1]]};
			if (x === 0 && y === 0) return {0:[[1,0],[1,1],[0,1]]};  
			if (x === 0 && y === l) return {0:[[0,l-1],[1,l-1],[1,l]]};  
			if (x === l && y === 0) return {0:[[l-1,0],[l-1,1],[l,1]]};  
			if (x === l && y === l) return {0:[[l-1,l-1],[l-1,l],[l,l-1]]};  
			if (x === 0) return {0:[[x,y-1],[x+1,y-1],[x+1,y],[x,y+1],[x+1,y+1]]};
			if (y === 0) return {0:[[x-1,y],[x+1,y],[x-1,y+1],[x,y+1],[x+1,y+1]]};
			if (x === l) return {0:[[x-1,y-1],[x,y-1],[x-1,y],[x-1,y+1],[x,y+1]]};
			if (y === l) return {0:[[x-1,y-1],[x,y-1],[x+1,y-1],[x-1,y],[x+1,y]]};
		})
	)
	// return neighborsByCoords;
}

export const makePerson = (properties) => {
	const {initName,initX,initY,initHealth,initInfected,initImmune} = properties;
	
	const name = initName ? initName : "John";
	
	// health indicates whether person is normal, showing mild symptons, severe symptoms, or dead
	const health = initHealth? initHealth : 0;
	
	// infected is a boolean indicating whether person is infected 
	const infected = initInfected ? initInfected : false;
	
	// immune is a boolean indicating whether person is immune 
	const immune = initImmune ? initImmune : false;

	const x = initX ? initX : 0;
	const y = initY ? initY : 0;

	return {
		name: name,
		x: x,
		y: y,
		health: health,
		infected: infected,
		infectedDays: 0,
		immunue: immune,
		calcInfected: (neighbors,distancing,infectedDays) => {
			// neighbors is an object with different tiers of neighbors lists 0 is closest, 1 is next closest, etc
			// distancing is a constant >= 1

			// console.log(neighbors);
			let probNotInfected = 1;
			Object.keys(neighbors).forEach(neighborTier => {
				const numNeighbors = neighbors[neighborTier].filter(neighbor => neighbor.infected).length;
				// console.log(numNeighbors);
				probNotInfected = probNotInfected 
					* Math.pow( 1- (PROB_INFECTION / distancing * Math.pow(PROB_INFECTION_DECAY,neighborTier)) , numNeighbors )
			})

			// console.log(name + "'s chance of getting infected = " + (1-probNotInfected));

			if (infectedDays === 0) return Math.random() > probNotInfected;
			else if (infectedDays >= INCUBATION_PERIOD) return false;
			else return true;
		}
	}
}