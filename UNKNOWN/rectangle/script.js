// Select all div (div1, div2, div3)
const div = document.querySelectorAll("div");

// Add an onclick event listener
for (let i = 0; i < div.length; ++i) {
  div[i].addEventListener(
    "click",
    function (i) {
      alert("You clicked " + div[i].id);
      // Prevent alert display more than once for overlapping div
      event.stopPropagation();
    }.bind(this, i)
  );
}
