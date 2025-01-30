export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Problemm !!", error.message);
      return false;
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Problemm !!", error.message);
    return false;
  }
};
