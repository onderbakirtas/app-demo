type Padding = number | string;

function padding(a: Padding, b: Padding, c: Padding, d: Padding) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : b ? b : a,
  };
}

export { padding };
