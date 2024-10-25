import "./style.css";

const $app = document.querySelector("#app");

const $form = document.createElement("form");
$form.className = "w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4 mx-auto mt-10";

// Input para el nombre del producto
const $nameInput = document.createElement("input");
$nameInput.name = "name";
$nameInput.type = "text";
$nameInput.placeholder = "Nombre del producto";
$nameInput.required = true;
$nameInput.className = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
$form.appendChild($nameInput);

// Input para la descripción del producto
const $descriptionInput = document.createElement("input");
$descriptionInput.name = "description";
$descriptionInput.type = "text";
$descriptionInput.placeholder = "Descripción del producto";
$descriptionInput.required = true;
$descriptionInput.className = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
$form.appendChild($descriptionInput);

// Input para el precio del producto
const $priceInput = document.createElement("input");
$priceInput.name = "price";
$priceInput.type = "number";
$priceInput.placeholder = "Precio";
$priceInput.required = true;
$priceInput.className = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
$form.appendChild($priceInput);

// Input para subir imagen
const $input = document.createElement("input");
$input.name = "productImage";
$input.type = "file";
$input.accept = "image/*";
$input.className = "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400";
$form.appendChild($input);

// Mostrar preview de la imagen
$input.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (readerEvent) => {
    let $img = document.querySelector("img");

    if (!$img) {
      $img = document.createElement("img");
      $img.className = "rounded-md mt-4";
    }

    $img.src = readerEvent.target.result;
    $img.style.width = "100%";
    $app.appendChild($img);
  };

  reader.readAsDataURL(file);
});

// Botón de envío
const $button = document.createElement("button");
$button.textContent = "Aceptar";
$button.className =
  "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200";
$form.appendChild($button);

$app.appendChild($form);

// Enviar formulario
$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  fetch("http://localhost:4000", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
