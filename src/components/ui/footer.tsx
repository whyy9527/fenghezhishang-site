// components/site/footer.tsx
type FooterProps = {
  companyName?: string
  icp?: string // 例：沪ICP备12345678号-1
  police?: { code: string; link?: string } | null // 例：沪公网安备 3101010200xxxx 号
  address?: string
  phone?: string
  email?: string
}

export function SiteFooter({
  companyName = '某某科技有限公司',
  icp,
  police = null,
  address,
  phone,
  email,
}: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-surface">
      <div className="mx-auto max-w-[1120px] px-[20px] py-[20px] text-[12px] leading-[18px] text-muted flex flex-col md:flex-row md:items-center md:justify-between gap-[8px]">
        {/* 左侧：版权 + 备案位 */}
        <div className="flex items-center gap-[12px] flex-wrap">
          <span>
            © {year} {companyName} | 保留所有权利
          </span>
          {icp ? (
            <a
              className="underline underline-offset-2"
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
            >
              {icp}
            </a>
          ) : (
            <span>（ICP备案申请中）</span>
          )}
          {police?.code &&
            (police.link ? (
              <a
                className="underline underline-offset-2"
                href={police.link}
                target="_blank"
                rel="noreferrer"
              >
                {police.code}
              </a>
            ) : (
              <span>{police.code}</span>
            ))}
        </div>

        {/* 右侧：联系信息 + 合规链接 */}
        <div className="flex items-center gap-[12px] flex-wrap">
          {address && <span>地址：{address}</span>}
          {phone && <span>电话：{phone}</span>}
          {email && <span>邮箱：{email}</span>}
          {/* 分割线（可选） */}
          <span className="text-[12px] text-muted">|</span>
          <a href="/privacy" className="underline underline-offset-2">
            隐私政策
          </a>
          <a href="/terms" className="underline underline-offset-2">
            免责声明
          </a>
        </div>
      </div>
    </footer>
  )
}
