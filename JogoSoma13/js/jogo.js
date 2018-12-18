 
imagens = new Array (
	"imagens/0.png",
	"imagens/1.png",
	"imagens/2.png",
	"imagens/3.png",
	"imagens/4.png",
	"imagens/5.png",
	"imagens/6.png",
	"imagens/7.png",
	"imagens/8.png",
	"imagens/9.png"); 
	
	imagenscomclusao = new Array (
		"imagens/perdeu.png",
		"imagens/ganhou.png")

			function criaBannerLateral(qtdImagens) {   
			
			
	
			 indImg1 = Math.round(Math.random()*(imagens.length - 1)); 
				banner1 = imagens[indImg1];  
		     indImg2 = Math.round(Math.random()*(imagens.length - 1)); 
				banner2 = imagens[indImg2]; 
				indImg3 = Math.round(Math.random()*(imagens.length - 1)); 
				banner3 = imagens[indImg3]; 
	
			document.getElementById("1").innerHTML=	("<img src='" + banner1 + "' />"); 
			document.getElementById("2").innerHTML=	("<img src='" + banner2 + "' />"); 
			document.getElementById("3").innerHTML=	("<img src='" + banner3 + "' />"); 
			
			var	soma=indImg1+indImg2+indImg3;
			console.log(soma);

}		
		

		function funcao1(){
			


			banner4 = imagenscomclusao[0];  
				var answer = confirm("<img src='" + banner4 + "' />");
			if (!answer){
				window.location = "ESCREVA AQUI O ENDEREÇO DO SITE ALTERNATIVO";}
				
	}

function funcao2(){	
	var answer = confirm("ESCREVA AQUI A MANSAGEM DA JANELA");
if (!answer){
	window.location = "ESCREVA AQUI O ENDEREÇO DO SITE ALTERNATIVO";}
}
