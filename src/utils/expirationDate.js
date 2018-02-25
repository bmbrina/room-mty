import moment from 'moment';

// Get expiration date for session cookies
// Expiration will be +1 year from sign in
export function getExpirationDate() {
  let currentYear = moment().format("YYYY");
  let date = new Date();
  date.setFullYear(Number(currentYear) + 1);
  return date;
}
