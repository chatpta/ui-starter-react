export function errorMessages( event ) {
  switch ( event?.target?.name ) {
    case "email":
      return "Please enter valid email address.";
    case "password":
      return "Can contain 6 to 16 characters.";
    case "first_name":
      return "Name can contain characters and numbers.";
    default:
      return "";
  }
}