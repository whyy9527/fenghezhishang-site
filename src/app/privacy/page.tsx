import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隐私政策 - 西咸新区丰和智上医疗科技有限公司',
  description:
    '隐私政策 | 说明西咸新区丰和智上医疗科技有限公司在信息展示场景下的个人信息收集、使用、共享、存储、安全措施及用户权利。',
}

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px] space-y-[12px]">
          <h1 className="text-[28px] leading-[36px]">隐私政策</h1>
          <p className="text-[14px] leading-[22px] text-muted-foreground">
            本隐私政策说明我们在信息展示场景下如何处理您主动提供的个人信息，以及您可享有的相关权利。
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[880px] px-[20px] py-[48px] space-y-[24px] text-[14px] leading-[22px] text-foreground">
          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">适用范围</h2>
            <p className="text-muted-foreground">
              本站以信息展示为主。仅在您主动通过电话、邮箱或表单提供联系信息时，出于沟通合作之目的收集必要信息。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">收集信息</h2>
            <p className="text-muted-foreground">
              称呼、邮箱、电话及您填入的需求描述；为保障站点安全运行，可能记录必要的技术信息（如浏览器类型、访问时间）。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">使用目的</h2>
            <p className="text-muted-foreground">
              用于回复咨询、合作沟通、改进服务与站点安全。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">共享与披露</h2>
            <p className="text-muted-foreground">
              不向无关第三方提供您的信息，法律法规另有规定除外。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">存储与安全</h2>
            <p className="text-muted-foreground">
              采取合理安全措施，仅在达成收集目的所必需的期限内保存。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">您的权利</h2>
            <p className="text-muted-foreground">
              可通过邮箱
              <a
                href="mailto:58034404@qq.com"
                className="underline underline-offset-4"
                rel="noreferrer"
              >
                58034404@qq.com
              </a>
              查询、更正、删除信息或撤回授权。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">未成年人信息</h2>
            <p className="text-muted-foreground">
              不以未成年人为服务对象，涉及时将依法依规处理。
            </p>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">更新</h2>
            <p className="text-muted-foreground">
              政策可能更新，重要变更将在本站公示。
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
