export default function toPersianNumbers(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const commafyNumber = insertComma(n);
  return commafyNumber.toString().replace(/\d/g, (x) => farsiDigits[x]);
}

function insertComma(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
