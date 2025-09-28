export const metadata = { title: '隐私政策 - 丰和智尚' }

export default function PrivacyPage() {
  return (
    <main className="bg-surface text-fg">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <h1 className="text-[28px] leading-[36px] mb-[8px]">隐私政策</h1>
          <p className="text-[14px] leading-[22px] text-muted">
            本政策旨在说明我们如何收集、使用、存储与保护您的个人信息。
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[880px] px-[20px] py-[40px] grid gap-[16px] text-[14px] leading-[22px]">
          <h2 className="text-[20px] leading-[28px]">1. 适用范围</h2>
          <p>
            本网站以信息展示为主。若您通过邮箱、电话或在线表单向我们提供联系方式与需求描述，
            我们仅为沟通与服务对接之目的使用该信息。
          </p>

          <h2 className="text-[20px] leading-[28px]">2. 收集的信息</h2>
          <ul className="list-disc pl-[18px] space-y-[6px]">
            <li>联系信息：您的称呼、邮箱、电话等。</li>
            <li>
              技术信息：为保障站点安全与运行所需的设备/浏览器信息与 IP（如有）。
            </li>
            <li>仅在获得您授权的前提下收集必要信息，不会超范围获取与使用。</li>
          </ul>

          <h2 className="text-[20px] leading-[28px]">3. 使用目的</h2>
          <p>用于回复咨询、沟通合作、改进服务与站点安全运行。</p>

          <h2 className="text-[20px] leading-[28px]">4. 信息共享与披露</h2>
          <p>
            我们不会向无关第三方提供您的个人信息，法律法规另有规定或为履行法定义务的情形除外。
          </p>

          <h2 className="text-[20px] leading-[28px]">5. 存储与安全</h2>
          <p>
            我们采取合理的安全措施保护信息安全，仅在达成收集目的所必需的期限内保存。
          </p>

          <h2 className="text-[20px] leading-[28px]">6. 您的权利</h2>
          <p>
            您有权查询、更正、删除您的个人信息，或撤回授权。请通过页面底部的联系方式与我们取得联系。
          </p>

          <h2 className="text-[20px] leading-[28px]">7. 未成年人信息</h2>
          <p>
            我们不以未成年人为服务对象，若涉及未成年人信息将在监护人同意后处理。
          </p>

          <h2 className="text-[20px] leading-[28px]">8. 政策更新</h2>
          <p>
            我们可能根据法律法规或业务调整更新本政策，重要变更将在本站公示。
          </p>

          <h2 className="text-[20px] leading-[28px]">9. 联系我们</h2>
          <p>邮箱：hi@yourdomain.com　电话：010-xxxx-xxxx</p>

          <div className="text-[12px] leading-[18px] text-muted">
            *
            本页面为展示站的简版隐私政策示例，具体以您的实际业务与法律要求为准。
          </div>
        </div>
      </section>
    </main>
  )
}
