var trenutna = 0;

var podaci = {
    projekcije: [
        {
            film: "Interstellar",
            vrijeme: "19:30",
            sjedista: generisi()
        },
        {
            film: "Oppenheimer",
            vrijeme: "21:00",
            sjedista: generisi()
        }
    ]
};

function generisi() {
    var sjedista = [];
    var redovi = ["A","B","C","D","E","F","G","H"];

    for (var i = 0; i < redovi.length; i++) {
        for (var j = 1; j <= 10; j++) {
            sjedista.push({
                red: redovi[i],
                broj: j,
                status: Math.random() > 0.7 ? "zauzeto" : "slobodno"
            });
        }
    }

    return sjedista;
}

function dodajDugmad() {
    var parent = document.getElementById("sala").parentElement;

    var div = document.createElement("div");
    div.className = "dugmad-projekcije";

    var prev = document.createElement("button");
    prev.textContent = "Prethodna projekcija";

    var next = document.createElement("button");
    next.textContent = "Sljedeća projekcija";

    prev.onclick = function () {
        if (trenutna > 0) {
            trenutna--;
            prikaziSalu(podaci, trenutna);
        }
    };

    next.onclick = function () {
        if (trenutna < podaci.projekcije.length - 1) {
            trenutna++;
            prikaziSalu(podaci, trenutna);
        }
    };

    div.appendChild(prev);
    div.appendChild(next);
    parent.appendChild(div);
}

window.onload = function () {
    prikaziSalu(podaci, trenutna);
    dodajDugmad();
};