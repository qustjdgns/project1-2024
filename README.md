# project1-2024
2024-2학기 캡스톤프로젝트 수업

# openweathermap
OpenAPI를 사용한 인공지능 시스템 실습
지정된 장소의 날씨 표시
<br>
'https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35'


            console.log(response)
            // alert(response.weather[0].main)

            let wdata = response
            let exdata = response.weather[0];
        
            temp.innerText = wdata.main.temp + "°C";
            min.innerText = wdata.main.temp_min;
            max.innerText = wdata.main.temp_max;
            wind.innerText = wdata.wind.speed;
        
            weather.innerText = exdata.main + "," + exdata.description;
            icon.setAttribute('src', icon_url + exdata.icon + ".png");
		}).fail(function(error) {
			alert("!/js/user.js에서 에러발생: " + error.statusText);
		});
	},
 }

#open AI

#google cloud vision
-------


개발순서

1. 소스 수정
2. 소스 저장
3. 스테이지
4. 커밋에 푸쉬
5. 커밋메세지




194652315958673462645561345번째 수정

2024-9-19 깃허브연동실습
로컬에서 편집함

