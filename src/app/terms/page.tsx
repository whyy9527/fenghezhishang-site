import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '免责声明 - 西咸新区丰和智上医疗科技有限公司',
  description:
    '免责声明 | 说明西咸新区丰和智上医疗科技有限公司网站内容的使用范围、第三方链接责任、知识产权归属、免责情形与声明更新。',
}

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px] space-y-[12px]">
          <h1 className="text-[28px] leading-[36px]">免责声明</h1>
          <p className="text-[14px] leading-[22px] text-muted-foreground">
            本免责声明旨在说明本站内容的适用范围与责任边界，使用前请仔细阅读。
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px] space-y-[24px] text-[14px] leading-[22px] text-foreground">
          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">内容用途</h2>
            <p className="text-muted-foreground">
              本站内容仅为一般性信息与服务能力展示，不构成任何医疗、法律、投资等专业建议。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">第三方链接</h2>
            <p className="text-muted-foreground">
              站内可能包含第三方链接，其内容与隐私做法由第三方负责。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">知识产权</h2>
            <p className="text-muted-foreground">
              站内商标、标识与内容（除另有说明）归本公司或相应权利人所有，未经授权不得使用。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">免责情形</h2>
            <p className="text-muted-foreground">
              因不可抗力或第三方原因导致的服务中断、信息错误等情形，在法律允许范围内免责。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">声明更新</h2>
            <p className="text-muted-foreground">
              本声明可能更新，以站内公示为准。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">联系方式</h2>
            <p className="text-muted-foreground">
              如需进一步了解，请通过电话 029-33163466 或邮箱
              <a
                href="mailto:58034404@qq.com"
                className="underline underline-offset-4"
                rel="noreferrer"
              >
                58034404@qq.com
              </a>
              与我们联系。
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
