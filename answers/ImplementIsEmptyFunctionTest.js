var object = {
    "name": "Anna",
    "age": "25",
    "address": "Cebu"
};

function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

console.log(isEmpty(object));