

      function generateTicket() {
        const kmPrice = 0.21; // prezzo al km
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let km = document.getElementById("km").value;
        let age = document.getElementById("age").value;
        let ticketPrice = km * kmPrice; // prezzo del biglietto senza sconti

        if (age < 18) {
          // sconto del 20% per i minorenni
          ticketPrice *= 0.8;
        } else if (age >= 65) {
          // sconto del 40% per gli over 65
          ticketPrice *= 0.6;
        }

        // arrotondamento a due cifre decimali
        ticketPrice = ticketPrice.toFixed(2);
        document.getElementById("ticket-price").innerHTML = 
        
        
        `
        <div class= "box">
                    <h2>Dettaglio passeggero</h2>
                    <div>
                        <div class="card-element">
                            <h2>Nome passeggero</h2>
                            <h4>${name} ${surname}</h4>
                        </div>
                        <div class="card-element">
                            <h2>Offerta</h2>
                            <h4>Nessuna Offerta</h4>
                        </div>
                        <div class="card-element">
                            <h2>Carrozza</h2>
                            <h4>${Math.floor(Math.random()*9) +1}</h4>
                        </div>
                        <div class="card-element">
                            <h2>Codice CP</h2>
                            <h4>${Math.floor(Math.random()*9999)+10000}</h4>
                        </div>
                        <div class="card-element">
                            <h2>Costo Biglietto</h2>
                            <h4>${ticketPrice}€</h4>
                        </div>
                    </div>
        </div>
        
                
        `
                 
      }

      function clearContent() {
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("ticket-price").value = "";
      }