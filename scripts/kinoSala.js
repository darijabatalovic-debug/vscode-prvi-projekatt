function prikaziSalu(podaci, indeks) {
    var sala = document.getElementById("sala");
    sala.innerHTML = "";

    var projekcija = podaci.projekcije[indeks];

    document.querySelector(".info-kartica:nth-child(1) p").textContent = projekcija.film;
    document.querySelector(".info-kartica:nth-child(2) p").textContent = projekcija.vrijeme;

    var redovi = {};

    for (var i = 0; i < projekcija.sjedista.length; i++) {
        var s = projekcija.sjedista[i];

        if (!redovi[s.red]) {
            redovi[s.red] = [];
        }

        redovi[s.red].push(s);
    }

    for (var red in redovi) {
        var divRed = document.createElement("div");
        divRed.className = "red";

        var oznaka = document.createElement("span");
        oznaka.className = "oznaka-reda";
        oznaka.textContent = red;
        divRed.appendChild(oznaka);

        for (var j = 0; j < redovi[red].length; j++) {
            var sjediste = redovi[red][j];

            var div = document.createElement("div");
            div.className = "sjediste " + sjediste.status;

            div.onclick = function () {
                if (sjediste.status === "slobodno") {
                    sjediste.status = "rezervisano";
                    prikaziSalu(podaci, indeks);
                }
            };

            divRed.appendChild(div);
        }

        sala.appendChild(divRed);
    }
}