# Today I Learned

# GIT 사용법

1. 자주 일어나는 상황 별 명령어 정리
```
  $ git add .
  $ git commit -m "다음글로 
  쓰려면 이렇게"
  $ git pull origin main(master)
  $ git push origin branch_name
  >> github에서 PR
```

2. 원격 저장소 로컬로 pull할 때, add한 상황이나 commit 포함 (untrack 불포함) stash 작업
```
  $ git stash
  이후 pull 진행
  $ git stash pop
  $ git stash list
  $ git apply @
```

3. 원격 저장소 관련 명령어
```
  - 원격 저장소 정보 등록
  $ git remote add origin https://github.com/dongh94/TIL.git
  - 원격 저장소 정보 조회
  $ git remote -v
  - 원격 저장소 연결 삭제
  $ git remote rm origin
  - 원격 저장소로 저장
  $ git push origin master
  - origin 이라는 이름의 원격 저장소의 master 브런치에 push 하기
  $ git push origin master
  - -u 옵션을 사용한 후에는 저장소 이름(origin), 브런치 이름(master)를 생략 가능함.
  $ git push -u origin master

```

4. 주의
```
  1. 원격 저장소에서 수정 작업을 하지 않는다.
  즉, 로컬 저장소에서 변경을 하고 이를 원격 저장소에 반영하는 방식을 취한다.
```
5. gitignore
```
  >> 특정 파일 혹은 폴더에 대해 Git이 버전관리를 하지 않도록 설정.

  - gitignore에 작성하는 내용들
    - 민감한 개인정보가 담긴 파일(전화번호, 각종 비밀번호, API KEY 등)
    - 운영체제에서 사용되는 파일들
    - IDE(통합개발환경) 혹은 Text Editor 등에서 활용하는 파일
      - pycharm > .idea 폴더
    - 개발 언어 / 프레임워크에서 사용되는 파일
      - python 가상환경..
```
6. .gitignore 쉽게 작성하기 !!
```
  >> - [구글창에 .gitignore.io 검색](https://www.toptal.com/developers/gitignore)
  >> - [github 에서 gitignore ](https://github.com/github/gitignore)
```

7. 브런치 이동
```
  $ git log --oneline --graph
  - 브랜치 생성
  $ git branch <브랜치이름>
  - 브랜치 변경
  $ git switch <브랜치이름>
  - 브랜치 병합
  $ git switch main
  $ git merge <브랜치이름>
  - 브랜치 삭제
  $ git branch -d <브랜치이름>
```