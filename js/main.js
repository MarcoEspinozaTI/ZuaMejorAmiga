const playSound = function() {
    var sonido = new Audio("./Amapolas.mp3");
   
    sonido.play();
    document.removeEventListener('click', playSound);
  }
  document.addEventListener('click', playSound);


function sumaPromise(a,b){
	return new Promise((resolve, reject) => {
  
	resolve(
		new Typed(a, {
			strings: [
				`<i class="mascota">${b}</i>`
			],
			typeSpeed: 200, 
			startDelay: 300, 	
			cursorChar: '',
			contentType: 'html', 
		})
	)
  
  })
}

function final(a,b){
	return new Promise((resolve, reject) => {
  
	resolve(
		new Typed(a, {
			strings: [
				b
			],
			typeSpeed: 50, 
			startDelay: 300,	
			cursorChar: '', 
			contentType: 'html', 
		})
	)
  
})
}

	
sumaPromise(".typed","Zulema").then(
	()=>{
		setTimeout(()=>{
			sumaPromise(".typed1","Unica");
		},3500) 
	}).then(
		()=>{
		setTimeout(()=>{
			sumaPromise(".typed2","Alegre");
		},5300)
	}).then(
	()=>{
		setTimeout(()=>{
			sumaPromise(".typed3","Noble");
		},8000)
	}).then(
	()=>{
		setTimeout(()=>{
			sumaPromise(".typed4","Increible");
		},10300)
	}).then(
		()=>{
		setTimeout(()=>{
			final(".final","Ahora lee las iniciales");
		},13500)
	})

	
	setTimeout(()=>{
		const img=document.querySelector(".test");
		img.style.display="block";
	},5000)

	setTimeout(()=>{
		const img2=document.querySelector(".test2");
		img2.style.display="block";	
	},8000)

	setTimeout(()=>{
		const img3=document.querySelector(".test3");
		img3.style.display="block";
	},16000)





	
