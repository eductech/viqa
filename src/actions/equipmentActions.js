// ADD_EQUIPMENT
export const addEquipment = ({
  title = '',
  invNo = Math.random() * 10000
} = {}) => {
  return {
    type: 'ADD_EQUIPMENT',
    equipment: {
      title,
      invNo
    }
  }
}

// REMOVE_EQUIPMENT

// UPDATE_EQUIPMENT
