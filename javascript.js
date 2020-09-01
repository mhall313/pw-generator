// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays to choose characters from which to generate the password
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numSet = ["0","1","2","3","4","5","6","7","8","9"];
var specSet = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

//Initial prompt for length of password
var pwLength = prompt("How many characters are in the password?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
//Generate and return string password for function writePassword to print
function generatePassword(){
    let password = '';
    
    //Conditional on password being of a specific length
    if(pwLength >=8 && pwLength <= 128){
        var upperCase = confirm("Do you want uppercase letters in your password?");
        if(upperCase == true){
            var numbCase = confirm("Do you want numbers in your password?");
                if (numbCase == true){
                    var specCase = confirm("Do you want special characters in your password?");
                    if(specCase == true){
                        //PW includes lower, upper, numbers and special characters
                        var allTrue = lowCase.concat(upCase, numSet, specSet);
                            for(var i = 0; i < pwLength; i++){
                                nxtChar = allTrue[Math.floor(Math.random() * Math.floor(allTrue.length))];
                                password = password.toString()+nxtChar.toString();
                                console.log(password);
                            }
                    }
                    else{
                        //PW includes lower, upper, numbers but not special characters
                        var lunTrue = lowCase.concat(upCase, numSet)
                        for(var i = 0; i < pwLength; i++){
                            nxtChar = lunTrue[Math.floor(Math.random() * Math.floor(lunTrue.length))];
                            password = password.toString()+nxtChar.toString();
                            console.log(password);
                        }
                    }
                }
                else{
                    var specCase = confirm("Do you want special characters in your password?");
                    if(specCase == true){
                        //PW includes lower, upper, special characters but not numbers
                        var lusTrue = lowCase.concat(upCase, specSet);
                            for(var i = 0; i < pwLength; i++){
                                nxtChar = lusTrue[Math.floor(Math.random() * Math.floor(lusTrue.length))];
                                password = password.toString()+nxtChar.toString();
                                console.log(password);
                            }
                    }
                    else{
                        //PW includes lower and upper but not numbers or special characters"
                        var luTrue = lowCase.concat(upCase);
                            for(var i = 0; i < pwLength; i++){
                                nxtChar = luTrue[Math.floor(Math.random() * Math.floor(luTrue.length))];
                                password = password.toString()+nxtChar.toString();
                                console.log(password);
                            }
                    }
                }
        }
        else {
            var numbCase = confirm("Do you want numbers in your password?");
                if (numbCase == true){
                    var specCase = confirm("Do you want special characters in your password?");
                    if(specCase == true){
                        //PW includes lower, numbers and special characters but not uppercase
                        var lnsTrue = lowCase.concat(numSet, specSet);
                            for(var i = 0; i < pwLength; i++){
                                nxtChar = lnsTrue[Math.floor(Math.random() * Math.floor(lnsTrue.length))];
                                password = password.toString()+nxtChar.toString();
                                console.log(password);
                            }
                    }
                    else{
                        //PW includes lower, numbers but not special characters or uppercase
                        var lnTrue = lowCase.concat(numSet);
                            for(var i = 0; i < pwLength; i++){
                                nxtChar = lnTrue[Math.floor(Math.random() * Math.floor(lnTrue.length))];
                                password = password.toString()+nxtChar.toString();
                                console.log(password);
                            }
                    }
                }
                else{
                    var specCase = confirm("Do you want special characters in your password?");
                    if(specCase == true){
                        //PW includes lower, special characters but not numbers or upper case
                        var lsTrue = lowCase.concat(specSet);
                            for(var i = 0; i < pwLength; i++){
                                nxtChar = lsTrue[Math.floor(Math.random() * Math.floor(lsTrue.length))];
                                password = password.toString()+nxtChar.toString();
                                console.log(password);
                            }
                    }
                    else{
                        //PW includes lower but not upper, numbers or special characters
                            for(var i = 0; i < pwLength; i++){
                                nxtChar = lowCase[Math.floor(Math.random() * Math.floor(lowCase.length))];
                                password = password.toString()+nxtChar.toString();
                                console.log(password);
                            }
                    }
                }
        }

    }
    else{
        alert("Password must be between 8 and 128 characters long.");
    }
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
