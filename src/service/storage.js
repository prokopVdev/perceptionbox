export const save = (data) => {
  try {
    window.localStorage.setItem("characters", JSON.stringify(data));
  } catch (error) {
    return null;
  }
};
export const get = () => {
  try {
    return JSON.parse(window.localStorage.getItem("characters"));
  } catch (error) {
    return null;
  }
};
export const remove = () => {
  try {
    return localStorage.removeItem("characters");
  } catch (error) {
    return null;
  }
};

export const saveId = (item) => {
  const chars = get() || [];
  const updatedChars = [item, ...chars];
  save(updatedChars);
};
export const deleteId = (id) => {
  const chars = get();
  const updatedChars = chars?.filter((char) => char !== id);
  save(updatedChars);
};
