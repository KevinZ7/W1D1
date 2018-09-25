var arg = process.argv;

function obfuscate(password){

  var split = password.split('');
  for(var i = 0;i < password.length; i++){
    if(split[i] == 'a'){
      split[i] = 4;
    }
    if(split[i] == 'e'){
      split[i] = 3;
    }
    if(split[i] == 'o'){
      split[i] = 0;
    }
    if(split[i] == 'l'){
      split[i] = 1;
    }
  }

  return split.join('');
}

console.log(obfuscate(arg[2]));