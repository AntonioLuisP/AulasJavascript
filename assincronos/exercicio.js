function checaIdade(idade) {
    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            resolve()
        } else {
            reject()
        }
    });
}
checaIdade(17)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        // console.log("Menor que 18");
    });


var repositorios = []
var inputElement = document.querySelector('#app input')
var reposElement = document.querySelector('div#repos ul')


function renderRepos(repositorios) {
    reposElement.innerHTML = ''
    for (repositorio of repositorios) {
        var repositorioElement = document.createElement('li')
        var repositorioText = document.createTextNode(repositorio.name)
        repositorioElement.appendChild(repositorioText)
        if (repositorio.html_url != "") {
            var linkElement = document.createElement('a')
            linkElement.setAttribute('href', repositorio.html_url)
            var linkText = document.createTextNode(' GO!')
            linkElement.appendChild(linkText)
            repositorioElement.appendChild(linkElement)
        }
        reposElement.appendChild(repositorioElement)
    }
}

function buscaUser() {
    var pessoa = inputElement.value
    var busca = 'https://api.github.com/users/' + pessoa + '/repos'
    reposElement.innerHTML = ''
    repositorios = [{
        name: "Carregando ...",
        html_url: ""
    }]
    renderRepos(repositorios)
    axios.get(busca)
        .then(response => {
            repositorios = response.data
            renderRepos(repositorios)
        })
        .catch(error => {
            reposElement.innerHTML = ''
            repositorios = [{
                name: "Nenhuma conta encontrada",
                html_url: ""
            }]
            renderRepos(repositorios)
        })
}

