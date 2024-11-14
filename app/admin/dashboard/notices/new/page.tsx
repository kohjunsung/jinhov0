import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminNoticeCreatePage() {
  return (
    <div>
      <div className="flex items-center gap-x-4 mb-8">
        <Link href="/admin/dashboard/notices">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">�������� �ۼ�</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>�� ��������</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">����</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="�������� ������ �Է��ϼ���"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">���</label>
              <select className="w-full p-2 border rounded-md">
                <option value="��ü">��ü</option>
                <option value="Ư����">Ư����</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">����</label>
              <textarea
                className="w-full h-64 p-2 border rounded-md"
                placeholder="�������� ������ �Է��ϼ���"
              />
            </div>
            <div className="flex justify-end gap-x-2">
              <Button variant="outline">���</Button>
              <Button>�ۼ� �Ϸ�</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
