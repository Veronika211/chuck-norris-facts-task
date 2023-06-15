async function checkIfImageIsValid(iconUrl) {
  try {
    const response = await fetch(iconUrl);
    return response.ok;
  } catch (error) {
    console.error("Image error:", error);
    return false;
  }
}

export default checkIfImageIsValid;
