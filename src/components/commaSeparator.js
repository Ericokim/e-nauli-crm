export default function commaSeparator(num) {
  let number = Number(num).toLocaleString().split(".");
  number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return number.join(".");
}
