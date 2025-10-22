// components/site/footer.tsx
type FooterProps = {
  companyName?: string
  icp?: string
  police?: { code: string; link?: string } | null
  phone?: string
  email?: string
}

export function SiteFooter({
  companyName = '某某科技有限公司',
  icp,
  police = null,
  phone,
  email,
}: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-background">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-[8px] px-[20px] py-[20px] text-[12px] leading-[18px] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-[12px]">
          <span>© {year} {companyName}</span>
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
            <span>ICP备案申请中</span>
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

        <div className="flex flex-wrap items-center gap-[12px]">
          {phone && <span>电话 {phone}</span>}
          {email && (
            <a
              href={`mailto:${email}`}
              className="underline underline-offset-2"
              rel="noreferrer"
            >
              邮箱 {email}
            </a>
          )}
          <span className="text-[12px] text-muted-foreground">|</span>
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
