export default function getJsonFromUrl(url) {
  if (!url) return {};
  const question = url.indexOf("?");
  const query = url.substring(question + 1);
  const result = {};
  if (!query) return {};
  query.split("&").forEach((parts) => {
    if (!parts) return;
    const part = parts.split("+").join(" "); // replace every + with space, regexp-free version
    const eq = part.indexOf("=");
    let key = eq > -1 ? part.substr(0, eq) : part;
    const val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : "";
    const from = key.indexOf("[");
    if (from === -1) result[decodeURIComponent(key)] = val;
    else {
      const to = key.indexOf("]", from);
      const index = decodeURIComponent(key.substring(from + 1, to));
      key = decodeURIComponent(key.substring(0, from));
      if (!result[key]) result[key] = [];
      if (!index) result[key].push(val);
      else result[key][index] = val;
    }
  });
  return result;
}