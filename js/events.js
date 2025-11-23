import { uploadFile } from './api.js';
import { updateUI, showLink, showError } from './ui.js';
import { validateFile } from './validation.js';

export const initEvents = () => {
  const dropZone = document.getElementById('dropZone');
  const fileInput = document.getElementById('fileInput');
  const uploadBtn = document.getElementById('uploadBtn');

  if (!dropZone || !fileInput || !uploadBtn) return;

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length) fileInput.files = files;
  });

  dropZone.addEventListener('click', () => fileInput.click());

  uploadBtn.addEventListener('click', async () => {
    const file = fileInput.files[0];
    if (!file) return showError('Please select a file first.');
    if (!validateFile(file)) return;

    updateUI('uploading');
    try {
      const result = await uploadFile(file);
      if (result.success) {
        showLink(result.link);
        updateUI('success');
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error(error);
      showError('Upload failed. Please try again.');
      updateUI('error');
    }
  });
};
