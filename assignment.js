// Github Link: https://github.com/shajahanalibd/js-assignment

// Assignment Function Name

// kilometerToMeter
// budgetCalculator
// hotelCost
// megaFriend


// KilometerToMeter
// 1 km = 1000 m

function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    return meter;
}
// var meterConvert = kilometerToMeter(12);
// console.log(meterConvert);


// budgetCalculator

var watchPrice = 50;
var phonePrice = 100;
var LaptopPrice = 500;

function budgetCalculator(watch, phone, laptop) {
    var watchTotal = watch * 50;
    var phoneTotal = phone * 100;
    var laptopTotal = laptop * 500;
    var toTalPrice = watchTotal + phoneTotal + laptopTotal;
    return toTalPrice;
}
// var result = budgetCalculator(10, 5, 2);
// console.log(result);


// hotelCost

function hotelCost(toTalPrice){
        var hotelCostPackage = 0;
    if(toTalPrice <= 10){
        hotelCostPackage = toTalPrice * 100;
    }else if(toTalPrice <= 20){
        var basicPackage = 10 * 100;
        var remaining = toTalPrice - 10;
        var silverPackage = remaining * 80;
        hotelCostPackage = basicPackage + silverPackage;
    }
    else{
        var basicPackage = 10 * 100;
        var silverPackage = 10 * 80;
        var remaining = toTalPrice - 20;
        var goldPackage = remaining * 50;
        hotelCostPackage = basicPackage + silverPackage + goldPackage;
    }
    return(hotelCostPackage);
}

// var price = hotelCost(5);
// console.log(price);



// megaFriend

function megaFriend(friend){
    var maxWord = 0;
    var longest;
    for(var i = 0; i < friend.length; i++){
      if(friend[i].length > maxWord){
        var maxWord = friend[i].length;
        longest = friend[i];
  
      }   
    }
    return longest;
  }
//   var friend = ['Tamim Iqbal', 'Liton Das', 'Shakib Al Hasan', 'Mosfiqur Rahman', 'Warnakulasuriya Patabendige Ushantha Joseph Chaminda Vaas'];
//   var result = megaFriend(friend);
//   console.log(result);

