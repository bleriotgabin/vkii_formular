import {useEffect, useState} from 'react';
import homeStyles from '../styles/Home.module.css'
import styles from '../styles/ausleihen_template.module.css';

function printContent() {
  var restorepages = document.body.innerHTML;
  var printcontent = document.getElementById('corps').innerHTML;
  document.body.innerHTML = printcontent;
  window.print();
}


    const ausleihen_template = () => {

      
      
      useEffect(() => {
        window.onload = function(){
          const params = new URLSearchParams(window.location.search);
          document.getElementById("Bezeichnung").innerHTML= params.get("Bezeichnung");
          document.getElementById("Inventarnummer").innerHTML= params.get("Inventarnummer");
          document.getElementById("UhrzeitVon").innerHTML= params.get("UhrzeitVon");
          document.getElementById("UhrzeitBis").innerHTML= params.get("UhrzeitVon");
          document.getElementById("Schäden").innerHTML= params.get("Schäden");
          document.getElementById("Name").innerHTML= params.get("Name");
          document.getElementById("Adresse").innerHTML= params.get("Adresse");
          document.getElementById("Telefonnumer").innerHTML= params.get("Telefonnumer");
          document.getElementById("Datum").innerHTML= params.get("Datum");
        }
            
          
      }, []);
      
       
        return (
        
         <div>
          <div id='corps'>
            <table className={styles.entete}>
              <img src='codeloper1.png' alt="logo" />
              <td className={styles.enleve}><a href="#"> <img src='' alt="logo" /></a></td>
              <td ><a >Association des Ingénieurs et Informaticiens Camerounais(AIIC)<br/>Cameroon Association of Engineers amd Computer Scientists(CAECS)</a></td>
            </table><br></br>

            
            <h2 className={styles.titre}>Ausleihe von Geräten Vitamin P Projekt</h2>
            <h5 className={styles.titre2}>Verleihgegenstand</h5>

            <div>
            <table className="table " >
              <thead >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Bezeichnung/ Umfang</th>
                  <th scope="col">Inventarnummer</th>
                  <th scope="col">Uhrzeit von/bis</th>
                  <th scope="col">Aufgetretene Schäden</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <th scope="row" id="Bezeichnung"></th>
                  <td id="Inventarnummer"></td>
                  <td><a>Von: </a><a id="UhrzeitVon"></a><a> Bis: </a><a id="UhrzeitBis"></a></td>
                  <td id="Schäden"></td>

                </tr>
      
              </tbody>

            </table>

            </div>

            <h5 className={styles.titre2}>Ausgegeben an:</h5>

            <div>
            <table className="table ">

            <thead >
                <tr>
                  <th scope="col">Name, Vorname</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Telefonnummer</th>
                  <th scope="col">Datum</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                  <th scope="row" id="Name"></th>
                  <td id="Adresse"></td>
                  <td id="Telefonnumer"></td>
                  <td id="Datum"></td>

                </tr>
      
              </tbody>

            </table>
            
            </div>

            <p>
                <h6 className={styles.titre2}>Verleihbedingungen</h6>
                <p className={styles.paragraphe}>
                •Die Geräte werden zur Nutzung ausschließlich im rahmen des Projekts Vitamin P. überlassen, eine
                Nutzung zu anderen Zwecken (privat oder gewerblich) ist unzulässig. <br/>
                •Die Geräte sind pfleglich zu behandeln, bei fahrlässig verursachten Schäden sowie bei Diebstahl
                behält der VKII Ruhrbezirk sich vor, die Ausleihenden in Haftung zu nehmen. Alle aufgetretenen
                Schäden sind bei Rückgabe des Gerätes mitzuteilen. <br/>
                •Der VKII Ruhrbezirk übernimmt keine Gewähr für die Funktionstüchtigkeit der verliehenen
                Geräte; insbesondere übernimmt der VKII Ruhrbezirk keine Haftung für durch Datenverluste o.ä.
                entstandene Schäden. <br/>
                •Die auf den Notebooks vorgenommene Softwareinstallation darf von den Ausleihenden nicht
                verändert werden. <br/>
                •Eventuelle Sonderregelungen, die über die hier festgelegten Bedingungen hinausgehen, müssen auf
                dem Verleihschein schriftlich festgehalten werden. <br/>
                •Die Nutzung erfolge nur ins Verreins Raumlichkeieten. <br/>
                •Bei Abholung der Geräte werden diese Nutzungsbedingungen durch Unterschrift auf dem
                Verleihschein anerkannt.
                <br/>
              </p>
            </p>
            <h1 className={styles.titre3}>Unterschrift der ausleihenden Person</h1>
            

            
            
         </div>
         <button onClick={printContent}>Weiter</button>
         </div>
         
        )
      }
      
      export default ausleihen_template