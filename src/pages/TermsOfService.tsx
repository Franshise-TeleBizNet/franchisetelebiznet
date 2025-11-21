import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
              Пользовательское соглашение
            </h1>
            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground mb-4">
                  1.1. Настоящее Пользовательское соглашение (далее – Соглашение) регулирует отношения 
                  между ООО "TeleBizNet" (далее – Компания) и физическим или юридическим лицом 
                  (далее – Пользователь), использующим услуги Компании.
                </p>
                <p className="text-muted-foreground mb-4">
                  1.2. Использование услуг Компании означает безоговорочное согласие Пользователя 
                  с настоящим Соглашением и указанными в нем условиями.
                </p>
                <p className="text-muted-foreground">
                  1.3. В случае несогласия с условиями Соглашения Пользователь обязан прекратить 
                  использование услуг Компании.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Предмет соглашения</h2>
                <p className="text-muted-foreground mb-4">
                  2.1. Компания предоставляет Пользователю право на использование франшизы TeleBizNet 
                  на условиях, определенных выбранным пакетом услуг.
                </p>
                <p className="text-muted-foreground mb-4">
                  2.2. Перечень услуг, входящих в каждый пакет, указан на официальном сайте Компании 
                  и может быть изменен Компанией в одностороннем порядке.
                </p>
                <p className="text-muted-foreground">
                  2.3. Компания обязуется предоставить Пользователю доступ к CRM-системе, технической 
                  поддержке и другим сервисам согласно выбранному пакету.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Права и обязанности сторон</h2>
                <h3 className="text-xl font-semibold mb-3">3.1. Компания обязуется:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Предоставить Пользователю доступ к услугам в соответствии с выбранным пакетом</li>
                  <li>Обеспечить техническую поддержку в рабочее время</li>
                  <li>Своевременно информировать об изменениях в условиях предоставления услуг</li>
                  <li>Обеспечить конфиденциальность персональных данных Пользователя</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3">3.2. Пользователь обязуется:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Своевременно оплачивать услуги согласно выбранному тарифу</li>
                  <li>Предоставлять достоверную информацию при регистрации</li>
                  <li>Не передавать доступ к своему аккаунту третьим лицам</li>
                  <li>Соблюдать законодательство РФ при использовании услуг</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Оплата услуг</h2>
                <p className="text-muted-foreground mb-4">
                  4.1. Стоимость услуг определяется действующими тарифами, опубликованными на сайте Компании.
                </p>
                <p className="text-muted-foreground mb-4">
                  4.2. Оплата производится в безналичном порядке путем перечисления денежных средств 
                  на расчетный счет Компании.
                </p>
                <p className="text-muted-foreground">
                  4.3. При неоплате услуг в установленный срок Компания вправе приостановить 
                  предоставление услуг до полного погашения задолженности.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Ответственность сторон</h2>
                <p className="text-muted-foreground mb-4">
                  5.1. За неисполнение или ненадлежащее исполнение обязательств по настоящему Соглашению 
                  стороны несут ответственность в соответствии с законодательством РФ.
                </p>
                <p className="text-muted-foreground mb-4">
                  5.2. Компания не несет ответственности за убытки Пользователя, возникшие в результате 
                  неправомерных действий третьих лиц.
                </p>
                <p className="text-muted-foreground">
                  5.3. Компания не гарантирует конкретный размер дохода от использования франшизы, 
                  так как результаты зависят от множества факторов.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Срок действия и расторжение</h2>
                <p className="text-muted-foreground mb-4">
                  6.1. Соглашение вступает в силу с момента акцепта оферты Пользователем и действует 
                  до полного исполнения обязательств сторонами.
                </p>
                <p className="text-muted-foreground mb-4">
                  6.2. Пользователь вправе расторгнуть Соглашение в любое время, направив письменное 
                  уведомление Компании за 30 дней.
                </p>
                <p className="text-muted-foreground">
                  6.3. Компания вправе расторгнуть Соглашение в одностороннем порядке в случае 
                  нарушения Пользователем условий Соглашения.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Прочие условия</h2>
                <p className="text-muted-foreground mb-4">
                  7.1. Все споры разрешаются путем переговоров. При недостижении согласия спор 
                  передается на рассмотрение в суд по месту нахождения Компании.
                </p>
                <p className="text-muted-foreground mb-4">
                  7.2. Компания вправе вносить изменения в Соглашение в одностороннем порядке, 
                  уведомив Пользователя за 10 дней до вступления изменений в силу.
                </p>
                <p className="text-muted-foreground">
                  7.3. Во всем, что не урегулировано настоящим Соглашением, стороны руководствуются 
                  законодательством РФ.
                </p>
              </section>

              <section className="mt-12 pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  Дата последнего обновления: 21.11.2025
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
