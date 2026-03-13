export const withSlash = (path: string): string => {
  if (path === '/') return '/';
  // If path is empty string, return '/' for home
  if (!path) return '/';
  // Remove trailing slashes and then add one to be consistent
  const cleanPath = path.replace(/\/+$/, "");
  return cleanPath + '/';
};

export const siteUrl = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const trailingPath = withSlash(cleanPath);
  // Remove starting slash if withSlash returned it (for home)
  const finalPath = trailingPath.startsWith('/') ? trailingPath.slice(1) : trailingPath;
  return `https://www.carinjurylaw.com/${finalPath}`;
};

export const internalLink = (path: string) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const trailingPath = withSlash(cleanPath);
  if (trailingPath === '/') return '/';
  return `/${trailingPath}`;
};
