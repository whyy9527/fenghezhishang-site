import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们 - 西咸新区丰和智上医疗科技有限公司',
  description:
    '关于我们 | 西咸新区丰和智上医疗科技有限公司定位为数字化临床价值创新平台，使命是连接医药创新与临床需求，服务医疗机构、医药器械企业、科研院校及政府园区，覆盖全国重点陕西（西安、咸阳）。',
}

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px] space-y-[12px]">
          <h1 className="text-[28px] leading-[36px]">关于我们</h1>
          <p className="text-[14px] leading-[22px] text-muted-foreground">
            西咸新区丰和智上医疗科技有限公司定位为“数字化临床价值创新平台”，致力于连接医药创新与临床需求，提供合规、可验证的数字化服务。
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[880px] px-[20px] py-[48px] space-y-[24px] text-[14px] leading-[22px] text-foreground">
          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">西咸新区丰和智上医疗科技有限公司</h2>
            <ul className="list-disc space-y-[6px] pl-[18px] text-muted-foreground">
              <li><strong className="font-medium text-foreground">定位：</strong>数字化临床价值创新平台</li>
              <li>
                <strong className="font-medium text-foreground">使命：</strong>
                连接医药创新与临床需求，用合规、可验证的数字化方案，提升医疗服务效率与体验。
              </li>
              <li>
                <strong className="font-medium text-foreground">服务对象：</strong>
                医疗机构、医药/器械企业、科研院校与政府/园区。
              </li>
              <li>
                <strong className="font-medium text-foreground">覆盖区域：</strong>
                全国（重点：陕西；城市：西安、咸阳）。
              </li>
            </ul>
          </div>

          <div className="space-y-[8px]">
            <h2 className="text-[20px] leading-[28px]">合规声明</h2>
            <p className="text-muted-foreground">
              本网站用于公司信息与服务能力展示，不涉及诊疗、药械交易、新闻采编等需前置审批的活动；如开展经营性互联网信息服务，将依法申请并公示相关资质。
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
