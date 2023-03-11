const botaoAddImagem = document.getElementById('adicionar')
botaoAddImagem.addEventListener('click', () => adicionarImagem())
//console.log('fui clicado')



async function adicionarImagem(){
  const resposta =  await fetch ("https://dog.ceo/api/breeds/image/random" )
  const respostaTratada  = await resposta.json()
  const enderecoImagem = respostaTratada['message']
  console.log(enderecoImagem)

  const imgAPI =document.createElement('img')

  imgAPI.setAttribute("src",enderecoImagem)

  document.body.appendChild(imgAPI)



  
}
