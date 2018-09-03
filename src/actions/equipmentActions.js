import database from '../firebase/firebase';

// SET_EQUIPMENT_LIST
export const setEquipmentList = (equipmentList) => {
  return {
    type: 'SET_EQUIPMENT_LIST',
    equipmentList
  }
}

export const startSetEquipmentList = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/equipment`).once('value').then((snapshot) => {
      const equipmentList = [];
      
      snapshot.forEach((childSnapshot) => {
        equipmentList.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
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

export const startAddEquipment = (equipmentData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      invNo = Math.random() * 10000,
      factNo = Math.random() * 10000,
      producer = '',
      description = '',
      verificationExpires = 0
    } = equipmentData;
    const equipment = {title, invNo, factNo, producer, description, verificationExpires};
    
    database.ref(`users/${uid}/equipment`).push(equipment).then(
      (ref) => {
        dispatch(addEquipment({
          id: ref.key,
          ...equipment
        }));
      }
    );
  }
};

// REMOVE_EQUIPMENT
export const removeEquipment = ({ id } = {}) => ({
  type: 'REMOVE_EQUIPMENT',
  id
});

export const startRemoveEquipment = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/equipment/${id}`).remove().then(() => {
      dispatch(removeEquipment({ id }));
    });
  };
};

// UPDATE_EQUIPMENT
export const editEquipment = (id, updates) => ({
  type: 'EDIT_EQUIPMENT',
  id,
  updates
});

export const startEditEquipment = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/equipment/${id}`).update(updates).then(() => {
      dispatch(editEquipment(id, updates));
    });
  };
};
