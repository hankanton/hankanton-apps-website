# Hankanton Apps

Offizielle zweisprachige Website für [hankanton-apps.de](https://hankanton-apps.de).
GitHub Pages veröffentlicht die statischen Dateien aus `main`, Verzeichnis `/`.

## Lokale Vorschau

Vom Repository-Stamm aus starten:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Deutsch unter `http://127.0.0.1:8765/`, Englisch unter `http://127.0.0.1:8765/en/`.
Die Startseiten, das Impressum und der Datenschutz sind statische HTML-Dateien. JavaScript ergänzt die vergrößerbare Screenshot-Ansicht.

## Verwendete Originalmedien

| Motiv | Quelle | Darstellung |
| --- | --- | --- |
| Hankanton Apps | `Rechen-RPG-Game/grafik/logo/hankanton_apps.png` | Originaler transparenter Logoexport mit zwei Katzen |
| Noten-Abenteuer | App-Icon aus `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png`, Titelbild aus `store-assets/kopfzeile/kopfzeile-21x9-3840x1646.png` | Band-Modus und Komponieren aus `store-assets/produktseiten/roh/{de,en}/ipad/` |
| Lerntaler | App-Icon aus `Lerntaler/mobile/assets/icon.png`, Titelbild aus `AppStore-Screenshots/Creative-Assets/kopfbild-3840x1646.png` | Elternübersicht und heutige Aufgaben aus `AppStore-Screenshots/1.0/iPad-13/{de,en}/` |
| Zahlonia / Tallonia | App-Icon aus `grafik/app_symbol.png`, Titelbild aus `build/store_medien/kopf_suche/kopfzeile_3840x1646.png`, beides im Worktree `sharp-chatelet-37ded6` | Rechenaufgabe im Kampf und Dorf aus `build/store_medien/fotos/ipad13_{de,en}/` |

Die App-Medien liegen in verkleinerten WebP-Versionen vor. Die Screenshots entsprechen der jeweiligen Sprachversion. Hinweise zu den lokal eingebundenen Schriften stehen in `assets/fonts/`.

Die Anbieter- und Kontaktangaben stammen aus dem [veröffentlichten Hankanton-Apps-Impressum](https://hankanton.github.io/impressum.html). Die Datenschutzerklärungen der Apps sind auf den jeweiligen Supportseiten verlinkt.
