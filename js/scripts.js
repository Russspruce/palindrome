$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var sentence = $("#input").val();

    var palindrome = sentence.split("").reverse().join("");

    if (sentence === palindrome) {
      alert("This is a palindrome.")
    }

    else {
      alert("Nope.")
    }

  });
});
