function solve(birds) {
    let n = birds.length();
    for (let i = 0; i < n; ++i) {
      birds.push(Number(rl.question()));
    }
    let map = {}, maxi = 0, mini = Number.MAX_VALUE, maxBirds = [], minBirds = [];
    birds.forEach((bird) => {
      if (map[bird]) map[bird] += 1;
      else map[bird] = 1;
  
      maxi = Math.max(maxi, map[bird]);
      mini = Math.min(mini, map[bird]);
    });
  
    birds.forEach((bird) => {
      if (map[bird] === maxi) maxBirds.push(bird);
      if (map[bird] === mini) minBirds.push(bird);
    });
  
    let mostFrequent = Math.min(...maxBirds);
    let leastFrequent = Math.min(...minBirds);
  
    console.log(`Most frequently sighted bird is ${mostFrequent}`);
    console.log(`Least frequently sighted bird is ${leastFrequent}`);
  }