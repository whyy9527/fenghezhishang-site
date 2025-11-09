import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const COMPANY_NAME = '西咸新区丰和智上医疗科技有限公司'

const SERVICE_DETAILS = [
  {
    slug: 'clinical-compliance-display',
    title: '临床信息合规展示',
    summary:
      '面向医院与科室提供统一的合规信息展示与资料托管，保证资料口径一致、更新可追溯。',
    highlights: [
      '建立临床资料的分类、版本与权限管理体系',
      '支持多终端展示与下载，辅助科室宣教与内部培训',
      '提供更新留痕与发布审批流程，确保合规要求落地',
    ],
    compliance: '合规属性：信息展示/技术服务，不涉诊疗与交易。',
    badges: ['信息展示', '资料托管'],
  },
  {
    slug: 'department-collaboration-management',
    title: '科室协作与活动管理',
    summary:
      '以线上平台支撑科室宣教、培训与活动的计划、执行与复盘，实现流程透明与高效协同。',
    highlights: [
      '活动计划、资料发布、反馈收集的闭环管理',
      '多科室协同与任务指派，保持沟通节奏一致',
      '沉淀历史记录，为后续复盘与评估提供依据',
    ],
    compliance: '合规属性：信息展示/技术服务，不涉诊疗与交易。',
    badges: ['协作管理', '流程在线化'],
  },
  {
    slug: 'brand-zone-services',
    title: '品牌专区（医药/器械）信息服务',
    summary:
      '为医药及医疗器械品牌搭建合规的资料展示专区，便于医疗机构快速了解产品价值。',
    highlights: [
      '集中呈现说明书、合规材料、介绍视频等内容',
      '支持按科室或疾病领域分类，提升检索效率',
      '提供受控的对接入口，配合线下商务流程',
    ],
    compliance: '合规属性：信息展示，不含交易/撮合。',
    badges: ['品牌专区', '合规展示'],
  },
  {
    slug: 'collaboration-intake',
    title: '合作对接与需求提交',
    summary:
      '通过标准化表单收集合作线索，自动分发至相关团队，缩短响应路径。',
    highlights: [
      '配置化的需求字段，覆盖常见合作场景',
      '线索分发与状态跟踪，确保责任到人',
      '与邮箱、电话等线下渠道形成补充联动',
    ],
    compliance: '合规属性：技术服务/信息收集，遵循隐私政策。',
    badges: ['线索管理', '隐私保护'],
  },
  {
    slug: 'academic-events-resources',
    title: '学术会务与资料下载',
    summary:
      '将学术交流活动的报名、通知与资料下载搬到线上，便于统一管理与参会人员及时获取信息。',
    highlights: [
      '活动报名与签到数据统一管理，降低人工统计成本',
      '会后资料安全分发，支持有效期控制与访问记录',
      '整合通知、日程与提醒，提高参会体验',
    ],
    compliance: '合规属性：信息展示/活动管理，不涉诊疗与交易。',
    badges: ['会务管理', '资料分发'],
  },
] as const

type ServiceSlug = (typeof SERVICE_DETAILS)[number]['slug']

type ParamsPromise = Promise<{ slug: ServiceSlug }>

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: ParamsPromise }): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICE_DETAILS.find((item) => item.slug === slug)
  if (!service) {
    return {
      title: `服务详情 - ${COMPANY_NAME}`,
    }
  }
  return {
    title: `${service.title} - ${COMPANY_NAME}`,
    description: service.summary,
  }
}

export default async function ServiceDetail({ params }: { params: ParamsPromise }) {
  const { slug } = await params
  const service = SERVICE_DETAILS.find((item) => item.slug === slug)
  if (!service) {
    notFound()
  }

  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <h1 className="mb-[8px] text-[28px] leading-[36px]">{service.title}</h1>
          <p className="text-[14px] leading-[22px] text-muted-foreground">{service.summary}</p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1120px] space-y-[24px] px-[20px] py-[40px]">
          <Card className="rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="p-[20px] pb-[8px]">
              <h2 className="text-[20px] leading-[28px]">服务要点</h2>
            </CardHeader>
            <CardContent className="p-[20px] pt-[8px]">
              <ul className="list-disc space-y-[6px] pl-[18px] text-[14px] leading-[22px] text-foreground">
                {service.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-[8px]">
            {service.badges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="px-[10px] py-[4px] text-[12px] leading-[18px]"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <p className="text-[12px] leading-[18px] text-muted-foreground">
            {service.compliance}
          </p>
        </div>
      </section>
    </main>
  )
}
