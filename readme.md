namespace에 선언된 함수를 interface 선언에 맞추기 위함.
overload 된 것은 수기로 삭제해야 함.

regexp:
function\s+(?<fnname>\w+)(\([^;]+?);

replace:
\1:{\2};

실행하는 곳 : https://regex101.com/


=====

오즈 리포트 api 도움말에서 가져와 interface 만들기.

1. 메소드를 긁어옴.
2. \w+\n 으로 메소드 이름만 선택
3. vscode의 선택 영역 > 모든 항목 선택 (ctrl + shift + l ) 실행 후 복사
4. \n+    로 선택하고 ==> 대치    : { (  ): void};\n
5. 이후 적절한 파라미터와 리턴 타입을 설정.