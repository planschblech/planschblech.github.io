PLANSCHBLECH WEBSITE – SCHNELL BEARBEITEN
==========================================

Die wichtigste Datei ist jetzt:

  inhalte.js

Dort kannst du ohne HTML-Kenntnisse ändern:
- E-Mail & Instagram
- Startseitentext
- Anzahl Musiker / Stücke / Gründungsjahr
- alle 5 Mitglieder + Beschreibung + Tags
- komplettes Repertoire
- Galerie-Bilder + Bildtexte

SO ÄNDERST DU ETWAS DIREKT AUF GITHUB
--------------------------------------
1. Öffne dein Repository planschblech.github.io
2. Klicke auf die Datei "inhalte.js"
3. Oben rechts auf das Stift-Symbol / "Edit this file"
4. Ändere nur die Texte zwischen den Anführungszeichen
5. Oben rechts "Commit changes..."
6. Noch einmal "Commit changes"
7. Nach kurzer Zeit aktualisiert sich planschblech.github.io automatisch

NEUES REPERTOIRE-STÜCK
----------------------
Beispiel in einer Kategorie:
['Sweet Caroline','107']

Ein neues Stück einfach mit Komma dahinter ergänzen:
['Sweet Caroline','107'],
['Neues Lied','123']

Wenn es keine Nummer hat:
['Neues Lied','']

GALERIE-BILD ÄNDERN
-------------------
1. Bild in GitHub in den Ordner assets hochladen.
2. In inhalte.js z.B. ändern:
   bild: 'assets/mein-neues-bild.jpg'

WICHTIG
-------
- Kommas, eckige Klammern und Anführungszeichen nicht versehentlich löschen.
- style.css = Aussehen der Seite
- index.html = Aufbau der Seite
- script.js = Funktionen
- inhalte.js = eure Inhalte (am häufigsten bearbeiten)
