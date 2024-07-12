// Drawer, abrir y cerrar

document.getElementById("textButton").addEventListener("click", () => {
	toggleDrawer("textDrawer", "imageDrawer");
});

document.getElementById("imageButton").addEventListener("click", () => {
	toggleDrawer("imageDrawer", "textDrawer");
});

document.getElementById("closeTextDrawer").addEventListener("click", () => {
	closeDrawer("textDrawer");
});

document.getElementById("closeImageDrawer").addEventListener("click", () => {
	closeDrawer("imageDrawer");
});

const toggleDrawer = (openDrawerId, closeDrawerId) => {
	let openDrawer = document.getElementById(openDrawerId);
	let closeDrawer = document.getElementById(closeDrawerId);

	if (openDrawer.style.width === "250px") {
		openDrawer.style.width = "0";
	} else {
		closeDrawer.style.width = "0";
		openDrawer.style.width = "250px";
	}
};

const closeDrawer = (drawerId) => {
	document.getElementById(drawerId).style.width = "0";
};

// Modo Oscuro
document.addEventListener("DOMContentLoaded", () => {
	const modoOscuroButton = document.getElementById("modoOscuro");
	modoOscuroButton.addEventListener("click", toggleDarkMode);

	const toggleDarkMode = () => {
		document.body.classList.toggle("dark-mode");
	};
});

//Insertar imagen
const divImg = document.getElementById("image");
const fileInput = document.getElementById("fileInput");
const downloadBtn = document.getElementById("downloadBtn");

fileInput.addEventListener("change", (e) => {
	const file = e.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (e) => {
			const imgElement = document.getElementById("imgTag");
			imgElement.src = e.target.result;
		};
		reader.readAsDataURL(file);
		console.log(file);
	}
});

//Descargar imagen
downloadBtn.addEventListener("click", () => {
	domtoimage
		.toBlob(divImg)
		.then((blob) => {
			window.saveAs(blob, "meme.png");
		})
		.catch((error) => {
			console.error("Error al descargar la imagen:", error);
		});
});
