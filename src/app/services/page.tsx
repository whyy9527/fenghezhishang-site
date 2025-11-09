import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '服务 - 西咸新区丰和智上医疗科技有限公司',
  description:
    '服务列表 | 覆盖临床信息合规展示、科室协作与活动管理、品牌专区信息服务、合作对接与需求提交、学术会务与资料下载的数字化服务能力。',
}

const SERVICES = [
  {
    slug: 'clinical-compliance-display',
    title: '临床信息合规展示',
    description:
      '面向医院与科室的合规信息展示与资料托管；统一口径、更新留痕，便于科室学习与沟通。',
    compliance: '合规属性：信息展示/技术服务，不涉诊疗与交易。',
  },
  {
    slug: 'department-collaboration-management',
    title: '科室协作与活动管理',
    description:
      '科室宣教与活动方案在线化：计划、资料、反馈与复盘的闭环管理，提升沟通效率。',
    compliance: '合规属性：信息展示/技术服务，不涉诊疗与交易。',
  },
  {
    slug: 'brand-zone-services',
    title: '品牌专区（医药/器械）信息服务',
    description:
      '医药及医疗器械品牌的资料集合页（说明书、合规材料、介绍视频等）与面向医疗机构的信息对接。',
    compliance: '合规属性：信息展示，不含交易/撮合。',
  },
  {
    slug: 'collaboration-intake',
    title: '合作对接与需求提交',
    description:
      '合作线索与需求的标准化收集与分发，建立统一入口，缩短沟通路径。',
    compliance: '合规属性：技术服务/信息收集，遵循隐私政策。',
  },
  {
    slug: 'academic-events-resources',
    title: '学术会务与资料下载',
    description:
      '学术交流活动报名、日程通知与会后资料下载的线上化管理。',
    compliance: '合规属性：信息展示/活动管理，不涉诊疗与交易。',
  },
] as const

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <h1 className="text-[28px] leading-[36px] mb-[8px]">服务</h1>
          <p className="text-[14px] leading-[22px] text-muted-foreground">
            我们以“数字化临床价值创新平台”为定位，提供覆盖临床信息展示、协作管理与品牌专区的合规服务能力。
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1120px] gap-[16px] px-[20px] py-[48px] md:grid-cols-2">
          {SERVICES.map((service) => (
            <Card
              key={service.slug}
              className="rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <CardHeader className="p-[20px] pb-[8px]">
                <h2 className="text-[20px] leading-[28px]">{service.title}</h2>
              </CardHeader>
              <CardContent className="p-[20px] pt-[8px] space-y-[12px]">
                <p className="text-[14px] leading-[22px] text-muted-foreground">
                  {service.description}
                </p>
                <p className="text-[12px] leading-[18px] text-muted-foreground">
                  {service.compliance}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex text-[14px] leading-[22px] underline underline-offset-4"
                >
                  了解详情 →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}

