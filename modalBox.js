/* 추가 버튼을 누르기 전에는 모달창 배경과 모달창이 안 보이게! */
document.getElementById("modal").style.display = "none";

/* 모달창 열기 */
function openModal() {
    document.querySelector('.modalBackground').style.display = 'block';
    document.querySelector('.modal').style.display = 'block';
  }

/* 모달창 닫기 */
function closeModal() {
    document.querySelector('.modalBackground').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
  }

/* 추가 버튼을 눌렀을 때, 모달창이 열리게! */
document.getElementById('addItem').addEventListener('click', openModal);
/* 모달창의 X버튼을 눌렀을 때, 모달창이 닫히게! */
document.querySelector('.closingModal').addEventListener('click', closeModal);

