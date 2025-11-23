export const validateFile = (file) => {
  if (!file) {
    return false;
  }
  // 100MB limit for file.io free tier
  const maxSize = 100 * 1024 * 1024;
  if (file.size > maxSize) {
    alert('File is too large. Maximum size is 100MB.');
    return false;
  }
  return true;
};
