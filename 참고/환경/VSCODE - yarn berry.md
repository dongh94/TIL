
### VS Code Extensions (Ctrl + Shift + X)

1. Gitlens - Git log user 등 확인

2. Git Graph - Git graph 확인

  

1. Vue Language Features(Volar) - Vue 추천 Prt, Esl

2. TypeScript Vue Plugin(Volar) - Vue 추천 js, ts

  

1. Nomo Dark Icon Theme - one of theme

2. indent-rainbow - indent color

3. Highlight Matching Tag - tag color

4. Image preview - image

5. svg preview - image

  
  

1. IntelliCode - auto code and API

2. javascript console utils - auto console

3. Code Spell Checker - auto spell check

  

#### 자동완성

1. Path Intellisense

2. Scss Intellisense

  

1. Live Sass/Scss Compiler - Watch Sass 클릭해서 사용

2. Live Server - Go Live 클릭해서 사용

3. Live Preview - html 한정인 듯..

  5.3.2 등 우측하단 누르고 workspace sdk 변경

1. ZipFS - zip 아카이브 yarn dlx @yarnpkg/sdks vscode

  

### error

0. 새로운 프로젝트라면 yarn serve 전에 yarn lint --fix해 놓으면 좋을 듯.

1. pnp.loader 에러 ==> node 버전 변경

    * node가 변경된다면 아마 prettier eslint 버젼도 관리해줘야 하는 듯 합니다.

2. vue 등 빨간줄 에러 ==> {yarn dlx @yarnpkg/sdks vscode} 명령어 입력 후 vue 파일의 takeover sdk 변경

    * dlx는 "directly execute"의 약자, 결국 @yarnpkg/sdks 패키지에 있는 vscode 스크립트를 실행하는 것

3. ts 도 마찬가지로 파일의 sdk 변경, tsconfig.json 잡고 있나 확인.

4. tsconfig.json 안 읽히는 것은 아마 2번에서 해결될 수도 있고, 1-1에서 해결될 수 있음. 안되면 vs코드 다시키셈

5. 별거 아니지만 LF, CRLF 등 opensetting 에서 file:eol 로 설정 가능 -> /n : LF, /r/n : CRLF 줄바꿈 문자열 차이!


