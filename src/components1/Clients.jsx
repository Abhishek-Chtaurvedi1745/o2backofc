import "./Clients.css";
import lexis from "../assets/pdf/Group466.png";
import eight from "../assets/pdf/Group465.png";
import abn from "../assets/pdf/Group464.png";
import paloalto from "../assets/pdf/Group463.png";
import brit from "../assets/pdf/Group462.png";
import jellisCraig from "../../public/Image/clients/jellis-craig.png";
import moneyQuest from "../../public/Image/clients/moneyquest.png";
import asanka from "../../public/Image/clients/asanka-buyers-agent.png";
import bondCleaning from "../../public/Image/clients/bond-cleaning-services.png";
import zentis from "../../public/Image/clients/zentis-commercial-cleaning.png";

const clientList = [
  { label: "Jellis Craig", img: jellisCraig },
  { label: "MoneyQuest", img: moneyQuest },
  { label: "Asanka Buyers Agent", img: asanka },
  { label: "Bond Cleaning Services", img: bondCleaning },
  { label: "Zentis Commercial Cleaning", img: zentis },
  { label: "LexisNexis", img: lexis },
  { label: "8x8", img: eight },
  { label: "ABN AMRO", img: abn },
  { label: "paloalto", img: paloalto },
  { label: "BRIT", img: brit },
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
