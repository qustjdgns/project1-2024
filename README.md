# project1-2024
2024-2학기 캡스톤프로젝트 수업

# todo
todo 리스트를 활용한 스케줄 관리

function xbtnclick(e){
    pnode = e.target.parentNode;
    list = document.getElementById('todolist')
    list.removeChild(pnode)
}

function addItem(){
    console.log('addItem 함수 호출됨');

    todo = document.getElementById('item')
    list = document.getElementById('todolist')

    listitem = document.createElement('li')   
    listitem.innerText = todo.value
    listitem.className = 'list-group-item list-group-item-action list-group-item-warning'

    // 삭제버튼 추가
    xbtn = document.createElement('button')
    xbtn.innerHTML = "&times"

    // onclick 지원방법 1 - 함수 적용
    //xbtn.onclick = xbtnclick;

    // onclick 지원방법 2 - 익명함수 적용
    // xbtn.onclick = function(e){
    //     pnode = e.target.parentNode
    //     list.removeChild(pnode)
    // }
    
    // onclcik 지원방법 3 - 화살표함수 적용
    xbtn.onclick = (e)=>{
        pnode = e.target.parentNode
        list.removeChild(pnode)
    }
    xbtn.className = 'close'


    listitem.appendChild(xbtn)


    // 완료버튼을 만들고 할일 리스트에 추가
    dbtn = document.createElement('button')
    dbtn.innerHTML = "&#33"

    dbtn.onclick = (e)=>{
        pnode = e.target.parentNode
        pnode.style.textDecoration = "line-through"
    }
    dbtn.className = 'close'

    listitem.appendChild(dbtn)


    list.appendChild(listitem)

    todo.value = ""
    todo.focus()
}






# openweathermap
OpenAPI를 사용한 인공지능 시스템 실습
지정된 장소의 현재 날씨를 표시
<br>

- [실습해보기] ('https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7d96bc5108f52b80e2d9075a369b9f35')

<br>

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

# open AI
open API를 활용한 검색 활동 지원

개발순서

1. 소스 수정
2. 소스 저장
3. 스테이지
4. 커밋에 푸쉬
5. 커밋메세지

