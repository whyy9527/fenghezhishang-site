import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata = { title: '服务与能力 - 丰和智尚' }

const services = [
  {
    slug: 'consulting',
    title: '咨询与方案设计',
    desc: '需求澄清、范围界定、里程碑与风险识别，形成可执行的落地方案与度量标准。',
    tags: ['规划', '里程碑', '度量'],
  },
  {
    slug: 'frontend',
    title: '前端工程与设计系统',
    desc: 'Next.js + Tailwind + shadcn 组件化交付，关注性能、可维护性与一致体验。',
    tags: ['Next.js', 'Tailwind', 'shadcn'],
  },
  {
    slug: 'backend-data',
    title: '后端与数据',
    desc: 'API 设计、鉴权、日志与监控，按需接入数据库与数据处理流程。',
    tags: ['API', 'Auth', 'Observability'],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <h1 className="text-[28px] leading-[36px] mb-[8px]">服务与能力</h1>
          <p className="text-[14px] leading-[22px] text-muted-foreground">
            以“清晰目标、最小可行、度量反馈”为方法，提供稳定可靠的工程与交付。
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px] grid md:grid-cols-3 gap-[16px]">
          {services.map((s) => (
            <Card
              key={s.slug}
              className="rounded-2xl border border-[var(--border)] hover:shadow-md"
            >
              <CardHeader className="p-[20px] pb-[8px]">
                <h3 className="text-[20px] leading-[28px]">{s.title}</h3>
              </CardHeader>
              <CardContent className="p-[20px] pt-[8px]">
                <p className="text-[14px] leading-[22px] text-muted-foreground mb-[12px]">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-[8px] mb-[16px]">
                  {s.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="px-[8px] py-[2px] text-[12px] leading-[18px]"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-[14px] leading-[22px] underline underline-offset-4"
                >
                  了解更多 →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
