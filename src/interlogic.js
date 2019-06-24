import { numWords, countVow, countCons, getTeaser } from './buslogic';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var inputTitle = $("input#title").val();
    var inputGoal = $("input#goal").val();
    var output = numWords(inputGoal);
    var vowel = countVow(inputGoal);
    var consonant = countCons(inputGoal);
    var first = getTeaser(inputGoal);
     $("#solution").append("<li>"+ output + "<li>" + vowel + "<li>" + consonant+ "<li>" + first);
     


    });
  });
