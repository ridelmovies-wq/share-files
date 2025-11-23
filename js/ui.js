export const updateUI = (status) => {
  const dropZone = document.getElementById('dropZone');
  const uploadBtn = document.getElementById('uploadBtn');
  const loading = document.getElementById('loading');
  
  if (status === 'uploading') {
    dropZone.style.display = 'none';
    uploadBtn.disabled = true;
    loading.style.display = 'block';
  } else {
    dropZone.style.display = 'block';
    uploadBtn.disabled = false;
    loading.style.display = 'none';
  }
};

export const showLink = (link) => {
  const result = document.getElementById('result');
  const fileLink = document.getElementById('fileLink');
  const copyBtn = document.getElementById('copyBtn');
  
  result.style.display = 'block';
  fileLink.value = link;
  
  copyBtn.onclick = () => {
    fileLink.select();
    document.execCommand('copy');
    copyBtn.innerText = 'Copied!';
    setTimeout(() => copyBtn.innerText = 'Copy Link', 2000);
  };
};

export const showError = (message) => {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
  setTimeout(() => {
    errorDiv.style.display = 'none';
  }, 3000);
};
