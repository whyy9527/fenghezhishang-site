import type { Metadata } from 'next'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: '联系我们 - 西咸新区丰和智上医疗科技有限公司',
  description:
    '联系我们 | 通过电话 029-33163466 或邮箱 58034404@qq.com 与西咸新区丰和智上医疗科技有限公司取得联系，备案期间暂不启用在线表单收集。',
}

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px] space-y-[16px]">
          <h1 className="text-[28px] leading-[36px]">联系我们</h1>
          <div className="space-y-[8px] text-[14px] leading-[22px] text-muted-foreground">
            <p>电话：029-33163466</p>
            <p>
              邮箱：
              <a
                href="mailto:58034404@qq.com"
                className="underline underline-offset-4"
                rel="noreferrer"
              >
                58034404@qq.com
              </a>
            </p>
            {/* TODO: 替换为实际办公地址 */}
            <p>地址：待补</p>
            {/* TODO: 补充服务时间 */}
            <p>服务时间：待补</p>
            <p className="text-[12px] leading-[18px] text-muted-foreground">
              备案期间暂不进行在线信息收集，请使用电话或邮箱联系。
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[720px] px-[20px] py-[48px]">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
