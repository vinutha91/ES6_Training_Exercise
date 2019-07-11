var grandParentElement = document.getElementById('grandParent');
var parentElement = document.getElementById('parent');
var childElement = document.getElementById('child');

grandParentElement.addEventListener('click', function(event) {
    console.log('Grand Parent Element');
});

parentElement.addEventListener('click', function(event) {
    console.log('Parent Element');
});

childElement.addEventListener('click', function(event) {
    console.log('Child Element');
});