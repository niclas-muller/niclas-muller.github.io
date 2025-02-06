function loadRandomPreview() {
    let rnd = Math.floor(20*Math.random());
    let functionType = document.getElementById("previewFunctionType").value;
    let path = '../../images/samples/' + functionType + '/sample_' + rnd + '.png';
    document.getElementById('imagePreview').src = path;
}
