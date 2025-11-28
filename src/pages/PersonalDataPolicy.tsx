import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const PersonalDataPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Политика в отношении обработки персональных данных
          </h1>
          
          <div className="space-y-8 text-foreground/90">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Общие положения</h2>
              <p className="mb-3">
                1.1. Настоящая Политика определяет порядок обработки и меры по обеспечению безопасности персональных данных (далее — ПДн) пользователей сайта Франшиза TeleBizNet (ТелеБизНет) (далее — Сайт).
              </p>
              <p className="mb-3">
                1.2. Оператором ПДн является компания-оператор франшизы TeleBizNet (ТелеБизНет) для вашего региона.
              </p>
              <p className="mb-3">
                1.3. Использование Сайта означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации.
              </p>
              <p className="mb-3">
                1.4. Настоящая Политика разработана в соответствии с Конституцией РФ, Гражданским кодексом РФ и Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Цели обработки персональных данных</h2>
              <p className="mb-3">
                Оператор собирает и хранит только те ПДн, которые необходимы для предоставления сервисов и взаимодействия с потенциальными партнерами (франчайзи):
              </p>
              <p className="mb-3">
                2.1. <strong>Консультирование по франшизе:</strong> Связь с Пользователем для предоставления информации о бизнес-модели, условиях партнерства, финансовых показателях.
              </p>
              <p className="mb-3">
                2.2. <strong>Заключение договоров:</strong> Подготовка и обсуждение условий договора коммерческой концессии (франчайзинга) или лицензионного договора.
              </p>
              <p className="mb-3">
                2.3. <strong>Маркетинг и аналитика:</strong> Направление уведомлений о новых продуктах, вебинарах, специальных предложениях (при наличии отдельного согласия), а также анализ эффективности рекламных каналов и улучшение работы Сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Категории обрабатываемых данных</h2>
              <p className="mb-3">
                3.1. Данные, предоставляемые Пользователем самостоятельно:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1 ml-4">
                <li>Фамилия, имя, отчество (при наличии).</li>
                <li>Контактный телефон.</li>
                <li>Адрес электронной почты (e-mail).</li>
              </ul>
              <p className="mb-3">
                3.2. Технические данные (автоматически передаваемые устройством):
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1 ml-4">
                <li>IP-адрес, данные файлов Cookie.</li>
                <li>Информация о браузере, устройстве, времени доступа.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Порядок и условия обработки</h2>
              <p className="mb-3">
                4.1. Обработка ПДн осуществляется с использованием средств автоматизации и без них.
              </p>
              <p className="mb-3">
                4.2. Оператор обязуется не передавать полученные ПДн третьим лицам, за исключением случаев:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1 ml-4">
                <li>Предоставления данных подрядчикам (CRM-системы, сервисы рассылок), с которыми заключены договоры, гарантирующие конфиденциальность данных.</li>
                <li>По запросу уполномоченных органов государственной власти РФ.</li>
              </ul>
              <p className="mb-3">
                4.3. Срок хранения ПДн: до достижения целей обработки, утраты необходимости в их достижении или отзыва согласия Пользователем.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Использование файлов Cookie</h2>
              <p className="mb-3">
                5.1. Сайт использует технологию «cookies» для создания статистической отчетности. Сookie не содержат конфиденциальную информацию.
              </p>
              <p className="mb-3">
                5.2. Пользователь может настроить браузер так, чтобы блокировать файлы cookie, однако это может ограничить функциональность Сайта.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Права Пользователя</h2>
              <p className="mb-3">Пользователь вправе:</p>
              <p className="mb-3">
                6.1. Требовать уточнения своих данных, их блокирования или уничтожения, если данные являются неполными, устаревшими или неточными.
              </p>
              <p className="mb-3">
                6.2. Отозвать согласие на обработку ПДн, направив письменное уведомление на электронную почту: <a href="mailto:serge.purt@gmail.com" className="text-primary hover:text-primary/80 underline">serge.purt@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Заключительные положения</h2>
              <p className="mb-3">
                7.1. Оператор имеет право вносить изменения в настоящую Политику. Новая редакция вступает в силу с момента ее размещения на Сайте.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PersonalDataPolicy;
