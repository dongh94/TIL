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

-   $ git push origin master
    -   origin 이라는 이름의 원격 저장소의 master 브런치에 push 하기
-   $ git push -u origin master
    -   -u 오션을 사용한 후에는 저장소 이름(origin), 브런치 이름(master)를 생략 가능함.

> 주의 !!
>
> -   원격 저장소에서 수정 작업을 하지 않는다.
>     -   로컬 저장소에서 변경을 하고 이를 원격 저장소에 반영하는 방식을 취한다.
> -   반드시 로컬 저장소에서 git add >> git commit >> git push 단계로 업로드 한다.

---

```
# gitignore
```

> 특정 파일 혹은 폴더에 대해 Git이 버전관리를 하지 않도록 설정.

-   gitignore에 작성하는 내용들
    -   민감한 개인정보가 담긴 파일(전화번호, 각종 비밀번호, API KEY 등)
    -   운영체제에서 사용되는 파일들
    -   IDE(통합개발환경) 혹은 Text Editor 등에서 활용하는 파일
        -   pycharm > .idea 폴더
    -   개발 언어 / 프레임워크에서 사용되는 파일
        -   python 가상환경..

```
! 주의사항
```

-   반드시 파일 이름을 `.gitignore` 로 작성
-   `.gitignore`위치는 `.git`과 동일한 폴더에 존재
-   제외하고 싶은 파일들을 `add`하기 전에 `.gitignore`에 작성
    -   파일은 확장자명 까지
        -   a.txt
    -   폴더는 뒤에 / 를 붙여서
        -   test/
    -   확장자 파일 모두 선택은 \*를 사용
        -   \*.txt 와 같이
    -   특정파일은 무시하고 싶지 않으면
        -   !a.txt
    -   2개의 asterisk (\*\*) 디렉토리 내부의 디렉토리를 지정
        -   a/\*\*/x

> .gitignore 쉽게 작성하기 !!
>
> -   [구글창에 .gitignore.io 검색](https://www.toptal.com/developers/gitignore)
> -   [github 에서 gitignore ](https://github.com/github/gitignore)

---

#### 원격 저장소 가져오기

-   지금까지 로컬 저장소 -> 원격 저장소
-   원격 저장소 -> 로컬 저장소

```
$ git clone
```

-   처음에 !! 원격 저장소의 커밋 내역을 모두 가져와서, 로컬 저장소에 생성

```
$ git clone <원격 저장소 주소>
$ git clone <원격 저장소 주소> <폴더 이름>
$ git clone <원격 저장소 주소> .  # .은 여기 위치를 말하는 것.
```

```
$ git pull
```

-   원격 저장소의 변경 사항을 가져와서, 로컬 저장소에 반영 ( 업데이트 )

```
$ git pull origin master
```

-   이전에 일단 `$ git log --oneline`으로 확인 후 pull 한 이후에 한번도 log하여
-   둘을 비교 후 pull 하는 것이 좋다.
-   push는 겹치면 에러뜹니다.

> home 에서 pull 이 아니라, commit 을 먼저한 후, pull을 하면 어떻게 될까?
>
> 1.  강의장과 집에서 서로 다른 파일을 수정한 경우는 정상적으로 pull이 실행
>
> 2.  강의장과 집에서 같은 파일의 다른 라인을 수정한 경우는 정상적으로 pull이 실행
>
> 3.  강의장과 집에서 같은 파일의 같은 라인을 수정한 경우는 충돌이 발생하여 창이 뜬다.
>
> > -   Currnet / Incoming / Both / Compare.
> >
> > -   현재한거 / 가져온거 / 둘다 / 새롭게 두개의 창이 뜸.
> >
> > *   내가 선택하여 직접 수정하면 된다는 의미 !

> home에서 pull이 아니라, commit을 먼저한 후 바로 push하면 어떻게 될까?
>
> -   에러가 뜹니다.
> -   그러므로 pull을 한 이후에 push하세요 ~

```
$ git branch
```

-   브랜치 목록 출력

-   브랜치 생성

    -   ```
        $ git branch <브랜치이름>
        ```

-   브랜치 변경

-   ```
    $ git switch <브랜치이름>
    ```

-   브랜치 병합

    -   ```
        $ git merge <브랜치이름>
        ```

        -   보통 master에서 branch들을 병합한다. (master 기준으로)
        -   `$ git log --oneline --graph` 그래프 까지 볼 수 있음.

-   브랜치 삭제

    -   ```
        $ git branch -d <브랜치이름>
        ```

        -   삭제하면 log에 브랜치가 뜨지 않음.

    -
