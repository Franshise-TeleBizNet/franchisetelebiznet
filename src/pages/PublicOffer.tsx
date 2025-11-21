import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const PublicOffer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
              Публичная оферта
            </h1>
            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground mb-4">
                  1.1. Настоящий документ является публичной офертой ООО "TeleBizNet" 
                  (далее – Исполнитель) и содержит все существенные условия договора на оказание 
                  услуг по предоставлению франшизы TeleBizNet.
                </p>
                <p className="text-muted-foreground mb-4">
                  1.2. В соответствии со статьей 437 ГК РФ данный документ является публичной офертой, 
                  и в случае принятия изложенных ниже условий лицо, производящее акцепт этой оферты, 
                  осуществляет оплату услуг Исполнителя в порядке, предусмотренном настоящей офертой.
                </p>
                <p className="text-muted-foreground">
                  1.3. Акцептом настоящей оферты является оплата услуг Заказчиком в соответствии 
                  с условиями настоящего договора.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Термины и определения</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <strong>Исполнитель</strong> – ООО "TeleBizNet", предоставляющее услуги по франшизе.
                  </li>
                  <li>
                    <strong>Заказчик</strong> – физическое или юридическое лицо, принявшее условия 
                    настоящей оферты и оплатившее услуги.
                  </li>
                  <li>
                    <strong>Франшиза</strong> – комплекс услуг, включающий доступ к бизнес-модели, 
                    технологиям, торговой марке и поддержке.
                  </li>
                  <li>
                    <strong>Пакет</strong> – набор услуг, выбранный Заказчиком (Активный старт, 
                    Бизнес Рост, Премиум Инвестор).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Предмет договора</h2>
                <p className="text-muted-foreground mb-4">
                  3.1. Исполнитель обязуется предоставить Заказчику право использования франшизы 
                  TeleBizNet, а Заказчик обязуется оплатить услуги в соответствии с выбранным пакетом.
                </p>
                <p className="text-muted-foreground mb-4">
                  3.2. Исполнитель предоставляет следующие услуги в рамках франшизы:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Создание и наполнение медиаканалов контентом</li>
                  <li>Доступ к CRM-системе для управления каналами</li>
                  <li>Маркетинговая поддержка и продвижение</li>
                  <li>Поиск и работа с рекламодателями</li>
                  <li>Техническая поддержка</li>
                  <li>Обучение и консультации</li>
                </ul>
                <p className="text-muted-foreground">
                  3.3. Конкретный перечень услуг зависит от выбранного пакета и указан на сайте 
                  Исполнителя.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Стоимость и порядок оплаты</h2>
                <h3 className="text-xl font-semibold mb-3">4.1. Стоимость услуг:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Пакет "Активный старт" (5 каналов) – 900 000 ₽</li>
                  <li>Пакет "Бизнес Рост" (10 каналов) – 1 650 000 ₽</li>
                  <li>Пакет "Премиум Инвестор" (15 каналов) – 2 375 000 ₽</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  4.2. Оплата производится единовременно в течение 3 банковских дней после 
                  выбора пакета путем безналичного перечисления на расчетный счет Исполнителя.
                </p>
                <p className="text-muted-foreground mb-4">
                  4.3. Датой оплаты считается дата зачисления денежных средств на расчетный счет 
                  Исполнителя.
                </p>
                <p className="text-muted-foreground">
                  4.4. Исполнитель оставляет за собой право изменять стоимость услуг с уведомлением 
                  Заказчика за 30 дней. Изменение стоимости не влияет на уже оплаченные услуги.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Права и обязанности сторон</h2>
                <h3 className="text-xl font-semibold mb-3">5.1. Исполнитель обязуется:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Предоставить доступ к услугам в течение 5 рабочих дней после оплаты</li>
                  <li>Обеспечить создание каналов в соответствии с выбранным пакетом</li>
                  <li>Предоставить техническую поддержку в рабочие дни с 9:00 до 18:00 МСК</li>
                  <li>Предоставить доступ к CRM-системе</li>
                  <li>Оказывать консультационную поддержку</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3">5.2. Исполнитель имеет право:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Приостановить предоставление услуг при нарушении Заказчиком условий договора</li>
                  <li>Изменять условия оферты с уведомлением Заказчика</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3">5.3. Заказчик обязуется:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Своевременно оплачивать услуги</li>
                  <li>Предоставить полную и достоверную информацию при регистрации</li>
                  <li>Соблюдать законодательство РФ при использовании франшизы</li>
                  <li>Не передавать доступы к CRM-системе третьим лицам</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3">5.4. Заказчик имеет право:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Получать услуги в полном объеме согласно выбранному пакету</li>
                  <li>Требовать качественного выполнения услуг</li>
                  <li>Обращаться в службу поддержки по всем вопросам</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Гарантии и ответственность</h2>
                <p className="text-muted-foreground mb-4">
                  6.1. Исполнитель гарантирует предоставление услуг надлежащего качества в 
                  соответствии с выбранным пакетом.
                </p>
                <p className="text-muted-foreground mb-4">
                  6.2. Исполнитель не несет ответственности за финансовый результат деятельности 
                  Заказчика, так как доход зависит от множества внешних факторов.
                </p>
                <p className="text-muted-foreground mb-4">
                  6.3. Исполнитель не несет ответственности за действия третьих лиц, которые 
                  могут повлиять на работу каналов (блокировки со стороны платформ и т.д.).
                </p>
                <p className="text-muted-foreground">
                  6.4. Стороны освобождаются от ответственности за частичное или полное 
                  неисполнение обязательств, вызванное обстоятельствами непреодолимой силы.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Возврат средств</h2>
                <p className="text-muted-foreground mb-4">
                  7.1. Заказчик имеет право на возврат 50% оплаченных средств в течение 14 дней 
                  с момента оплаты при условии, что услуги не были предоставлены.
                </p>
                <p className="text-muted-foreground mb-4">
                  7.2. После начала предоставления услуг (создания каналов, предоставления доступа) 
                  возврат средств не производится.
                </p>
                <p className="text-muted-foreground">
                  7.3. Возврат осуществляется в течение 30 рабочих дней с момента получения 
                  письменного заявления Заказчика.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Срок действия договора</h2>
                <p className="text-muted-foreground mb-4">
                  8.1. Договор вступает в силу с момента оплаты услуг Заказчиком и действует 
                  в течение 12 месяцев.
                </p>
                <p className="text-muted-foreground mb-4">
                  8.2. По истечении срока договор может быть продлен на тех же или иных условиях 
                  по соглашению сторон.
                </p>
                <p className="text-muted-foreground">
                  8.3. Заказчик вправе досрочно расторгнуть договор, письменно уведомив 
                  Исполнителя за 30 дней. Возврат средств в этом случае не производится.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Разрешение споров</h2>
                <p className="text-muted-foreground mb-4">
                  9.1. Все споры и разногласия решаются путем переговоров.
                </p>
                <p className="text-muted-foreground mb-4">
                  9.2. В случае невозможности урегулирования спора в досудебном порядке, 
                  спор передается на рассмотрение в Арбитражный суд г. Москвы.
                </p>
                <p className="text-muted-foreground">
                  9.3. Претензионный порядок обязателен. Срок ответа на претензию – 10 рабочих дней.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Реквизиты Исполнителя</h2>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Наименование:</strong> ООО "TeleBizNet"</li>
                    <li><strong>ИНН:</strong> 7707123456</li>
                    <li><strong>КПП:</strong> 770701001</li>
                    <li><strong>ОГРН:</strong> 1234567890123</li>
                    <li><strong>Юридический адрес:</strong> 123456, г. Москва, ул. Примерная, д. 1</li>
                    <li><strong>Расчетный счет:</strong> 40702810100000000001</li>
                    <li><strong>Банк:</strong> ПАО "Примербанк"</li>
                    <li><strong>БИК:</strong> 044525000</li>
                    <li><strong>Корр. счет:</strong> 30101810100000000000</li>
                    <li><strong>Email:</strong> info@telebiznet.ru</li>
                    <li><strong>Телефон:</strong> +7 (495) 123-45-67</li>
                  </ul>
                </div>
              </section>

              <section className="mt-12 pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  Дата публикации оферты: 21.11.2025
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

export default PublicOffer;
