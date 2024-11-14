import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminMaintenanceCreatePage() {
  return (
    <div>
      <div className="flex items-center gap-x-4 mb-8">
        <Link href="/admin/dashboard/maintenance">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">������ û���� ����</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>�� ������ û����</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">û�� ��</label>
                <input
                  type="month"
                  className="w-full p-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">���� ����</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">������ ����</label>
              <select className="w-full p-2 border rounded-md">
                <option value="">�������� �����ϼ���</option>
                <option value="�ϴø��� ���Űǰ����а�">�ϴø��� ���Űǰ����а� (3��)</option>
                <option value="������ �Ȱ�">������ �Ȱ� (4��)</option>
                <option value="ưư �����ܰ�">ưư �����ܰ� (5��)</option>
              </select>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">������ �׸�</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">�����</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">������</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">������</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600">û�Һ�</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-x-2">
              <Button variant="outline">���</Button>
              <Button>û���� ����</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
