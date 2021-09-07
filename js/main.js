// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// creo oggetto studente
var studente = {
    nome: 'Simone',
    cognome: 'Severini',
    eta: 25
}

// stampo tutte le proprietà dell'oggetto tramite ciclo for-in
for (var key in studente) {
    console.log(studente[key]);
}


// array oggetti

var classe40 = [
    {
        nome: 'Alessandro',
        cognome: 'Amara',
        eta: 25
    },
    {
        nome: 'Michele',
        cognome: 'Amoruso',
        eta: 24
    },
    {
        nome: 'Leonardo',
        cognome: 'Barone',
        eta: 23
    },
    {
        nome: 'Angelo',
        cognome: 'Bennici',
        eta: 22
    },
    {
        nome: 'Davide',
        cognome: 'Bernardini',
        eta: 21
    },
    {
        nome: 'Vaklentina',
        cognome: 'Cantarelli',
        eta: 22
    },
    {
        nome: 'Elena',
        cognome: 'Catani',
        eta: 23
    },
    {
        nome: 'Ilario',
        cognome: 'cocco',
        eta: 24
    },
    {
        nome: 'Dario',
        cognome: "D'Agnelli",
        eta: 25
    },
    {
        nome: 'Mario',
        cognome: 'Mario',
        eta: 24
    },
    {
        nome: 'Nicola',
        cognome: 'Felice',
        eta: 23
    },
    {
        nome: 'Andrea',
        cognome: 'Fiorentino',
        eta: 22
    },
    {
        nome: 'Andrea',
        cognome: 'Geraci',
        eta: 21
    },
    {
        nome: 'Ottavio',
        cognome: 'Giudici',
        eta: 20
    },
    {
        nome: 'Aris Mattia',
        cognome: 'Goi',
        eta: 25
    },
    {
        nome: 'Maria',
        cognome: 'Klimenko',
        eta: 25
    },
    {
        nome: 'Francesco',
        cognome: 'Laurora',
        eta: 23 
    },
    {
        nome: 'Federico',
        cognome: 'Lovaglio',
        eta: 22
    },
    {
        nome: 'Edoardo',
        cognome: 'Magnani',
        eta: 20
    },
    {
        nome: 'Emanuela',
        cognome: 'Mocci',
        eta: 22
    },
    {
        nome: 'Simone',
        cognome: 'Morieri',
        eta: 24
    },
    {
        nome: 'Giuanluca',
        cognome: 'Napoletano',
        eta: 24
    },
    {
        nome: 'Alessandro',
        cognome: 'Nessi',
        eta: 25
    },
    {
        nome: 'Lorenzo',
        cognome: 'Orrù',
        eta: 25
    },
    {
        nome: 'Pasquale',
        cognome: 'Petito',
        eta: 23
    },
    {
        nome: 'Massimiliano',
        cognome: 'Pignataro',
        eta: 21
    },
    {
        nome: 'Manfredi',
        cognome: 'Piraino',
        eta: 21
    },
    {
        nome: 'Marco',
        cognome: 'Porcaro',
        eta: 25
    },
    {
        nome: 'Elia',
        cognome: 'Raguso',
        eta: 24
    },
    {
        nome: 'Giordano Francesco',
        cognome: 'Rinaldi',
        eta: 22
    },
    {
        nome: 'Simone',
        cognome: 'Severini',
        eta: 25
    },
    {
        nome: 'Mauro',
        cognome: 'Tomasoni',
        eta: 25
    },
    {
        nome: 'Hemil',
        cognome: 'Zanatta',
        eta: 25
    },

   
]

// ciclo array oggetti e stampo nome e cognome di ciascuno
for (var i = 0; i < classe40.length; i++){
    console.log(classe40[i]['nome'] + classe40[i]['cognome'] );
}



// AGGIUNTA NUOVO STUDENTE

var nome = prompt('inserisci il tuo nome');
var cognome = prompt('inserisci il tuo cognome');
var anni = parseInt(prompt('inserisci la tua età'));


var nuovoStudente = {
    'nome': nome,
    'cognome': cognome,
    'eta': anni
}   

// lo aggiungo, se non presente, all'array di oggetti 
if (!classe40.includes(nuovoStudente)){
    classe40.push(nuovoStudente);
}

console.log(classe40);