      // 입장객 수에 따른 좌석의 줄(행)수 계산
      let customer = parseInt( prompt("입장객은 몇 명인가요? ") ); //입장객 수
      let colNum = parseInt( prompt("한 줄에 몇명씩 앉나요?") );    //열의 수
      let rowNum;        //행(줄)의 수

      // 나머지가 있는 지 없는지 처리
      if(customer == null || colNum == null
        || isNaN(customer)||isNaN(colNum)){
          document.write("입력이 취소되었습니다.");
      }else{
          if(parseInt( customer )%parseInt( colNum )== 0){
          rowNum = customer / colNum;
          }else{
          rowNum = parseInt( customer / colNum )+1;
          }
        //   document.write(rowNum+"개의 줄이 필요합니다.")
      }

      document.write("<table>")
      for( var i = 0; i<rowNum; i++){
        
      document.write("<tr>")
        for( var j=1; j<=colNum;j++){
            
            var seatNum = colNum*i+j //좌석 번호
            if(seatNum > customer) break //좌석 번호가 고객수보다 클때 빠져나옴
            document.write( "<td>좌석"+seatNum + "</td>")

        }
        document.write("<tr>")
    }

    document.write("</table>")

     