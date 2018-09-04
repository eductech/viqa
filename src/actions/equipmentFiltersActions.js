// SET_EQUIPMENT_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_EQUIPMENT_TEXT_FILTER',
  text
});

// SET_EQUIPMENT_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_EQUIPMENT_START_DATE',
  startDate
});

// SET_EQUIPMENT_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_EQUIPMENT_END_DATE',
  endDate
});

// SORT_EQUIPMENT_BY_INV.NO
export const sortByInvNo = () => ({
  type: 'SORT_EQUIPMENT_BY_INV.NO'
});

// SORT_EQUIPMENT_BY_TITLE
export const sortByTitle = () => ({
  type: 'SORT_EQUIPMENT_BY_TITLE'
});

// SORT_EQUIPMENT_BY_FACT.NO
export const sortByFactNo = () => ({
  type: 'SORT_EQUIPMENT_BY_FACT.NO'
});

// SORT_EQUIPMENT_BY_PRODUCER
export const sortByProducer = () => ({
  type: 'SORT_EQUIPMENT_BY_PRODUCER'
});

// SORT_EQUIPMENT_BY_VERIFICATION_EXPIRES
export const sortByVerificationExpires = () => ({
  type: 'SORT_EQUIPMENT_BY_VERIFICATION_EXPIRES'
});
