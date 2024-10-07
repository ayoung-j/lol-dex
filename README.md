# 리그 오브 레전드 정보 앱 만들기
Riot API를 활용한 리그 오브 레전드 정보 앱입니다.<br/>
챔피언 목록, 챔피언 상세 정보, 아이템 목록, 무료 플레이 가능한 챔피언들의 정보를 제공합니다.
<br/><br/>

## 🔗 배포 링크
https://lol-dex-mu.vercel.app/
<br/><br/>

## 🚩 프로젝트 개요
- 프로젝트명 : LOL Dex
- 진행 기간 : 24.09.30 ~ 24.10.08
<br/><br/>

## 📦 프로젝트 파일 구조
<details>
  <summary><b>LOL Dex 파일 구조</b></summary>

```
📦lol-dex
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂(pages)
 ┃ ┃ ┃ ┣ 📂champions
 ┃ ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂items
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┣ 📂rotation
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜layout.tsx
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┗ 📜PretendardVariable.woff2
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜global-error.tsx
 ┃ ┃ ┣ 📜globals.css
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┣ 📜loading.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜ChampionRotationList.tsx
 ┃ ┃ ┗ 📜loading.tsx
 ┃ ┣ 📂public
 ┃ ┃ ┗ 📜logo.png
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜Champion.ts
 ┃ ┃ ┣ 📜ChampionRotation.ts
 ┃ ┃ ┗ 📜Item.ts
 ┃ ┗ 📂utils
 ┃ ┃ ┗ 📜serverApi.ts
 ┣ 📜.env.local
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜LICENSE
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.mjs
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.mjs
 ┣ 📜README.md
 ┣ 📜tailwind.config.ts
 ┗ 📜tsconfig.json
```

</details>
<br/>

## ⚙️ STACKS
![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
<br /><br />

## 💻 실행 방법
```
git clone https://github.com/ayoung-j/lol-dex.git
yarn
yarn dev
```
<br/>

## ✔ 주요 기능
- **챔피언 목록 페이지**
  - ISR 방식으로 구현하고, 모든 챔피언의 목록을 표시합니다.
- **챔피언 상세 페이지**
  - 동적 렌더링 방식으로 구현하고, 챔피언의 상세 정보를 표시합니다. 또한, 해당 페이지에서 동적 메타데이터를 생성하도록 합니다.
- **아이템 목록 페이지**
  - SSG 방식으로 구현하고, 모든 아이템의 목록을 표시합니다.
- **챔피언 로테이션 페이지**
  - 클라이언트 사이드 렌더링으로 구현하고, 현재 무료로 플레이 가능한 챔피언들을 표시합니다.
