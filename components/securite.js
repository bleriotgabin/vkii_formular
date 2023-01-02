import {useEffect, useState} from 'react';
import styles from '../styles/ausleihen_template.module.css';
import Image from 'next/image'

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
            <div>
              <table className={styles.entete} >
                <td > <img src='codeloper1.png' alt="logo" /></td>
                <td ><a >Association des Ingénieurs et Informaticiens Camerounais(AIIC)<br/>Cameroon Association of Engineers amd Computer Scientists(CAECS)</a></td>
              </table><br></br>
            </div>

            <div className={styles.corp}>
            <h2 className={styles.titre}>Ausleihe von Geräten Vitamin P Projekt</h2>
            <h5 className={styles.titre2}>Verleihgegenstand</h5>
            <table >
                <tr>
                  <td>Bezeichnung/ Umfang</td>
                  <td id="Bezeichnung"></td>
                </tr>
                <tr>
                  <td>Inventarnummer</td>
                  <td id="Inventarnummer"></td>
                </tr>
                <tr>
                  <td>Uhrzeit von/bis</td>
                  <td><a>Von: </a><a id="UhrzeitVon"></a><a> Bis: </a><a id="UhrzeitBis"></a></td>
                  
                </tr>
                <tr>
                  <td>Aufgetretene Schäden</td>
                  <td id="Schäden"></td>
                </tr>

            </table>
            
            <h5>Ausgegeben an:</h5>
            <table>
                <tr>
                  <td>Name, Vorname</td>
                  <td id="Name"></td>
                </tr>
                <tr>
                  <td>Adresse</td>
                  <td id="Adresse"></td>
                </tr>
                <tr>
                  <td>Telefonnummer</td>
                  <td id="Telefonnumer"></td>
                </tr>
                <tr>
                  <td>Datum</td>
                  <td id="Datum"></td>
                </tr>
                <tr>
                  <td>Unterschrift der ausleihenden Person</td>
                  <td id="Unterschrift" > </td>
                </tr>

            </table>
            <p>
                <h6>Verleihbedingungen</h6>
                <a >
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
              </a>
            </p>

            </div>

         </div>
        )
      }
      
      export default ausleihen_template