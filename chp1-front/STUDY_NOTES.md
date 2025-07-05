🗂️ pages 폴더 관련 규칙 – 꼭 지켜야 함!

📌 Next.js에서 pages 폴더는 필수!
- 폴더 이름은 반드시 pages 이어야 하며, 대소문자 구분함  
  → `Pages ❌`, `page ❌`, `PAGES ❌` → 전부 안 됨
- pages 안에 있는 .js 파일들은 자동으로 URL 라우팅됨


## ✅ CSR vs SSR 개념

| 구분       | CSR (Client Side Rendering)                      | SSR (Server Side Rendering)                        |
|------------|--------------------------------------------------|----------------------------------------------------|
| 설명       | JS가 클라이언트에서 렌더링<br>처음 로딩만 느림, 이후 빠름 | 서버에서 HTML을 완성해 전달<br>초기 렌더링 빠름, SEO 유리 |
| 프레임워크 | React                                             | Next.js                                            |


## ✅ React vs Next.js

| 항목     | React                             | Next.js                                               |
|----------|-----------------------------------|--------------------------------------------------------|
| 기반     | JavaScript (JSX)                 | React 기반 프레임워크                                 |
| 특징     | CSR 기반 SPA                     | SSR/SSG 지원, 자동 라우팅, SEO 최적화 가능             |
| 사용처   | 앱/내부용 웹 서비스              | 검색 최적화 필요한 사이트, 퍼블릭 페이지 등           |


## ✅ export / import 구조

```jsx
// MyComponent.js
function MyComponent() {
  return <div>Hello</div>;
}
export default MyComponent;

// 다른 파일에서 불러오기
import MyComponent from './MyComponent';

- export default: 하나의 주 컴포넌트를 내보냄
- export { something }: 여러 개의 요소를 내보낼 수 있음

✅ 검색엔진과 리액트/넥스트의 관계
1. React (CSR 기반)은 검색 엔진 최적화(SEO)에 불리
2. Next.js는 서버 측에서 HTML을 먼저 렌더링해서 SEO에 유리
🔍 검색에 잘 노출돼야 하는 사이트는 Next.js 사용 추천!
