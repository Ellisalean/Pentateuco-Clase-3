
import { Module, Resource } from '../types';

export const RESOURCES: Resource[] = [
  {
    title: "Estudio completo del Éxodo",
    type: "PDF",
    meta: "Libro de estudio",
    link: "#",
    icon: "fa-file-pdf"
  },
  {
    title: "Mapa del Éxodo HD",
    type: "Imagen",
    meta: "Ruta del Éxodo",
    link: "https://sites.google.com/view/pentateucolts/mapa-del-%C3%A9xodo",
    icon: "fa-map"
  }
];

export const MODULES: Module[] = [
  {
    id: "module1",
    title: "Módulo 1: Introducción al Éxodo",
    lessons: [
      {
        id: "lesson1",
        title: "1.1 Video de introducción",
        subtitle: "Visión general y fundamentos del libro",
        duration: "37 seg",
        icon: "fa-video",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/44e8a2c2-2eee-4b8b-ac10-5d84a67525b6_rw_1920.png?h=c1d98aeab655f81f68e909b9d8cafbd3",
        blocks: [
          { type: 'heading', level: 2, text: 'Video de introducción al Éxodo' },
          { type: 'paragraph', text: 'Este video introductorio te dará una visión general del libro del Éxodo y su importancia en el estudio bíblico.' },
          { type: 'video', src: "https://www.youtube.com/embed/yb1y_Q-MuVU?si=l05PjJ9KSfuvI1_D" },
          { type: 'heading', level: 3, text: 'Resumen del video' },
          { type: 'list', items: [
            'El Éxodo narra la liberación de Israel de la esclavitud en Egipto',
            'Muestra el poder redentor de Dios',
            'Establece los fundamentos de la nación de Israel',
            'Contiene los Diez Mandamientos y otras leyes'
          ]}
        ]
      },
      {
        id: "lesson2",
        title: "1.2 Contexto histórico",
        subtitle: "Trasfondo, autoría y propósitos teológicos",
        duration: "30 min",
        icon: "fa-book",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/5e3d5939-cb7d-43a8-885a-8b0786edc3af_rw_1920.jpg?h=d0e6afb9687a2f6423013293656be7a9",
        blocks: [
          { type: 'heading', level: 2, text: '1. Contexto histórico del Éxodo' },
          { type: 'paragraph', text: 'El Éxodo fue escrito en un contexto histórico específico alrededor del 1425 a.C., registrando eventos ocurridos aproximadamente en 1445 a.C.' },
          { type: 'list', items: [
            'Autor tradicional: Moisés',
            'Ubicación temporal: Siglo XV a.C.',
            'Trasfondo: Israel crece de 75 personas a 2.5 millones en Egipto',
            'Esclavitud: Bajo un faraón opresor (¿Hicsos o egipcios nativos?)'
          ]},
          { type: 'heading', level: 2, text: '2. Propósito y temas centrales' },
          { type: 'paragraph', text: 'El Éxodo tiene varios propósitos teológicos y narrativos fundamentales:' },
          { type: 'accordion', items: [
            { 
              title: 'Redención y liberación', 
              content: 'Muestra a Dios como libertador de su pueblo oprimido, estableciendo el paradigma de salvación que culmina en Cristo.' 
            },
            { 
              title: 'Formación de una nación', 
              content: 'Israel pasa de ser un clan familiar a convertirse en una nación con leyes, culto e identidad propia.' 
            },
            { 
              title: 'Revelación del carácter de Dios', 
              content: 'Dios se revela como YHWH, el que es, el libertador, el santo, el que hace pactos.' 
            }
          ]}
        ]
      },
      {
        id: "lesson3",
        title: "1.3 Capítulos 1-20 del Éxodo",
        subtitle: "Liberación de Egipto y la Ley en el Sinaí",
        duration: "45 min",
        icon: "fa-scroll",
        bannerImage: "https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/e28b3219-2647-4cbe-93d0-880bf7b49e11_rw_1920.jpg?h=90eb9f80be26d2e5e76d28621406037c",
        blocks: [
          { type: 'heading', level: 2, text: 'Introducción al Éxodo' },
          { type: 'paragraph', text: 'El Éxodo (del griego "salida") narra la liberación de Israel de la esclavitud en Egipto y su formación como pueblo de Dios. Los primeros 20 capítulos cubren desde la opresión en Egipto hasta la entrega de la Ley en el Sinaí.' },
          { type: 'heading', level: 3, text: 'Estructura de los primeros 20 capítulos:' },
          { type: 'list', items: [
            'Opresión y llamado de Moisés (Cap. 1-6)',
            'Las diez plagas (Cap. 7-11)',
            'La Pascua y salida de Egipto (Cap. 12-13)',
            'Cruce del Mar Rojo (Cap. 14-15)',
            'Viaje al Sinaí (Cap. 16-18)',
            'La Ley en el Sinaí (Cap. 19-20)'
          ]},
          { type: 'note', text: 'Dato clave: La palabra clave del Éxodo es redención, que significa liberación mediante el pago de un precio. Dios redime a Israel de la esclavitud, prefigurando la redención que Cristo lograría por la humanidad.' },
          
          { type: 'heading', level: 2, text: 'Cronología de la Vida de Moisés' },
          { type: 'paragraph', text: 'La vida de Moisés se divide en tres períodos de 40 años cada uno, marcados por acontecimientos significativos.' },
          { type: 'timeline', timelineItems: [
            { year: '1525 a.C.', title: 'Moisés en la corte de Faraón', description: 'Nacimiento y sus primeros 40 años viviendo en el palacio egipcio, recibiendo educación privilegiada.' },
            { year: '1485 a.C.', title: 'Moisés en el exilio en Madián', description: 'Tras matar a un egipcio, Moisés huye a Madián, donde trabaja como pastor, preparándose para su llamado.' },
            { year: '1445 a.C.', title: 'Moisés con Israel en el desierto', description: 'Dios llama a Moisés desde la zarza ardiente para liberar a Israel de la esclavitud.' }
          ]},

          { type: 'heading', level: 2, text: 'Liberación de Egipto (Capítulos 1-6)' },
          { type: 'paragraph', text: 'Los primeros capítulos establecen el contexto de opresión y el llamado de Moisés como libertador:' },
          { type: 'list', items: [
            'Crecimiento de Israel: De 75 personas a 2.5 millones (1:7)',
            'Esclavitud: Faraón oprime a Israel (1:8-14)',
            'Nacimiento de Moisés: Salvado de la muerte (2:1-10)',
            'Preparación de Moisés: 40 años en Egipto, 40 en Madián (2:11-22)',
            'Llamado en la zarza: Dios se revela como YHWH (3:1-15)',
            'Objeciones de Moisés: Duda de su capacidad (4:1-17)'
          ]},

          { type: 'heading', level: 2, text: 'Las diez plagas (Capítulos 7-11)' },
          { type: 'paragraph', text: 'Las plagas fueron juicios contra Egipto y una demostración del poder de YHWH sobre los dioses egipcios:' },
          { type: 'table', headers: ['Plaga', 'Referencia', 'Dioses Afectados', '¿Israel exento?'], rows: [
            ['1. Río en sangre', '7:14-25', 'Hapi (espíritu del Nilo)', 'No'],
            ['2. Ranas', '8:1-15', 'Hegt (diosa rana)', 'No'],
            ['3. Piojos', '8:16-19', 'Sacerdotes (pureza ritual)', 'No'],
            ['4. Moscas', '8:20-32', 'Uatchit (dios mosca)', 'Sí'],
            ['5. Pestilencia ganado', '9:1-7', 'Apis, Hathor (dioses bovinos)', 'Sí'],
            ['6. Úlceras', '9:8-12', 'Sekhmet (diosa sanadora)', 'Sí'],
            ['7. Granizo', '9:13-35', 'Nut (diosa del cielo)', 'Sí'],
            ['8. Langostas', '10:1-20', 'Set (protector cosechas)', 'Sí'],
            ['9. Tinieblas', '10:21-29', 'Ra (dios sol)', 'Sí'],
            ['10. Muerte primogénitos', '11:1-10', 'Faraón (considerado dios)', 'Sí (con sangre)']
          ]},

          { type: 'heading', level: 2, text: 'La Pascua (Capítulos 12-13)' },
          { type: 'paragraph', text: 'La Pascua fue instituida como memorial perpetuo de la liberación de Israel. Elementos clave:' },
          { type: 'list', items: [
            'Cordero sin defecto: Macho de un año, sin mancha (12:5)',
            'Sangre en los dinteles: Protección del juicio (12:7)',
            'Pan sin levadura: Pureza y prisa (12:8)',
            'Hierbas amargas: Recuerdo de la esclavitud (12:8)',
            'Comer apresuradamente: Listos para partir (12:11)'
          ]},
          { type: 'note', text: 'Significado cristológico: Jesús es nuestro Cordero Pascual (1 Corintios 5:7). La sangre del cordero protegió a Israel, así como la sangre de Cristo nos protege del juicio.' },

          { type: 'heading', level: 2, text: 'Viaje al Sinaí (Capítulos 14-18)' },
          { type: 'list', items: [
            'Cruce del Mar Rojo: Liberación final de Egipto (14:21-31)',
            'Cántico de Moisés: Celebración de la victoria (15:1-21)',
            'Aguas amargas en Mara: Dios sana las aguas (15:22-26)',
            'Maná y codornices: Provisión diaria de alimento (16:1-36)',
            'Agua de la roca: Dios suple la necesidad (17:1-7)',
            'Victoria sobre Amalec: Primera batalla como nación (17:8-16)',
            'Consejo de Jetro: Organización del liderazgo (18:1-27)'
          ]},

          { type: 'heading', level: 2, text: 'La Ley en el Sinaí (Capítulos 19-20)' },
          { type: 'paragraph', text: 'En el monte Sinaí, Dios establece su pacto con Israel y entrega los Diez Mandamientos.' },
          { type: 'slideshow', items: [
            { image: 'https://www.lds.org/bc/content/shared/content/images/gospel-library/manual/36500/36500_all_018_01-idol.jpg', caption: '1. No tendrás dioses ajenos delante de mí. Establece la exclusividad de la adoración a Dios.' },
            { image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/900a9dea-7e6f-40a9-83a4-9282fab22c94_rw_1920.jpg?h=b2b7bc183c1696c35d8d2acdafb04ea2', caption: '2. No te harás imagen ni ninguna semejanza. Prohíbe la creación y adoración de ídolos.' },
            { image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjs4F3HLpLmbgnZwSO20zbGZ8-J-9TMgIDS3cqDlMaM7sQgbRTDjxLrEY7NcXKCqQpjquUZ9RMmfDP96KZj9UknPi4oMy2Kux7hWeW1bzxNeHSYGFBbAKrXqotMd8Po9vAqXoE71_5dxqg/s960/135807846_3946997078657622_42499007682705736_n.jpg', caption: '3. No tomarás el nombre de Jehová tu Dios en vano. Exige reverencia por el nombre de Dios.' },
            { image: 'https://branham.org/azure/branham/55fa952c-e5c1-4b0c-b8f4-804090d163bb.jpg', caption: '4. Acuérdate del día de reposo para santificarlo. Día de descanso y adoración.' },
            { image: 'https://www.residenciabelosoalto.es/wp-content/uploads/2021/01/honraras.jpg', caption: '5. Honra a tu padre y a tu madre. Respeto familiar, base social.' },
            { image: 'https://imagenes.cope.es/files/og_thumbnail/uploads/2024/07/11/668fb5b24083a.jpeg', caption: '6. No matarás. Protege la vida humana.' },
            { image: 'https://rsdradio.s3.sa-east-1.amazonaws.com/s3fs-public/field/image/evangelio_114.jpg', caption: '7. No cometerás adulterio. Salvaguarda la fidelidad conyugal.' },
            { image: 'https://veracidadchannel.com/_site/wp-content/uploads/2020/03/Fotolia_130379628_Subscription_Monthly_M-e1524493134500-752x440.jpg', caption: '8. No hurtarás. Protege la propiedad ajena.' },
            { image: 'https://iglesiacristianahashem.com/wp-content/uploads/2021/06/a22.png', caption: '9. No hablarás falso testimonio. Exige veracidad.' },
            { image: 'https://aishlatino.b-cdn.net/wp-content/uploads/2021/11/CT12The10Commandments500x291-SP.jpg', caption: '10. No codiciarás. Aborda la raíz del pecado.' }
          ]},

          { type: 'heading', level: 2, text: 'Comprueba tu aprendizaje' },
          { type: 'quiz', question: "1. ¿Cuál es el significado de la palabra 'Éxodo'?", options: [
            { text: "Ley", isCorrect: false },
            { text: "Salida", isCorrect: true },
            { text: "Pacto", isCorrect: false }
          ], explanation: "'Éxodo' viene del griego y significa 'salida', refiriéndose a la salida de Israel de Egipto." },
          { type: 'quiz', question: "2. ¿Cuál fue el propósito principal de las diez plagas?", options: [
            { text: "Castigar a los egipcios", isCorrect: false },
            { text: "Demostrar la superioridad de YHWH sobre los dioses egipcios", isCorrect: true },
            { text: "Enseñar a Israel a obedecer", isCorrect: false }
          ], explanation: "Las plagas demostraron que YHWH era superior a todos los dioses egipcios (Éxodo 12:12)." },

          { type: 'heading', level: 2, text: 'Aplicaciones prácticas' },
          { type: 'slideshow', items: [
            { image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/6b27e14a-a5a4-4728-953e-78d22ed9f379_rw_1920.jpg?h=cd7136286b8c06fa2aae77db16567de4', caption: 'Dios como libertador: Así como liberó a Israel, nos libera del pecado.' },
            { image: 'https://www.faroalasnaciones.com/wp-content/uploads/2016/09/pascuacondiscipulos1.jpg', caption: 'La Pascua y Cristo: Jesús es nuestro cordero pascual, su sangre nos protege.' },
            { image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/53ebf467-e6c4-409a-9404-baa073ae4f7d_rw_1920.jpg?h=08658f1f7cdc95891429e9d3ef0baa95', caption: 'Mandamientos hoy: Principios que siguen siendo guía moral para el creyente.' }
          ]}
        ]
      }
    ]
  }
];
