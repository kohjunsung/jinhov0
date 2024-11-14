import TenantAuthLayout from "../components/tenant-auth-layout"
import TenantForgotPasswordForm from "../components/tenant-reset-password-form"

export default function TenantPortalForgotPassword() {
  return (
    <TenantAuthLayout
      title="비밀번호 찾기"
      description="가입하신 이메일 주소를 입력하시면 비밀번호 재설정 링크를 보내드립니다."
    >
      <TenantForgotPasswordForm />
    </TenantAuthLayout>
  )
}