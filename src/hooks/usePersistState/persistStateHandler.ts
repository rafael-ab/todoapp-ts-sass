export const setPersistState = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getPersistState = (key: string) => {
  const data = localStorage.getItem(key);
  const persistedData = data !== null ? JSON.parse(data) : [];
  return persistedData;
};

export const cleanPersistState = (key: string) => {
  localStorage.setItem(key, "[]");
};
