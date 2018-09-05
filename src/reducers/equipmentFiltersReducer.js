import moment from 'moment';

const equipmentFiltersReducerDefaultState = {
  text: '',
  sortBy: 'invNo',
  startDate: null,
  endDate: null
};

export default (state = equipmentFiltersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_EQUIPMENT_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_EQUIPMENT_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_EQUIPMENT_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    case 'SORT_EQUIPMENT_BY_INV.NO':
      return {
        ...state,
        sortBy: 'invNo'
      };
    case 'SORT_EQUIPMENT_BY_TITLE':
      return {
        ...state,
        sortBy: 'title'
      };
    case 'SORT_EQUIPMENT_BY_FACT.NO':
      return {
        ...state,
        sortBy: 'factNo'
      };
    case 'SORT_EQUIPMENT_BY_PRODUCER':
      return {
        ...state,
        sortBy: 'producer'
      };
    case 'SORT_EQUIPMENT_BY_VERIFICATION_EXPIRES':
      return {
        ...state,
        sortBy: 'verificationExpires'
      };
    default:
      return state;
  }
};
