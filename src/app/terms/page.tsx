export const metadata = { title: '免责声明 - 丰和智尚' }

export default function TermsPage() {
  return (
    <main className="bg-surface text-fg">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <h1 className="text-[28px] leading-[36px] mb-[8px]">免责声明</h1>
          <p className="text-[14px] leading-[22px] text-muted">
            本页面旨在说明使用本网站信息的相关注意事项与责任边界。
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[880px] px-[20px] py-[40px] grid gap-[16px] text-[14px] leading-[22px]">
          <h2 className="text-[20px] leading-[28px]">1. 信息用途</h2>
          <p>
            本网站所载内容仅为一般性信息与服务能力展示，不构成任何投资、法律、医疗、教育等专业建议。
            您据此采取的行动由您自行判断并承担风险。
          </p>

          <h2 className="text-[20px] leading-[28px]">2. 第三方链接</h2>
          <p>
            本站可能包含指向第三方网站的链接。我们对第三方网站的内容、安全性与隐私做法不承担责任。
          </p>

          <h2 className="text-[20px] leading-[28px]">3. 知识产权</h2>
          <p>
            本站展示的商标、标识与内容（除另有说明）归本公司或相应权利人所有，未经授权不得使用。
          </p>

          <h2 className="text-[20px] leading-[28px]">4. 免责范围</h2>
          <p>
            因不可抗力或第三方原因导致的服务中断、信息错误、数据丢失等情形，我们在法律允许范围内免责。
          </p>

          <h2 className="text-[20px] leading-[28px]">5. 变更</h2>
          <p>
            我们可能根据需要更新本免责声明，更新后将在本站公示并自公布之日起生效。
          </p>

          <h2 className="text-[20px] leading-[28px]">6. 联系方式</h2>
          <p>邮箱：hi@yourdomain.com　电话：010-xxxx-xxxx</p>

          <div className="text-[12px] leading-[18px] text-muted">
            *
            若未来提供注册、下单、下载、互动等功能，请升级为正式《用户协议》，并与隐私政策、Cookie
            政策配套。
          </div>
        </div>
      </section>
    </main>
  )
}
