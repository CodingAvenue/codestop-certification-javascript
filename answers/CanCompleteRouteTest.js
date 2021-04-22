const canCompleteCircuit = (gas, cost) => {
    let start = 0;
    let tank = 0;
    let total = 0;

    for (let i = 0; i < gas.length; i++) {
      const diff = gas[i] - cost[i];

      tank += diff;
      total += diff;

      if (tank < 0) {
        tank = 0;
        start = i + 1;
      }
    }
    return total >= 0 ? start : -1;
};

gas  = [1,2,3,4,5];
cost = [3,4,5,1,2];

console.log(canCompleteCircuit(gas,cost));