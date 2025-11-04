# Web Geolocation & Maps (localStorage)

Jednostavna web aplikacija koja u pregledniku dohvaća trenutnu lokaciju korisnika (`navigator.geolocation`) i prikazuje je na Google karti (Google Maps JavaScript API). 
Lokacije (ime, latitude, longitude, vrijeme) sprema u `localStorage` i prikazuje u tablici. Nema servera ni baze.

## Funkcionalnosti
- Dohvat i prikaz lokacije na karti
- Spremanje lokacija u localStorage (na strani klijenta)
- Tablični pregled povijesti i brisanje zapisa

## Tehnologije
- JavaScript, HTML, CSS
- Google Maps JavaScript API
- localStorage (bez servera i bez baze)

## Pokretanje (lokalno)
1) Otvorite `geolok.html` u pregledniku (za geolokaciju koristite `http://localhost` ili HTTPS).
2) U `geolok.html` zamijenite `YOUR_API_KEY_HERE` svojim Google Maps API ključem 
3) Upišite ime i kliknite **Saznaj svoju lokaciju**.

> Napomena: geolokacija radi uz korisničko dopuštenje; u produkciji zahtijeva HTTPS ili localhost.

## Struktura
```
geolok.html
script.js
styles.css
```

## Licenca
MIT
