function generarPassword() {
  const longitud = 12;
  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minusculas = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+{}[]<>?/|";

  const todo = mayusculas + minusculas + numeros + simbolos;

  let frase = document.getElementById("fraseClave").value.trim();
  if (frase.length === 0) {
    alert("Por favor escribe una palabra clave o frase.");
    return;
  }

  // Tomamos una parte de la frase, max 6 caracteres
  let base = frase.slice(0, 6);
  
  // Aseguramos que tenga al menos un carácter de cada tipo
  let extra = "";
  extra += mayusculas[Math.floor(Math.random() * mayusculas.length)];
  extra += minusculas[Math.floor(Math.random() * minusculas.length)];
  extra += numeros[Math.floor(Math.random() * numeros.length)];
  extra += simbolos[Math.floor(Math.random() * simbolos.length)];

  // Completa el resto hasta llegar a 12 caracteres
  while ((base + extra).length < longitud) {
    extra += todo[Math.floor(Math.random() * todo.length)];
  }

  // Une y revuelve
  let passwordFinal = (base + extra).split('').sort(() => 0.5 - Math.random()).join('');

  document.getElementById("password").value = passwordFinal;
}
