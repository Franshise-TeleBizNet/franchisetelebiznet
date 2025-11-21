import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Политика конфиденциальности</h1>
            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground mb-4">
                  1.1. Настоящая Политика конфиденциальности (далее – Политика) определяет порядок обработки и защиты
                  персональных данных пользователей (далее – Пользователи) веб-сайта TeleBizNet и сервисов Компании.
                </p>
                <p className="text-muted-foreground mb-4">
                  1.2. Используя сайт и сервисы TeleBizNet, Пользователь соглашается с условиями настоящей Политики.
                </p>
                <p className="text-muted-foreground">
                  1.3. Компания обрабатывает персональные данные в соответствии с Федеральным законом № 152-ФЗ "О
                  персональных данных".
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Собираемые данные</h2>
                <h3 className="text-xl font-semibold mb-3">2.1. Компания собирает следующие данные:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Фамилия, имя, отчество</li>
                  <li>Контактный телефон и адрес электронной почты</li>
                  <li>Данные об организации (для юридических лиц)</li>
                  <li>ИНН, ОГРН/ОГРНИП (при необходимости)</li>
                  <li>Платежные данные для проведения транзакций</li>
                </ul>
                <h3 className="text-xl font-semibold mb-3">2.2. Автоматически собираемые данные:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>IP-адрес</li>
                  <li>Информация из cookies</li>
                  <li>Данные о браузере и устройстве</li>
                  <li>Информация о действиях на сайте</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Цели сбора данных</h2>
                <h3 className="text-xl font-semibold mb-3">3.1. Персональные данные используются для:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Предоставления доступа к услугам Компании</li>
                  <li>Идентификации Пользователя в CRM-системе</li>
                  <li>Обработки платежей и выставления счетов</li>
                  <li>Коммуникации с Пользователем (техподдержка, уведомления)</li>
                  <li>Улучшения качества услуг и персонализации предложений</li>
                  <li>Соблюдения законодательных требований</li>
                  <li>Предотвращения мошенничества и обеспечения безопасности</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Обработка и хранение данных</h2>
                <p className="text-muted-foreground mb-4">
                  4.1. Компания обрабатывает персональные данные с использованием баз данных, расположенных на
                  территории Российской Федерации.
                </p>
                <p className="text-muted-foreground mb-4">
                  4.2. Компания принимает необходимые технические и организационные меры для защиты персональных данных
                  от несанкционированного доступа, изменения, раскрытия или уничтожения.
                </p>
                <p className="text-muted-foreground mb-4">
                  4.3. Персональные данные хранятся в течение срока, необходимого для достижения целей обработки, но не
                  менее срока, установленного законодательством РФ.
                </p>
                <p className="text-muted-foreground">
                  4.4. Доступ к персональным данным имеют только уполномоченные сотрудники Компании, которые обязаны
                  соблюдать конфиденциальность.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Передача данных третьим лицам</h2>
                <p className="text-muted-foreground mb-4">
                  5.1. Компания не передает персональные данные третьим лицам, за исключением следующих случаев:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>При наличии согласия Пользователя</li>
                  <li>
                    По требованию уполномоченных государственных органов в случаях, предусмотренных законодательством
                  </li>
                  <li>Партнерам, обеспечивающим обработку платежей (с применением мер безопасности)</li>
                  <li>
                    Подрядчикам, предоставляющим технические услуги (хостинг, аналитика) на условиях конфиденциальности
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Использование cookies</h2>
                <p className="text-muted-foreground mb-4">
                  6.1. Сайт использует файлы cookies для улучшения работы и персонализации пользовательского опыта.
                </p>
                <p className="text-muted-foreground mb-4">
                  6.2. Пользователь может настроить свой браузер для отказа от cookies, однако это может ограничить
                  функциональность сайта.
                </p>
                <p className="text-muted-foreground">
                  6.3. Компания использует cookies следующих типов: сеансовые (session cookies), постоянные (persistent
                  cookies), аналитические и рекламные.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Права пользователей</h2>
                <h3 className="text-xl font-semibold mb-3">7.1. Пользователь имеет право:</h3>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Получать информацию о своих персональных данных, обрабатываемых Компанией</li>
                  <li>Требовать исправления неточных данных</li>
                  <li>Требовать удаления персональных данных</li>
                  <li>Ограничить обработку персональных данных</li>
                  <li>Отозвать согласие на обработку персональных данных</li>
                  <li>Получить копию своих персональных данных</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Безопасность данных</h2>
                <p className="text-muted-foreground mb-4">
                  8.1. Компания применяет современные технологии шифрования для защиты данных при передаче (SSL/TLS).
                </p>
                <p className="text-muted-foreground mb-4">
                  8.2. Регулярно проводится аудит безопасности информационных систем.
                </p>
                <p className="text-muted-foreground">
                  8.3. В случае утечки персональных данных Компания обязуется незамедлительно уведомить Пользователя и
                  принять меры по минимизации ущерба.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Изменения в политике</h2>
                <p className="text-muted-foreground mb-4">
                  9.1. Компания оставляет за собой право вносить изменения в настоящую Политику.
                </p>
                <p className="text-muted-foreground mb-4">
                  9.2. Новая редакция Политики вступает в силу с момента размещения на сайте.
                </p>
                <p className="text-muted-foreground">
                  9.3. Пользователи будут уведомлены о существенных изменениях по электронной почте.
                </p>
              </section>

              <section className="mt-12 pt-8 border-t">
                <p className="text-sm text-muted-foreground">Дата последнего обновления: 21.11.2025</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
