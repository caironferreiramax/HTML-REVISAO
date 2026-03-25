const bt = document.querySelector(`button`)

bt.addEventListener("click", function(event)  {
    event.preventDefault()

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    console.log(login, senha);

});