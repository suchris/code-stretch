// Code stretch 3/16/2021

// Santa's elves are working from home this year and need a program to help them stay on track.
// Write a constructor function that takes an array of gifts and
// an optional value for naughty / nice(they should be nice by default ).

// SantasWorkshop should have 3 methods:
// getGifts -> displays a string of gifts or COAL
// addGifts -> takes any number of new gifts
// setNaughtyOrNice -> toggles if the person is naughty or nice

function SantasWorkshop(gifts, isNice = true) {
  this.gifts = gifts;
  this.isNice = isNice;
  this.getGifts = function () {
    if (this.isNice) {
      return this.gifts;
    } else {
      return ["COAL"];
    }
  };
  this.addGifts = function (gift) {
    this.gifts.push(gift);
  };
  this.setNaughtyOrNice = function () {
    this.isNice = !this.isNice;
  };
  return this;
}

const timmysGifts = SantasWorkshop(["baseball mitt", "Red Ryder BB Gun"]);

console.log(timmysGifts.getGifts()); // 'baseball mitt, Red Ryder BB Gun'
timmysGifts.addGifts("Turbo Man");
console.log(timmysGifts.getGifts()); // 'baseball mitt, Red Ryder BB Gun, Turbo Man'
timmysGifts.setNaughtyOrNice();
console.log(timmysGifts.getGifts()); // 'COAL'
