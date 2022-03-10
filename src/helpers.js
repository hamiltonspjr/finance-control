export function valueFormatBrl(value) {
  if (!isNaN(value)) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return "";
  }
}

export function dateFormatBr(date) {
  let dateSeparate = date.split("-");
  return `${dateSeparate[2]}/${dateSeparate[1]}/${dateSeparate[0]}`;
}

export function filterData(array, value) {
  return array.filter((item) => item.title !== value);
}
