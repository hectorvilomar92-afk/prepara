// Competencias espec?ficas de los registros de grado del MINERD.
const MINERD_COMPETENCY_SOURCES = {
  "1": "https://www.ministeriodeeducacion.gob.do/docs/direccion-general-de-educacion-secundaria/mRRi-registro-1er-grado-general-webpdf.pdf",
  "2": "https://www.ministeriodeeducacion.gob.do/docs/direccion-general-de-curriculo/i8Wa-registro-2do-grado-sec-generalpdf.pdf",
  "3": "https://www.ministeriodeeducacion.gob.do/docs/direccion-general-de-curriculo/oajE-registro-3er-grado-sec-generalpdf.pdf",
  "4": "https://www.ministeriodeeducacion.gob.do/docs/direccion-general-de-curriculo/T5r8-registro-4to-grado-sec-academicapdf.pdf",
  "5": "https://www.ministeriodeeducacion.gob.do/docs/direccion-general-de-curriculo/8Ny5-registro-5to-grado-sec-academicapdf.pdf",
  "6": "https://www.ministeriodeeducacion.gob.do/docs/direccion-general-de-curriculo/8KXH-registro-6to-grado-sec-academicapdf.pdf"
};

const MINERD_COMPETENCIES = {
  "1": {
    "lengua-espanola": [
      {
        "code": "CE1-LE",
        "description": "Se comunica con claridad en diferentes contextos, siguiendo los procesos de compresión y producción oral y escrita, con creatividad, al emplear adecuadamente un tipo de texto (funcional o literario), las TIC, así como otros recursos y medios."
      },
      {
        "code": "CE2-LE",
        "description": "Utiliza secuencias argumentativas (hechos, ejemplos, analogías, argumentos y contraargumentos), en discursos orales y escritos, creando nuevos conocimientos a partir de procesos de comprensión y producción de textos orales y escritos abordados con temas y problemas sociales de su realidad."
      },
      {
        "code": "CE3-LE",
        "description": "Analiza textos variados de manera oral o escrita que ponen de relieve hechos y tradiciones históricas relevantes, identificando nuevas relaciones sociales al reconocer y valorar el patrimonio natural y sociocultural dominicano."
      },
      {
        "code": "CE4-LE",
        "description": "Demuestra conocimiento de procesos investigativos científicos sencillos y del uso de tecnología de acuerdo con su grado, a través de textos científicos y especialmente los de secuencia expositivo- explicativa."
      },
      {
        "code": "CE5-LE",
        "description": "Identifica problemas de su vida estudiantil o cotidiana, a través de un tipo de texto específico y apropiado, como punto de partida para su estudio y solución."
      },
      {
        "code": "CE6-LE",
        "description": "Explica con claridad situaciones sobre salud, medio ambiente y la comunidad, mediante textos de diferentes secuencias y géneros, a través de herramientas tecnológicas y otros medios y recursos."
      },
      {
        "code": "CE7-LE",
        "description": "Demuestra conocimiento y comprensión de sí mismo y de los demás al expresar su percepción del mundo, a través de un tipo de texto, favorable a las situaciones y a las personas."
      }
    ],
    "ingles": [
      {
        "code": "CE1-LEI",
        "description": "Comprende y expresa ideas, sentimientos y valores culturales en distintas situaciones de comunicación, utilizando el idioma inglés de forma breve y sencilla, con la intención de informar, dar instrucciones, describir y opinar, con relación a necesidades concretas y temas cotidianos."
      },
      {
        "code": "CE2-LEI",
        "description": "Interactúa en el idioma inglés con el propósito de comparar y narrar, empleando estrategias de desempeño y aprendizaje, y el razonamiento lógico-verbal en distintas situaciones de comunicación."
      },
      {
        "code": "CE3-LEI",
        "description": "Se comunica en intercambios breves y sencillos, participando en un plano de respeto y colaboración, e identificando algunas de las diferencias individuales y la identidad social y cultural propia y de otros países."
      },
      {
        "code": "CE4-LEI",
        "description": "Interactúa en el idioma inglés compartiendo información, ideas y opiniones sobre aspectos científicos y tecnológicos de su entorno inmediato en distintas situaciones cotidianas de comunicación."
      },
      {
        "code": "CE5-LEI",
        "description": "Interactúa en inglés ofreciendo indicaciones e instrucciones oral y escrita, expresando opiniones sobre problemas y situaciones comunes de su entorno inmediato, comunicándose de forma comprensible, aunque con cierto esfuerzo del interlocutor."
      },
      {
        "code": "CE6-LEI",
        "description": "Muestra cuidado de su salud y la de los demás y respeto por el medio ambiente al interactuar en el idioma inglés de forma breve y sencilla al hablar sobre actividades cotidianas y expresar preferencias en distintas situaciones de comunicación."
      },
      {
        "code": "CE7-LEI",
        "description": "Se comunica en el idioma inglés, con cortesía, asertividad, actitud de respeto, honestidad y aceptación al expresarse sobre sí mismo y las demás personas en cuanto a preferencias, experiencias, características personales y actividades cotidianas."
      }
    ],
    "frances": [
      {
        "code": "CE1-LEF",
        "description": "Comprende y expresa ideas, sentimientos y valores culturales en distintas situaciones de comunicación, utilizando el idioma francés, con la intención de saludar, despedirse, interactuar en el aula, presentarse y presentar a otras personas, referirse a actividades cotidianas, describir e indicar la ubicación, en relación a necesidades inmediatas y temas muy cotidianos."
      },
      {
        "code": "CE2-LEF",
        "description": "Interactúa en el idioma francés con el propósito de describir e indicar la ubicación, empleando estrategias de desempeño, en distintas situaciones de comunicación."
      },
      {
        "code": "CE3-LEF",
        "description": "Se comunica con las demás personas, de forma oral y escrita, durante intercambios muy sencillos en el idioma francés, con cortesía, asertividad y respeto, identificando las diferencias individuales y la identidad social y cultural propia y de otros países francófonos, relativa a modos de saludo y despedida, la escuela, presentar y presentarse, rasgos físicos, actividades cotidianas y las ciudades"
      },
      {
        "code": "CE4-LEF",
        "description": "Se comunica en el idioma francés en forma oral o escrita con el propósito de indicar la ubicación de manera virtual, e interactuar en el aula de manera presencial o virtual, en distintas situaciones de comunicación."
      },
      {
        "code": "CE5-LEF",
        "description": "Se comunica en el idioma francés con el propósito de interactuar en el aula e indicar la ubicación de personas, lugares y objetos, empleando estrategias de desempeño en distintas situaciones de comunicación."
      },
      {
        "code": "CE6-LEF",
        "description": "Interactúa en el idioma francés con el propósito de hablar sobre actividades cotidianas, expresando preferencia por opciones que impactan positivamente la salud y el medio ambiente, en distintas situaciones de comunicación."
      },
      {
        "code": "CE7-LEF",
        "description": "Se comunica en el idioma francés, con cortesía, asertividad, actitud de respeto, honestidad y aceptación, en la interacción en el aula y presentándose y describiéndose a sí mismo y a otras personas."
      }
    ],
    "matematicas": [
      {
        "code": "CE1-MAT",
        "description": "Interpreta ideas haciendo uso de la numeración matemática dentro de los sistemas numéricos, con el fin de relacionarlos con los conceptos de activos, pasivos, patrimonio, ingresos, gastos, costos para organizar las finanzas."
      },
      {
        "code": "CE2-MAT",
        "description": "Explica lógicamente situaciones de la comunidad sobre conocimientos básicos de la geometría."
      },
      {
        "code": "CE3-MAT",
        "description": "Plantea soluciones a diferentes situaciones que impliquen situaciones conocimientos de medición a partir del uso de los sistemas numéricos."
      },
      {
        "code": "CE4-MAT",
        "description": "Analiza diferentes tipos de herramientas tecnológicas para la resolución de problemas en la que intervenga la numeración y la estadística."
      },
      {
        "code": "CE5-MAT",
        "description": "Interpreta situaciones que impliquen conocimientos de medición respetando diferentes puntos de vistas y asumiendo actitud responsable."
      },
      {
        "code": "CE6-MAT",
        "description": "Usa los conocimientos de numeración y estadística a fin de contribuir a la solución de situaciones de la comunidad para una vida saludable."
      },
      {
        "code": "CE7-MAT",
        "description": "Asume una actitud responsable en la interpretación de situaciones que implique conocimientos de medición respetando diferentes puntos de vistas."
      }
    ],
    "ciencias-sociales": [
      {
        "code": "CE1-CS",
        "description": "Indaga en fuentes primarias y secundarias sobre la geografía y sus ciencias auxiliares; con la finalidad de obtener informaciones confiables.."
      },
      {
        "code": "CE2-CS",
        "description": "Relaciona en propuestas y proyectos de investigación, hechos históricos con el espacio geográfico en diferentes periodos; con la finalidad de desarrollar una conciencia crítica en tiempo y espacio."
      },
      {
        "code": "CE3-CS",
        "description": "Realiza propuestas que fomenten la interacción sociocultural, el respeto a la Constitución y la construcción ciudadana; con la finalidad de afianzar la democracia, la cultura de paz y el respeto a los derechos humanos."
      },
      {
        "code": "CE4-CS",
        "description": "Utiliza en investigaciones realizadas, planteamientos y teorías sobre el surgimiento del nacionalismo y la incidencia del Antillanismo en el Caribe; con la finalidad de realizar explicaciones científicas."
      },
      {
        "code": "CE5-CS",
        "description": "Verifica en el levantamiento de informaciones, la existencia de un problema; con la finalidad de ubicarlo en el contexto social en el que se producen."
      },
      {
        "code": "CE6-CS",
        "description": "Cuestiona acciones humanas que pueden generar daños a estilos de vida saludables y al equilibrio ambiental; con la finalidad de conocer sus efectos en la sociedad y la naturaleza"
      },
      {
        "code": "CE7-CS",
        "description": "Emplea relaciones armoniosas y equilibradas, con la finalidad de promover la construcción de la cultura de paz basada en el respeto a su persona y a los demás"
      }
    ],
    "ciencias-naturaleza": [
      {
        "code": "CE1-CN*",
        "description": "Se comunica utilizando el Lenguaje científico y tecnológico de ciencias de la tierra y el universo que implica sus ideas básicas a respuestas a preguntas y situaciones de problemas simulados y reales."
      },
      {
        "code": "CE2-CN",
        "description": "Ofrece explicaciones científicas y tecnológicas a problemas y fenómenos naturales relacionados a Ciencias de la Tierra y el Universo."
      },
      {
        "code": "CE3-CN",
        "description": "Aplica procedimientos científicos y tecnológicos, básicos y organizados para solucionar problemas o dar respuestas a fenómenos naturales relacionados con Ciencias de la Tierra y el Universo."
      },
      {
        "code": "CE4-CN",
        "description": "Se cuestiona e identifica problemas y situaciones, y les da explicación utilizando ideas y procesos fundamentales de las Ciencias de la Tierra y el Universo."
      },
      {
        "code": "CE5-CN",
        "description": "Analiza la naturaleza de las ciencias naturales y el alcance del desarrollo tecnológico en nuestra sociedad relacionada con Ciencias de la Tierra y el Universo, sus aportes y reflexiones éticos."
      },
      {
        "code": "CE6-CN",
        "description": "Actúa con responsabilidades críticas y autónomas para el cuidado de su salud y ambientales relacionadas con Ciencias de la Tierra y el Universo."
      },
      {
        "code": "CE7-CN",
        "description": "Gestiona actitudes intelectuales, emocionales y conductuales proactivas al desarrollo de su proyección personal desde las Ciencias de la Tierra y el Universo."
      }
    ],
    "educacion-artistica": [
      {
        "code": "CE1-EA",
        "description": "Realiza procesos creativos utilizando técnicas y estilos artísticos, en relación con la intención comunicativa, expresando la síntesis de ideas, sentimientos y vivencias, tanto propias como presentes en obras diversas."
      },
      {
        "code": "CE2-EA",
        "description": "Crea obras artísticas a partir de los aportes de los diversos diálogos culturales valorando las expresiones artísticas del sincretismo cultural e identificando sus elementos constitutivos."
      },
      {
        "code": "CE3-EA",
        "description": "Argumenta sobre la función de distintos lenguajes artísticos en la construcción histórica de la sociedad en los contextos diversos."
      },
      {
        "code": "CE4-EA",
        "description": "Identifica recursos tecnológicos de diferentes lenguajes artísticos en la realización o análisis de producciones artísticas."
      },
      {
        "code": "CE5-EA",
        "description": "Comunica ideas, emociones, sentimientos y vivencias, a través de géneros, técnicas y estilos de diversas manifestaciones artísticas, valorando la capacidad comunicativa de estas de acuerdo con el contexto."
      },
      {
        "code": "CE6-EA",
        "description": "Reconoce las posibilidades técnicas que ofrecen las artes para la valoración y uso consciente de los recursos y espacios naturales."
      },
      {
        "code": "CE7-EA",
        "description": "Reconoce críticamente manifestaciones artísticas multidisciplinares, identificando sus componentes e influencias, y reconociendo su trascendencia."
      }
    ],
    "educacion-fisica": [
      {
        "code": "CE1-EF",
        "description": "Utiliza su cuerpo para expresar sentimientos, emociones y estados de ánimo en relación armónica con las demás personas y su entorno social y cultural."
      },
      {
        "code": "CE2-EF",
        "description": "Reconoce algunos cambios en su cuerpo y sus habilidades motoras, con el objeto de valorarlas evitando situaciones de riesgo para su salud, la de los demás y de su entorno."
      },
      {
        "code": "CE3-EF",
        "description": "Identifica sus habilidades motrices y capacidades Físicas en el desarrollo de actividades corporales diversas, para utilizarlas en el juego y disfrutar de este."
      },
      {
        "code": "CE4-EF",
        "description": "Realiza acciones motrices diversas en relación con los demás con respeto y responsabilidad."
      },
      {
        "code": "CE5-EF",
        "description": "Muestra nivel de dominio en su acción motriz a partir de la noción de su esquema corporal, al percibir y apreciar patrones, tamaños, formas, direcciones y relaciones espaciales y temporales estáticas en entornos cercanos"
      },
      {
        "code": "CE6-EF",
        "description": "Muestra niveles básicos de desempeño motriz en situaciones de juego, a partir de sus condiciones físicas naturales."
      },
      {
        "code": "CE7-EF",
        "description": "Identi!ca las condiciones del perímetro de juegos y deportes, a fin de utilizarlas en relación con sus acciones motrices de la vida diaria."
      }
    ],
    "fihr": [
      {
        "code": "CE1-FIHR",
        "description": "Constata las principales dificultades que viven los adolescentes en su desarrollo y en sus relaciones sociales y familiares a fin de buscar alternativas de solución a los conflictos que se les presenten."
      },
      {
        "code": "CE2-FIHR",
        "description": "Descubre en los evangelios la novedad de la vida y los valores practicados por Jesús de Nazaret, a fin de compararlos con los asumidos en su familia, escuela y la comunidad e integrarlos en su relación con los demás."
      },
      {
        "code": "CE3-FIHR",
        "description": "Identifica acciones a favor del cuidado de la vida, en todas sus manifestaciones, a fin de garantizar su salud personal y colectiva, desde los diferentes contextos."
      },
      {
        "code": "CE4-FIHR",
        "description": "Identifica los cambios físicos, emocionales, sexuales y espirituales de la etapa de la adolescencia, con la finalidad de afianzar su conocimiento personal y espiritual."
      },
      {
        "code": "CE5-FIHR",
        "description": "Constata el respeto a la vida presente en las manifestaciones culturales y religiosas de su familia y comunidad, a fin de promover y asimilar derechos humanos, valores morales y religiosos, en los diferentes contextos."
      },
      {
        "code": "CE6-FIHR",
        "description": "Presenta la importancia del trabajo, a fin de promover su implementación para la calidad de vida de las personas, la familia y la comunidad."
      },
      {
        "code": "CE7-FIHR",
        "description": "Constata la importancia de aplicar criterios éticos en el uso de las ciencias y las tecnologías, a fin de mejorar la calidad de vida de las personas y del entorno natural."
      }
    ]
  },
  "2": {
    "lengua-espanola": [
      {
        "code": "CE-LE1",
        "description": "Comunica sus ideas y experiencias en diferentes situaciones, mediante un género textual (funcional o literario) abordado desde la comprensión y producción oral y escrita, mostrando creatividad y destrezas en el uso de la lengua, utilizando medios y recursos tecnológicos y de otros tipos."
      },
      {
        "code": "CE-LE2",
        "description": "Produce textos orales y escritos variados a partir de inferencias de comprensión y producción textual, demostrando un pensamiento estructurado, derivando en conclusiones razonables y lógicas."
      },
      {
        "code": "CE-LE3",
        "description": "Utiliza textos específicos variados (orales y escritos) que apoyan el desarrollo de una investigación de carácter científico, seleccionando información con criterios de relevancia, pertinencia, validez y confiabilidad."
      },
      {
        "code": "CE-LE4",
        "description": "Usa textos variados de secuencia argumentativa, con los que conoce y cuestiona prácticas sociales de ciudadanía en el entorno local, nacional e internacional, confrontándolas con los valores universales en discursos analíticos y propositivos."
      },
      {
        "code": "CE-LE5",
        "description": "Utiliza textos de secuencia expositivo- explicativa de manera oral y escrita, en la divulgación de hallazgos científicos y sociales, así como de los avances tecnológicos a lo largo del tiempo, haciendo uso de variadas herramientas que proporcionan las tecnologías de la información y la comunicación TIC."
      },
      {
        "code": "CE-LE6",
        "description": "Usa textos diversos en la divulgación y promoción de situaciones de salud y ambiente, abordando temas y problemas de actualidad, mediante el uso de herramientas tecnológicas, entre otras."
      },
      {
        "code": "CE-LE7",
        "description": "Utiliza textos literarios como manifestación de la lengua y recurso para promover valores universales y fortalecer la dimensión humanista."
      }
    ],
    "ingles": [
      {
        "code": "CE-LEI1",
        "description": "Comprende y expresa ideas, sentimientos y valores culturales en distintas situaciones de comunicación, utilizando el idioma inglés de forma breve y sencilla con la finalidad de informar, ofrecer ayuda, sugerir, comprar, describir planes futuros, y narrar experiencias, con relación a necesidades concretas y temas cotidianos."
      },
      {
        "code": "CE-LEI2",
        "description": "Interactúa de forma oral y escrita en el idioma inglés empleando razonamiento lógico-verbal y estrategias de desempeño de manera creativa y crítica en distintas situaciones de comunicación donde narra experiencias, da sugerencias y consejos y expresa planes en expresiones breves y sencillas."
      },
      {
        "code": "CE-LEI3",
        "description": "Interactúa en inglés ante diversas circunstancias y problemas comunes de su entorno inmediato en las que solicita u ofrece ayuda, da consejos y sugerencias pertinentes y emplea estrategias de desempeño oral y escrito para lograr la claridad del mensaje, aunque el interlocutor deba hacer cierto esfuerzo oral y escrito para comprenderle."
      },
      {
        "code": "CE-LEI4",
        "description": "Se comunica en el idioma inglés de forma breve y sencilla, con cortesía y respeto, reconociendo las diferencias individuales más comunes, y la identidad social y cultural propias de la comunidad local y global."
      },
      {
        "code": "CE-LEI5",
        "description": "Se comunica en el idioma inglés con el propósito de solicitar y ofrecer ayuda, expresar interés y dar sugerencias sobre asuntos científicos, tecnológicos y de otra índole, en situaciones inmediatas de comunicación."
      },
      {
        "code": "CE-LEI6",
        "description": "Muestra preferencia por opciones que impactan positivamente la salud y el medio ambiente al interactuar en inglés sobre sus actividades cotidianas y en situaciones de compra, así como al describir estados anímicos y físicos."
      },
      {
        "code": "CE-LEI7",
        "description": "Interactúa en el idioma inglés, con cortesía, honestidad, actitud de respeto y aceptación al referirse a sí mismo/a y a las demás personas, al hacer sugerencias y al describir experiencias, planes, estados anímicos y físicos."
      }
    ],
    "frances": [
      {
        "code": "CE-LEF1",
        "description": "Se comunica en francés utilizando frases y oraciones básicas, breves y sencillas, previamente ensayadas, relativas a temas cotidianos y en situaciones inmediatas de comunicación, donde comparte información personal básica, expresa preferencias, describe viviendas y actividades cotidianas, necesitando que le repitan o releyendo cuando sea necesario."
      },
      {
        "code": "CE-LEF2",
        "description": "Se comunica en el idioma francés, utilizando la lógica verbal para estructurar un repertorio limitado de frases y expresiones básicas que practica y presenta en distintas situaciones de comunicación de forma creativa previamente planificadas e interactuadas con su interlocutor/a."
      },
      {
        "code": "CE-LEF3",
        "description": "Comprende y expresa informaciones relevantes para resolver problemas y necesidades inmediatas de comunicación en su entorno cotidiano, tales como la identificación y descripción de personas, datos personales, gustos y preferencias, viviendas y actividades cotidianas propias y de otros, utilizando frases hechas y oraciones muy breves y sencillas, con la ayuda de su interlocutor para poder expresarse y poder ser comprendido."
      },
      {
        "code": "CE-LEF4",
        "description": "Se comunica con cortesía y respeto durante intercambios básicos orales y escrittos, identificando las diferencias y semejanzas individuales básicas y la identidad social y cultural propia y de otras personas, relativas a las profesiones, actividades cotidianas y recreativas, la familia, la vivienda, los gustos y preferencias."
      },
      {
        "code": "CE-LEF5",
        "description": "Identifica, organiza y comparte en formato físico, digital o en línea, información relativa a la ciencia y la tecnología presentes en su entorno cotidiano, haciendo uso de un repertorio limitado de vocabulario, frases y oraciones muy breves y sencillas que requiere esfuerzo para ser comprendido."
      },
      {
        "code": "CE-LEF6",
        "description": "Expresa preferencia por opciones que impactan positivamente la salud y el medioambiente, en distintas situaciones inmediatas de comunicación oral y escrita, donde se identifica a sí mismo y a otras personas, describiendo su entorno, vivienda y actividades cotidianas."
      },
      {
        "code": "CE-LEF7",
        "description": "Se identifica e identifica a otras personas en el idioma francés, en un plano de cortesía actitud de respeto, honestidad y aceptación, al compartir informaciones personales básicas, tales como preferencias y viviendas, y al describir actividades cotidianas."
      }
    ],
    "matematicas": [
      {
        "code": "CE-MAT1",
        "description": "Elabora conjeturas y argumentos convincentes para presentar y discutir las propias ideas matemáticas."
      },
      {
        "code": "CE-MAT2",
        "description": "Aplica procesos de razonamientos, con especial atención al razonamiento espacial y al razonamiento con proporciones y gráficas para la comprensión e interpretación del entorno."
      },
      {
        "code": "CE-MAT3",
        "description": "Desarrolla diversas estrategias para resolver problemas del contexto, dentro y fuera de la matemática, interpretando y verificando los resultados en relación con la situación del problema original."
      },
      {
        "code": "CE-MAT4",
        "description": "Muestra autonomía en la búsqueda de soluciones a situaciones relacionadas con los conocimientos matemáticos, respetando los diferentes criterios de solución de los demás."
      },
      {
        "code": "CE-MAT5",
        "description": "Aplica herramientas tecnológicas para la resolución e interpretación de problemas del entorno y a partir de los conocimientos matemáticos que posee."
      },
      {
        "code": "CE-MAT6",
        "description": "Aplica modelos matemáticos para estudiar situaciones del medioambiente que afecten la vida de la comunidad escolar."
      },
      {
        "code": "CE-MAT7",
        "description": "Muestra autonomía en la búsqueda de soluciones a situaciones de problemas matemáticos, respetando los diferentes criterios de abordaje de sus compañeros."
      }
    ],
    "ciencias-sociales": [
      {
        "code": "CE-CS1",
        "description": "Compara de manera rigurosa la autoría de fuentes primarias y secundarias consultadas en medios impresos y digitales sobre procesos sociales, políticos, económicos, históricos, geográficos o culturales, con la finalidad de garantizar la credibilidad de las informaciones."
      },
      {
        "code": "CE-CS2",
        "description": "Interpreta por medio de investigaciones realizadas, hechos históricos y su relación con el espacio geográfico, con la finalidad de evaluar críticamente los cambios que se producen en el tiempo y el espacio."
      },
      {
        "code": "CE-CS3",
        "description": "Explica mediante el levantamiento de información, la existencia de un problema social y el contexto en el que se produce, con la finalidad de comprender su incidencia en el tiempo y el espacio."
      },
      {
        "code": "CE-CS4",
        "description": "Promueve proyectos e iniciativas que fomenten una cultura de paz, el respeto por los valores culturales e interculturales, y los derechos humanos, con la finalidad de lograr una convivencia pacífica y armoniosa en la sociedad."
      },
      {
        "code": "CE-CS5",
        "description": "Analiza explicaciones científicas de fenómenos naturales y teorías de fenómenos sociales, mediante el uso de fuentes confiables en sus proyectos de investigación, con la finalidad de sustentar los hallazgos."
      },
      {
        "code": "CE-CS6",
        "description": "Argumenta a través de investigaciones sobre las acciones humanas que pueden afectar los estilos de vida saludables y el equilibrio ambiental, con la finalidad de presentar su impacto en la sociedad y en la naturaleza."
      },
      {
        "code": "CE-CS7",
        "description": "Demuestra su capacidad para valorar y fomentar relaciones equilibradas y armoniosas, con la finalidad de impulsar la formación de una ciudadanía responsable y la defensa de los principios democráticos."
      }
    ],
    "ciencias-naturaleza": [
      {
        "code": "CE-CN1",
        "description": "Se comunica utilizando el Lenguaje científico y tecnológico de ciencias de la vida que implica sus ideas básicas a respuestas a preguntas y situaciones de problemas simulados y reales."
      },
      {
        "code": "CE-CN2",
        "description": "Ofrece explicaciones científicas y tecnológicas a problemas y fenómenos naturales relacionados a Ciencias de la Vida."
      },
      {
        "code": "CE-CN3",
        "description": "Aplica procedimientos científicos y tecnológicos, básicos y organizados para solucionar problemas o dar respuestas a fenómenos naturales relacionados con Ciencias de la Vida."
      },
      {
        "code": "CE-CN4",
        "description": "Analiza la naturaleza de las ciencias naturales y el alcance del desarrollo tecnológico en nuestra sociedad relacionada con Ciencias de la Vida, sus aportes y reflexiones éticas."
      },
      {
        "code": "CE-CN5",
        "description": "Se cuestiona e identifica problemas y situaciones, y les da explicación utilizando ideas y procesos fundamentales de las Ciencias de la Vida y las ingenierías."
      },
      {
        "code": "CE-CN6",
        "description": "Actúa con responsabilidad crítica y autónoma para el cuidado de su salud y ambiental relacionada con Ciencias de la Vida."
      },
      {
        "code": "CE-CN7",
        "description": "Gestiona actitudes intelectuales, emocionales y conductuales proactivas al desarrollo de su proyección personal desde las Ciencias de la Vida."
      }
    ],
    "educacion-artistica": [
      {
        "code": "CE-EA1",
        "description": "Argumenta sobre la función de los distintos lenguajes artísticos en la construcción histórica de la sociedad en los contextos."
      },
      {
        "code": "CE-EA2",
        "description": "Elabora propuestas artísticas, individuales y colectivas, mediante el uso de referentes estéticos, valorando la importancia del arte como medio de comunicación y transformación social."
      },
      {
        "code": "CE-EA3",
        "description": "Utiliza elementos técnicos de distintas expresiones artísticas en sus proyectos personales y colectivos comprendiendo mensaje, forma y contenido."
      },
      {
        "code": "CE-EA4",
        "description": "Interpreta y crea piezas utilizando lenguajes artísticos a partir de aspectos sociales del contexto y que reflejan su identidad cultural."
      },
      {
        "code": "CE-EA5",
        "description": "Realiza procesos creativos integrando herramientas tecnológicas como apoyo en producciones artísticas."
      },
      {
        "code": "CE-EA6",
        "description": "Analiza el modo de utilización óptima de materiales, recursos y espacios propios de las artes y sus lenguajes en el cuidado de su cuerpo y conducta para la mejora de su salud y la de los distintos ambientes naturales y ecosistemas."
      },
      {
        "code": "CE-EA7",
        "description": "Utiliza elementos de los lenguajes artísticos como medio de expresión de su identidad personal, social y cultural."
      }
    ],
    "educacion-fisica": [
      {
        "code": "CE-EF1",
        "description": "Se comunica en su entorno social y cultural, a partir de la realización de actividades motrices en grupo."
      },
      {
        "code": "CE-EF2",
        "description": "Domina su acción motriz, a partir de su nivel de percepción y apreciación de patrones, tamaños, formas, direcciones y relaciones espaciales y temporales dinámicas en diversos entornos, con base en la noción de su esquema corporal."
      },
      {
        "code": "CE-EF3",
        "description": "Utiliza el desarrollo de distintos niveles de desempeño motriz a partir de sus condiciones físicas naturales, a fin de alcanzar eficacia motora progresiva en situaciones variables (juegos, deportes, trabajo)."
      },
      {
        "code": "CE-EF4",
        "description": "Muestra dominio en la realización de actividades motrices en grupo, asumiendo su responsabilidad en el trabajo en equipo."
      },
      {
        "code": "CE-EF4",
        "description": "Descubre mediante análisis, las características de implementos deportivos específicos, con la finalidad de usarlos en forma efectiva en situaciones de juegos y deportes."
      },
      {
        "code": "CE-EF6",
        "description": "Identifica los factores y situaciones de riesgo para su salud, de los demás y de su entorno, para contribuir en el cuidado personal y del medioambiente durante las actividades físicas."
      },
      {
        "code": "CE-EF7",
        "description": "Establece relación entre sus actividades corporales y el desarrollo de las habilidades motrices y las capacidades Físicas, con el fin de mantener la motivación y disponibilidad corporal en el juego."
      }
    ],
    "fihr": [
      {
        "code": "CE-FIHR1",
        "description": "Establece criterios sobre el respeto a la vida humana en todas sus etapas, a partir de los derechos humanos, los valores éticos y religiosos presentes en su contexto familiar, escolar y social."
      },
      {
        "code": "CE-FIHR2",
        "description": "Argumenta sobre la práctica de valores vinculados al trabajo, a fin de identificar su aporte al desarrollo de las personas, la familia y la sociedad."
      },
      {
        "code": "CE-FIHR3",
        "description": "Analiza su realidad familiar y social, tomando en cuenta valores humanos y cristianos, a fin de plantear y promover estrategias de solución a los conflictos."
      },
      {
        "code": "CE-FIHR4",
        "description": "Constata en la misión de Jesús de Nazaret la manifestación del amor de Dios hacia las personas, con el fin de desarrollar actitudes y acciones que favorezcan el bienestar de los demás."
      },
      {
        "code": "CE-FIHR5",
        "description": "Explica partir de criterios éticos la contribución de las ciencias y las tecnologías para el desarrollo de la sociedad, la vida humana y el entorno natural."
      },
      {
        "code": "CE-FIHR6",
        "description": "Propone acciones que fomentan el cuidado y sostenibilidad del entorno natural como casa común en su familia, escuela y comunidad para asumirlas y promoverlas."
      },
      {
        "code": "CE-FIHR7",
        "description": "Reconoce los cambios que experimenta en la etapa de la adolescencia e identifica su influencia en sus intereses y comportamientos, con el propósito de tomar decisiones que favorezcan su desarrollo humano y espiritual."
      }
    ]
  },
  "3": {
    "lengua-espanola": [
      {
        "code": "CE-LE1",
        "description": "Demuestra dominio, desenvolvimiento y creatividad al comunicarse eficazmente de manera personal y colectiva en su entorno familiar, escolar y de la comunidad, utilizando un género textual (funcional o literario), a partir de la comprensión y producción oral y escrita, la utilización responsable de las TIC y demás medios."
      },
      {
        "code": "CE-LE2",
        "description": "Demuestra la validez de las informaciones sostenidas en los juicios, puntos de vista, conclusiones, acciones y pensamientos que construye, usando un género textual que respete la diversidad de opiniones."
      },
      {
        "code": "CE-LE3",
        "description": "Presenta resultados de investigaciones a través de textos específicos, orales y escritos, como ensayos o informes, que evidencian la solución de problemas en contextos determinados, con una postura de criticidad, valoración y respeto a los datos citados."
      },
      {
        "code": "CE-LE4",
        "description": "Produce textos en la elaboración de proyectos encaminados a la construcción de una ciudadanía responsable, abierta e inclusiva que busca soluciones colectivas a los problemas sociales."
      },
      {
        "code": "CE-LE5",
        "description": "Expone investigaciones científicas sencillas que realiza, apoyándose en el uso de textos de secuencia expositivo-explicativa en actos de intercomunicación que se desarrollan en la escuela y otros contextos, tomando en cuenta su conocimiento en la utilización de variadas herramientas tecnológicas con que cuenta."
      },
      {
        "code": "CE-LE6",
        "description": "Promueve comportamientos y valores sobre la conservación de la salud, de la naturaleza y sus ecosistemas, mediante el uso de textos variados y a través del desarrollo de actividades de intercomunicación en diferentes contextos de la comunidad."
      },
      {
        "code": "CE-LE7",
        "description": "Valora y promueve el uso de la lengua oral y escrita al realizar lecturas y escrituras reflexivas, canalizando emociones y sentimientos, hacia el fortalecimiento de las relaciones humanas y el respeto a la dignidad."
      }
    ],
    "ingles": [
      {
        "code": "CE-LEI1",
        "description": "Comprende y expresa ideas, sentimientos y valores culturales en distintas situaciones de comunicación concretas sobre temas cotidianos, utilizando el idioma inglés para explicar, sugerir, hacer prohibiciones y advertencias, dar instrucciones, dar noticias, secuenciar eventos, inferir, predecir y comparar"
      },
      {
        "code": "CE-LEI2",
        "description": "Se comunica en el idioma inglés breve y sencillo en forma oral y escrita, mediante el razonamiento y la reflexión lógico-verbal con el propósito de estructurar mensajes coherentes que presenta de una forma creativa, ejerciendo su pensamiento analítico."
      },
      {
        "code": "CE-LEI3",
        "description": "Interactúa en inglés con el propósito de expresar opiniones, explicaciones y predicciones, así como dar sugerencias, indicaciones e instrucciones ante diversas circunstancias de su entorno inmediato, empleando estrategias de desempeño oral y escrito que permiten comprenderse con escucha y lectura atenta de su interlocutor."
      },
      {
        "code": "CE-LEI4",
        "description": "Se comunica de forma oral y escrita en el idioma inglés, participando con cortesía y respeto en intercambios sencillos, valorando las diferencias individuales y la identidad social y cultural básicas, propias de la cultura local y global."
      },
      {
        "code": "CE-LEI5",
        "description": "Interactúa en el idioma inglés con el propósito de solicitar y ofrecer explicaciones, opinar, dar instrucciones y dar noticias sobre asuntos científicos, tecnológicos y de otra índole, en distintas situaciones de comunicación"
      },
      {
        "code": "CE-LEI6",
        "description": "Muestra inclinación por estilos de vida saludables y cuidado del medio ambiente al interactuar en distintas situaciones de comunicación en el idioma inglés, donde se intercambia información sobre indicaciones, prohibiciones, advertencias, opiniones y sugerencias."
      },
      {
        "code": "CE-LEI7",
        "description": "Se comunica en el idioma inglés, con cortesía, honestidad, actitud de respeto y aceptación al compartir información y expresar puntos de vista sobre hechos e informaciones que le son conocidas y de su interés."
      }
    ],
    "frances": [
      {
        "code": "CE-LEF1",
        "description": "Se comunica en francés oral y escrito, utilizando frases y oraciones básicas, breves y sencillas, previamente ensayadas, referentes a temas cotidianos en situaciones inmediatas comunicativas, donde indica la ubicación, describe las condiciones atmosféricas, y las actividades que se llevan cabo en planes futuros."
      },
      {
        "code": "CE-LEF2",
        "description": "Se comunica en el idioma francés, utilizando la lógica verbal para estructurar un repertorio creciente de frases y expresiones breves y sencillas que ensaya y presenta en distintas situaciones inmediatas de comunicación de forma creativa previamente planificada, necesitando ayuda al expresarse y esfuerzo para ser comprendido."
      },
      {
        "code": "CE-LEF3",
        "description": "Comprende y expresa informaciones relevantes para resolver situaciones y problemas de su entorno cotidiano y necesidades inmediatas de comunicación, tales como la descripción de sí mismo, personas, lugares, objetos, condiciones atmosféricas y planes futuros, utilizando frases hechas y oraciones muy breves y sencillas, con la ayuda de su interlocutor para poder expresarse y poder ser comprendido."
      },
      {
        "code": "CE-LEF4",
        "description": "Se comunica de forma oral y escrita, con cortesía, respeto y asertividad, en intercambios muy sencillos en francés, identificando las diferencias individuales y la identidad social y cultural propia y de otros países y detalles de información personal relativas a actividades cotidianas, medios de transporte, lugares, clima y planes futuros."
      },
      {
        "code": "CE-LEF5",
        "description": "Reconoce, organiza y comparte en formato físico, digital o en línea, información relativa a la ciencia y la tecnología presentes en su entorno cotidiano, utilizando un vocabulario ensayado que requiere de mínimo esfuerzo para ser comprendido."
      },
      {
        "code": "CE-LEF6",
        "description": "Interactúa mostrando preferencia por opciones que impactan positivamente la salud y el medio ambiente, en distintas situaciones inmediatas de comunicación oral y escrita, donde identifica y describe actividades que realiza, sus planes y las condiciones del entorno."
      },
      {
        "code": "CE-LEF7",
        "description": "Interactúa con otras personas en el idioma francés, con cortesía actitud de respeto, honestidad y aceptación, al compartir informaciones, describir actividades cotidianas y planes, objetos de su pertenencia, lugares y condiciones atmosféricas de su comunidad."
      }
    ],
    "matematicas": [
      {
        "code": "CE-MAT1",
        "description": "Evalúa ideas matemáticas utilizando para su interpretación las destrezas de leer, escuchar y visualizar."
      },
      {
        "code": "CE-MAT2",
        "description": "Evalúa conjeturas y argumentos matemáticos para dar validez a sus propias ideas sobre temas del área y de otras disciplinas."
      },
      {
        "code": "CE-MAT3",
        "description": "Genera soluciones y estrategias en situaciones de problemas nuevos, de pasos múltiples y no rutinarias en las diferentes áreas de la matemática y fuera de ésta."
      },
      {
        "code": "CE-MAT4",
        "description": "Genera ideas y opciones creativas en el trabajo colaborativo para la búsqueda de soluciones a situaciones que impliquen conocimientos matemáticos."
      },
      {
        "code": "CE-MAT5",
        "description": "Analiza discriminando la pertinencia de diferentes tipos de herramientas tecnológicas para la resolución de problemas matemáticos en situaciones del entorno."
      },
      {
        "code": "CE-MAT6",
        "description": "Analiza problemas relacionados con la salud y el medioambiente para la comprensión de los modelos matemáticos empleados en su solución."
      },
      {
        "code": "CE-MAT7",
        "description": "Muestra actitud crítica en la búsqueda de soluciones a situaciones relacionadas con el quehacer matemático, respetando los diferentes puntos de vistas de sus compañeros"
      }
    ],
    "ciencias-sociales": [
      {
        "code": "CE-CS1",
        "description": "Demuestra en sus proyectos de investigación respeto por la autoría de las fuentes primaria y secundaria consultadas sobre procesos sociales, políticos, económicos, históricos, geográficos o culturales, con la finalidad de avalar la originalidad y credibilidad de sus informaciones."
      },
      {
        "code": "CE-CS2",
        "description": "Comprende las relaciones geopolíticas entre las diferentes naciones y regiones a lo largo de la historia, así como los cambios ocurridos por los factores geográficos, con la finalidad de fomentar el desarrollo del pensamiento crítico y el análisis de informaciones en el tiempo y el espacio."
      },
      {
        "code": "CE-CS3",
        "description": "Aplica procedimientos científicos en el levantamiento de informaciones para solucionar un problema, con la finalidad de comprobar su impacto en el tiempo y en el espacio."
      },
      {
        "code": "CE-CS4",
        "description": "Incorpora en su proyectos e investigaciones, estrategias que propicien la cultura de paz y el respeto por los valores culturales e interculturales; con la finalidad de promover una convivencia democrática y el respeto a los derechos humanos."
      },
      {
        "code": "CE-CS5",
        "description": "Aplica el método científico al realizar explicaciones de fenómenos naturales y sociales en sus investigaciones y proyectos, con la finalidad de comprobar la validez de las teorías que las sustentan."
      },
      {
        "code": "CE-CS6",
        "description": "Verifica en propuestas y proyectos de investigación el impacto de la acción humana sobre la salud y el medioambiente, con la finalidad de presentar posibles soluciones a estas problemáticas."
      },
      {
        "code": "CE-CS7",
        "description": "Promueve la empatía y la comprensión a través de relaciones armoniosas y equilibradas, con la finalidad de contribuir en la formación de una ciudadanía responsable y el fomento de prácticas democráticas."
      }
    ],
    "ciencias-naturaleza": [
      {
        "code": "CE-CN1",
        "description": "Se comunica utilizando el lenguaje científico y tecnológico de ciencias físicas, al expresar sus ideas básicas en respuestas a preguntas y situaciones de problemas simulados y reales."
      },
      {
        "code": "CE-CN2",
        "description": "Ofrece explicaciones científicas y tecnológicas a problemas y fenómenos naturales relacionados a Ciencias Físicas."
      },
      {
        "code": "CE-CN3",
        "description": "Aplica procedimientos científicos y tecnológicos, básicos y organizados para solucionar problemas o dar respuestas a fenómenos naturales relacionados con Ciencias Físicas."
      },
      {
        "code": "CE-CN4",
        "description": "Analiza la naturaleza de las ciencias naturales y el alcance del desarrollo tecnológico en nuestra sociedad relacionada con Ciencias Físicas, sus aportes y reflexiones éticos."
      },
      {
        "code": "CE-CN5",
        "description": "Se cuestiona e identifica problemas y situaciones, y les da explicación, utilizando ideas y procesos fundamentales de las Ciencias Físicas y las ingenierías, así como recurso las TIC."
      },
      {
        "code": "CE-CN6",
        "description": "Actúa con responsabilidad crítica y autónoma, para el cuidado de su salud y ambiental relacionada con Ciencias Físicas."
      },
      {
        "code": "CE-CN7",
        "description": "Gestiona actitudes intelectuales, emocionales y conductuales proactivas al desarrollo de su proyección personal desde las Ciencias Físicas."
      }
    ],
    "educacion-artistica": [
      {
        "code": "CE-EA1",
        "description": "Realiza producciones artísticas incorporando aspectos fundamentales de los lenguajes artísticos y del contexto planteado por las ideas y épocas, difundiendo sus creaciones."
      },
      {
        "code": "CE-EA2",
        "description": "Emprende proyectos artísticos colectivos, valorando críticamente las distintas manifestaciones integradas, al identificar sus componentes y reconocer su trascendencia."
      },
      {
        "code": "CE-EA3",
        "description": "Realiza producciones incorporando aspectos fundamentales de los lenguajes artísticos y del contexto planteado por las ideas y épocas, difundiendo sus creaciones."
      },
      {
        "code": "CE-EA4",
        "description": "Emprende proyectos artísticos colectivos que tengan un impacto social o cultural, a partir del análisis del arte popular como fruto de la necesidad de comunicación de los pueblos."
      },
      {
        "code": "CE-EA5",
        "description": "Analiza los recursos tecnológicos como protagonistas y mediadores de las tramas, los ambientes y los espacios creados en producciones artísticas."
      },
      {
        "code": "CE-EA6",
        "description": "Promueve el uso adecuado de recursos al crear o valorar en el arte técnicas de reúso, reducción y reciclaje de materiales de desecho y cuidado de los ambientes."
      },
      {
        "code": "CE-EA7",
        "description": "Incorpora valores en sus interpretaciones y creaciones, utilizando lenguajes artísticos y considerando aspectos de su contexto."
      }
    ],
    "educacion-fisica": [
      {
        "code": "CE-EF1",
        "description": "Muestra dominio motriz en la utilización de su cuerpo para expresar sentimientos, emociones y estados de ánimo en relación armónica con las demás personas y su entorno social y cultural."
      },
      {
        "code": "CE-EF2",
        "description": "Muestra dominio eficaz de su acción motriz individual y grupal, como resultante de su percepción y apreciación de patrones, tamaños, formas, direcciones y relaciones espaciales y temporales en diversos entornos, a partir de la noción de su esquema corporal."
      },
      {
        "code": "CE-EF3",
        "description": "Muestra dominio del perímetro de juego y de las características de sus distintos implementos, con el fin de lograr niveles adecuados de desempeño motriz en juegos y deportes, a partir de sus condiciones Físicas naturales permitiéndole alcanzar eficacia motora progresiva."
      },
      {
        "code": "CE-EF4",
        "description": "Se relaciona con los demás, con respeto y responsabilidad, en la realización de acciones motrices diversas, a fin de reconocer sus diferencias y similitudes y considerarse parte de un grupo."
      },
      {
        "code": "CE-EF5",
        "description": "Aplica distintos niveles de su capacidad motora con base en sus condiciones físicas naturales para lograr un desempeño motriz eficaz en diversas situaciones de juegos, deportes, trabajo y de la vida cotidiana."
      },
      {
        "code": "CE-EF6",
        "description": "Interpreta los cambios físicos que le permite el dominio corporal y la eficiencia motora, con el fin de establecer una relación armónica, saludable y creativa con el espacio que lo rodea y con las demás personas."
      },
      {
        "code": "CE-EF7",
        "description": "Utiliza sus habilidades motrices y capacidades físicas en la realización de tareas acorde con su desarrollo corporal, a los fines de alcanzar las metas en el juego a la vez que disfruta de este."
      }
    ],
    "fihr": [
      {
        "code": "CE-FIHR1",
        "description": "Promueve el valor de la vida a partir de los derechos humanos, las enseñanzas del cristianismo y de otras concepciones religiosas en sus relaciones interpersonales."
      },
      {
        "code": "CE-FIHR2",
        "description": "Analiza las habilidades, actitudes, características, talentos, intereses y valores vinculados al mundo laboral, a fin de ir visualizando su proyecto de vida en la sociedad."
      },
      {
        "code": "CE-FIHR3",
        "description": "Fomenta la resolución y prevención de conflictos interpersonales, basado en el diálogo y la escucha, a fin de propiciar la convivencia armónica en su familia, la escuela y la sociedad."
      },
      {
        "code": "CE-FIHR4",
        "description": "Plantea la forma en que los valores practicados por Jesús de Nazaret están presentes en el contexto sociocultural dominicano, a fin de incorporarlos en su relación con las demás personas."
      },
      {
        "code": "CE-FIHR5",
        "description": "Analiza a partir de criterios éticos los avances científicos y tecnológicos con la finalidad de proteger la vida y la sostenibilidad del entorno natural."
      },
      {
        "code": "CE-FIHR6",
        "description": "Desarrolla acciones de protección y cuidado al entorno natural, a partir de los valores de Jesús de Nazaret y otros líderes, en su familia, escuela y comunidad, a fin de fomentar el cuidado de la casa común creada por Dios para el disfrute de todos."
      },
      {
        "code": "CE-FIHR7",
        "description": "Responde a las interrogantes que surgen en la etapa de la adolescencia mediante el cultivo de valores humanos, morales, éticos y religiosos, con la finalidad de actuar de forma apropiada en su familia, la escuela y la comunidad."
      }
    ]
  },
  "4": {
    "lengua-espanola": [
      {
        "code": "CE-LE1",
        "description": "Emplea adecuadamente un género textual, siguiendo los procesos de compresión y producción oral y escrita con creatividad, así como el uso de las TIC y otros recursos y medios, al comunicarse en diferentes contextos."
      },
      {
        "code": "CE-LE2",
        "description": "Usa secuencias argumentativas (hechos, ejemplos, analogías, argumentos y contraargumentos), en discursos orales y escritos, abordados con temas sociales de su realidad y fuera de esta."
      },
      {
        "code": "CE-LE3",
        "description": "Describe problemas de su vida familiar, estudiantil y social, utilizando un tipo de texto como el informe de investigación, en el punto de partida para su estudio y aporte de posibles soluciones."
      },
      {
        "code": "CE-LE4",
        "description": "Sintetiza a través de textos variados relaciones socioculturales de entornos diversos, valorando las propiedades naturales que ponen de relieve hechos y tradiciones históricas."
      },
      {
        "code": "CE-LE5",
        "description": "Explica conocimientos de procesos investigativos científicos y del uso de tecnología, a través de textos de secuencia expositivo-explicativa, acorde con su grado y las necesidades contextuales."
      },
      {
        "code": "CE-LE6",
        "description": "Manifiesta conocimientos y experiencia sobre situaciones relacionadas con salud, medioambiente y la comunidad, mediante textos de secuencias y géneros variados, a través de herramientas tecnológicas y otros medios y recursos."
      },
      {
        "code": "CE-LE7",
        "description": "Evidencia conocimiento y comprensión de sí mismo y de los demás, expresando su percepción del mundo, mediante un tipo de texto adecuado a las situaciones personales y sociales."
      }
    ],
    "ingles": [
      {
        "code": "CE-LEI1",
        "description": "Interactúa en el idioma inglés de forma sostenida y comprensible, utilizando una estructura sencilla del discurso en distintas situaciones de comunicación para informar, dar instrucciones, narrar, opinar, expresar planes futuros y explicar problemas sobre aspectos de la vida diaria y temas que le son familiares o de su interés."
      },
      {
        "code": "CE-LEI2",
        "description": "Interactúa de forma sencilla en el idioma inglés en distintas situaciones de comunicación sobre temas habituales, utilizando una estructura lógica y creativa en el discurso donde se expresan opiniones, se hacen predicciones y se relatan experiencias, empleando estrategias de desempeño comunicativo."
      },
      {
        "code": "CE-LEI3",
        "description": "Describe situaciones y problemas de su entorno inmediato y su vida diaria de forma sencilla, detallada y comprensible para facilitar la solución y el abordaje de éstos, compartiendo informaciones, ideas, razonamientos y puntos de vista, motivos, planes e instrucciones en el idioma inglés."
      },
      {
        "code": "CE-LEI4",
        "description": "Se relaciona con las demás personas con cortesía, respeto e integridad, valorando las diferencias individuales y la identidad social y cultural local y de otros países al comunicarse en el idioma inglés, de forma oral y escrita."
      },
      {
        "code": "CE-LEI5",
        "description": "Localiza, organiza y comparte información pertinente en formato físico, digital o virtual sobre temas de carácter científico y tecnológico propios de su contexto cotidiano o de situaciones de su interés."
      },
      {
        "code": "CE-LEI6",
        "description": "Comunica preferencia de estilos de vida saludables y cuidado del medioambiente, en distintas situaciones sencillas de comunicación en inglés oral y escrito."
      },
      {
        "code": "CE-LEI7",
        "description": "Se comunica en el idioma inglés con cortesía, honestidad y actitud de respeto al expresar o escuchar opiniones, deseos, relato de experiencias y planes futuros."
      }
    ],
    "frances": [
      {
        "code": "CE-LEF1",
        "description": "Comprende y expresa ideas, sentimientos y valores culturales en distintas situaciones de comunicación, utilizando el idioma francés con frases y oraciones básicas, con la intención de comprar, solicitar y ofrecer información sobre servicios en una ciudad, estados físicos, de ánimo y de salud, relativos a necesidades inmediatas y a temas cotidianos."
      },
      {
        "code": "CE-LEF2",
        "description": "Se comunica en el idioma francés de forma muy breve y sencilla en distintas situaciones de comunicación sobre necesidades inmediatas y temas cotidianos, utilizando el pensamiento lógico verbal, la creatividad y un espíritu observador, necesitando ayuda al expresarse y esfuerzo del interlocutor para ser comprendido"
      },
      {
        "code": "CE-LEF3",
        "description": "Comprende y expresa informaciones relevantes para resolver situaciones y problemas de su entorno cotidiano y necesidades inmediatas de comunicación, con la finalidad de compartir información personal, estados de salud físicos y anímicos, sentimientos y adquisición de bienes y servicios en la ciudad y comprar, utilizando frases y oraciones muy breves y sencillas."
      },
      {
        "code": "CE-LEF4",
        "description": "Se comunica de forma oral y escrita, con cortesía, respeto, honestidad y asertividad, en intercambios muy sencillos en francés, identificando las diferencias individuales y la identidad social y cultural propia y de otros países con la finalidad solicitar y ofrecer información personal, estados de salud, físicos y necesidades, así como servicios en la ciudad y compras."
      },
      {
        "code": "CE-LEF5",
        "description": "Identifica, organiza y comparte en formato físico, digital o en línea, información relativa a la ciencia y la tecnología presentes en su entorno cotidiano, al describir estados de salud, anímicos y físicos e informar sobre servicios y compras, haciendo uso de vocabulario limitado y oraciones muy breves y sencillas."
      },
      {
        "code": "CE-LEF6",
        "description": "Expresa preferencia por opciones que impactan positivamente la salud propia y de otras personas, el medio ambiente y su entorno próximo, en distintas situaciones concretas de comunicación oral y escrita, con la finalidad de compartir información personal, estados de salud físicos y anímicos, sentimientos y servicios en la ciudad y comprar, utilizando frases y oraciones muy breves y sencillas."
      },
      {
        "code": "CE-LEF7",
        "description": "Se comunica en el idioma francés, en intercambios muy sencillos, con cortesía, honestidad, asertividad y actitud de respeto, aceptación y cuidado de sí mismo/a y de las demás personas en situaciones diversas de la vida cotidiana."
      }
    ],
    "matematicas": [
      {
        "code": "CE-MAT1",
        "description": "Comprende la matemática leída en textos apropiados a su nivel de desarrollo, formulando preguntas de aclaración y ampliación, para clasificar conceptos y relaciones matemáticas."
      },
      {
        "code": "CE-MAT2",
        "description": "Construye argumentos sencillos haciendo uso de sus conocimientos y de reglas de razonamiento lógico para dar validez a las propias ideas matemáticas."
      },
      {
        "code": "CE-MAT3",
        "description": "Aplica estrategias integradas de resolución de problemas para investigar y entender conceptos matemáticos."
      },
      {
        "code": "CE-MAT4",
        "description": "Transmite asertivamente los propios puntos de vista para generar opciones creativas frente a la interpretación de situaciones matemáticas respetando las diferentes propuestas de los demás."
      },
      {
        "code": "CE-MAT5",
        "description": "Utiliza herramientas tecnológicas para la resolución de problemas y situaciones matemáticas diversas."
      },
      {
        "code": "CE-MAT6",
        "description": "Emplea sus conocimientos matemáticos conectándolos con otras áreas y disciplinas para comprender los fenómenos naturales que afectan el medioambiente."
      },
      {
        "code": "CE-MAT7",
        "description": "Muestra relaciones positivas en el trabajo matemático, en equipo, aportando soluciones frente a situaciones problemáticas relativas a la comunidad."
      }
    ],
    "ciencias-sociales": [
      {
        "code": "CE-CS1",
        "description": "Analiza en fuentes primarias y secundarias procesos sociales, políticos, económicos, históricos, geográficos o culturales, con la finalidad de elaborar proyectos fundamentados en información verificable y confiable."
      },
      {
        "code": "CE-CS2",
        "description": "Reconoce a través de propuestas o proyectos de investigación, hechos históricos ocurridos en diferentes periodos con el espacio geográfico; con la finalidad de desarrollar una conciencia crítica sobre los cambios económicos, políticos, sociales y culturales que se produjeron en el tiempo y el espacio."
      },
      {
        "code": "CE-CS3",
        "description": "Relaciona en investigaciones y producciones la existencia de un problema y situaciones que se presentan; con la finalidad de ubicarlos en un espacio y tiempo determinado."
      },
      {
        "code": "CE-CS4",
        "description": "Utiliza habilidades y conocimientos adquiridos al promover la convivencia democrática en cualquier contexto y en la defensa de los valores culturales e interculturales; con la finalidad de fomentar el respeto por la Constitución y los derechos humanos"
      },
      {
        "code": "CE-CS5",
        "description": "Compara informaciones científicas sobre teorías relacionadas con fenómenos naturales y sociales, a través del uso de la tecnología, con la finalidad de ofrecer explicaciones claras de los datos obtenidos."
      },
      {
        "code": "CE-CS6",
        "description": "Examina la importancia de un estilo de vida saludable y el cuidado de su entorno natural y social; con la finalidad de garantizar un ambiente saludable."
      },
      {
        "code": "CE-CS7",
        "description": "Valora la importancia de las relaciones basadas en el respeto entre las personas y la sociedad en general, con la finalidad de fomentar una convivencia armoniosa en la que se promueva el bienestar común."
      }
    ],
    "ciencias-naturaleza": [
      {
        "code": "CE-CN1",
        "description": "Se comunica utilizando el lenguaje científico y tecnológico fundamental de la biología que implica ideas, leyes, modelos y procesos."
      },
      {
        "code": "CE-CN2",
        "description": "Ofrece explicaciones y estrategias científicas y tecnológicas a problemas y fenómenos naturales relacionados con los fundamentos de la Biología."
      },
      {
        "code": "CE-CN3",
        "description": "Aplica diversos procedimientos científicos y tecnológicos para solucionar problemas o dar respuestas a fenómenos naturales relacionados con los fundamentos de la Biología."
      },
      {
        "code": "CE-CN4",
        "description": "Analiza críticamente la naturaleza y filosofía de la biología, bioingenierías y bioinformática, sus aportes, alcance del desarrollo tecnológico en nuestra sociedad y la bioética en la investigación."
      },
      {
        "code": "CE-CN5",
        "description": "Se cuestiona e identifica problemas y situaciones, y construye una explicación utilizando conceptos, modelos, leyes, teorías y procesos fundamentales de la biología y la biotecnología."
      },
      {
        "code": "CE-CN6",
        "description": "Asume y actúa con responsabilidad crítica y autónoma para un desarrollo sostenible, cuidado ambiental y su salud, basadas en las ideas y teorías de la biología."
      },
      {
        "code": "CE-CN7",
        "description": "Gestiona actitudes intelectuales, emocionales y conductuales proactivas al desarrollo de su proyección personal y profesional desde la biología, biotecnología."
      }
    ],
    "educacion-artistica": [
      {
        "code": "CE-EA1",
        "description": "Reconoce elementos identitarios y culturales, utilizando elementos de los lenguajes artísticos al comunicar sus expectativas, significados y valores."
      },
      {
        "code": "CE-EA2",
        "description": "Genera ideas, propuestas y mensajes, utilizando procesos propios de los lenguajes artísticos."
      },
      {
        "code": "CE-EA3",
        "description": "Comprende el arte como medio para dar soluciones creativas a necesidades expresivas."
      },
      {
        "code": "CE-EA4",
        "description": "Comprende su responsabilidad social, política y cultural al comunicarse de un modo creativo para influir en la mejora de su contexto."
      },
      {
        "code": "CE-EA5",
        "description": "Aplica métodos, técnicas y procesos de diferentes lenguajes artísticos expresando ideas y mensajes."
      },
      {
        "code": "CE-EA6",
        "description": "Reconoce la importancia del arte y la cultura, al crear obras y proyectos que impacten en la protección del medioambiente y la salud propia y colectiva."
      },
      {
        "code": "CE-EA7",
        "description": "Valora la diversidad cultural y respeta a las demás personas y como estas se manifiestan en las diferentes formas de expresión artística."
      }
    ],
    "educacion-fisica": [
      {
        "code": "CE-EF1",
        "description": "Comunica su estado de ánimo y emociones a partir de la noción de su esquema corporal, a los fines de mostrar la conciencia de su propio cuerpo."
      },
      {
        "code": "CE-EF2",
        "description": "Realiza cambios sencillos en su acción motriz, a partir de su percepción y apreciación de variación de patrones, tamaños, formas, direcciones y relaciones espaciales en diversos entornos."
      },
      {
        "code": "CE-EF3",
        "description": "Relaciona las reglas y los elementos técnicos deportivos con situaciones de la vida cotidiana, a fin de alcanzar los niveles adecuados de eficacia motora progresiva."
      },
      {
        "code": "CE-EF4",
        "description": "Realiza acciones motrices específicas colectivas, estableciendo relaciones de cooperación y/u oposición, a fin de favorecer el disfrute de las actividades físicas en el grupo, mediante el respeto a las diferencias individuales."
      },
      {
        "code": "CE-EF5",
        "description": "Propone algunas variantes en la normativa y organización del juego, a partir del conocimiento básico de las técnicas, condiciones del terreno y los implementos a utilizar, con el uso de herramientas tecnológicas..."
      },
      {
        "code": "CE-EF6",
        "description": "Interpreta los cambios físicos que le permiten el reconocimiento corporal y su eficiencia motora con la introducción de secuencias de movimientos, en una relación armónica saludable con su cuerpo y el entorno que le rodea."
      },
      {
        "code": "CE-EF7",
        "description": "Reconoce sus limitaciones y potencialidades corporales y motrices en diversas situaciones Físicas, mostrando motivación y disponibilidad para el disfrute de la actividad motriz y el juego para alcanzar el bienestar propio y colectivo."
      }
    ],
    "fihr": [
      {
        "code": "CE-FIHR1",
        "description": "Plantea la importancia de construir relaciones de paz y de respeto ante situaciones personales, familiares, sociales, culturales y religiosas a fin de resolver los conflictos interpersonales en su vida cotidiana."
      },
      {
        "code": "CE-FIHR2",
        "description": "Se interroga y busca respuestas sobre el sentido de la vida, a partir de las enseñanzas de Jesús de Nazaret a fin de fundamentar en principios y valores su realización personal."
      },
      {
        "code": "CE-FIHR3",
        "description": "Formula alternativas a situaciones, problemáticas y conflictos personales y familiares, tomando como referencia actitudes y valores de Jesús de Nazaret, a fin de fomentar relaciones armoniosas en su contexto familiar."
      },
      {
        "code": "CE-FIHR4",
        "description": "Plantea el trabajo como participación y desarrollo de la obra creadora de Dios, a fin identificar su contribución en la realización personal y en el progreso de la sociedad."
      },
      {
        "code": "CE-FIHR5",
        "description": "Aplica criterios éticos en el uso de las tecnologías de la información y la comunicación, a fin de favorecer la calidad de vida y la convivencia armónica en los diferentes contextos."
      },
      {
        "code": "CE-FIHR6",
        "description": "Implementa acciones en favor de una ecología humana y se siente parte de ella como criatura de Dios, a fin de aportar con el desarrollo sostenible que garantice el bienestar social."
      },
      {
        "code": "CE-FIHR7",
        "description": "Constata la universalidad del hecho religioso como apertura a la trascendencia en su contexto, a fin de reconocer el fenómeno religioso en cada cultura y asumir una postura de respeto ante las creencias de los demás."
      }
    ]
  },
  "5": {
    "lengua-espanola": [
      {
        "code": "CE-LE1",
        "description": "Muestra destrezas lingüísticas al exponer ideas y experiencias en diferentes situaciones de comunicación social, mediante un tipo de texto (funcional o literario) conveniente desde la comprensión y producción oral y escrita, usando medios y recursos diversos."
      },
      {
        "code": "CE-LE2",
        "description": "Analiza textos variados a partir de inferencias, demostrando un pensamiento estructurado que le lleva a conclusiones razonables y lógicas en diferentes contextos."
      },
      {
        "code": "CE-LE3",
        "description": "Selecciona textos específicos que apoyan el desarrollo de una investigación científica, siguiendo criterios de relevancia, pertinencia, validez y confiabilidad para la solución de problemas."
      },
      {
        "code": "CE-LE4",
        "description": "Emplea diversidad de textos de secuencia argumentativa, con los que conoce y cuestiona las prácticas sociales de ciudadanía en el entorno local y nacional, confrontándolas con valores universales."
      },
      {
        "code": "CE-LE5",
        "description": "Divulga a través textos de secuencia expositivo-explicativa hallazgos científicos, sociales y tecnológicos a lo largo del tiempo, para aportar soluciones a problemas de diferentes contextos."
      },
      {
        "code": "CE-LE6",
        "description": "Publica informaciones sobre temas relacionados con salud y medioambiente, a través de textos como catálogo, receta, artículos de opinión e instructivos, en el ámbito escolar y comunitario, haciendo uso de herramientas tecnológicas, entre otras."
      },
      {
        "code": "CE-LE7",
        "description": "Utiliza textos literarios y de otros tipos, para manifestar sus sentimientos, emociones, inquietudes en la promoción de valores universales y fortalecer la dimensión humanista."
      }
    ],
    "ingles": [
      {
        "code": "CE-LEI1",
        "description": "Se comunica en el idioma inglés oral y escrito de forma sostenida y comprensible y con una estructura básica del discurso en distintas situaciones de comunicación sobre aspectos la vida diaria y a temas que le son familiares o de su interés, en los que presenta información, solicitudes, quejas, contraste de elementos e ideas, sugerencias, narraciones de experiencias y probabilidades"
      },
      {
        "code": "CE-LEI2",
        "description": "Utiliza estructuras lógico-verbales sencillas del discurso para compartir información o ideas, narrar hechos reales o imaginarios, comparar elementos o ideas, y expresar probabilidad y certeza, empleando estrategias de desempeño comunicativo de forma crítica y creativa."
      },
      {
        "code": "CE-LEI3",
        "description": "Se comunica a través de textos sencillos y de forma sostenida en inglés para describir situaciones o problemas de su entorno de una forma clara y comprensible, compartiendo información relevante, datos, reclamos, sugerencias, y contrastando alternativas frente a las dificultades"
      },
      {
        "code": "CE-LEI4",
        "description": "Se comunica con las demás personas con cortesía, asertividad y respeto, valorando las diferencias individuales y la identidad social y cultural propias de la cultura local y de otros países al comunicarse en el idioma inglés de forma oral y escrita."
      },
      {
        "code": "CE-LEI5",
        "description": "Localiza, sistematiza y comparte información e ideas de carácter científico de forma oral y escrita, utilizando de manera comprensible el idioma inglés en distintas situaciones de comunicación presencial, digital o virtual."
      },
      {
        "code": "CE-LEI6",
        "description": "Muestra preferencia por las opciones que impactan positivamente la salud y el medio ambiente al pedir y dar consejos y sugerencias en temas de adquisición de bienes o servicios y consultas médicas, al interactuar en inglés de forma sostenida y comprensible."
      },
      {
        "code": "CE-LEI7",
        "description": "Se comunica en el idioma inglés, con cortesía, honestidad y actitud de respeto, al interactuar en situaciones cotidianas en forma sencilla donde comparte experiencias personales, deseos, aspiraciones y planes propios y de otras personas."
      }
    ],
    "frances": [
      {
        "code": "CE-LEF1",
        "description": "Comprende y expresa ideas, sentimientos y valores culturales en distintas situaciones de comunicación orales y escritas, utilizando el idioma francés de forma breve con la finalidad de describir personas y lugares, dar y pedir información sobre actividades cotidianas y de recreación, hacer prohibiciones e invitaciones y dar órdenes e instrucciones, con relación a necesidades concretas y temas cotidianos."
      },
      {
        "code": "CE-LEF2",
        "description": "Interactúa en el idioma francés empleando estrategias de desempeño, el razonamiento lógico y la expresión creativa y crítica, con el propósito de comunicarse de forma clara y efectiva en distintas situaciones concretas de comunicación oral y escrita, empleando frases y oraciones breves y sencillas."
      },
      {
        "code": "CE-LEF3",
        "description": "Se comunica en francés oral y escrito de forma básica, pero comprensible, compartiendo información que permite identificar, describir y abordar necesidades, problemas y situaciones comunes de su entorno inmediato."
      },
      {
        "code": "CE-LEF4",
        "description": "Se comunica con las demás personas en el idioma francés de forma oral y escrita, en intercambios breves y sencillos, con cortesía, honestidad, asertividad y respeto, siguiendo las normas de convivencia y organización establecidas y reconociendo las diferencias individuales, la identidad sociocultural y de otros países, relativos a rasgos físicos, formas de interactuar, preferencias, puntualidad, lugares de interés, tradiciones y recreación."
      },
      {
        "code": "CE-LEF5",
        "description": "Se comunica en el idioma francés de forma personal, digital o virtual, con la finalidad de compartir información, ideas y opiniones sobre asuntos científicos, tecnológicos y de otra índole de su entorno inmediato, en distintas situaciones de comunicación."
      },
      {
        "code": "CE-LEF6",
        "description": "Muestra preferencias por actividades cotidianas y opciones que impactan de forma positiva la salud propia y la de otras personas y el medioambiente en distintas situaciones de comunicación, utilizando frases y oraciones breves y sencillas de forma oral y escrita."
      },
      {
        "code": "CE-LEF7",
        "description": "Se comunica en el idioma francés con cortesía, asertividad, actitud de respeto, honestidad y aceptación al expresarse sobre sí mismo y las demás personas con el propósito de describir personas, dar órdenes y hacer prohibiciones."
      }
    ],
    "matematicas": [
      {
        "code": "CE-MAT1",
        "description": "Emplea ideas oralmente y por escrito, haciendo uso de la notación apropiada y valorando la potencia de esta en el desarrollo de las propias ideas matemáticas."
      },
      {
        "code": "CE-MAT2",
        "description": "Juzga la validez de un argumento matemático, haciendo uso de los conocimientos y las reglas de razonamiento lógico."
      },
      {
        "code": "CE-MAT3",
        "description": "Formula problemas a partir de situaciones dentro y fuera del contexto matemático y busca sus soluciones."
      },
      {
        "code": "CE-MAT4",
        "description": "Justifica, respetando e integrando el criterio de las demás personas, soluciones a problemas por medio de sus conocimientos matemáticos."
      },
      {
        "code": "CE-MAT5",
        "description": "Aplica herramientas tecnológicas para la toma de decisiones frente a determinados problemas dentro y fuera de la matemática."
      },
      {
        "code": "CE-MAT6",
        "description": "Aplica la metodología de resolución de problemas para descomponer y estudiar los problemas relativos a cambio climático y preservación del medioambiente."
      },
      {
        "code": "CE-MAT7",
        "description": "Aplica sus conocimientos matemáticos, mostrando interés en la discusión e interpretación de situaciones de su entorno."
      }
    ],
    "ciencias-sociales": [
      {
        "code": "CE-CS1",
        "description": "Desarrolla análisis críticos de información, utilizando fuentes primarias y secundarias; con la finalidad de establecer comparaciones respaldadas en información verificable y confiable entre eventos sociales, políticos, económicos, históricos, geográficos o culturales."
      },
      {
        "code": "CE-CS2",
        "description": "Contextualiza la relación existente entre los procesos históricos ocurridos en espacios geográficos de la isla de Santo Domingo, mediante el uso de hipótesis; con la finalidad presentar argumentaciones que evidencien su influencia en los cambios económicos, sociales, políticos y culturales del contexto en el que se produjeron."
      },
      {
        "code": "CE-CS3",
        "description": "Comprende la naturaleza y contexto de un problema o situación específica, incluyendo su ubicación temporal y espacial; con la finalidad de identificar sus posibles causas mediante la realización de investigaciones pertinentes que permitan desarrollar estrategias efectivas en garantes de su resolución."
      },
      {
        "code": "CE-CS4",
        "description": "Diseña propuestas de investigación que involucren activamente a diversos actores en la promoción de los valores culturales e interculturales garantes de la construcción ciudadana y de la convivencia democrática; con la finalidad de propiciar el respeto por la Constitución y los derechos humanos."
      },
      {
        "code": "CE-CS5",
        "description": "Integra el análisis de información científica sobre teorías relacionadas a fenómenos naturales y sociales, utilizando la tecnología, con la finalidad de ofrecer explicaciones claras y concisas de las informaciones obtenidas."
      },
      {
        "code": "CE-CS6",
        "description": "Explica situaciones que ponen en riesgo su salud y los recursos naturales, con la finalidad de promover el cuidado de su entorno y estilos de vida saludables."
      },
      {
        "code": "CE-CS7",
        "description": "Aplica propuestas que promuevan el respeto hacia su persona y la sociedad; con la finalidad de fomentar una convivencia armoniosa implicando el valor de la dignidad, los derechos y las necesidades de cada individuo sin discriminación o menosprecio hacia los demás."
      }
    ],
    "ciencias-naturaleza": [
      {
        "code": "CE-CN1",
        "description": "Se comunica utilizando el lenguaje científico y tecnológico fundamental de la química que implica ideas, leyes, modelos y procesos."
      },
      {
        "code": "CE-CN2",
        "description": "Ofrece explicaciones y estrategias científicas y tecnológicas a problemas y fenómenos naturales relacionados con los fundamentos de la química."
      },
      {
        "code": "CE-CN3",
        "description": "Aplica diversos procedimientos científicos y tecnológicos para solucionar problemas o dar respuestas a fenómenos naturales relacionados con los fundamentos de la química."
      },
      {
        "code": "CE-CN4",
        "description": "Analiza críticamente la naturaleza y filosofía de la química, ingenierías y las tecnologías, sus aportes, alcance del desarrollo tecnológico en nuestra sociedad y la ética en la investigación."
      },
      {
        "code": "CE-CN5",
        "description": "Se cuestiona e identifica problemas y situaciones, a la vez que construye una explicación utilizando conceptos, modelos, leyes, teorías y procesos fundamentales de la química y las ingenierías."
      },
      {
        "code": "CE-CN6",
        "description": "Asume y actúa con responsabilidad crítica y autónoma para un desarrollo sostenible, cuidado ambiental y su salud, basadas en las ideas y teorías de la química."
      },
      {
        "code": "CE-CN7",
        "description": "Gestiona actitudes intelectuales, emocionales y conductuales proactivas al desarrollo de su proyección personal y profesional desde la química e ingenierías"
      }
    ],
    "educacion-artistica": [
      {
        "code": "CE-EA1",
        "description": "Usa adecuadamente técnicas y lenguajes artísticos en la comunicación de vivencias personales y problemáticas comunitarias."
      },
      {
        "code": "CE-EA2",
        "description": "Analiza críticamente la pertinencia de técnicas, recursos y procesos creativos, al plantear ideas, propuestas y proyectos."
      },
      {
        "code": "CE-EA3",
        "description": "Realiza propuestas creativas y análisis crítico a partir de los resultados de sus investigaciones artísticas."
      },
      {
        "code": "CE-EA4",
        "description": "Genera proyectos artísticos que fomenten la tolerancia y convivencia pacífica."
      },
      {
        "code": "CE-EA5",
        "description": "Analiza el uso de los recursos tecnológicos y científicos en la creación artística en diferentes épocas."
      },
      {
        "code": "CE-EA6",
        "description": "Usa el poder comunicativo de las artes y sus manifestaciones, incentivando el desarrollo de conciencia ecológica y el cuidado de la salud."
      },
      {
        "code": "CE-EA7",
        "description": "Actúa con asertividad ante situaciones conflictivas, respetando las opiniones contrarias a las suyas, promoviendo el diálogo y mostrando control emocional."
      }
    ],
    "educacion-fisica": [
      {
        "code": "CE-EF1",
        "description": "Utiliza sus posibilidades de movimiento en su acción motriz, a fin de expresar su estado de ánimo, emociones y sentimientos."
      },
      {
        "code": "CE-EF2",
        "description": "Utiliza su percepción y apreciación de la variación de patrones y relaciones temporales en diversos entornos, con el fin de crear cambios en su acción motriz a partir de la noción de su esquema corporal."
      },
      {
        "code": "CE-EF3",
        "description": "Relaciona las reglas y los elementos técnicos deportivos con situaciones de la vida cotidiana, a fin de alcanzar los niveles adecuados de eficacia motora progresiva."
      },
      {
        "code": "CE-EF4",
        "description": "Realiza acciones motrices diversas con el grupo respetando las reglas del juego, con el objeto de establecer relaciones de cooperación y/u oposición, teniendo en cuenta las diferencias individuales para el disfrute de las actividades físicas."
      },
      {
        "code": "CE-EF5",
        "description": "Ejecuta los cambios necesarios en la aplicación de la normativa, técnicas e implementos que utiliza en las actividades de juego, a partir del reconocimiento de las características y condiciones del terreno donde se realiza y del uso de las herramientas adecuadas"
      },
      {
        "code": "CE-EF6",
        "description": "Valora los cambios físicos de su cuerpo e introduce acciones complejas para elevar la calidad en su eficiencia motora, adoptando un estilo de vida saludable en consonancia con el cuidado del medioambiente."
      },
      {
        "code": "CE-EF7",
        "description": "Utiliza sus habilidades motrices y capacidades corporales y motrices en el logro de metas y en la realización de actividades complejas y secuenciadas, mostrando satisfacción y bienestar en actividades colaborativas de juego."
      }
    ],
    "fihr": [
      {
        "code": "CE-FIHR1",
        "description": "Analiza el hecho religioso y las enseñanzas de Jesús de Nazaret en el Evangelio, con la finalidad de fomentar el respeto y el diálogo entre las diferentes confesiones cristianas."
      },
      {
        "code": "CE-FIHR2",
        "description": "Aplica las enseñanzas de personajes del Antiguo y del Nuevo Testamento, con la finalidad de dirigir su vida mediante la vivencia de valores en diferentes contextos."
      },
      {
        "code": "CE-FIHR3",
        "description": "Plantea alternativas de solución a situaciones sociales que afectan a la persona, la familia, la escuela y la comunidad, tomando en cuenta las enseñanzas de Jesús, con la finalidad de promover relaciones armoniosas en diferentes contextos."
      },
      {
        "code": "CE-FIHR4",
        "description": "Analiza los valores y el papel del trabajo en el desarrollo de los pueblos como continuación de la obra creadora de Dios, a fin de reconocer la importancia del trabajo para su vida y la sociedad."
      },
      {
        "code": "CE-FIHR5",
        "description": "Formula juicios éticos sobre el impacto de las ciencias y las tecnologías en la persona, la familia y la cultura, con la finalidad de asumir valores que protejan la vida en el uso de los avances tecnológicos que se dan en la sociedad."
      },
      {
        "code": "CE-FIHR6",
        "description": "Establece criterios éticos en la relación con el entorno natural creado por Dios, con la finalidad de crear conciencia y promoción del cuidado y protección de la naturaleza como casa común."
      },
      {
        "code": "CE-FIHR7",
        "description": "Asume la propuesta de Jesús como un estilo de vida que da sentido a las personas y a sus relaciones, con la finalidad de fomentar valores en sus proyectos de vida y en sus relaciones."
      }
    ]
  },
  "6": {
    "lengua-espanola": [
      {
        "code": "CE-LE1",
        "description": "Exhibe desenvolvimiento y creatividad al comunicarse eficazmente de manera personal y colectiva, utilizando un modelo textual, a partir de la comprensión y producción, con uso ético y responsable de plataformas tecnológicas y diferentes medios y recursos."
      },
      {
        "code": "CE-LE2",
        "description": "Expone la validez de informaciones diversas sostenidas en juicios, puntos de vista, conclusiones y acciones, usando un género textual conveniente, respetando las demás opiniones."
      },
      {
        "code": "CE-LE3",
        "description": "Presenta resultados de investigaciones a través de textos convenientes que evidencian soluciones de problemas, tomando en cuenta la audiencia y manifestando postura crítica, valórica y de respeto frente a lo que se lee, escucha y escribe."
      },
      {
        "code": "CE-LE4",
        "description": "Usa textos de secuencia argumentativa en la elaboración de proyectos como elemento clave, hacia la construcción de una ciudadanía responsable y dinámica que busca solución de problemas colectivos."
      },
      {
        "code": "CE-LE5",
        "description": "Explica resultados de investigaciones que realiza, apoyándose en el uso de textos de secuencia expositivo-explicativa, en actos de intercomunicación que se desarrollan en la escuela y otro contexto, utilizando herramientas tecnológicas y otros recursos."
      },
      {
        "code": "CE-LE6",
        "description": "Utiliza sus conocimientos en la promoción y divulgación de comportamientos y valores sobre la conservación de la salud, la naturaleza y sus ecosistemas, mediante el uso de textos y a través de actividades de intercomunicación en diferentes contextos de la comunidad, apoyados en recursos variados."
      },
      {
        "code": "CE-LE7",
        "description": "Canaliza emociones y sentimientos en lecturas y escrituras reflexivas, a través de un tipo de texto conveniente, fortaleciendo las relaciones humanas y el respeto a la dignidad propia y de otras personas."
      }
    ],
    "ingles": [
      {
        "code": "CE-LEI1",
        "description": "Se comunica en el idioma inglés de forma comprensible y con un discurso sostenido en el que, hipotetiza, compara épocas, justifica su criterio y costumbres y expresa experiencias, en distintas situaciones de comunicación sobre temas cotidianos, culturales o abstractos de su interés"
      },
      {
        "code": "CE-LEI2",
        "description": "Se comunica en el idioma inglés utilizando una estructura lógica y una presentación creativa del discurso para tratar temas abstractos o culturales de su interés, presentando informaciones, experiencias, razonamientos, y justificación de opinión de forma detallada y empleando estrategias de desempeño comunicativo."
      },
      {
        "code": "CE-LEI3",
        "description": "Describe problemas y situaciones de su entorno inmediato o de temas que le son familiares, planteando razonamientos e hipótesis, puntos de vista y acciones para su solución de forma comprensible, sencilla y detallada en inglés oral y escrito."
      },
      {
        "code": "CE-LEI4",
        "description": "Se relaciona con las demás personas con cortesía, respeto y valoración crítica de las diferencias individuales y la identidad social y cultural local y global, al interactuar en el idioma inglés, de forma oral y escrita."
      },
      {
        "code": "CE-LEI5",
        "description": "Se comunica en el idioma inglés de forma comprensible para expresar razonamientos, explicaciones y justificar sus aseveraciones sobre asuntos científicos y tecnológicos de su utilidad, en distintas situaciones cotidianas de comunicación"
      },
      {
        "code": "CE-LEI6",
        "description": "Justifica acciones y puntos de vista en interacciones sencilla y comprensibles en inglés, ofreciendo información, razonamientos y explicaciones relativas a estilos de vida saludables y cuidado del medioambiente, en distintas situaciones de comunicación"
      },
      {
        "code": "CE-LEI7",
        "description": "Se comunica en el idioma inglés, con cortesía, honestidad y actitud de respeto, al compartir informaciones, experiencias y razonamientos y puntos de vista."
      }
    ],
    "frances": [
      {
        "code": "CE-LEF1",
        "description": "Comprende y expresa ideas, sentimientos y valores culturales en distintas situaciones de comunicación, utilizando el idioma francés de forma breve y sencilla con la finalidad de procurar servicio de transporte, informar sobre viajes, relatar experiencias, interactuar en restaurantes y dar y pedir opiniones, en relación a necesidades concretas y temas cotidianos."
      },
      {
        "code": "CE-LEF2",
        "description": "Interactúa de forma oral y escrita en el idioma francés, empleando razonamiento lógico-verbal y estrategias de desempeño de manera creativa y crítica en distintas situaciones de comunicación, donde se busca procurar servicio de transporte, informar sobre viajes, relatar experiencias, interactuar en restaurantes y dar y pedir opiniones con expresiones breves y sencillas."
      },
      {
        "code": "CE-LEF3",
        "description": "Interactúa en francés ante diversas situaciones y problemas comunes de su entorno inmediato en las que procura servicio de transporte, informa sobre viajes, relata experiencias, interactúa en restaurantes y da y pide opiniones, empleando estrategias de desempeño oral y escrito para lograr la claridad del mensaje."
      },
      {
        "code": "CE-LEF4",
        "description": "Se comunica con las demás personas en el idioma francés de forma oral y escrita, con cortesía, honestidad, asertividad y respeto, en intercambios sencillos, siguiendo las normas de convivencia y organización establecidas y reconociendo las diferencias individuales y la identidad social y cultural propias de la comunidad local y global, relativas a transporte público, comidas, bebidas, lugares de interés, costumbres y tradiciones."
      },
      {
        "code": "CE-LEF5",
        "description": "Se comunica en el idioma francés de forma personal, digital o virtual con el propósito de relatar experiencias, opinar e intercambiar información sobre asuntos científicos, tecnológicos y de otra índole, en distintas situaciones de comunicación."
      },
      {
        "code": "CE-LEF6",
        "description": "Muestra preferencia por opciones que impactan positivamente la salud y el medioambiente al informar sobre viajes, procurar servicio de transporte, interactuar en restaurantes y dar y pedir opiniones en diversas situaciones de comunicación en el idioma francés, utilizando frases y oraciones sencillas."
      },
      {
        "code": "CE-LEF7",
        "description": "Interactúa en el idioma francés con cortesía, honestidad, asertividad, actitud de respeto y aceptación al referirse a sí mismo/a y a las demás personas, al expresar opiniones y relatar experiencias."
      }
    ],
    "matematicas": [
      {
        "code": "CE-MAT1",
        "description": "Formula definiciones y expresa generalizaciones resultado de la indagación y la resolución de problemas matemáticos."
      },
      {
        "code": "CE-MAT2",
        "description": "Construye demostraciones incluyendo aquellas indirectas y usando el principio de inducción, para comprobar teorías y proposiciones matemáticas."
      },
      {
        "code": "CE-MAT3",
        "description": "Analiza procesos de formulación de modelos matemáticos para resolver situaciones de problemas del mundo real."
      },
      {
        "code": "CE-MAT4",
        "description": "Trabaja en equipo, aceptando los argumentos ajenos, en la búsqueda de soluciones a problemas desde la matemática."
      },
      {
        "code": "CE-MAT5",
        "description": "Evalúa herramientas tecnológicas para la resolución de problemas diversos desde los conocimientos matemáticos, a fin de tomar decisiones en situaciones del contexto."
      },
      {
        "code": "CE-MAT6",
        "description": "Aplica la modelación matemática para la toma de decisiones sobre situaciones que afectan la salud y el medioambiente."
      },
      {
        "code": "CE-MAT7",
        "description": "Muestra autonomía a partir del empleo de estrategias diversas de cálculos matemáticos para dar solución a situaciones que se presentan en la comunidad, respetando el punto de vista de las demás personas."
      }
    ],
    "ciencias-sociales": [
      {
        "code": "CE-CS1",
        "description": "Reconoce en proyectos de investigación el valor de utilizar fuentes primarias y secundarias, con la finalidad presentar argumentos sólidos y confiables sobre hechos sociales, políticos, económicos, históricos, geográficos o cultural."
      },
      {
        "code": "CE-CS2",
        "description": "Compara la relación existente entre los procesos históricos ocurridos en espacios geográficos de la República Dominicana, mediante el uso de hipótesis, con la finalidad presentar argumentaciones que evidencien su influencia en los cambios económicos, sociales, políticos y culturales del contexto en el que se produjeron."
      },
      {
        "code": "CE-CS3",
        "description": "Explica en investigaciones y producciones la existencia de un problema y las diversas situaciones que pueden surgir en torno a él; con la finalidad de comprender sus implicaciones y las posibles soluciones que puedan ser implementadas en función de su contexto."
      },
      {
        "code": "CE-CS4",
        "description": "Elabora proyectos de investigación que fomenten la promoción de los valores culturales e interculturales, la construcción ciudadana y la convivencia democrática en cualquier espacio, con la finalidad de propiciar el respeto por la Constitución y los derechos humanos."
      },
      {
        "code": "CE-CS5",
        "description": "Realiza estudio comparativo de diferentes teorías relacionadas a fenómenos naturales y sociales utilizando la tecnología; con la finalidad de presentar artículos científicos y publicaciones especializadas, así como también datos que apoyen sus conclusiones."
      },
      {
        "code": "CE-CS6",
        "description": "Propone actividades que propician el cuidado de su entorno y estilos de vida saludable, con la finalidad de garantizar el cuidado de su salud y del medioambiente."
      },
      {
        "code": "CE-CS7",
        "description": "Ejemplifica relaciones de respeto a su persona y la sociedad; con la finalidad de construir una convivencia armoniosa al tratar a los demás con amabilidad y empatía, escuchar y considerar diferentes puntos de vista, resolver los conflictos de manera pacífica y constructiva, sin discriminación o menosprecio hacia los demás."
      }
    ],
    "ciencias-naturaleza": [
      {
        "code": "CE-CN1",
        "description": "Se comunica utilizando el lenguaje científico y tecnológico fundamental de la física que implica ideas, leyes, modelos y procesos."
      },
      {
        "code": "CE-CN2",
        "description": "Ofrece explicaciones y estrategias científicas y tecnológicas a problemas y fenómenos naturales relacionados con los fundamentos de la Física."
      },
      {
        "code": "CE-CN3",
        "description": "Aplica diversos procedimientos científicos y tecnológicos para solucionar problemas o dar respuestas a fenómenos naturales relacionados con los fundamentos de la Física."
      },
      {
        "code": "CE-CN4",
        "description": "Analiza críticamente la naturaleza y filosofía de la física, ingenierías y las tecnologías, sus aportes, alcance del desarrollo tecnológico en nuestra sociedad y la ética en la investigación."
      },
      {
        "code": "CE-CN5",
        "description": "Se cuestiona e identifica problemas y situaciones, y construye una explicación utilizando conceptos, modelos, leyes, teorías y procesos fundamentales de la Física y las ingenierías."
      },
      {
        "code": "CE-CN6",
        "description": "Asume y actúa con responsabilidad crítica y autónoma para un desarrollo sostenible, cuidado ambiental y de su salud, basadas en las ideas y teorías de la Física. IIL-16- Identifica de manera correcta situaciones o acciones de riesgo para su salud o el medio ambiente o de desarrollo sostenible."
      },
      {
        "code": "CE-CN7",
        "description": "Gestiona actitudes intelectuales, emocionales y conductuales proactivas al desarrollo de su proyección personal y profesional desde la física e ingenierías."
      }
    ],
    "educacion-artistica": [
      {
        "code": "CE-EA1",
        "description": "Comunica ideas artísticamente utilizando de manera creativa signos y símbolos."
      },
      {
        "code": "CE-EA2",
        "description": "Crea proyectos valorando las diversas formas de comunicación artística como medio de generación de recursos y emprendimiento."
      },
      {
        "code": "CE-EA3",
        "description": "Crea proyectos artísticos multidisciplinares que busquen dar respuestas a problemáticas sociales y/o personales."
      },
      {
        "code": "CE-EA4",
        "description": "Construye propuestas multidisciplinares de impacto social, que fortalezcan un sentido de identidad personal, comunitaria y que puedan significar un aporte a la cultura nacional."
      },
      {
        "code": "CE-EA5",
        "description": "Realiza propuestas artísticas a partir del uso adecuado de recursos tecnológicos."
      },
      {
        "code": "CE-EA6",
        "description": "Produce obras a partir de temáticas medioambientales, ecológicas y de salud pública, utilizando adecuadamente técnicas y lenguajes artísticos."
      },
      {
        "code": "CE-EA7",
        "description": "Se descubre como parte de una comunidad, a partir de reflexiones sobre problemáticas sociales y culturales que la afectan y que refleja en la ejecución de los proyectos y propuestas artísticas."
      }
    ],
    "educacion-fisica": [
      {
        "code": "CE-EF1",
        "description": "Emplea su conocimiento amplio de su esquema corporal, para comunicar ideas y emociones en relaciones temporal- espacial en diversos entornos."
      },
      {
        "code": "CE-EF2",
        "description": "Emprende la creación de acciones motrices innovadoras a partir de la noción de su esquema corporal, como resultante de la variación de patrones, tamaños, formas, direcciones y relaciones temporal-espacial en diversos entornos."
      },
      {
        "code": "CE-EF3",
        "description": "Aplica las reglas y los elementos técnicos de las diversas modalidades deportivas en situaciones táctico-estratégicas, a los fines de fortalecer el desarrollo de habilidades y destrezas técnicas que facilitan el buen desempeño de la práctica deportiva en situaciones de la vida cotidiana."
      },
      {
        "code": "CE-EF4",
        "description": "Reconstruye reglas de juego en actividades motrices diversas junto con sus compañeros relaciones de cooperación y/u oposición e interactuando adecuadamente, con el fin de fortalecer el trabajo en equipo valorando las diferencias individuales."
      },
      {
        "code": "CE-EF5",
        "description": "Domina su esquema corporal en la realización de diversas actividades motrices deportivas, como resultado del análisis de las normas técnicas, los implementos y condiciones del espacio donde se lleva a cabo, con el uso de los medios digitales y dispositivos tecnológicos idóneos."
      },
      {
        "code": "CE-EF6",
        "description": "Domina los cambios que percibe en su cuerpo que le permiten el incremento en su actividad motora y realizar acciones complejas, a fin de desarrollar una relación armónica, saludable y creativa con el espacio que lo rodea y con las demás personas."
      },
      {
        "code": "CE-EF7",
        "description": "Aplica sus fortalezas, talentos, limitaciones y potencialidades corporales y motrices propias y las de los demás, en situaciones variables (juegos, deportes, trabajo, vida cotidiana), mostrando motivación y disponibilidad corporal para el disfrute de la actividad motriz y el juego para alcanzar el bienestar propio y colectivo."
      }
    ],
    "fihr": [
      {
        "code": "CE-FIHR1",
        "description": "Promueve principios y valores para la vida, a partir del mensaje de Jesús de Nazaret en los evangelios y otros escritos del Nuevo Testamento, con la finalidad de fomentar relaciones armoniosas y respetuosas en diferentes contextos."
      },
      {
        "code": "CE-FIHR2",
        "description": "Promueve principios y valores a partir del mensaje de Jesús de Nazaret, con la finalidad de crear conciencia sobre el respeto a la vida en sus relaciones interpersonales."
      },
      {
        "code": "CE-FIHR3",
        "description": "Fomenta valores y actitudes del cristianismo en la resolución de problemas que afectan la realización de los jóvenes, con la finalidad de desarrollar relaciones armoniosas y constructivas para la promoción personal y comunitaria."
      },
      {
        "code": "CE-FIHR4",
        "description": "Plantea sus valores, habilidades y actitudes relacionadas al mundo laboral con la finalidad de establecer su proyecto de vida en la búsqueda de su realización personal."
      },
      {
        "code": "CE-FIHR5",
        "description": "Desarrolla proyectos que promueven criterios éticos y valores morales en el uso de las ciencias y las tecnologías con la finalidad de proteger la vida en todas sus manifestaciones y la convivencia del ser humano en sociedad."
      },
      {
        "code": "CE-FIHR6",
        "description": "Fomenta iniciativas de defensa de la vida y protección del entorno natural creado por Dios para las presentes y futuras generaciones, con la finalidad de fomentar un desarrollo sostenible de la sociedad y el medioambiente natural."
      },
      {
        "code": "CE-FIHR7",
        "description": "Plantea las características y valores del estilo de vida de Jesús de Nazaret, con la finalidad de tomar en cuenta sus enseñanzas en los planes y proyectos desarrollados en su vida."
      }
    ]
  }
};
