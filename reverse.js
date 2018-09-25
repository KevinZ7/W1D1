var input = process.argv.slice(2);


for(var i = 0; i < input.length; i ++){
  var split = input[i].split('');

  var split2 = input[i].split('');
  var counter = 0;

  for(var j = split2.length - 1 ; j >= 0 ; j--){
    split[counter] = split2[j];
    counter ++
  }

  var string = '';
  for(var k = 0; k < split.length; k++){
    string += split[k];
  }

  console.log(string);
}

