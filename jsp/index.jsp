<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>헤더와 푸터가 있는 페이지</title>
    <link rel="stylesheet" href="all.css">
</head>
<body>

    <header>
        <h1>My Website</h1>
    </header>

    <nav class="category-nav">
        <ul>
            <li><a href="#">카테고리 1</a></li>
            <li><a href="#">카테고리 2</a></li>
            <li><a href="main.jsp">미용 예약 신청</a></li>
            <li><a href="save.jsp">미용 예약 기록 저장</a></li>
            <li><a href="index.jsp">메인 화면</a></li>
        </ul>
    </nav>

    <main>
    	<h1>미용 메인 화면</h1>
        <ul style="list-style-type: circle; padding-left: 20px;">
            <li>첫 번째 항목</li>
            <li>두 번째 항목</li>
            <li>세 번째 항목</li>
        </ul>
    </main>

    <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>

    <script src="all.js"></script>
</body>
</html>


