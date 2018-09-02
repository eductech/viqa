import database from '../firebase/firebase';

// SET_EQUIPMENT_LIST
export const setEquipmentList = (equipmentList) => {
  return {
    type: 'SET_EQUIPMENT_LIST',
    equipmentList
  }
}

export const startSetEquipmentList = () => {
  return (dispatch) => {
    return database.ref('equipment').once('value').then((snapshot) => {
      const equipmentList = [];
      console.log(snapshot);
      
      snapshot.forEach((childSnapshot) => {
        equipmentList.push({...childSnapshot.val()});
      });
      console.log(equipmentList);
      
      dispatch(setEquipmentList(equipmentList));
    });
  }
}

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
