import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="bg-surface text-fg">
      {/* Hero */}
      <section className="w-full border-b border-base">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[72px] md:py-[96px]">
          <div className="max-w-[760px]">
            <h1 className="text-[36px] leading-[44px] mb-[16px]">
              专注于 XX 领域的技术与解决方案
            </h1>
            <p className="text-muted text-[16px] leading-[26px] mb-[28px]">
              我们以可靠的工程能力与务实的交付，为企业提供高质量的产品与服务。
            </p>
            <div className="flex items-center gap-[12px]">
              <Button className="h-[40px] px-[16px] text-[14px] leading-[22px] bg-[var(--brand-600)] hover:bg-[var(--brand-700)]">
                立即联系
              </Button>
              <Link
                href="/services"
                className="text-[14px] leading-[22px] underline underline-offset-4"
              >
                查看服务 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 三大卖点 */}
      <section className="w-full">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[64px] grid md:grid-cols-3 gap-[16px]">
          {[ 
            {title:"稳定交付",desc:"标准化流程与质量保障，项目可核验可追溯。"},
            {title:"性能与安全",desc:"现代化技术栈，关注速度、可用性与数据安全。"},
            {title:"长期陪伴",desc:"从 PoC 到规模化落地，持续迭代与优化。"},
          ].map((item, i)=>(
            <Card key={i} className="rounded-2xl border border-base">
              <CardHeader className="p-[20px] pb-[8px]">
                <h3 className="text-[20px] leading-[28px]">{item.title}</h3>
              </CardHeader>
              <CardContent className="p-[20px] pt-[8px]">
                <p className="text-muted text-[14px] leading-[22px]">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 联系我们 */}
      <section className="w-full border-t border-base">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <div className="rounded-2xl border border-base p-[20px] md:p-[28px]">
            <h3 className="text-[20px] leading-[28px] mb-[8px]">联系我们</h3>
            <p className="text-muted text-[14px] leading-[22px] mb-[12px]">
              邮箱：hi@yourdomain.com　电话：010-xxxx-xxxx
            </p>
            <p className="text-[12px] leading-[18px] text-muted">
              * 备案期间仅提供基础联系信息；备案通过后可开放在线表单与更多栏目。
            </p>
          </div>
        </div>
      </section>

      {/* 页脚（备案通过后补编号） */}
      <footer className="border-t border-base">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[20px] text-[12px] leading-[18px] text-muted">
          © {new Date().getFullYear()} 某某科技有限公司　|　保留所有权利
          {/* 备案通过后：| 沪ICP备xxxx号 | 公安网备xxxxxxxxxxxx */}
        </div>
      </footer>
    </main>
  );
}
