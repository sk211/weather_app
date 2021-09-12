const API = `be504566005a9eff93ffa50bfc9bb871`

const loadData = () => {
    // console.log("Hello button");
    const inputValue = document.getElementById("inputFrield").value
    inputValue.value = ""
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayWether(data))
    // console.log(inputValue);

}

const setInnerTex = (id, text) => {
    document.getElementById(id).innerText = text
}
const displayWether = data => {
    console.log(data);
    setInnerTex("city", data.name)
    setInnerTex("temp", data.main.temp)
    setInnerTex("cludes", data.weather[0].main)

    const imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    const htmlImage = document.getElementById("htmlImage")
    htmlImage.setAttribute('src', imgUrl)
}