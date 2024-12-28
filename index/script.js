 let tog = document.querySelector('.toggle-bar');

tog.addEventListener('click' , function show(){
	document.querySelector('#nav').style.display = 'block';
	document.querySelector('#nav').style.transform = 'translatex(0%)';
})