var color = ["#E26D5A", "#EFA8B8", "#D7BBA8", "#BBB90B", "#3E2A35", "#EE6258"]

var i = 0;
document.querySelector("button").addEventListener("click", function() {
  i = (i + 1) % color.length;
  document.querySelector("body").style.backgroundColor = color[i];
});