let result = document.getElementById("result")
let bulletPosition = Math.floor(Math.random() * 6); // 0에서 5사이 숫자 고르고 내림 처리한 후 선언
let shoottime = 0;

function pullTrigger() { //html에서 버튼 클릭 시 호출되는 함수
  let currentPosition = Math.floor(Math.random() * 6); // 현재 위치
  shoottime++;
  if (currentPosition === bulletPosition) { //만약 총알 위치와 현재 위치가 같다면
    result.innerText = "You Died, 죽은횟수:"+shoottime;
    result.style.color = "red"; 
    document.querySelector("button").disabled = true;
  } else {
    result.innerText = "You Survived";
    result.style.color = "green";
  }
}