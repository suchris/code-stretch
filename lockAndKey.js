// Code stretch 02/22/2021
function lockAndKey(key, message) {
  return {
    modKey: function (prevKey, newKey) {
      if (key === prevKey) {
        key = newKey;
        return "key changed";
      }
      return "Invalid key";
    },
    retrieveMessage: function (enterKey) {
      return key === enterKey ? message : "invalid key";
    },
    modMessage: function (enterKey, newMessage) {
      if (key === enterKey) {
        message = newMessage;
        return "message changed";
      } else {
        return "invalid key";
      }
    },
  };
}

const newLock = lockAndKey("1234", "super secret message");
console.log(newLock.modKey("1234", "345")); // => "Key changed"
console.log(newLock.retrieveMessage("3232")); // => invalid key
console.log(newLock.retrieveMessage("345")); // => "super secret message"
console.log(newLock.modMessage("345", "No secret")); // "message changed"
console.log(newLock.retrieveMessage("345")); // => "No secret"
