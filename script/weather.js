    // function search() { }

    // const url = 'https://goweather.herokuapp.com/weather/서울';
    // let sendbtn = document.getElementById("send");
    // let region = document.getElementById('region');
    // region.textContent = "서울";
    // document.querySelector("input").addEventListener("focus", () => {
    //     document.querySelector("input").value = "";
    //     temperature.textContent = "";
    //     wind.textContent = "";
    //     weather.textContent = "";
    //     region.textContent = "";

    // });

    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => console.log(data))
    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => temperature.textContent = data['temperature']);
    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => wind.textContent = data['wind']);
    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => weather.textContent = data['description']);

    function sendbtnEvent() {

        // input value값 변수설정
        let value = document.getElementById("city").value
        // input 입력값 변수설정
        let newValue = document.querySelector('input');

        // input의 value값에 input 입력값을 넣어줌
        value = newValue;


        const cities = document.getElementById('city').value;
        const url = 'https://goweather.herokuapp.com/weather/' + cities;
        let region = document.getElementById('region');
        region.textContent = cities;

        console.log(url)


        // api 호출
        const temperature = document.getElementById("temperature");
        const wind = document.getElementById("wind");
        const weather = document.getElementById("weather");
        // weather.textContent = "";


        fetch(url)
            .then((res) => res.json())
            .then((data) => console.log(data));

        fetch(url)
            .then((res) => res.json())
            .then((data) => temperature.textContent = data['temperature']);

        fetch(url)
            .then((res) => res.json())
            .then((data) => wind.textContent = data['wind']);

        fetch(url)

            .then((res) => res.json())
            .then((data) => weather.textContent = data['description']);

        fetch(url, {
                method: 'GET', // GET, POST, 등등
                headers: {
                    'Content-Type': 'application/json', // 요청의 Content-Type 설정
                    'Access-Control-Allow-Origin': 'https://sunghoon1209.github.io/weather/' // CORS 해결을 위한 헤더
                }
            })
            .then(response => {
                // 응답 처리
            })
            .catch(error => {
                // 오류 처리
            });



        // .then(() => {
        //     let bgc = document.getElementById("wrap");
        //     if (weather.textContent = "Partly cloudy") {
        //         weather.textContent = "구름조금";
        //         bgc.style.backgroundImage = "near-gradient(to top, #fff1eb 0%, #ace0f9 100%)";
        //     }
        //     else if (weather.textContent = "Clear") {
        //         weather.textContent = "화창";
        //         bgc.style.backgroundImage = "background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)";

        //     } else if (weather.textContent = "Rainy") {
        //         weather.textContent = "비";
        //         bgc.style.backgroundImage = "background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)";

        //     } else if (weather.textContent = "Cloud") {
        //         weather.textContent = "구름 많음";
        //         bgc.style.backgroundImage = "background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);)";

        //     }
        //     ;

        // });





    }