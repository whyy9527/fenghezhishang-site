import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '连接医药创新，服务临床医疗 - 西咸新区丰和智上医疗科技有限公司',
  description:
    '首页 | 西咸新区丰和智上医疗科技有限公司以“数字化临床价值创新平台”为定位，面向医院、医药器械企业与科研机构提供临床信息展示、科室协作、品牌专区与合规对接计划，助力医疗服务场景的高效落地。',
}

const VALUES = [
  {
    title: '临床为本',
    description: '围绕真实临床场景，强调可验证的改进与合规边界。',
  },
  {
    title: '数字化方法',
    description: '信息展示、数据化协作与流程在线化，提升效率与一致性。',
  },
  {
    title: '安全与合规',
    description: '不涉诊疗与线上交易，严格遵循信息展示规范与数据保护要求。',
  },
]

const AUDIENCES = [
  '医疗机构（三甲/二级/基层/专科/体检中心）',
  '医药与医疗器械企业',
  '科研院校与政府/园区',
]

const PLANS = [
  '在线咨询/预约（非诊疗）',
  '资料下载/活动报名',
  '合作对接表单',
  '品牌专区（信息展示）—— 即将上线',
]

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-[24px] px-[20px] py-[72px] md:flex-row md:items-center md:justify-between md:py-[96px]">
          <div className="max-w-[720px] space-y-[20px]">
            <h1 className="text-[36px] leading-[44px]">
              连接医药创新，服务临床医疗
            </h1>
            <p className="text-[16px] leading-[26px] text-muted-foreground">
              西咸新区丰和智上医疗科技有限公司，以“数字化临床价值创新平台”为定位，面向医院、医药器械企业与科研机构，提供合规的临床信息展示与科室服务协作，助力医疗场景的高效与可验证落地。
            </p>
            <div className="flex flex-col gap-[12px] sm:flex-row">
              <Button
                variant="outline"
                className="h-[40px] px-[16px] text-[14px] leading-[22px]"
                asChild
              >
                <Link href="/contact">立即联系</Link>
              </Button>
              <Button
                variant="outline"
                className="h-[40px] px-[16px] text-[14px] leading-[22px]"
                asChild
              >
                <Link href="/services">了解服务</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-[var(--border)] bg-accent/30"
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-[1120px] px-[20px] py-[64px]">
          <div className="mb-[32px] max-w-[640px]">
            <h2 id="values-heading" className="text-[28px] leading-[36px]">
              我们的价值
            </h2>
            <p className="text-[14px] leading-[22px] text-muted-foreground">
              以临床真实需求为核心，确保信息展示、协作流程与安全合规在同一平台落地。
            </p>
          </div>
          <div className="grid gap-[16px] md:grid-cols-3">
            {VALUES.map((item) => (
              <Card
                key={item.title}
                className="rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              >
                <CardHeader className="p-[20px] pb-[8px]">
                  <h3 className="text-[20px] leading-[28px]">{item.title}</h3>
                </CardHeader>
                <CardContent className="p-[20px] pt-[8px]">
                  <p className="text-[14px] leading-[22px] text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-[var(--border)]"
        aria-labelledby="audience-heading"
      >
        <div className="mx-auto flex max-w-[1120px] flex-col gap-[32px] px-[20px] py-[64px] md:flex-row">
          <div className="max-w-[360px] space-y-[12px]">
            <h2 id="audience-heading" className="text-[28px] leading-[36px]">
              适用对象
            </h2>
            <p className="text-[14px] leading-[22px] text-muted-foreground">
              面向不同类型的医疗机构与创新主体，提供可复制的展示与协作支撑。
            </p>
          </div>
          <ul className="grid flex-1 gap-[12px] text-[14px] leading-[22px]">
            {AUDIENCES.map((item) => (
              <li
                key={item}
                className="rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-[20px] py-[16px] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="plan-heading" className="bg-accent/30">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-[32px] px-[20px] py-[64px] md:flex-row">
          <div className="max-w-[360px] space-y-[12px]">
            <h2 id="plan-heading" className="text-[28px] leading-[36px]">
              地域与计划
            </h2>
            <p className="text-[14px] leading-[22px] text-muted-foreground">
              服务覆盖全国，重点聚焦陕西（西安、咸阳），同步推进线上服务能力建设。
            </p>
          </div>
          <div className="flex-1 space-y-[16px]">
            <div className="rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-[20px] py-[16px] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-[20px] leading-[28px]">服务区域</h3>
              <p className="text-[14px] leading-[22px] text-muted-foreground">
                全国（重点：陕西；城市：西安、咸阳）
              </p>
            </div>
            <div className="rounded-[16px] border border-[var(--border)] bg-[var(--surface)] px-[20px] py-[16px] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-[20px] leading-[28px]">功能计划</h3>
              <ul className="list-disc space-y-[6px] pl-[18px] text-[14px] leading-[22px] text-muted-foreground">
                {PLANS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
