/*
  PLANSCHBLECH – INHALTE BEARBEITEN
  ---------------------------------
  Diese Datei ist absichtlich einfach gehalten.
  Texte zwischen '...' kannst du direkt ändern.
  Neue Repertoire-Stücke einfach als neue Zeile in die passende Liste setzen.
  Bei Bildern nur den Dateinamen/Pfad ändern.
*/

window.PLANSCHBLECH = {
  kontakt: {
    email: 'planschblech.info@gmail.com',
    instagram: '@planschblech',
    instagramLink: '#'
  },

  start: {
    untertitel: 'DAS BLECHENSEMBLE AUS FORCHHEIM',
    beschreibung: 'Fünf junge Musiker, ein Name aus dem Pool und ein Sound, der von Pop und Jazz bis zu traditioneller Blasmusik reicht.',
    musiker: '5',
    stuecke: '18',
    gegruendet: '2026'
  },

  mitglieder: [
    {
      id: 'vincent', initial: 'V', name: 'Vincent', instrument: 'Trompete',
      bio: 'Schwimmen',
      tags: ['Planschblech','Kreisorchester Bamberg','Bezirksorchester Oberfranken','Stadtkapelle Bamberg','Jugendorchester Bamberg','Blasorchester Klangfusion']
    },
    {
      id: 'jonas', initial: 'J', name: 'Jonas', instrument: 'Trompete',
      bio: 'Trompeter bei Planschblech – und Gastgeber des legendären Pools, in dem die Idee für das Ensemble entstanden ist.',
      tags: ['Planschblech','Musikkapelle Reuth','Bläserphilharmonie Forchheim']
    },
    {
      id: 'julius', initial: 'J', name: 'Julius', instrument: 'Bariton',
      bio: 'Sorgt mit dem Bariton für das warme Fundament und die tiefen Linien im Planschblech-Sound.',
      tags: ['Planschblech','Bläserphilharmonie Forchheim','Bezirksorchester Oberfranken','Nordbayrisches Jungendblasorchester']
    },
    {
      id: 'elias', initial: 'E', name: 'Elias', instrument: 'Posaune',
      bio: 'Posaunist bei Planschblech und zuständig für Druck, Groove und alles, was mit Zug noch besser klingt.',
      tags: ['Planschblech','Blasorchester Klangfusion']
    },
    {
      id: 'manuel', initial: 'M', name: 'Manuel', instrument: 'Posaune',
      bio: 'Posaunist bei Planschblech. Zwischen sattem Brass-Sound, modernen Arrangements und jeder Menge Spaß auf der Bühne.',
      tags: ['Planschblech','Bläserphilharmonie Forchheim','HGF BigBand']
    }
  ],

  repertoire: [
    { kategorie: 'Pop / Rock', icon: '🎸', offen: true, stuecke: [
      ['Steppin\' Out'], ['Yellow Submarine'], ['Mamma Mia'], ['Copacabana'], ['Tom and Jerry'], ['Sweet Caroline']
    ]},
    { kategorie: 'Volksmusik / Traditionell', icon: '⛰️', offen: false, stuecke: [
      ['Tiroler Adlermarsch'], ['Trompetenpolka']
    ]},
    { kategorie: 'Jazz', icon: '🎷', offen: false, stuecke: [
      ['Hallelujah Drive'], ['Music to Watch Girls By'], ['Spanish Flea'], ['Tijuana Taxi'], ['Down by the Riverside']
    ]},
    { kategorie: 'Swing', icon: '🎺', offen: false, stuecke: [
      ['String of Pearls'], ['Second Waltz'], ['Share My Yoke']
    ]},
    { kategorie: 'Ballade', icon: '♬', offen: false, stuecke: [
      ['You Raise Me Up']
    ]}
  ],

  galerie: [
    { bild: '', titel: 'WO ALLES BEGANN', text: 'Pool Session · Reuth', klasse: 'tall' },
    { bild: '', titel: 'LIVE IN FORCHHEIM', text: 'Sommer, Brass & Publikum', klasse: 'wide' },
    { bild: '', titel: 'UNTER DER LINDE', text: 'Auftritt in Forchheim', klasse: 'medium' },
    { bild: '', titel: 'PLANSCH', text: 'Der Name ist Programm', klasse: 'tall' }
  ]
};
