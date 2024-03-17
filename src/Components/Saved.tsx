import React from "react";

interface SavedProps {
  saved: {
    email: string;
    name: string;
    address: string;
    payment: string;
    terms: boolean;
  };
}

const Saved: React.FC<SavedProps> = ({ saved }) => {
  return (
    <div className="border-2 border-black p-5 text-center mt-20">
      <h2 className="text-xl font-bold">Vasa narudzba:</h2>
      <p>
        <span className="font-bold">Email:</span> {saved.email}
      </p>
      <p>
        <span className="font-bold">Ime:</span> {saved.name}
      </p>
      <p>
        <span className="font-bold">Adresa:</span> {saved.address}
      </p>
      <p>
        <span className="font-bold">Nacin placanja:</span> {saved.payment}
      </p>
      <p>
        <span className="font-bold">Prihvaceni uvjeti</span>{" "}
        {saved.terms ? "DA" : "NE"}
      </p>
    </div>
  );
};

export default Saved;
