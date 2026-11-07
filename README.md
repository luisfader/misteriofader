# El misterio de los Fader — banda sonora

La música de la novela **«El misterio de los Fader»** de Luis Fader.

> Luis se hace rico de golpe, lleva a Natalia de Moscú a Mendoza y esa misma noche ella sale coronada reina de la Vendimia. Un maletín con hidromiel viaja por las acequias, un zorro lo abre y las uvas empiezan a brillar.

Sitio estático para GitHub Pages: la noche mendocina color malbec, con una acequia que corre al pie de la portada; cuando suena una pieza, las uvas brillan y suben.

Para publicarlo: *Settings → Pages*, rama `main`, carpeta raíz. Queda en `https://luisfader.github.io/misteriofader/`.

## Piezas

Dieciocho piezas instrumentales, ordenadas según dónde suenan en la novela. Los capítulos se numeran como en el libro (el capítulo 1 es «Un encuentro inolvidable»). Al elegir una, la página muestra un resumen del capítulo y una frase de alguno de sus personajes.

| # | Título | Dónde suena en la novela | Archivo |
|---|--------|--------------------------|---------|
| 1 | Otoño mendocino | Prólogo | `audio/01-otono-mendocino.mp3` |
| 2 | Día de invierno (*Зимний день*) | Cap. 1 · Un encuentro inolvidable | `audio/02-dia-de-invierno.mp3` |
| 3 | Amor | Cap. 2 · Buenas noticias | `audio/03-amor.mp3` |
| 4 | Los Andes (*Анды*) | Cap. 4 · El encuentro en Mendoza | `audio/04-los-andes.mp3` |
| 5 | Las Zemlianikas | Cap. 6 · La Reina Inesperada de la Vendimia | `audio/05-las-zemlianikas.mp3` |
| 6 | Caen las hojas | Cap. 7 · El pasado dando pistas | `audio/06-caen-las-hojas.mp3` |
| 7 | Susurros vespertinos | Cap. 11 · La Finca de los Sueños | `audio/07-susurros-vespertinos.mp3` |
| 8 | Paz | Cap. 14 · El Sueño de la Comuna | `audio/08-paz.mp3` |
| 9 | Buen despertar | Cap. 15 · El amanecer de los secretos | `audio/09-buen-despertar.mp3` |
| 10 | Nuestra mañana | Cap. 16 · La mañana en los viñedos | `audio/10-nuestra-manana.mp3` |
| 11 | Amor y arte | Cap. 20 · El Resplandor de las Uvas | `audio/11-amor-y-arte.mp3` |
| 12 | Noche sin calma (*Неспокойной ночи*) | Cap. 22 · El Sueño de la Conquista | `audio/12-noche-sin-calma.mp3` |
| 13 | Soy feliz con vos | Cap. 39 · La Vía Blanca | `audio/13-soy-feliz-con-vos.mp3` |
| 14 | Susurros de mujer | Cap. 41 · La Noche en el Centro y el Encuentro con el Pasado | `audio/14-susurros-de-mujer.mp3` |
| 15 | Aquella vez | Cap. 42 · La Plaza de los recuerdos | `audio/15-aquella-vez.mp3` |
| 16 | Instantes de eternidad | Cap. 50 · Luis el inmortal | `audio/16-instantes-de-eternidad.mp3` |
| 17 | En la cumbre de tu amor | Cap. 51 · El final de una era y el comienzo de una nueva | `audio/17-en-la-cumbre-de-tu-amor.mp3` |
| 18 | Al día siguiente (*На следующий день*, composición conjunta) | Capítulo final | `audio/18-al-dia-siguiente.mp3` |

## Estructura

```
index.html               página con el reproductor
assets/js/canciones.js   lista de piezas (título, escena, capítulo, resumen, frase, duración)
assets/js/app.js         reproductor, resumen del capítulo y uvas que brillan
assets/css/style.css     diseño
assets/img/              portada e ilustraciones de la novela
audio/                   mp3
```

## Cómo agregar o mover una pieza

1. Poner el mp3 en `audio/` con el nombre `NN-titulo.mp3`.
2. Agregar una entrada en `assets/js/canciones.js` con el mismo `id`, y completar `escena`, `capitulo`, `resumen`, `frase` (sin comillas) y `quien`.

Para cambiarla de capítulo, basta con editar esos campos y moverla de lugar en la lista si cambia el orden.
