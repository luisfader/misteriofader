// Canciones de la banda sonora de «El misterio de los Fader», en el orden en que suenan en la novela.
// Para agregar una canción: poné el mp3 en audio/, la letra en letras/ y una entrada acá con el mismo id.
// Si todavía no hay grabación, poné audio: false y la canción aparece con la marca «pronto».
// «original» es el título con que se grabó, cuando no está en castellano.
window.CANCIONES = [
  {
    id: "01-otono-mendocino",
    titulo: "Otoño mendocino",
    escena: "Lo que se extraña desde lejos",
    capitulo: "Prólogo · Del autor",
    nota: "Después de dieciséis años en Moscú, el autor hace la lista de lo que extraña: el otoño mendocino, el murmullo de las acequias, la brisa del atardecer. «Gracias, Mendoza. Estoy seguro de que algún día nos volveremos a encontrar.»",
    duracion: "3:13"
  },
  {
    id: "02-dia-de-invierno",
    titulo: "Día de invierno",
    original: "Зимний день",
    escena: "La pista de patinaje en Jóvrino",
    capitulo: "Capítulo 1 · Un encuentro inolvidable",
    nota: "Moscú bajo la nieve. Natalia patina con su abrigo rojo y Luis no deja de sacarle fotos desde el borde de la pista. Ahí le cuenta que se hizo rico y que el viaje empieza por Mendoza. «El frío ya no importaba, porque su amor los mantenía cálidos.»",
    duracion: "4:40"
  },
  {
    id: "03-amor",
    titulo: "Amor",
    escena: "La llamada a papá",
    capitulo: "Capítulo 2 · Buenas noticias",
    nota: "Luis llama a Sergio para contarle del viaje, y Sergio le cuenta que se compró una finca. Después viene la otra noticia: la familia tiene una nueva integrante, Natalia Fader. «¿Es tu hermana adoptiva o qué?»",
    duracion: "3:07"
  },
  {
    id: "04-los-andes",
    titulo: "Los Andes",
    original: "Анды",
    escena: "El vuelo y la llegada a El Plumerillo",
    capitulo: "Capítulo 4 · El encuentro en Mendoza",
    nota: "Atrás queda el invierno de Moscú. Natalia dibuja en el avión; abajo aparece la cordillera. Sergio los espera en el aeropuerto con el mejor asado del mundo, y Luis entiende que volvió «no solo a un lugar, sino a un sentimiento».",
    duracion: "3:41"
  },
  {
    id: "05-las-zemlianikas",
    titulo: "Las Zemlianikas",
    escena: "Una rusa, reina de la Vendimia",
    capitulo: "Capítulo 6 · La Reina Inesperada de la Vendimia",
    nota: "A horas de llegar, Natalia termina en el escenario y sale coronada reina de Mendoza Capital. Después brindan con malbec. «Me conformo solo con ser TU reina. Pero… ¿y cuando sepan que soy rusa?»",
    duracion: "2:12"
  },
  {
    id: "06-caen-las-hojas",
    titulo: "Caen las hojas",
    escena: "El maletín por las acequias de Godoy Cruz",
    capitulo: "Capítulo 7 · El pasado dando pistas",
    nota: "Bajo un puentecito de ladrillos, el agua mezcla hojas secas y ramitas, y el maletín con hidromiel sigue su viaje, cada vez más cerca del corazón de Mendoza.",
    duracion: "3:45"
  },
  {
    id: "07-susurros-vespertinos",
    titulo: "Susurros vespertinos",
    escena: "Atardecer en la finca de Sergio",
    capitulo: "Capítulo 11 · La Finca de los Sueños",
    nota: "Fin de febrero, el Gacel por el camino de tierra, los Andes en el horizonte. Luis y Natalia se quedan abrazados junto a la casa; el agua de las acequias suena «como una melodía». Esa noche, en el viñedo, las uvas empiezan a brillar.",
    duracion: "2:53"
  },
  {
    id: "08-paz",
    titulo: "Paz",
    escena: "El sueño de Karl con la Comuna de París",
    capitulo: "Capítulo 14 · El Sueño de la Comuna",
    nota: "Karl se duerme y vuelve a París, a las barricadas de los comuneros. Por una vez no se despierta con sudor frío: se queda con nostalgia y, extrañamente, en paz.",
    duracion: "4:04"
  },
  {
    id: "09-buen-despertar",
    titulo: "Buen despertar",
    escena: "El alba sobre la cordillera",
    capitulo: "Capítulo 15 · El amanecer de los secretos",
    nota: "El sol asoma sobre los Andes y tiñe el cielo de rosa y dorado. Mónica saca fotos: «El amanecer aquí es… mágico.»",
    duracion: "3:28"
  },
  {
    id: "10-nuestra-manana",
    titulo: "Nuestra mañana",
    escena: "Entre las hileras de vides",
    capitulo: "Capítulo 16 · La mañana en los viñedos",
    nota: "Natalia le muestra a Luis su dibujo de las montañas. Se dicen te quiero en ruso: «Ты моя жизнь», sos mi vida. Pero el verde de las hojas parece demasiado intenso, y Natalia siente que alguien los mira.",
    duracion: "3:49"
  },
  {
    id: "11-amor-y-arte",
    titulo: "Amor y arte",
    escena: "Lienzos y pinceles en el patio",
    capitulo: "Capítulo 20 · El Resplandor de las Uvas",
    nota: "Luis y Natalia pintan juntos frente a las montañas. «Me encanta verte así, tan feliz y tan… libre.» Desde las sombras, el zorro decide quedarse en la finca.",
    duracion: "3:31"
  },
  {
    id: "12-noche-sin-calma",
    titulo: "Noche sin calma",
    original: "Неспокойной ночи",
    escena: "La pesadilla de Karl",
    capitulo: "Capítulo 22 · El Sueño de la Conquista",
    nota: "Karl sueña con la Campaña del Desierto. Un niño le anuncia que verá sufrir a todos sus descendientes. Se despierta gritando: «Todos los Fader están malditos. Y toda la culpa es mía.»",
    duracion: "2:54"
  },
  {
    id: "13-noche-de-julio",
    titulo: "Noche de julio",
    original: "Июльская ночь",
    escena: "La noche de Julio Argentino Roca",
    capitulo: "Capítulo 33 · El juego de poder en Buenos Aires",
    nota: "Buenos Aires, 1878. Pierre espía para el general en las sombras de la ciudad, y Roca le dice al presidente Avellaneda que viene a hablar del futuro: «Del mío. Y del país que gobernaré.» Esa noche, Karl jura guardar el secreto.",
    duracion: "3:22"
  },
  {
    id: "14-aquella-vez",
    titulo: "Aquella vez",
    escena: "La visita al Museo Fader",
    capitulo: "Capítulo 37 · El secreto en los cuadros de Fader",
    nota: "Luis vuelve al museo que, a los quince años, le rechazó un cuadro. «Te prometí que te traería. Pero no sé si estoy listo para volver.» Natalia le toma la mano: él le había dicho que esos cuadros eran ventanas a Mendoza.",
    instrumental: true,
    duracion: "2:30"
  },
  {
    id: "15-soy-feliz-con-vos",
    titulo: "Soy feliz con vos",
    escena: "La noche de la Vía Blanca",
    capitulo: "Capítulo 39 · La Vía Blanca",
    nota: "El Parque San Martín brilla con miles de luces y los amigos aplauden a la reina rusa. «Esa es mi esposa. La mejor reina de Mendoza.» Bajo las luces del Kilómetro Cero, todo es perfecto.",
    duracion: "1:59"
  },
  {
    id: "16-susurros-de-mujer",
    titulo: "Susurros de mujer",
    escena: "El balcón frente a la Plaza Independencia",
    capitulo: "Capítulo 42 · La Plaza de los recuerdos",
    nota: "Natalia se despierta y lo encuentra mirando la plaza. «Liubimy… Vení a dormir.» Luis le cuenta su vida en esa plaza: la primera Vendimia en los hombros de su papá, la marcha a los diecisiete. «Esta plaza es el mapa de mi vida. Y ahora sos parte de él.»",
    duracion: "2:15"
  },
  {
    id: "17-instantes-de-eternidad",
    titulo: "Instantes de eternidad",
    escena: "Luis hereda la inmortalidad",
    capitulo: "Capítulo 50 · Luis el inmortal",
    nota: "Después de la batalla en el anfiteatro, Karl elige a su sucesor: «Luis, te elijo a vos.» El hidromiel destruido liberó su energía, y ahora el inmortal es él.",
    duracion: "4:27"
  },
  {
    id: "18-en-la-cumbre-de-tu-amor",
    titulo: "En la cumbre de tu amor",
    escena: "Natalia renuncia a la corona",
    capitulo: "Capítulo 51 · El final de una era y el comienzo de una nueva",
    nota: "«Renuncio a los honores, pero no renuncio a la lucha.» Luis declara a Mendoza capital y a su papá presidente. «Estás loco, loquísimo.» «Y vos sos mi loquita.»",
    duracion: "2:53"
  },
  {
    id: "19-al-dia-siguiente",
    titulo: "Al día siguiente",
    original: "На следующий день",
    autoria: "Composición conjunta",
    escena: "Asado en la finca Fader",
    capitulo: "Capítulo final",
    nota: "Pasó la tormenta. Karl le entrega a Sergio los papeles de la sucesión, el hidromiel queda bajo custodia y alguien pregunta en qué animal transformaron a Roca. «Che, ¿no lo habrán transformado en zorro?» Se ríen todos, incluso el zorro.",
    duracion: "3:22"
  }
];
