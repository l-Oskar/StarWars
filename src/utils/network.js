import { HTTP, HTTPS } from "@constants/api";

/**
 * Change URL with HTTP to HTTPS
 * @param {String} url
 * @returns {String} url with HTTPS
 */
export const changeHTTP = (url) => {
  if (url != null && !url.startsWith(HTTPS)) {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    return result;
  }
  return url;
};

/**
 * Send Fetch request
 * @param {String} url - url for request
 * @returns {Promise} - Promise with result
 */
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
