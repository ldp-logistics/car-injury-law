export const siteUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const trailingPath = cleanPath.endsWith('/') || cleanPath === '' ? cleanPath : `${cleanPath}/`;
  return `https://www.carinjurylaw.com/${trailingPath}`;
};

export const internalLink = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const trailingPath = cleanPath.endsWith('/') || cleanPath === '' ? cleanPath : `${cleanPath}/`;
  return `/${trailingPath}`;
};
