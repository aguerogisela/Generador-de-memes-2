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
document.addEventListener("DOMContentLoaded", function () {
	const modoOscuroButton = document.getElementById("modoOscuro");
	modoOscuroButton.addEventListener("click", toggleDarkMode);

	function toggleDarkMode() {
		document.body.classList.toggle("dark-mode");
	}
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
// Obtener la imagen y los controles deslizantes de filtros
const img = document.getElementById("imgTag");
const brillo = document.getElementById("brightnessFiltro");
const opacidad = document.getElementById("opacityFiltro");
const contraste = document.getElementById("contrastFiltro");
const desenfoque = document.getElementById("blurFiltro");
const escalaDeGrises = document.getElementById("grayscaleFiltro");
const sepia = document.getElementById("sepiaFiltro");
const hue = document.getElementById("hueFiltro");
const saturacion = document.getElementById("saturateFiltro");

// Función para aplicar filtros a la imagen
const aplicarFiltros = () => {
	img.style.filter = `
    brightness(${brillo.value})
    opacity(${opacidad.value})
    contrast(${contraste.value}%)
    blur(${desenfoque.value}px)
    grayscale(${escalaDeGrises.value}%)
    sepia(${sepia.value}%)
    hue-rotate(${hue.value}deg)
    saturate(${saturacion.value}%)
  `;
};

// Agregar event listeners para cada filtro
const filtros = [
	brillo,
	opacidad,
	contraste,
	desenfoque,
	escalaDeGrises,
	sepia,
	hue,
	saturacion,
];

filtros.forEach((filtro) => filtro.addEventListener("input", aplicarFiltros));

// Botón para restablecer filtros
const restablecerFiltrosBtn = document.querySelector(".restablecer-filtros");

restablecerFiltrosBtn.addEventListener("click", (event) => {
	event.preventDefault();

	// Restablecer los valores de los controles deslizantes
	brillo.value = 1;
	opacidad.value = 1;
	contraste.value = 100;
	desenfoque.value = 0;
	escalaDeGrises.value = 0;
	sepia.value = 0;
	hue.value = 0;
	saturacion.value = 100;

	aplicarFiltros();
});
