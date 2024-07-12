//Drawer, cerrar y abrir

document.getElementById("textButton").addEventListener("click", function () {
	toggleDrawer("textDrawer", "imageDrawer");
});

document.getElementById("imageButton").addEventListener("click", function () {
	toggleDrawer("imageDrawer", "textDrawer");
});

document
	.getElementById("closeTextDrawer")
	.addEventListener("click", function () {
		closeDrawer("textDrawer");
	});

document
	.getElementById("closeImageDrawer")
	.addEventListener("click", function () {
		closeDrawer("imageDrawer");
	});

function toggleDrawer(openDrawerId, closeDrawerId) {
	let openDrawer = document.getElementById(openDrawerId);
	let closeDrawer = document.getElementById(closeDrawerId);

	if (openDrawer.style.width === "250px") {
		openDrawer.style.width = "0";
	} else {
		closeDrawer.style.width = "0";
		openDrawer.style.width = "250px";
	}
}

function closeDrawer(drawerId) {
	document.getElementById(drawerId).style.width = "0";
}

//Modo Oscuro

document.addEventListener("DOMContentLoaded", function () {
	const modoOscuroButton = document.getElementById("modoOscuro");
	modoOscuroButton.addEventListener("click", toggleDarkMode);

	function toggleDarkMode() {
		document.body.classList.toggle("dark-mode");
	}
});
