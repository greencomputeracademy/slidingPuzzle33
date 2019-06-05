btnArr = ['1','2','3','4','5','6','7','8','0']; 
answerBtnArr = ['1','2','3','4','5','6','7','8','0']; 
// Counts amount of button click
	var clicked = 0;

	function setMsg(msg){
		document.getElementById("msg").innerText = msg;
	}

	function validateBtnArr(){
		var sum = 0;
		var count = 0;
		for(var i = 0; i<8; i++){
			for(var j = i+1; j<9; j++){
				if(btnArr[i] > btnArr[j] && btnArr[j] != 0){
					count++;	
				}
			}
			sum+= count;
			count = 0;
		}
		return sum;
	}

	function shuffleNums(){
		setMsg("Hit Shuffle to Start Game");
		/*shuffle numbers*/
		for(var i = 1; i < 70; i++){
			var ranNum = Math.floor((Math.random()*8)+1);
			var tmp1 = btnArr[ranNum];
			var tmp2 = btnArr[0];
			btnArr[ranNum] = tmp2;
			btnArr[0] = tmp1;	
		}
		/*To get solvalble puzzle*/
		if(validateBtnArr()%2==0){
		/*Activate button, assign mixed nums in button one by one*/
			for (var i = 1; i < 10; i++) {
				document.getElementById("btn"+i).disabled = false;
				document.getElementById("btn" + (i)).value = btnArr[i-1];
				/*To make number 0 invisible*/
				if(document.getElementById("btn" + (i)).value == 0){
					document.getElementById("btn" + (i)).value = ' ';
				}
			}
		}else{
			shuffleNums();
		}
	}
	/*RETURN BUTTON VALUE*/
	function dgv(num){
		return document.getElementById("btn" + num).value;
	}

	function checkPath(num){
		clicked++;

		if(num==1){
			if(dgv(2)==' '){
				document.getElementById("btn2").value = dgv(1);
				document.getElementById("btn1").value = ' ';				
			}else if(dgv(4)==' '){
				document.getElementById("btn4").value = dgv(1);
				document.getElementById("btn1").value = ' ';
			}
		}else if(num==2){
			if(dgv(1)==' '){
				document.getElementById("btn1").value = dgv(2);
				document.getElementById("btn2").value = ' ';
			}else if(dgv(3)==' '){
				document.getElementById("btn3").value = dgv(2);
				document.getElementById("btn2").value = ' ';
			}else if(dgv(5)==' '){
				document.getElementById("btn5").value = dgv(2);
				document.getElementById("btn2").value = ' ';
			}
		}else if(num==3){
			if(dgv(2)==' '){
				document.getElementById("btn2").value = dgv(3);
				document.getElementById("btn3").value = ' ';
			}else if(dgv(6)==' '){
				document.getElementById("btn6").value = dgv(3);
				document.getElementById("btn3").value = ' ';
			}
		}else if(num==4){
			if(dgv(1)==' '){
				document.getElementById("btn1").value = dgv(4);
				document.getElementById("btn4").value = ' ';
			}else if(dgv(5)==' '){
				document.getElementById("btn5").value = dgv(4);
				document.getElementById("btn4").value = ' ';
			}else if(dgv(7)==' '){
				document.getElementById("btn7").value = dgv(4);
				document.getElementById("btn4").value = ' ';
			}
		}else if(num==5){
			if(dgv(2)==' '){
				document.getElementById("btn2").value = dgv(5);
				document.getElementById("btn5").value = ' ';
			}else if(dgv(4)==' '){
				document.getElementById("btn4").value = dgv(5);
				document.getElementById("btn5").value = ' ';
			}else if(dgv(6)==' '){
				document.getElementById("btn6").value = dgv(5);
				document.getElementById("btn5").value = ' ';
			}else if(dgv(8)==' '){
				document.getElementById("btn8").value = dgv(5);
				document.getElementById("btn5").value = ' ';
			}
		}else if(num==6){
			if(dgv(3)==' '){
				document.getElementById("btn3").value = dgv(6);
				document.getElementById("btn6").value = ' ';
			}else if(dgv(5)==' '){
				document.getElementById("btn5").value = dgv(6);
				document.getElementById("btn6").value = ' ';
			}else if(dgv(9)==' '){
				document.getElementById("btn9").value = dgv(6);
				document.getElementById("btn6").value = ' ';
			}
		}else if(num==7){
			if(dgv(4)==' '){
				document.getElementById("btn4").value = dgv(7);
				document.getElementById("btn7").value = ' ';
			}else if(dgv(8)==' '){
				document.getElementById("btn8").value = dgv(7);
				document.getElementById("btn7").value = ' ';
			}
		}else if(num==8){
			if(dgv(5)==' '){
				document.getElementById("btn5").value = dgv(8);
				document.getElementById("btn8").value = ' ';
			}else if(dgv(7)==' '){
				document.getElementById("btn7").value = dgv(8);
				document.getElementById("btn8").value = ' ';
			}else if(dgv(9)==' '){
				document.getElementById("btn9").value = dgv(8);
				document.getElementById("btn8").value = ' ';
			}
		}else if(num==9){
			if(dgv(6)==' '){
				document.getElementById("btn6").value = dgv(9);
				document.getElementById("btn9").value = ' ';
			}else if(dgv(8)==' '){
				document.getElementById("btn8").value = dgv(9);
				document.getElementById("btn9").value = ' ';
			}
		}
		btnStatusCheck();
	}

function btnStatusCheck(){
	var msg = "";
	var count = 0;
	for(var i = 1; i < 9; i++){
		if(document.getElementById("btn" + i).value == i){
			count++;
		}
	}
	if(count==8){
		msg = "Good Job!\n Clicks Amount: " + clicked;
		for(var i = 1; i < 9; i++){
			document.getElementById("btn"+i).disabled = true;	
		}
		setMsg(msg);
	}
	
}

