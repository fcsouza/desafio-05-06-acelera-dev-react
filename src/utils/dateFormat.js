export default class DateHelper {
  static formatDateBR(value) {
    const date = new Date(value);
    if (date && !isNaN(date.getTime())) {
      return date.toISOString().substr(0, 10).split("-").reverse().join("/");
    }
    return value;
  }
}