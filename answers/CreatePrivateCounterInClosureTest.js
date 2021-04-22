function counter() {
    var _counter = 0;
    return {
        add: function(increment) { _counter += increment; },
        retrieve: function() { return 'The counter is currently at: ' + _counter; }
    }
}

var c = counter();
c.add(5); 
c.add(9); 

c.retrieve();