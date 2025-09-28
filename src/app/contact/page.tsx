'use client'

import { useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export const metadata = { title: '联系我们 - 丰和智尚' }

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      alert('备案期间仅提供基础联系信息，请通过邮箱或电话与我们联系。')
      setSubmitting(false)
    }, 300)
  }

  return (
    <main className="bg-surface text-fg">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <h1 className="text-[28px] leading-[36px] mb-[8px]">联系我们</h1>
          <p className="text-[14px] leading-[22px] text-muted">
            邮箱：hi@yourdomain.com　电话：010-xxxx-xxxx　地址：北京市 ×× 区 ××
            路 ×× 号
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[720px] px-[20px] py-[48px]">
          <Card className="rounded-2xl border border-[var(--border)]">
            <CardHeader className="p-[20px] pb-[8px]">
              <h2 className="text-[20px] leading-[28px]">在线留言</h2>
            </CardHeader>
            <CardContent className="p-[20px] pt-[8px]">
              <form className="flex flex-col gap-[12px]" onSubmit={onSubmit}>
                <Input
                  placeholder="您的称呼"
                  className="h-[40px] text-[14px] leading-[22px]"
                />
                <Input
                  placeholder="您的邮箱"
                  className="h-[40px] text-[14px] leading-[22px]"
                />
                <Textarea
                  placeholder="请简要描述您的需求"
                  className="min-h-[120px] text-[14px] leading-[22px]"
                />
                <Button
                  type="submit"
                  disabled={submitting}
                  className="h-[40px] px-[16px] text-[14px] leading-[22px] bg-[var(--brand-600)] hover:bg-[var(--brand-700)]"
                >
                  {submitting ? '提交中...' : '提交（备案期间暂不启用）'}
                </Button>
                <p className="text-[12px] leading-[18px] text-muted">
                  * 备案期间暂不进行在线信息收集，请通过邮箱或电话联系。
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
