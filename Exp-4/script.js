function updateCount() {
	const text = document.getElementById("text").value;
	const count = document.getElementById("count");
	count.innerHTML = "Character Count: " + text.length;
}