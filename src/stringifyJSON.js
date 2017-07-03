// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return String(obj);
  }
  if (typeof obj === "string") {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)){
    var stringArray = [];
    if(obj.length === undefined) {
      return '[]';
    } else {
      obj.forEach(function(el) {
        stringArray.push(stringifyJSON(el));
      });
      return '[' + stringArray + ']';
    }
  }
  if (typeof obj === "object") {
    var objArray = [];
    if (Object.keys(obj).length === undefined) {
      return '{}';
    } else {
      for(var key in obj) {
        if (typeof obj[key] === "function" || typeof obj[key] === "undefined") {
          continue;
        } else {
          objArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
      return '{' + objArray + '}';
    }
  }
};
