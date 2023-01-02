import styles from '../styles/ausleih_vitamin_p.module.css'
import { useState } from "react";


function Ausleih_vitamin_P() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.Name.value;
    const adresse = event.target.Adresse.value;
    const telefonnumer = event.target.Telefonnumer.value;
    const datum = event.target.Datum.value;
    const schaeden = event.target.Schäden.value;
    const uhrzeitVon = event.target.UhrzeitVon.value;
    const uhrzeitBis = event.target.UhrzeitBis.value;
    const inventarnummer = event.target.Inventarnummer.value;
    const bezeichnung = event.target.Bezeichnung.value;


    const res = await fetch('/api/template', {
      body: JSON.stringify({
        name: name,
        adresse: adresse,
        telefonnumer: telefonnumer,
        datum: datum,
        schaeden: schaeden,
        uhrzeitVon: uhrzeitVon,
        uhrzeitBis: uhrzeitBis,
        inventarnummer: inventarnummer,
        bezeichnung: bezeichnung
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
     
    const result = await res.json();
  alert(`Is this your full name: ${result.name} and adresse ${result.adresse}`);

  };

  return (
    <div className={styles.container}>

        <h1 className={styles.h1}>Ausleihe von Geräten Vitamin P Projekt</h1>
        
        <form className={styles.form}  method='get' action='/ausleihen_template'>
          
          <div className={styles.container2}>
          <p className={styles.paragraphe}>Verleihgegenstand</p>
          <input required="true" className={styles.input} type="text" list="value"  placeholder="Bezeichnung/ Umfang" name="Bezeichnung" />
          <datalist id="value">
            <option>laptop Lenovo Thinlpad E14 core i5</option>
            <option>laptop Lenovo Thinlpad X1 Carbon core i5</option>
            <option>laptop Lenovo Thinlpad T440s core i5</option>
            <option>laptop Lenovo IdeaPad S340-14API</option>
            <option>Drucker HP Laser Jet Pro MFP </option> 
          </datalist>

          <input required="true" className={styles.input} type="text" list="value2" placeholder="Inventarnummer" name="Inventarnummer"></input>
          <datalist id="value2">
            <option>VKIIVP-007</option>
            <option>VKIIVP-006</option>
            <option>AF-AD-001</option>
            <option>AF-AD-002</option>
            <option>AF-AD-003</option>
            <option>AF-AD-004</option>
          </datalist>

          <input required="true" className={styles.input} type="datetime"  placeholder="Uhrzeit von" name="UhrzeitVon"></input>
          <input required="true" className={styles.input} type="datetime"  placeholder="Uhrzeit bis" name="UhrzeitBis"></input>

          <input  className={styles.input} type="text"  placeholder="Aufgetretene Schäden" name="Schäden"></input>

          <p className={styles.paragraphe}>Ausgegeben an:</p>

          <input required="true"  className={styles.input}  type="text"  placeholder="Name, Vorname" name="Name" />
          <input required="true" className={styles.input}  type="text"  placeholder="Adresse" name="Adresse" />
          <input required="true"  className={styles.input} type="text"  placeholder="Telefonnummer" name="Telefonnumer" />
          <input required="true" className={styles.input}  type="text"  placeholder="Datum" name="Datum"></input>

          <div>
            <input className={styles.submit} type="submit" value="Weiter" />
            
          </div>

          </div>
      
        </form>



    </div>
  )
}

export default Ausleih_vitamin_P;

