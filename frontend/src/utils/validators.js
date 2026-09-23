export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isStrongPassword = (password) => {
  return password.length >= 8;
};

export const isRequired = (value) => {
  return value.trim().length > 0;
};
