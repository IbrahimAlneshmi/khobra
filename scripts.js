function changeHeadingColor() {
    var colors = ["red", "blue", "green", "purple", "orange"];
	 var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("welcome").style.color = randomColor;
}

