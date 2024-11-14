"use client";

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from 'react'
import { saveInquiries } from '@/actions/main.action'
export default function InquiriesPage() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await saveInquiries({
      title: `${formData.name}님의 문의사항`,
      content: `
이름: ${formData.name}
이메일: ${formData.email}
연락처: ${formData.phone}

문의내용:
${formData.content}
      `.trim()})
      setFormData({
        title: '',
        content: '',
        name: '',
        email: '',
        phone: ''
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">문의하기</h1>
          <p className="text-center text-gray-600 mb-12">
            궁금하신 사항이나 문의사항이 있으시면 아래 양식을 작성해 주세요.
          </p>
        </div>
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name">이름</Label>
                <Input 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="이름을 입력해주세요" 
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">이메일</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="이메일을 입력해주세요" 
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">연락처</Label>
                <Input 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="연락처를 입력해주세요" 
                  required
                />
              </div>
              <div>
                <Label htmlFor="content">문의 내용</Label>
                <Textarea 
                  id="content" 
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="문의하실 내용을 입력해주세요" 
                  rows={5} 
                  required
                />
              </div>
              <Button type="submit" className="w-full">문의하기</Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}