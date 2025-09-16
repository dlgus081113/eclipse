function chk(){
		if(document.frm.sn.value==""){
				alert("일정번호가 입력되지 않았습니다.");
				document.frm.sn.focus();
				return false;
		}
		if(document.frm.id.value==""){
				alert("일정일자가 입력되지 않았습니다.");
				document.frm.id.do_date.focus();
				return false;
		}
		if(document.frm.hair_num.value==""){
				alert("회원번호가 입력되지 않았습니다.");
				document.frm.hair_num.focus();
				return false;
		}
		if(document.frm.cost.value==""){
				alert("일정메모가 입력되지 않았습니다.");
				document.frm.cost.focus();
				return false;
		}
		if(document.frm.reg_day.value==""){
				alert("일정메모가 입력되지 않았습니다.");
				document.frm.reg_day.focus();
				return false;
		}
		if(document.frm.pay_num.value==""){
				alert("일정메모가 입력되지 않았습니다.");
				document.frm.pay_num.focus();
				return false;
		}
		
	return true;
}
