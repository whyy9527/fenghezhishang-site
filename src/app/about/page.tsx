import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export const metadata = { title: '关于我们 - 枫禾智尚' }

export default function AboutPage() {
  return (
    <main className="bg-surface text-fg">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <h1 className="text-[28px] leading-[36px] mb-[8px]">关于我们</h1>
          <p className="text-[14px] leading-[22px] text-muted">
            我们是一家专注于 XX
            方向的技术服务团队，致力于以稳健的工程能力与务实的交付，帮助客户达成目标。
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px] grid md:grid-cols-3 gap-[16px]">
          {[
            {
              title: '使命',
              desc: '以清晰、可验证、可迭代的方式，为客户持续创造价值。',
            },
            {
              title: '价值观',
              desc: '专业、透明、负责。关注长期关系与可持续发展。',
            },
            {
              title: '能力域',
              desc: 'XX 咨询、产品原型、前端工程、后端与数据、运维与安全合规。',
            },
          ].map((i, idx) => (
            <Card
              key={idx}
              className="rounded-2xl border border-[var(--border)]"
            >
              <CardHeader className="p-[20px] pb-[8px]">
                <h3 className="text-[20px] leading-[28px]">{i.title}</h3>
              </CardHeader>
              <CardContent className="p-[20px] pt-[8px]">
                <p className="text-[14px] leading-[22px] text-muted">
                  {i.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <h2 className="text-[20px] leading-[28px] mb-[12px]">合规与承诺</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="commit">
              <AccordionTrigger className="text-[14px] leading-[22px]">
                信息展示与合规声明
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-[22px] text-muted">
                本网站仅用于公司信息与服务能力的展示，不涉及新闻采编、教育培训、直播、交易撮合等需前置审批的活动。如需开展经营性互联网信息服务，将按法规申请相关资质。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="privacy">
              <AccordionTrigger className="text-[14px] leading-[22px]">
                隐私与数据保护
              </AccordionTrigger>
              <AccordionContent className="text-[14px] leading-[22px] text-muted">
                在获得您授权的前提下收集必要信息，并仅用于联系与服务对接，未经许可不对外共享。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  )
}
