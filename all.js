const form = document.forms['fm'];

// 예약하기 버튼 클릭 시
form.addEventListener('submit', function (event) {
    event.preventDefault(); // 기본 제출 막기

    const sn = form.sn.value.trim();
    const id = form.id.value.trim();
    const hair_num = form.hair_num.value.trim();
    const hair_name = form.hair_name.value.trim();
    const cost = form.cost.value.trim();
    const reg_day = form.reg_day.value.trim();
    const pay_name = form.pay_name.value.trim();

    // 입력값 체크
    if (!sn || !id || !hair_num || !hair_name || !cost || !reg_day || !pay_name) {
        alert("⚠️ 모든 데이터를 입력해야 예약이 가능합니다!");
        return;
    }

    alert("✅ 예약성공!");
    form.reset(); // 성공 후 초기화
});

// 다시쓰기 버튼 클릭 시
form.addEventListener('reset', function () {
    // 입력값 초기화 + 선택박스 첫번째 옵션으로
    form.sn.value = "";
    form.id.value = "";
    form.cost.value = "";
    form.reg_day.value = "";
    form.hair_num.selectedIndex = 0;
    form.hair_name.selectedIndex = 0;
    form.pay_name.selectedIndex = 0;

    alert("🔄 모든 데이터가 초기화되었습니다!");
});
