// 백엔드 API URL (환경 변수에서 가져오거나 프로덕션 기본값 사용)
const BACKEND_API_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.8aladin.shop";

/**
 * 카카오 OAuth2 로그인 처리
 */
export const handleKakaoLogin = () => {
  try {
    if (typeof window === "undefined") {
      throw new Error(
        "브라우저 환경에서만 카카오 로그인을 사용할 수 있습니다."
      );
    }

    // 리다이렉트할 프론트엔드 URL (성공 후 돌아올 페이지)
    const redirectUrl = encodeURIComponent(
      `${window.location.origin}/mainpage`
    );

    // 백엔드의 OAuth2 인증 엔드포인트로 리다이렉트
    // next 파라미터로 성공 후 리다이렉트할 URL 전달
    const oauth2Url = `${BACKEND_API_URL}/oauth2/authorization/kakao?next=${redirectUrl}`;

    window.location.href = oauth2Url;
  } catch (error) {
    console.error(error);
    alert("카카오 로그인 설정이 올바르지 않습니다. 관리자에게 문의해주세요.");
  }
};

/**
 * 구글 OAuth2 로그인 처리
 */
export const handleGoogleLogin = () => {
  try {
    if (typeof window === "undefined") {
      throw new Error("브라우저 환경에서만 구글 로그인을 사용할 수 있습니다.");
    }

    // 리다이렉트할 프론트엔드 URL (성공 후 돌아올 페이지)
    const redirectUrl = encodeURIComponent(
      `${window.location.origin}/mainpage`
    );

    // 백엔드의 OAuth2 인증 엔드포인트로 리다이렉트
    // next 파라미터로 성공 후 리다이렉트할 URL 전달
    const oauth2Url = `${BACKEND_API_URL}/oauth2/authorization/google?next=${redirectUrl}`;

    window.location.href = oauth2Url;
  } catch (error) {
    console.error(error);
    alert("구글 로그인 설정이 올바르지 않습니다. 관리자에게 문의해주세요.");
  }
};

/**
 * 네이버 OAuth2 로그인 처리
 */
export const handleNaverLogin = () => {
  try {
    if (typeof window === "undefined") {
      throw new Error(
        "브라우저 환경에서만 네이버 로그인을 사용할 수 있습니다."
      );
    }

    // 리다이렉트할 프론트엔드 URL (성공 후 돌아올 페이지)
    const redirectUrl = encodeURIComponent(
      `${window.location.origin}/mainpage`
    );

    // 백엔드의 OAuth2 인증 엔드포인트로 리다이렉트
    // next 파라미터로 성공 후 리다이렉트할 URL 전달
    const oauth2Url = `${BACKEND_API_URL}/oauth2/authorization/naver?next=${redirectUrl}`;

    window.location.href = oauth2Url;
  } catch (error) {
    console.error(error);
    alert("네이버 로그인 설정이 올바르지 않습니다. 관리자에게 문의해주세요.");
  }
};
