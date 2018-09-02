import React from "react";
import EquipmentList from "./EquipmentList";
import EquipmentListFilters from "./EquipmentListFilters";

const EquipmentListPage = () => {
  return (
    <div className="d-flex flex-column shadow-sm private-page__content">
      <EquipmentList />
      <EquipmentListFilters />
    </div>
  )
}

export default EquipmentListPage;
