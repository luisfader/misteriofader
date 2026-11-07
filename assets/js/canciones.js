// Banda sonora de «El misterio de los Fader», en el orden en que suena en la novela.
// Todas las piezas son instrumentales: al elegir una, se abre el resumen del capítulo
// y, al final, una frase de alguno de sus personajes.
// Para agregar una pieza: poné el mp3 en audio/ y una entrada acá con el mismo id.
// «original» es el título con que se grabó, cuando no está en castellano.
window.CANCIONES = [
  {
    id: "01-otono-mendocino",
    titulo: "Otoño mendocino",
    escena: "Lo que se extraña desde lejos",
    capitulo: "Prólogo · Del autor",
    resumen: "Después de más de dieciséis años en Moscú, el autor cuenta por qué eligió ser Fader y por qué, si tuviera que elegir un gentilicio, sería «mendocino». Al principio renegaba de todo; con los años entendió lo que extrañaba: el otoño, el murmullo de las acequias, el sol escondiéndose tras los Andes, los parrales. Desde la distancia, y con un romanticismo consciente, le regala a Natalia esta aventura.",
    frase: "Hacelo. Alcanzá tu sueño.",
    quien: "Sergio, cuando Luis le dijo que quería irse a Rusia",
    duracion: "3:13"
  },
  {
    id: "02-dia-de-invierno",
    titulo: "Día de invierno",
    original: "Зимний день",
    escena: "La pista de patinaje en Jóvrino",
    capitulo: "Capítulo 1 · Un encuentro inolvidable",
    resumen: "Moscú está cubierta de nieve. Natalia patina con su abrigo rojo cerca de la calle Petrozavodskaya, y Luis no deja de sacarle fotos desde el borde de la pista. Ahí le da la noticia: se hizo rico y quiere llevarla a Mendoza. Cuando ella pregunta cómo, él esquiva la respuesta, y se quedan abrazados en el frío.",
    frase: "¿Ves? Aquí empezó nuestra historia de amor.",
    quien: "Natalia",
    duracion: "4:40"
  },
  {
    id: "03-amor",
    titulo: "Amor",
    escena: "La llamada a papá",
    capitulo: "Capítulo 2 · Buenas noticias",
    resumen: "Luis llama a su padre para contarle del viaje. Sergio tiene su propia novedad: se compró una finca y va a plantar malbec. Entonces Luis le cuenta que la familia tiene una integrante nueva, Natalia Fader, y a Sergio le cuesta entender quién es. Cuando se entera de que es la esposa de su hijo, promete esperarlos en El Plumerillo.",
    frase: "¿Natalia Fader? ¿Es tu hermana adoptiva o qué?",
    quien: "Sergio",
    duracion: "3:07"
  },
  {
    id: "04-los-andes",
    titulo: "Los Andes",
    original: "Анды",
    escena: "El vuelo y la llegada a El Plumerillo",
    capitulo: "Capítulo 4 · El encuentro en Mendoza",
    resumen: "En el avión, Natalia dibuja viñedos que nunca vio y vuelve a preguntar de dónde salió la fortuna; Luis bromea con un tesoro enterrado. Al aterrizar, la cordillera la deja sin palabras y a él se le humedecen los ojos después de dieciséis años. Sergio los busca en el Gacel y los lleva a casa, donde los espera un asado.",
    frase: "El asado mendocino es correcto, y el normal… bueno, simplemente no lo es.",
    quien: "Luis",
    duracion: "3:41"
  },
  {
    id: "05-las-zemlianikas",
    titulo: "Las Zemlianikas",
    escena: "Una rusa, reina de la Vendimia",
    capitulo: "Capítulo 6 · La Reina Inesperada de la Vendimia",
    resumen: "Después del asado, Luis y Natalia salen al centro en el Gacel. En la Plaza Independencia una organizadora busca con urgencia a una reina, porque la candidata de la Sexta Sección se desmayó. Al oír el apellido Fader, la sube al escenario. Natalia improvisa, el público la ovaciona y termina coronada, mientras bajo el puente el maletín sigue flotando por la acequia.",
    frase: "Acá sos Fader. Y los Fader somos leyenda.",
    quien: "Luis",
    duracion: "2:12"
  },
  {
    id: "06-caen-las-hojas",
    titulo: "Caen las hojas",
    escena: "El maletín por las acequias de Godoy Cruz",
    capitulo: "Capítulo 7 · El pasado dando pistas",
    resumen: "Bajo un puentecito de ladrillos, entre hojas secas, el maletín queda atascado. Un vecino lo saca con un palo, la cerradura cede y una luz verde lo encandila; el maletín vuelve al agua y sigue viaje. Mientras tanto, en Dalvian, Domingo Castro abre en su cocina el otro maletín, el del museo, y contempla lo que esperó durante años.",
    frase: "Por fin. Por fin.",
    quien: "Domingo Castro",
    duracion: "3:45"
  },
  {
    id: "07-susurros-vespertinos",
    titulo: "Susurros vespertinos",
    escena: "Atardecer en la finca de Sergio",
    capitulo: "Capítulo 11 · La Finca de los Sueños",
    resumen: "Fin de febrero. El Gacel llega por el camino de tierra a la finca Fader: malbec, cabernet, chardonnay y una casa de adobe con techo de tejas. Sergio y Mónica salen a recorrer las viñas y Luis y Natalia se quedan abrazados, escuchando el agua de las acequias. Esa noche, un zorro muerde el maletín atascado y un líquido luminoso se derrama en el viñedo.",
    frase: "Este es un lugar único. Donde podemos soñar.",
    quien: "Luis",
    duracion: "2:53"
  },
  {
    id: "08-paz",
    titulo: "Paz",
    escena: "El sueño de Karl con la Comuna de París",
    capitulo: "Capítulo 14 · El Sueño de la Comuna",
    resumen: "Karl se duerme en Mendoza y despierta en París, en 1871, entre las barricadas. Un comunero viejo reparte entre los suyos un elixir dorado que le dio «un alemán», y los defensores resisten a los prusianos hasta hacerlos retroceder. Karl lo mira todo como un fantasma. Al despertar no hay sudor frío: solo nostalgia y una paz extraña.",
    frase: "No te preocupes. Ya lo he probado, y ha funcionado.",
    quien: "El viejo comunero, sobre el elixir",
    duracion: "4:04"
  },
  {
    id: "09-buen-despertar",
    titulo: "Buen despertar",
    escena: "El alba sobre la cordillera",
    capitulo: "Capítulo 15 · El amanecer de los secretos",
    resumen: "El sol asoma sobre los Andes y Natalia pinta el amanecer con acuarelas en el porche. Mónica la descubre y se emociona. Entre las vides, Sergio encuentra el maletín con el frasco vacío y una inscripción en alemán: «Hidromiel». Le parece tan lindo que sube la foto a las redes, y en una habitación en penumbra un hombre barbudo la ve.",
    frase: "¡Che, sos toda una Fader!",
    quien: "Mónica",
    duracion: "3:28"
  },
  {
    id: "10-nuestra-manana",
    titulo: "Nuestra mañana",
    escena: "Entre las hileras de vides",
    capitulo: "Capítulo 16 · La mañana en los viñedos",
    resumen: "Luis y Natalia pasean de la mano por la finca. Ella le muestra su dibujo de los Andes y se dicen te quiero en ruso. Luis nota que el verde de las hojas es demasiado intenso y Natalia siente que alguien los mira; tienen razón, alguien los espía con binoculares. Toman mate bajo un árbol mientras Sergio y Mónica se van de compras a Luján.",
    frase: "Ты моя жизнь. (Sos mi vida.)",
    quien: "Luis",
    duracion: "3:49"
  },
  {
    id: "11-amor-y-arte",
    titulo: "Amor y arte",
    escena: "Lienzos y pinceles en el patio",
    capitulo: "Capítulo 20 · El Resplandor de las Uvas",
    resumen: "Luis y Natalia pintan los Andes y él descubre que su trazo cambió de golpe. Le cuenta la humillación en Bellas Artes, los dibujos destruidos y las tardes en que su tía Adriana le enseñaba a dibujar un sauce llorón. En la cena de milanesas, Sergio habla del ingeniero Carlos Fader y de una maldición familiar. Las uvas brillan y el zorro decide quedarse.",
    frase: "Un árbol sin raíces no es más que una sombra.",
    quien: "La tía Adriana, según recuerda Luis",
    duracion: "3:31"
  },
  {
    id: "12-noche-sin-calma",
    titulo: "Noche sin calma",
    original: "Неспокойной ночи",
    escena: "La pesadilla de Karl",
    capitulo: "Capítulo 22 · El Sueño de la Conquista",
    resumen: "Karl sueña con la Campaña del Desierto: Roca arenga a sus soldados y los días se comprimen en aldeas arrasadas. Entre los cuerpos se levanta un niño de ojos negros que lo toca en el pecho y le anuncia que verá sufrir a todos sus descendientes. Karl se despierta gritando y mira los viñedos bajo la luna, sabiendo que ya no puede ignorar su pasado.",
    frase: "Todos los Fader están malditos. Y toda la culpa es mía.",
    quien: "Karl Fader",
    duracion: "2:54"
  },
  {
    id: "13-soy-feliz-con-vos",
    titulo: "Soy feliz con vos",
    escena: "La noche de la Vía Blanca",
    capitulo: "Capítulo 39 · La Vía Blanca",
    resumen: "El Parque San Martín brilla con miles de luces. Los amigos le regalan a Natalia un traje eslavo rojo y blanco, y ella desfila en un carro pintado al estilo de Fernando Fader, tirando uvas al público. En el Kilómetro Cero, Carlita, la reina de Las Heras, la desafía a una batalla de rap, y Natalia gana con acento ruso.",
    frase: "Esa es mi esposa. La mejor reina de Mendoza.",
    quien: "Luis",
    duracion: "1:59"
  },
  {
    id: "14-susurros-de-mujer",
    titulo: "Susurros de mujer",
    escena: "Un café frente a la Plaza Independencia",
    capitulo: "Capítulo 41 · La Noche en el Centro y el Encuentro con el Pasado",
    resumen: "La víspera del Carrusel, Luis y Natalia se quedan en un hotel del centro. En el café, ella se burla de los celos de él, y Carlita pasa a provocarlos. Esa misma noche, en la ruta, unos autos cierran el paso al Gacel: es Karl Fader, que le revela a Sergio que es su bisabuelo y le muestra un frasco de hidromiel.",
    frase: "¡Tus celos me hacen feliz! Vos sos el único rey en mi vida.",
    quien: "Natalia",
    duracion: "2:15"
  },
  {
    id: "15-aquella-vez",
    titulo: "Aquella vez",
    escena: "El abrazo en el hotel",
    capitulo: "Capítulo 42 · La Plaza de los recuerdos",
    resumen: "Natalia se despierta de madrugada y encuentra a Luis en la ventana, mirando la plaza. Lo abraza por la espalda, y él le cuenta su vida en ese lugar: la primera Vendimia en los hombros de su papá, la marcha a los diecisiete, el vendedor ambulante que quiso defender. Le agradece haberlo traído de vuelta, salen al balcón en la noche de marzo y la luna los deja solos.",
    frase: "Esta plaza es el mapa de mi vida. Y ahora sos parte de él.",
    quien: "Luis",
    duracion: "2:30"
  },
  {
    id: "16-instantes-de-eternidad",
    titulo: "Instantes de eternidad",
    escena: "Luis hereda la inmortalidad",
    capitulo: "Capítulo 50 · Luis el inmortal",
    resumen: "En el anfiteatro Frank Romero Day, Luis ve que el chamán Lautaro controla a los guerreros con un cetro de hidromiel. Salta al escenario, lo vence y lo rompe. Natalia inmoviliza a María Silvana, y Sergio, con un trago de hidromiel, se siente Asterix. Al final, Karl elige a su sucesor: el inmortal ahora es Luis.",
    frase: "Soy inmortal, pero me canso. El tiempo no pasa en vano.",
    quien: "Karl Fader",
    duracion: "4:27"
  },
  {
    id: "17-en-la-cumbre-de-tu-amor",
    titulo: "En la cumbre de tu amor",
    escena: "Natalia renuncia a la corona",
    capitulo: "Capítulo 51 · El final de una era y el comienzo de una nueva",
    resumen: "Carlita le ruega que no se baje, pero Natalia renuncia y abraza a Luis. Él anuncia a la nueva reina, mira el palco vacío y, en vivo para todo el país, declara a Mendoza capital de la Argentina y a su viejo presidente de la Nación. Sergio, con una copa de malbec en la mano, no lo puede creer. En Buenos Aires, la logia decide irse del país.",
    frase: "Renuncio a los honores, pero no renuncio a la lucha.",
    quien: "Natalia",
    duracion: "2:53"
  },
  {
    id: "18-al-dia-siguiente",
    titulo: "Al día siguiente",
    original: "На следующий день",
    autoria: "Composición conjunta",
    escena: "Malbec y empanadas en la finca",
    capitulo: "Capítulo final",
    resumen: "En la terraza de la finca, Karl le entrega a Sergio los papeles de la herencia, museo Fader incluido. El zorro reaparece, y Karl cuenta que a Roca lo transformaron en un animal; Sergio pregunta si no habrá sido en zorro y todos se ríen. Luis tiene tres hermanos, la maldición parece haber terminado, y entonces el noticiero habla de un argentino que robó los tesoros de los masones de San Petersburgo.",
    frase: "Bueno, parece que mi trabajo aquí no ha terminado.",
    quien: "Luis",
    duracion: "3:22"
  }
];
