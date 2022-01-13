# Today I Learned

## 2022.01.12 ~ 나만의 TIL을 시작한다.

-   원격 저장소 등록 잊지말고 하자.

```
$ git remote add origin https://github.com/dongh94/TIL.git
```

-   원격 저장소 정보 조회

```
$ git remote -v
```

-   원격 저장소 연결 삭제

```
$ git remote rm origin
```

-   원격 저장소로 저장

```
$ git push origin master
```

```
$ git push
```

- $ git push origin master
  - origin 이라는 이름의 원격 저장소의 master 브런치에 push 하기
- $ git push -u origin master
  - -u 오션을 사용한 후에는 저장소 이름(origin), 브런치 이름(master)를 생략 가능함.

> 주의 !!
>
> - 원격 저장소에서 수정 작업을 하지 않는다.
>   - 로컬 저장소에서 변경을 하고 이를 원격 저장소에 반영하는 방식을 취한다.
> - 반드시 로컬 저장소에서 git add  >> git commit >> git push 단계로 업로드 한다.

-------

```
# gitignore
```

> 특정 파일 혹은 폴더에 대해 Git이 버전관리를 하지 않도록 설정.

- gitignore에 작성하는 내용들
  - 민감한 개인정보가 담긴 파일(전화번호, 각종 비밀번호, API KEY 등)
  - 운영체제에서 사용되는 파일들
  - IDE(통합개발환경) 혹은 Text Editor 등에서 활용하는 파일
    - pycharm > .idea 폴더
  - 개발 언어 / 프레임워크에서 사용되는 파일
    - python 가상환경..

```
! 주의사항
```

- 반드시 파일 이름을 `.gitignore` 로 작성
- `.gitignore`위치는 `.git`과 동일한 폴더에 존재
- 제외하고 싶은 파일들을 `add`하기 전에 `.gitignore`에 작성
  - 파일은 확장자명 까지 
    - a.txt
  - 폴더는 뒤에 / 를 붙여서 
    - test/
  - 확장자 파일 모두 선택은  *를 사용
    - *.txt 와 같이
  - 특정파일은 무시하고 싶지 않으면 
    - !a.txt
  - 2개의 asterisk (**) 디렉토리 내부의 디렉토리를 지정 
    - a/**/x



> .gitignore 쉽게 작성하기 !!
>
> - [구글창에 .gitignore.io 검색](https://www.toptal.com/developers/gitignore)
> - [github 에서 gitignore ](https://github.com/github/gitignore)

-----------



#### 원격 저장소 가져오기

* 지금까지 로컬 저장소 -> 원격 저장소
* 원격 저장소 -> 로컬 저장소



```
$ git clone
```

* 처음에 !! 원격 저장소의 커밋 내역을 모두 가져와서, 로컬 저장소에 생성

```
$ git clone <원격 저장소 주소>
$ git clone <원격 저장소 주소> <폴더 이름>
$ git clone <원격 저장소 주소> .  # .은 여기 위치를 말하는 것.
```



```
$ git pull
```

* 원격 저장소의 변경 사항을 가져와서, 로컬 저장소에 반영 ( 업데이트 )

```
$ git pull origin master
```

* 이전에 일단 `$ git log --oneline`으로 변동사항 없는지 둘을 비교 후 pull 하는 것이 좋다.

