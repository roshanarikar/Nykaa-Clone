import React from "react";


const HoverTable = ({ value }) => {
  return (
    <div className='hover-table-container'>
      {value == "Makeup" ? (
        <Makeup />
      ) : value == "Skin" ? (
        <Skin />
      ) : value == "Hair" ? (
        <Hair />
      ) : value == "Appliances" ? (
        <Appliances />
      ) : value == "Personal Care" ? (
        <PersonalCare />
      ) : value == "Natural" ? (
        <Natural />
      ) : value == "Mom&Baby" ? (
        <MomAndBaby />
      ) : value == "Health&Wellness" ? (
        <HealthAndWellness />
      ) : value == "Men" ? (
        <Men />
      ) : value == "Fregrance" ? (
        <Fragrance />
      ) : value == "LUXE" ? (
        <Luxe />
      ) : null}
    </div>
  );
};

export default HoverTable;
