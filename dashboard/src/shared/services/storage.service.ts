export function useStorageService() {
  const get = <T>(key: string) =>
    JSON.parse(localStorage.getItem(key) as string) as T;
  const set = <T>(key: string, data: T) =>
    localStorage.setItem(key, JSON.stringify(data));

  const asyncSet = <T>(key: string, data: T) => {
    set(key, data);
    const value = get(key);
    return !!value
      ? Promise.resolve({ success: !!value })
      : Promise.reject({ message: "failed to set" });
  };

  const remove = (key: string) => localStorage.removeItem(key);

  return { get, set, asyncSet, remove };
}
