# /src
## project source (web application & server)


* 웹 어플리케이션 및 서버 실행 방법
- - -

1. https://github.com/CSID-DGU/2019-2-CECD1-AwesomeTurtle-1의 전체 코드 다운로드

2. /src/patentInsight/routes/index.js 와 /src/patentInsight/app.js에 파일에 명시된 npm 모듈 다운로드

2. 로컬 서버 시작(start) 및 소스 파일 실행

3. localhost 포트 번호 3000으로 웹 어플리케이션 실행



* 웹 어플리케이션 사용 방법
- - -

1. localhost:/3000으로 접속

2. main page로 접속한 후 파일 입력

3. 입력된 파일을 통해 result 페이지에서 시각화 결과 확인

4. result 페이지에서 상단에 버튼을 통해 특허 성과지표 시각화 결과 확인


* BERT 학습 모델 (특허의 인용관계 분석)
- - -

https://github.com/duqrlpig/patent_ml_project
(현재 repository 생성 전 작업해 둔 코드를 url로 첨부합니다)

1. /patent_parser 폴더와 /text_classification_bert 폴더 파일의 코드를 Jupyter Notebook을 통해 실행

2. 각 청구항의 독립(0), 종속(1) 여부 결과를 확인

* Random Forest 학습 모델 (특허의 성과지표 분석)
- - -

https://github.com/duqrlpig/patent_ml_project
(현재 repository 생성 전 작업해 둔 코드를 url로 첨부합니다)

1. /rf_project 폴더 파일의 코드를 Jupyter Notebook을 통해 실행

2. 각 성과지표에 영향을 주는 상위 10개 단어 결과 확인
