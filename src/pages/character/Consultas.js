import React from "react";
import { QueryCard, ImgCard, InfoCard, Live, I, CloseIcon } from "./style";

const Consultas = ({ query, setModal }) => {
  return (
    <>
      <CloseIcon
        className="far fa-times-circle"
        onClick={() => setModal(false)}
      />
      <QueryCard>
        <ImgCard src={query.image} alt="img characters" />
        <div>
          <InfoCard name="true">{query.name}</InfoCard>

          <InfoCard>
            <i className="fas fa-atom" />
            Status: {query.status}
            {query.status === "Dead" ? (
              <I className="fas fa-circle" />
            ) : (
              <Live className="fas fa-circle" />
            )}
          </InfoCard>
          <InfoCard>
            <i className="fas fa-atom" />
            Species: {query.species}
          </InfoCard>
        </div>
      </QueryCard>
    </>
  );
};

export default Consultas;
