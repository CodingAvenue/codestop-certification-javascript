function collatzSequence(x)
{
    numSeq = [x];
    
    if (x < 1) {
        return [];
    }
    
    while (x > 1) {
        if (x % 2 == 0) {
            x = x / 2;
        } else {
            x = 3 * x + 1;
        }

        numSeq.push(x);
    }
    
    return numSeq;
}
console.log(collatzSequence(12));
console.log(collatzSequence(19));