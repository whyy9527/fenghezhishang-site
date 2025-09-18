import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const SERVICES = [
  {
    slug: 'consulting',
    title: '咨询与方案设计',
    summary: '需求澄清、范围界定、里程碑与风险识别，形成可执行方案。',
    points: [
      '现状评估与目标拆解',
      '里程碑/度量/验收标准制定',
      '风险识别与缓解计划',
    ],
    tags: ['规划', '里程碑', '度量'],
  },
  {
    slug: 'frontend',
    title: '前端工程与设计系统',
    summary: 'Next.js + Tailwind + shadcn 组件化交付，体验一致、易维护。',
    points: [
      '设计系统与组件库落地',
      'SSR/SSG/ISR 与性能优化',
      '可访问性与多语言支持',
    ],
    tags: ['Next.js', 'Tailwind', 'shadcn'],
  },
  {
    slug: 'backend-data',
    title: '后端与数据',
    summary: 'API 设计、鉴权、日志与监控，按需接入数据库与数据流程。',
    points: ['API 规范与鉴权', '数据库建模与迁移', '监控告警与可观测性'],
    tags: ['API', 'Auth', 'Observability'],
  },
]

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = SERVICES.find((x) => x.slug === params.slug)
  return { title: s ? `${s.title} - 枫禾智尚` : '服务详情 - 枫禾智尚' }
}

export default function ServiceDetail({
  params,
}: {
  params: { slug: string }
}) {
  const s = SERVICES.find((x) => x.slug === params.slug)
  if (!s) return notFound()

  return (
    <main className="bg-surface text-fg">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <h1 className="text-[28px] leading-[36px] mb-[8px]">{s.title}</h1>
          <p className="text-[14px] leading-[22px] text-muted">{s.summary}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[880px] px-[20px] py-[40px] grid gap-[16px]">
          <Card className="rounded-2xl border border-[var(--border)]">
            <CardHeader className="p-[20px] pb-[8px]">
              <h2 className="text-[20px] leading-[28px]">我们怎么做</h2>
            </CardHeader>
            <CardContent className="p-[20px] pt-[8px]">
              <ul className="list-disc pl-[18px] space-y-[6px]">
                {s.points.map((p) => (
                  <li key={p} className="text-[14px] leading-[22px] text-fg">
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-[8px]">
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

          <div className="text-[12px] leading-[18px] text-muted">
            *
            本页面仅为服务能力展示，不构成在线交易或承诺。具体合作以双方签署的合同为准。
          </div>
        </div>
      </section>
    </main>
  )
}
