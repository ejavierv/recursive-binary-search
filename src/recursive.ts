
function search(list: [number], value: number) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      return true;
    }
  }
  return false;
}

const a = search([123], 3);
