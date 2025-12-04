# Frontend Project

현대적인 웹 개발을 위한 Next.js 기반 프로젝트입니다. TypeScript, Tailwind CSS, Storybook, Vitest 등 최신 도구들이 통합되어 있습니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.5.7 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.4
- **UI Development**: Storybook 9.1.5
- **Testing**: Vitest 3.2.4 + Playwright
- **Code Quality**: ESLint 9
- **Build Tool**: Turbopack (Next.js 15)

## 📦 주요 기능

- ⚡ **Turbopack**: 빠른 개발 서버와 빌드
- 🎨 **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- 📚 **Storybook**: 컴포넌트 개발 및 문서화
- 🧪 **Vitest**: 빠른 단위 테스트
- 🌐 **Playwright**: 브라우저 테스트
- ♿ **접근성**: Storybook a11y 애드온
- 🌙 **다크 모드**: 자동 다크 모드 지원
- 📱 **반응형**: 모바일 우선 디자인

## 🛠️ 개발 환경 설정

### 필수 요구사항

- Node.js 18.17 이상
- npm, yarn, pnpm, 또는 bun

### 설치

```bash
# 의존성 설치
npm install

# 또는
yarn install
pnpm install
bun install
```

## 🚀 사용 가능한 스크립트

### 개발

```bash
# 개발 서버 시작 (Turbopack 사용)
npm run dev
# http://localhost:3000 에서 확인

# Storybook 개발 서버 시작
npm run storybook
# http://localhost:6006 에서 확인
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# Storybook 빌드
npm run build-storybook
```

### 코드 품질

```bash
# ESLint 실행
npm run lint

# 타입 체크
npx tsc --noEmit
```

### 테스트

```bash
# Vitest 실행
npx vitest

# 브라우저 테스트 (Playwright)
npx vitest --browser
```

## 📁 프로젝트 구조

```
frontend/
├── .storybook/           # Storybook 설정
├── public/              # 정적 파일
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── globals.css # 전역 스타일
│   │   ├── layout.tsx  # 루트 레이아웃
│   │   └── page.tsx    # 홈페이지
│   └── stories/        # Storybook 컴포넌트
├── tailwind.config.js  # Tailwind 설정
├── tsconfig.json       # TypeScript 설정
├── vitest.config.ts    # Vitest 설정
└── eslint.config.mjs   # ESLint 설정
```

## 🎨 스타일링

### Tailwind CSS

- 유틸리티 우선 CSS 프레임워크
- 다크 모드 자동 지원
- 커스텀 색상 및 폰트 설정

### 폰트

- **Geist Sans**: 메인 폰트
- **Geist Mono**: 코드 폰트

## 📚 Storybook

컴포넌트 개발과 문서화를 위한 Storybook이 설정되어 있습니다.

### 애드온

- **@storybook/addon-docs**: 자동 문서 생성
- **@storybook/addon-a11y**: 접근성 테스트
- **@storybook/addon-vitest**: 컴포넌트 테스트
- **@chromatic-com/storybook**: 시각적 테스트

### 사용법

```bash
# Storybook 시작
npm run storybook

# 컴포넌트 스토리 작성 예시
# src/components/Button.stories.ts
```

## 🧪 테스트

### Vitest

- 빠른 단위 테스트
- Storybook과 통합된 컴포넌트 테스트
- 브라우저 테스트 지원 (Playwright)

### 테스트 실행

```bash
# 모든 테스트 실행
npx vitest

# Watch 모드
npx vitest --watch

# 브라우저 테스트
npx vitest --browser
```

## 🔧 개발 도구

### ESLint

- **Next.js 권장 설정**: `next/core-web-vitals`, `next/typescript`
- **TypeScript 지원**: 타입 체크 및 규칙 적용
- **Storybook 플러그인**: 컴포넌트 개발 규칙
- **Prettier 통합**: 코드 포맷팅과 충돌 방지

#### ESLint 규칙

```javascript
// 주요 규칙들
"react/react-in-jsx-scope": "off",        // Next.js에서 React import 불필요
"@typescript-eslint/no-unused-vars": "error", // 사용하지 않는 변수 체크
"@next/next/no-img-element": "error",     // next/image 사용 권장
"no-console": "warn",                     // console.log 경고
```

#### 사용법

```bash
# ESLint 실행
npm run lint

# 자동 수정
npm run lint:fix
```

### Prettier

- **코드 포맷팅**: 일관된 코드 스타일
- **ESLint 통합**: 충돌 방지 및 협업
- **자동 포맷팅**: 저장 시 자동 적용

#### Prettier 설정

```json
{
  "semi": true,                    // 세미콜론 사용
  "trailingComma": "es5",         // 후행 쉼표 (ES5 호환)
  "singleQuote": false,           // 더블 쿼트 사용
  "printWidth": 80,               // 한 줄 최대 80자
  "tabWidth": 2,                  // 탭 크기 2칸
  "useTabs": false,               // 스페이스 사용
  "bracketSpacing": true,         // 객체 괄호 내부 공백
  "bracketSameLine": false,       // JSX 닫는 괄호 새 줄
  "arrowParens": "avoid",         // 화살표 함수 괄호 생략
  "endOfLine": "lf",              // LF 줄 바꿈 (Unix 스타일)
  "jsxSingleQuote": false,        // JSX에서 더블 쿼트
  "proseWrap": "preserve"         // 마크다운 줄 바꿈 보존
}
```

#### 사용법

```bash
# 코드 포맷팅
npm run format

# 포맷팅 체크
npm run format:check

# ESLint + Prettier 함께 실행
npm run lint:fix
```

#### .prettierignore

```bash
# 성능 최적화를 위해 무시하는 파일들
node_modules/        # 의존성 파일들
.next/              # Next.js 빌드 파일
build/              # 빌드 결과물
storybook-static/   # Storybook 빌드
package-lock.json   # npm 자동 생성 파일
*.tsbuildinfo       # TypeScript 빌드 캐시
```

### TypeScript

- **엄격한 타입 체크**: 타입 안정성 보장
- **경로 별칭 지원**: `@/*`로 절대 경로 사용
- **Next.js 최적화**: App Router 완벽 지원
- **ESLint 통합**: 타입 관련 규칙 적용

## 🌐 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 기타 플랫폼

- Netlify
- AWS Amplify
- Docker

## 📖 추가 리소스

- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Storybook 문서](https://storybook.js.org/docs)
- [Vitest 문서](https://vitest.dev/guide/)
- [ESLint 문서](https://eslint.org/docs/latest/)
- [Prettier 문서](https://prettier.io/docs/en/)
- [TypeScript 문서](https://www.typescriptlang.org/docs/)

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

---

**Happy Coding! 🎉**
