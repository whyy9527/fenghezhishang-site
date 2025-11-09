'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const MESSAGE = '备案期间暂不进行在线信息收集，请使用电话或邮箱联系。'

export default function ContactForm() {
  const handleNotice = () => {
    alert(MESSAGE)
  }

  return (
    <Card className="rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
      <CardHeader className="p-[20px] pb-[8px]">
        <h2 className="text-[20px] leading-[28px]">在线留言</h2>
      </CardHeader>
      <CardContent className="p-[20px] pt-[8px]">
        <form
          className="flex flex-col gap-[12px]"
          onSubmit={(event) => event.preventDefault()}
        >
          <Input
            placeholder="您的称呼"
            className="h-[40px] text-[14px] leading-[22px]"
            disabled
          />
          <Input
            placeholder="您的邮箱"
            className="h-[40px] text-[14px] leading-[22px]"
            disabled
          />
          <Textarea
            placeholder="请简要描述您的需求"
            className="min-h-[120px] text-[14px] leading-[22px]"
            disabled
          />
          <Button
            variant="outline"
            type="button"
            onClick={handleNotice}
            className="h-[40px] px-[16px] text-[14px] leading-[22px]"
          >
            暂不在线收集，请电话/邮箱联系
          </Button>
          <p className="text-[12px] leading-[18px] text-muted-foreground">
            {MESSAGE}
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
