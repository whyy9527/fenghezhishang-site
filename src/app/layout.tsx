import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/ui/navbar'
import { SiteFooter } from '@/components/ui/footer'
import DevInspector from '@/components/dev-inspector'

const COMPANY_NAME = '西咸新区丰和智上医疗科技有限公司'

export const metadata: Metadata = {
  title: '连接医药创新，服务临床医疗 - 西咸新区丰和智上医疗科技有限公司',
  description:
    '西咸新区丰和智上医疗科技有限公司定位于"数字化临床价值创新平台"，连接医药创新与临床需求，为医院、医药器械企业与科研机构提供合规的信息展示、协作与品牌专区服务。',
  icons: {
    icon: '/images/icons/icon.png',
    shortcut: '/images/icons/icon.png',
    apple: '/images/icons/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Navbar />
        {children}
        <DevInspector />
        <SiteFooter
          companyName={COMPANY_NAME}
          icp={undefined}
          police={null}
          phone="029-33163466"
          email="58034404@qq.com"
        />
      </body>
    </html>
  )
}
