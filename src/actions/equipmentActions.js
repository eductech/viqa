import database from '../firebase/firebase';

// ADD_EQUIPMENT
const addEquipment = (equipment) => {
  return {
    type: 'ADD_EQUIPMENT',
    equipment
  };
}


export const startAddEquipment = ({
  title = '',
  invNo = Math.random() * 10000
} = {}) => {
  return (dispatch) => {
    const equipment = {title, invNo};
    
    database.ref('equipment').push(equipment).then(
      (ref) => {
        dispatch(addEquipment({
          invNo: equipment.invNo,
          title: equipment.title
        }));
      }
    );
  }
};


// REMOVE_EQUIPMENT

// UPDATE_EQUIPMENT
