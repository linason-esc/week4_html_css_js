/* 새로운 컴포넌트 박스와 새로운 카테고리 추가 */
function addingItem(name, image, content) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("box");
  newDiv.innerHTML = `
          <img src="${image}" alt="${name}" />
          <span>${content}</span>
      `;
  document.querySelector("#juryubox").appendChild(newDiv);

  const newLi = document.createElement("li");
  newLi.innerHTML = name;
  document.querySelector("#sidebar").appendChild(newLi);
}

/* 컴포넌트 추가 후, 모달창 배경과 모달창 닫기 */
function addingItemHandler(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  addingItem(name, image, content);
  closeModal();
}

document.getElementById("addingItemModal").addEventListener("submit", addingItemHandler);
/* addingItemModal이 form 형식이어야 addEventListener에서 submit이 먹혀서 아이템이 추가된다..!
처음에 form 대신 div로 했다가 아이템이 추가가 안되어서 애먹었다. */
