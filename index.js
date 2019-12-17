var botaoSalvar = document.querySelector("#btnSalvar");
	botaoSalvar.addEventListener("click",function(event){
		event.preventDefault();
		
		var form = document.querySelector("#form-adiciona");
		
		var nome = form.id.value;
		var nome = form.nome.value;
		var nome = form.sexo.value;
		var nome = form.telefone.value;
		var nome = form.email.value;
		var nome = form.url.value;		
		
		var contato = document.createElement("form");
		
		var id = document.createElement("form");
		var nome = document.createElement("form");
		var sexo = document.createElement("form");
		var telefone = document.createElement("form");
		var email = document.createElement("form");
		var url = document.createElement("form");
		
		id.textContent = id;
		nome.textContent = nome;
		sexo.textContent = sexo;
		telefone.textContent = telefone;
		email.textContent = email;
		url.textContent = url;
		
		formArea.appendChild(id);
		formArea.appendChild(nome);
		formArea.appendChild(sexo);
		formArea.appendChild(telefone);
		formArea.appendChild(email);
		formArea.appendChild(url);
		
		var tabela = document.querySelector("#form-adiciona");
		
		tabela.appendChild(formArea);
		
	});