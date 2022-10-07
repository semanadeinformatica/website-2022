import React from "react";
import { Link } from "gatsby";
import ActivitiesStyles from "../../../styles/mainpage/activities.module.css";

const Activities = () => {
  return (
    <section className={ActivitiesStyles.section}>
      <h2 className={ActivitiesStyles.header}>
        VEM DESCOBRIR AS ATIVIDADES QUE TEMOS PARA TI!
      </h2>
      <div className={ActivitiesStyles.gallery}>
        <div>
          <img src="/workshops.png" alt="workshops" />
          <Link to="/programa?type=activities">WORKSHOPS</Link>
        </div>
        <div>
          <img src="/palestras.png" alt="palestras" />
          <Link to="/programa?type=talks">PALESTRAS</Link>
        </div>
        <div>
          <img src="/competicao.png" alt="Competição de programação" />
          <Link to="/competicao-programacao">COMPETIÇÃO</Link>
        </div>
        <div>
          <img src="/ctf.png" alt="CTF" />
          <a
            href="https://ctf.sinf.pt"
            rel="noopener noreferrer"
            target="_blank"
          >
            CTF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Activities;
