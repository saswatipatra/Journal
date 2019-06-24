export function numWords(goal) {

  var count = goal.split(" ");
  return count.length;

}
export function countVow(goal) {
  var vowels = goal.match(/[aeiou]/gi);
  return vowels.length;
}

export function countCons(goal) {
  var vowels = goal.match(/[aeiou]/gi);
  var letters = goal.split("");
  var replace = goal.replace( /\s/g, "")
  var consonants = (replace.length)-(vowels.length);
  return consonants;
}

export function getTeaser(goal) {
  var count = goal.split(" ");
  var firsSent;
  for (var i=0; i<count.length; i++){
    if(goal.match(/[.!?]/g)){
      var i=indexOf()
    }



}
