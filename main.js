let dropArea = document.getElementById('drop-area');
let inputFile = document.getElementById('file'); 
let imgView = document.querySelector('.img-view');





inputFile.addEventListener('change', uploadImage)


function uploadImage() {
  imgView.style.backgroundImage = `url(${URL.createObjectURL(inputFile.files[0])})`
  imgView.textContent = ""
  imgView.style.border = 'none'
}

dropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
})

dropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  inputFile.files = e.dataTransfer.files;
  uploadImage()

})