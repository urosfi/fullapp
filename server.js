const express = require("express");//Prvo, učitavamo biblioteku "express" koristeći "require" funkciju 
const app=express();//Zatim, stvaramo instancu aplikacije "app" pozivajući "express()" funkciju. Ova instanca aplikacije predstavlja našu web aplikaciju koju ćemo razvijati.

app.set("view engine", "ejs");// Postavlja "view engine" na "ejs". Ovo omogućava korištenje EJS biblioteke za generiranje dinamičkog HTML-a temeljenog na predlošcima.

app.get("/",(req,res) => { // Unutar funkcije, req predstavlja objekt zahtjeva koji sadrži informacije o dolaznom zahtjevu
                            // (npr. parametre, tijelo zahtjeva itd.), dok res predstavlja objekt odgovora koji koristimo za slanje odgovora klijentu.

    res.send("Ok")
})
app.listen(3000,function(){//Nakon što smo definirali rute i rukovatelje, možemo pokrenuti našu web aplikaciju pozivom app.listen(port, callback).
    // Ovdje port predstavlja broj porta na kojem će aplikacija osluškivati dolazne zahtjeve, dok je callback funkcija koja se izvršava kad aplikacija počne slušati.
    console.log("listening on port 3000");
})