	// 'my_li' element를 중심으로

	// 부모, 자식, 형제 노드를 탐색합니다.

	const my_li = document.getElementById('my_li');

	 

	document.write(' <br> ====== 결과 출력 ====== <br>');

	// 부모 : parentNode

	const parentNode = my_li.parentNode;

	document.write('부모 : ' + parentNode + '<br><br>');

	 

	 

	// 자식 : firstChild, lastChild

	const firstChildNode = my_li.firstChild;

	const lastChildNode = my_li.lastChild;

	document.write('첫번째 자식 : ' + firstChildNode + '<br>');

	document.write('마지막 자식 : ' + lastChildNode + '<br><br>');

	 

	// 자식 노드 목록

	const childNodes = my_li.childNodes;

	document.write('자식 노드 길이/목록 : ')

	document.write(childNodes.length + '<br>');

	for(let i = 0; i < childNodes.length; i++)  {

	  document.write(childNodes[i] + '<br>');

	}

	document.write('<br>');

	 

	 

	// 형제 : previousSibling, nextSibling

	const prevNode = my_li.previousSibling;

	const nextNode = my_li.nextSibling;

	document.write('이전 형제 : ' + prevNode + '<br>');

	document.write('이후 형제 : ' + nextNode + '<br>');