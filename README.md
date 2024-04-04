# /// **ITALIANO** ///

# Istruzioni
- In questo esercizio iniziamo a replicare la logica che sta dietro a tantissimi siti che permettono la visione di film e telefilm.
- Per fare questo, come fanno siti molto più rinomati, utilizzeremo un API che ci permette di avere un insieme di risultati congrui alla nostra ricerca.

## Milestone 0:
- [x] Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.

## Milestone 1:
- [x] Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
- [x] Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
    1. Titolo
    2. Titolo Originale
    3. Lingua
    4. Voto

## Milestone 2:
- [x] Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).
- [x] Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
    - Qui un esempio di chiamata per le serie tv: https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

## Milestone 3:
- [x] In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse.
- [x] Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la parte finale dell’URL passata dall’API.
    - Esempio di URL: https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
- [x] Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
- [x] Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote :P)

## Milestone 4:
- [x] Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:
    - Un header che contiene logo e search bar
    - Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (consiglio la poster_path con w342)
    - Andando con il mouse sopra una card (on hover), appaiono le informazioni aggiuntive già prese nei punti precedenti più la overview

### Consigli:
1. Andate in fila, seguendo le milestone, non pensate all’interfaccia grafica fino al punto 4
2. Non pensate all’interfaccia grafica fino al punto 4 (si, l’ho scritto due volte), tutto può essere risolto con una <ul> non stilizzata
3. Ricordatevi quanto imparato finora con le diverse esercitazioni: ○ Affrontate sempre prima il caso base minimo, senza complicazioni (ad es. “Se il titolo originale è uguale al titolo, magari dovrei nasconderlo”, “Se faccio una ricerca che non ha nessun risultato dovrei scrivere qualcosa” sono domande da NON FARSI fino a quando non si è fatto completamente un caso base) ○ Se ti viene volta di copiare/incollare codice, NON FARLO, fai una funzione! Quei pochi minuti risparmiati renderanno il tuo codice meno leggibile ed ogni volta che dovrai intervenire su quella parte perderai molto più tempo ○ Prima di andare avanti, assicurati di aver risolto quella parte nel miglior modo possibile (codice non ripetuto, minimo codice possibile, funzioni chiare e riutilizzabili). Risparmierai tantissimo tempo risolvendo gli esercizi successivi ○ Meglio risolvere una milestone in meno, ma con codice scritto bene
4. Per avere la lista delle lingue utilizzare: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

## SE HAI FINITO LE MILESTONE PRECEDENTI E VUOI ANDARE OLTRE, PUOI FARE LE MILESTONE SUCCESSIVE, MA SONO FACOLTATIVE:

## Milestone 5 (Opzionale):
- Partendo da un film o da una serie, richiedere all'API quali sono gli attori che fanno parte del cast aggiungendo alla nostra scheda Film / Serie SOLO i primi 5 restituiti dall’API con Nome e Cognome, e i generi associati al film con questo schema:
    - “Genere 1, Genere 2, …”.

## Milestone 6 (Opzionale):
- Creare una lista di generi richiedendo quelli disponibili all'API e creare dei filtri con i generi tv e movie per mostrare/nascondere le schede ottenute con la ricerca.


 
# /// **ENGLISH** ///

# Instructions
- In this exercise, we start replicating the logic behind many websites that allow the viewing of movies and TV shows.
- To do this, like many renowned sites, we will use an API that allows us to obtain a set of results consistent with our search.

## Milestone 0:
- [x] Design the structure of the global state along the lines of the exercises done in the previous days.

## Milestone 1:
- [x] Create a basic layout with a search bar (an input and a button) where we can write either completely or partially the name of a movie. By clicking the button, we can search the API for all the movies that contain what the user has written.
- [x] After receiving the API response, we want to display the following values on the screen for each found movie:
    1. Title
    2. Original Title
    3. Language
    4. Rating

## Milestone 2:
- [x] Transform the static language string into an actual flag of the corresponding nation, handling the case where we don't have the flag of the nation returned by the API (flags are not available in FontAwesome).
- [x] Then, broaden the search to TV series as well. With the same search action, we should retrieve both the movies and TV series corresponding to the query, being careful to have similar values in the end (TV series and movies have different fields in the JSON response, similar but not always identical).
    - Here's an example call for TV series: https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs

## Milestone 3:
- [x] In this milestone, first, we add the cover of the movie or TV series to our list. It's passed to us by the API only as the final part of the URL, because then we can generate from that portion of the URL many different sizes.
- [x] We'll then take the base URL of the TMDB images: https://image.tmdb.org/t/p/ and append the size we want to generate (we can find all possible sizes at this link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) and finally append the part of the URL passed by the API.
    - Example URL: https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
- [x] Then, we transform the rating from a decimal from 1 to 10 into an integer from 1 to 5, so that we can display a number of full stars on the screen ranging from 1 to 5, leaving the remaining stars empty (we find the icons in FontAwesome).
- [x] We always round up to the next integer, we don't handle half-full (or half-empty :P) icons.

## Milestone 4:
- [x] Transform what we've done so far into a real web app, creating a complete layout similar to Netflix:
    - A header containing a logo and a search bar
    - After searching for something in the search bar, the results appear in the form of "cards" where the background is represented by the cover image (I recommend using the poster_path with w342)
    - Hovering over a card, additional information already retrieved in the previous points plus the overview appears

### Tips:
1. Go in order, following the milestones, don't think about the graphical interface until point 4
2. Don't think about the graphical interface until point 4 (yes, I wrote it twice), everything can be solved with an unstylized <ul>
3. Remember what you've learned so far with the different exercises: ○ Always tackle the simplest base case first, without complications (e.g., "If the original title is the same as the title, maybe I should hide it", "If I make a search that has no results I should write something" are questions NOT TO ASK until you have completely solved a base case) ○ If you're tempted to copy/paste code, DON'T DO IT, make a function! Those few minutes saved will make your code less readable and every time you have to work on that part, you'll lose much more time ○ Before moving on, make sure you've solved that part in the best possible way (no repeated code, minimal code, clear and reusable functions). You'll save a lot of time solving the next exercises ○ It's better to solve one milestone less, but with well-written code
4. To get the list of languages, use: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

## IF YOU'VE FINISHED THE PREVIOUS MILESTONES AND WANT TO GO FURTHER, YOU CAN DO THE NEXT MILESTONES, BUT THEY'RE OPTIONAL:

## Milestone 5 (Optional):
- Starting from a movie or a series, request from the API which actors are part of the cast by adding to our Movie / Series card ONLY the first 5 returned by the API with First Name and Last Name, and the genres associated with the movie with this scheme:
    - "Genre 1, Genre 2, …".

## Milestone 6 (Optional):
- Create a list of genres by requesting those available from the API and create filters with TV and movie genres to show/hide the cards obtained with the search.