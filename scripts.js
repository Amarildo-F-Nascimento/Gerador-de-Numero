function generateNumber() {
    
    const result = document.querySelector("#result")
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    result.innerHTML = value


   


}