'use strict'

module.exports = {

  words: function(inputString){
    var localString = inputString;
    var unitWords = {};
    var i;

    localString = inputString.replace(/\s{1,}/, " ");

    var splitString = localString.split(" ");

    for (i=0; i<splitString.length; i++){
      if (typeof unitWords[splitString[i]] === 'number'){
        unitWords[splitString[i]]++;
      }
      else{
        unitWords[splitString[i]] = 1;
      }
    }

    return unitWords;
  }, 

  reverseString: function(inputString){
    var inputStringArray = inputString.split('');
    var outputStringArray = [];
    var outputString = null;
    var i;

    if (inputString != undefined && inputString != ""){
      for (i=inputStringArray.length-1; i>=0; i--){
        outputStringArray.push(inputStringArray[i]);
      }

      outputString = outputStringArray.join('');
      if (outputString == inputString){
        outputString = true;
      }
    }
    return outputString
  }
}