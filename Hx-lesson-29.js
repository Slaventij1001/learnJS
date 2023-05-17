/*const normalizeUrl = (adress) => {
    const url = '';
    const pref = 'https://';
    if (url !== pref + url) {
      return pref + url;
    } else if (url === pref + url) {
      return url}
      
    };
    console.log(normalizeUrl('https://yandex.ru'));
    console.log(normalizeUrl('yandex.ru'));*/

    const normalizeUrl = (site) => {
  let normalizedUrl;

  if (site.startsWith('https://')) {
    normalizedUrl = site;
  } else {
    normalizedUrl = `https://${site}`;
  }

  return normalizedUrl;
};