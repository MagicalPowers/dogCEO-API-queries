export function formatNameDisplay(name) {
  return name.split("/")[4].split("-").reverse().join(" ");
}

export function formatNameApi(name) {
  return name.split(" ").reverse().join("/");
}
