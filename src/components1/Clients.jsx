import "./Clients.css";
import lexis from "../assets/pdf/Group466.png";
import eight from "../assets/pdf/Group465.png";
import abn from "../assets/pdf/Group464.png";
import paloalto from "../assets/pdf/Group463.png";
import brit from "../assets/pdf/Group462.png";
import farm from "../assets/pdf/Group467.png";
import spotify from "../assets/pdf/Group46.png";
import amd from "../assets/pdf/Group44.png";
import mercedes from "../assets/pdf/Group464 (1).png";
import pvh from "../assets/pdf/p1-45-185x104.jpeg";

const clientList = [
  { label: "LexisNexis", img: lexis },
  { label: "8x8", img: eight },
  { label: "ABN AMRO", img: abn },
  { label: "paloalto", img: paloalto },
  { label: "BRIT", img: brit },
  { label: "Farm Credit Bank of Texas", img: farm },
  { label: "Spotify", img: spotify },
  { label: "AMD", img: amd },
  { label: "Mercedes pay", img: mercedes },
  { label: "PVH", img: pvh },
];

export default function Clients() {
  return (
    <section className="clients">
      <h2>Top <span>Clients</span></h2>
      <p>From startups to enterprise teams across Australia and globally</p>
      <div className="clients-logos">
        {clientList.map((c, i) => (
          <div key={i} className="client-logo">
            <img src={c.img} alt={c.label} />
          </div>
        ))}
      </div>
    </section>
  );
}
