import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const CONSENT_KEY = "telebiznet_consent";
const CONSENT_DURATION = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds

interface ConsentData {
  cookiesAccepted: boolean;
  privacyAccepted: boolean;
  marketingAccepted: boolean;
  timestamp: number;
}

const ConsentManagement = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
  const [consentDate, setConsentDate] = useState<Date | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load current consent settings
    const storedConsent = localStorage.getItem(CONSENT_KEY);
    
    if (storedConsent) {
      try {
        const consentData: ConsentData = JSON.parse(storedConsent);
        setCookiesAccepted(consentData.cookiesAccepted);
        setPrivacyAccepted(consentData.privacyAccepted);
        setMarketingAccepted(consentData.marketingAccepted);
        setConsentDate(new Date(consentData.timestamp));
      } catch (e) {
        console.error("Error parsing consent data:", e);
      }
    }
  }, []);

  const handleSave = () => {
    if (!cookiesAccepted || !privacyAccepted) {
      toast({
        title: "Ошибка",
        description: "Обязательные согласия должны быть отмечены",
        variant: "destructive",
      });
      return;
    }

    const consentData: ConsentData = {
      cookiesAccepted,
      privacyAccepted,
      marketingAccepted,
      timestamp: Date.now(),
    };
    
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));
    setConsentDate(new Date());
    
    toast({
      title: "Успешно сохранено",
      description: "Ваши настройки согласий обновлены",
    });
  };

  const handleRevokeAll = () => {
    localStorage.removeItem(CONSENT_KEY);
    setCookiesAccepted(false);
    setPrivacyAccepted(false);
    setMarketingAccepted(false);
    setConsentDate(null);
    
    toast({
      title: "Согласия отозваны",
      description: "Все согласия были удалены. При следующем посещении вы увидите модальное окно с запросом согласий.",
    });
  };

  const isButtonEnabled = cookiesAccepted && privacyAccepted;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>

          <Card className="glass-strong border-2 border-border/50">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Управление согласиями
              </CardTitle>
              <CardDescription className="text-base">
                Здесь вы можете изменить свои настройки согласий на использование cookie и обработку персональных данных.
              </CardDescription>
              {consentDate && (
                <p className="text-sm text-muted-foreground mt-4">
                  Последнее обновление: {consentDate.toLocaleString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Required: Cookies */}
              <div className="flex items-start space-x-3 glass-light p-4 rounded-lg">
                <Checkbox
                  id="cookies"
                  checked={cookiesAccepted}
                  onCheckedChange={(checked) => setCookiesAccepted(checked === true)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label 
                    htmlFor="cookies" 
                    className="text-base font-semibold cursor-pointer flex items-center gap-2"
                  >
                    Я согласен с использованием файлов Cookie
                    <span className="text-xs font-normal text-destructive">
                      (Обязательный)
                    </span>
                  </Label>
                  <p className="text-sm text-muted-foreground mt-2">
                    Необходимы для технической работы сайта и сбора обезличенной статистики посещаемости.
                  </p>
                </div>
              </div>

              {/* Required: Privacy Policy */}
              <div className="flex items-start space-x-3 glass-light p-4 rounded-lg">
                <Checkbox
                  id="privacy"
                  checked={privacyAccepted}
                  onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label 
                    htmlFor="privacy" 
                    className="text-base font-semibold cursor-pointer flex items-center gap-2"
                  >
                    Я ознакомился и принимаю{" "}
                    <Link 
                      to="/personal-data-policy" 
                      className="text-primary hover:underline"
                      target="_blank"
                    >
                      Политику обработки персональных данных
                    </Link>
                    <span className="text-xs font-normal text-destructive">
                      (Обязательный)
                    </span>
                  </Label>
                  <p className="text-sm text-muted-foreground mt-2">
                    Подтверждаю свое согласие на обработку технических данных о моем визите (IP, гео-локация).
                  </p>
                </div>
              </div>

              {/* Optional: Marketing */}
              <div className="flex items-start space-x-3 glass-light p-4 rounded-lg">
                <Checkbox
                  id="marketing"
                  checked={marketingAccepted}
                  onCheckedChange={(checked) => setMarketingAccepted(checked === true)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label 
                    htmlFor="marketing" 
                    className="text-base font-semibold cursor-pointer flex items-center gap-2"
                  >
                    Я согласен на получение персонализированных предложений
                    <span className="text-xs font-normal text-muted-foreground">
                      (Опциональный)
                    </span>
                  </Label>
                  <p className="text-sm text-muted-foreground mt-2">
                    Разрешаю использовать данные моего визита для показа мне релевантной рекламы франшизы (ретаргетинг).
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleSave}
                  disabled={!isButtonEnabled}
                  size="lg"
                  className="flex-1"
                >
                  Сохранить настройки
                </Button>
                <Button
                  onClick={handleRevokeAll}
                  variant="destructive"
                  size="lg"
                  className="flex-1"
                >
                  Отозвать все согласия
                </Button>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong>Примечание:</strong> Обязательные согласия требуются для работы с сайтом. 
                  Если вы отзовете все согласия, при следующем посещении сайта вы увидите модальное окно с запросом согласий.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConsentManagement;
