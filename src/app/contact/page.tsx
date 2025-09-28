import ContactForm from '@/components/contact-form'

export const metadata = { title: '联系我们 - 丰和智尚' }

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-[20px] py-[48px]">
          <h1 className="text-[28px] leading-[36px] mb-[8px]">联系我们</h1>
          <p className="text-[14px] leading-[22px] text-muted-foreground">
            邮箱：hi@yourdomain.com　电话：010-xxxx-xxxx　地址：北京市 ×× 区 ××
            路 ×× 号
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[720px] px-[20px] py-[48px]">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
