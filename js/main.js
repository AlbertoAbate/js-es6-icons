$(document).ready(function(){
  // Icon set
  const icons = [
      {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
  ];

  const colors = [
    "blue",
    "orange",
    "purple"
  ];
// prendiamo delle referenze
const container = $(".icons");
// richiamo della funzione
 // printIcons(coloredIcons, container);


const coloredIcons = colorIcons(icons, colors);
console.log(coloredIcons);

}); //fine documento


// FUNZIONI
// funzioni per stampare a schermo
function printIcons(icons, container) {

  icons.forEach((icon) => {
    const{family, prefix, name} = icon;  //destrutturazione

    const html =   //template literal per concatenare più stringhe

    `<div class="icon">
    <i class="${family} ${prefix}${name}"></i>
    <div class="title">
    ${name}
    </div>
    </div>`;

    container.append(html);
  });

  // creiamo una funzione per assegnare un colore
  function colorIcons(icons, colors) {
  // adesso dobbiamo recuperare tutti i types presenti nelle icone attraverso una nuova funzione
  // get types
  const types = getType(icons);
  console.log(types);
}

  // utilizziamo MAP per fare una copia di arrey di oggetti
  const coloredIcons = icons.map((icon) => {
    const indexType = types.indexOf(icon.type);

    return {
      ...icon,
      color: colors[indexType]
    }
    return coloredIcons;
  });



  // funzione per getType(Icons)
  function getType(icons) {
    const types = [];
 // cicliamo sugli array per farci restituire il valore desiderato
    icons.forEach((icon) => {
      if (!types.includes(icon.type)) {
        types.push(icon.type);
      }
      // qui diciamo che se il type della icon non è incluso nel types, ce lo stampa nell'array

    });
    return types;
  }
}
