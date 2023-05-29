export const getBgColor = id => {
  switch (id) {
    case "id-1":
      return "red";
    case "id-2":
      return "orange";
    case "id-3":
      return "yellow";
    case "id-4":
        return "green";
      case "id-5":
      return "lightblue";
    default:
      return window.alert(`Unsupported variant prop value - ${id}`);
  }
};

export const getBgColorStatus = isOnline => {
  if (isOnline) {
    return "green"
  } else {
    return "red"
  }
}

export const getUpperCase = name => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}