function draw(){
    squestion = "txtMsg.value"
    data ={
        model: smodelmini,
        prompt: squestion,
        n: 2,
        size:"512x512"
    }

    $.ajax({
        type:"POST",
        url: "https://api.openai.com/v1/images/generations",
        headers:{
            "Authorization": "Bearer " + OPENAPI_KEY
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done( function(response){
        console.log(response)
        gimage.src = response.data[0].url
        gimage2.src = response.data[0].url
    }).fail(function(error){
        console.log(error)
errormsg = error.status + ":" + error.responseJSON.error.code + "-" + error.responseJSON.error.message
txtOut.value=errormsg

    })
    
}

talk()
#google cloud vision


# googleVisionAPI

googleVisionAPI를 이용한 안면인식

## 코드설명

코드의 목적 및 기능: 
Google Vision API를 사용하여 이미지에서 얼굴을 감지하고 감정(기쁨, 슬픔, 분노, 놀람)을 분석하는 웹 애플리케이션입니다. 
사용자는 이미지를 업로드하고 간단한 클릭으로 얼굴 감정 분석 결과를 얻을 수 있습니다. 
이 과정은 매우 직관적이고 사용자 친화적으로 설계되어 있습니다.

사용된 기술: 
Google Vision API를 통한 AI 얼굴 인식. 이 도구는 최신의 AI 기술을 활용하여 얼굴 감정 인식을 수행합니다.
Google Vision API는 매우 정교한 얼굴 감지 및 감정 분석 기능을 제공하며, 높은 정확도와 신뢰도를 자랑합니다. 
이를 통해 사용자는 전문적인 이미지 분석 결과를 손쉽게 얻을 수 있습니다.

비동기 처리:
API 요청은 비동기적으로 처리되므로, 사용자 경험을 방해하지 않으며, 빠르고 매끄러운 응답을 제공합니다.
반응형 디자인을 통해 모바일, 태블릿 등 다양한 화면 크기에서 원활하게 자동화되어 최적화되어 있습니다. 
작은 화면에서도 버튼 크기나 글자 크기를 자동으로 조정하여 편리한 사용 경험을 제공합니다.

UX측면에서의 장점

간편한 사용성: 
사용자는 "이미지 선택" 버튼을 클릭하여 이미지를 업로드하고 "이미지 분석" 버튼을 클릭하는 것만으로 감정 분석을 수행할 수 있습니다.
절차가 직관적이어서, 기술에 익숙하지 않은 사용자도 쉽게 사용할 수 있습니다.

시각적 피드백 제공: 
이미지의 감정 분석 결과는 명확한 텍스트 형식으로 제공되며, 분석된 얼굴의 감정 상태를 쉽게 파악할 수 있습니다.

결과의 명확성: 
분석 결과마다 주요 감정 상태와 신뢰도를 %로 제공하여, 감정 분석의 신뢰도를 시각적으로 이해할 수 있습니다.
이는 데이터 기반 의사결정을 돕는 데 유용한 방식입니다.

강점 분석

다양한 감정 분석: 
이 도구는 기쁨, 슬픔, 분노, 놀람이라는 다양한 감정 상태를 분석하여 얼굴 감정을 세밀하게 판단할 수 있습니다. 
이는 얼굴 인식뿐만 아니라 사람의 감정 반응을 이해하고자 할 때 유용하게 사용될 수 있습니다.

다중 얼굴 지원: 
한 이미지에 여러 얼굴이 있는 경우에도 도구는 최대 100개의 얼굴까지 분석할 수 있으며, 단순한 1인의 이미지뿐만 아니라 단체 사진 등에서도 유용하게 사용할 수 있습니다.

에러처리

에러 처리 기능: API 요청이 실패하거나 얼굴 감지가 되지 않았을 경우, 사용자는 오류 메시지를 받게 되며, 사용자에게 명확한 안내가 이루어집니다. 
이로 인해 사용자가 오류 상황을 쉽게 이해하고 해결할 수 있습니다.

## 작업코드

let imagestring = '';  // 이미지 데이터를 저장할 변수

function processFile(event) {
    const content = event.target.result;
    imagestring = content.replace(/^data:image\/(jpeg|png);base64,/, ''); // 이미지 데이터 저장
    displayImage(content); // 이미지 미리보기 표시
}

function displayImage(src) {
    const imgElement = document.getElementById("gimage");
    imgElement.src = src;
    imgElement.classList.add("show"); // 이미지가 부드럽게 나타나도록 CSS 클래스 추가
}

function uploadFiles(files) {
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = processFile; // 파일 로드가 끝나면 처리 함수 호출
    reader.readAsDataURL(file); // 파일을 base64로 읽어옴
}

function analyze() {
    if (!imagestring) {
        alert("먼저 이미지를 업로드해주세요.");
        return;
    }

    const data = {
        requests: [{
            image: { content: imagestring },
            features: [{ type: "FACE_DETECTION", maxResults: 100 }]
        }]
    };

    $.ajax({
        type: "POST",
        url: `https://vision.googleapis.com/v1/images:annotate?key=${VISION_API_KEY}`,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done(function(response) {
        handleResponse(response);
    }).fail(function(error) {
        displayError("API 요청 실패: " + error.responseText);
    });
}

function handleResponse(response) {
    const faceAnnotations = response.responses[0].faceAnnotations;
    if (faceAnnotations && faceAnnotations.length > 0) {
        displayResults(faceAnnotations);
    } else {
        displayError("얼굴이 감지되지 않았습니다.");
    }
}

function displayResults(faces) {
    const resultArea = document.getElementById("result");
    let resultText = "얼굴 분석 결과:\n\n";

    faces.forEach((face, index) => {
        const emotions = {
            joy: face.joyLikelihood,
            sorrow: face.sorrowLikelihood,
            anger: face.angerLikelihood,
            surprise: face.surpriseLikelihood
        };

        // 신뢰도가 높은 감정 찾기
        const highestEmotion = Object.keys(emotions).reduce((a, b) => 
            emotions[a] > emotions[b] ? a : b
        );

        // 신뢰도 가져오기
        const confidence = face.detectionConfidence * 100;

        // 감정 텍스트 매핑
        const emotionMapping = {
            joy: "기쁨",
            sorrow: "슬픔",
            anger: "분노",
            surprise: "놀람",
            unlikely: "없음"
        };

        // 결과 텍스트에 추가
        resultText += `얼굴 #${index + 1}:\n- 표정: ${emotionMapping[highestEmotion]} (${confidence.toFixed(2)}%)\n\n`;
    });

    resultArea.value = resultText; // 결과를 textarea에 표시
}

function displayError(message) {
    const resultArea = document.getElementById("result");
    resultArea.value = "오류: " + message;
}
  
- 실제 실행
  
  ![실행화면1](https://github.com/user-attachments/assets/de173d04-6723-42ce-9ae3-9157db2bc684)

  ![실행화면3](https://github.com/user-attachments/assets/2b671b9e-ef1d-4be3-8ec8-03fc0bfeade7)

194652315958673462645561345번째 수정

2024-9-19 깃허브연동실습

로컬에서 편집함

