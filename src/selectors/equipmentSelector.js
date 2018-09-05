import moment from 'moment';

export default (equipmentArr, { text, sortBy, startDate, endDate }) => {
  return equipmentArr.filter((equipment) => {
    const verificationExpiresMoment = moment(equipment.verificationExpires);
    const startDateMatch = startDate ? startDate.isSameOrBefore(verificationExpiresMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(verificationExpiresMoment, 'day') : true;
    const textMatch = equipment.title.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'invNo':
        return a.invNo < b.invNo ? 1 : -1;
      case 'title':
        return a.title < b.title ? 1 : -1;
      case 'factNo':
        return a.factNo < b.factNo ? 1 : -1;
      case 'producer':
        return a.producer < b.producer ? 1 : -1;
      case 'verificationExpires':
        return a.verificationExpires < b.verificationExpires ? 1 : -1;
    }
  });
};