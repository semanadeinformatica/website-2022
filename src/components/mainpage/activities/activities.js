import React from "react";
import ActivitiesStyles from "../../../styles/mainpage/activities.module.css";

const Activities = () => {
  return (
    <section className={ActivitiesStyles.section}>
      <h2 className={ActivitiesStyles.header}>
        VEM DESCOBRIR AS ATIVIDADES QUE TEMOS PARA TI!
      </h2>
      <div className={ActivitiesStyles.gallery}>
        <div>
          <img src="/og_thumbnail.png" alt="workshops" />
          <a href="/programa" rel="noopener noreferrer" target="_blank">
            WORKSHOPS
          </a>
        </div>
        <div>
          <img src="/og_thumbnail.png" alt="palestras" />
          <a href="/programa" rel="noopener noreferrer" target="_blank">
            PALESTRAS
          </a>
        </div>
        <div>
          <img src="/og_thumbnail.png" alt="Competição de programação" />
          <a
            href="/competicao-programacao"
            rel="noopener noreferrer"
            target="_blank"
          >
            COMPETIÇÃO
          </a>
        </div>
        <div>
          <img src="/og_thumbnail.png" alt="CTF" />
          <a
            href="https://ni.fe.up.pt/"
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
