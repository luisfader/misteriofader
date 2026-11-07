# El misterio de los Fader — banda sonora

La música de la novela **«El misterio de los Fader»** de Luis Fader.

> Luis se hace rico de golpe, lleva a Natalia de Moscú a Mendoza y esa misma noche ella sale coronada reina de la Vendimia. Un maletín con hidromiel viaja por las acequias, un zorro lo abre y las uvas empiezan a brillar.

Sitio estático para GitHub Pages: la noche mendocina color malbec, con una acequia que corre al pie de la portada; cuando suena una canción, las uvas brillan y suben.

Para publicarlo: *Settings → Pages*, rama `main`, carpeta raíz. Queda en `https://luisfader.github.io/misteriofader/`.

## Canciones

Ordenadas según dónde suenan en la novela. Los capítulos se numeran como en el libro (el capítulo 1 es «Un encuentro inolvidable»).

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
| 13 | Noche de julio (*Июльская ночь*) | Cap. 33 · El juego de poder en Buenos Aires | `audio/13-noche-de-julio.mp3` |
| 14 | Aquella vez (instrumental) | Cap. 37 · El secreto en los cuadros de Fader | `audio/14-aquella-vez.mp3` |
| 15 | Soy feliz con vos | Cap. 39 · La Vía Blanca | `audio/15-soy-feliz-con-vos.mp3` |
| 16 | Susurros de mujer | Cap. 42 · La Plaza de los recuerdos | `audio/16-susurros-de-mujer.mp3` |
| 17 | Instantes de eternidad | Cap. 50 · Luis el inmortal | `audio/17-instantes-de-eternidad.mp3` |
| 18 | En la cumbre de tu amor | Cap. 51 · El final de una era y el comienzo de una nueva | `audio/18-en-la-cumbre-de-tu-amor.mp3` |
| 19 | Al día siguiente (*На следующий день*, composición conjunta) | Capítulo final | `audio/19-al-dia-siguiente.mp3` |

## Estructura

```
index.html               página con el reproductor
assets/js/canciones.js   lista de canciones (título, escena, capítulo, duración)
assets/js/app.js         reproductor, letras y uvas que brillan
assets/css/style.css     diseño
assets/img/              portada e ilustraciones de la novela
audio/                   mp3
letras/                  letras, un .md por canción
```

## Cómo agregar una canción

1. Poner el mp3 en `audio/` con el nombre `NN-titulo.mp3`.
2. Crear `letras/NN-titulo.md` con la letra (opcional).
3. Agregar una entrada en `assets/js/canciones.js` con el mismo `id`.

Para cambiar el capítulo de una canción, basta con editar `capitulo`, `escena` y `nota` en `canciones.js`, y moverla de lugar en la lista si cambia el orden.

## Formato de las letras

La primera línea es `# Título`; después, estrofas separadas por una línea vacía. Una estrofa que empieza con `[Estribillo]` se muestra como estribillo; `[Puente]` y `[Final]` aparecen como rótulos. Mientras no haya archivo, la página dice «La letra llega pronto».
