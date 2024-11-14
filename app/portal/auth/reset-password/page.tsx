import TenantAuthLayout from "../components/tenant-auth-layout"
import TenantResetPasswordForm from "../components/tenant-reset-password-form"

export default function TenantPortalResetPassword() {
  return (
    <TenantAuthLayout
      title="비밀번호 재설정"
      description="새로운 비밀번호를 입력해주세요."
    >
      <TenantResetPasswordForm />
    </TenantAuthLayout>
  )
}