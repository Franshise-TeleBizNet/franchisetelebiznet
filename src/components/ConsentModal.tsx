import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const CONSENT_KEY = "telebiznet_consent";
const CONSENT_DURATION = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds

interface ConsentData {
  cookiesAccepted: boolean;
  privacyAccepted: boolean;
  marketingAccepted: boolean;
  timestamp: number;
}

export const ConsentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const storedConsent = localStorage.getItem(CONSENT_KEY);
    
    if (storedConsent) {
      try {
        const consentData: ConsentData = JSON.parse(storedConsent);
        const now = Date.now();
        
        // Check if consent is still valid (within 1 year)
        if (now - consentData.timestamp < CONSENT_DURATION) {
          setIsOpen(false);
          return;
        }
      } catch (e) {
        // If there's an error parsing, show the modal
        console.error("Error parsing consent data:", e);
      }
    }
    
    // Show modal if no valid consent found
    setIsOpen(true);
  }, []);

  const handleContinue = () => {
    const consentData: ConsentData = {
      cookiesAccepted,
      privacyAccepted,
      marketingAccepted,
      timestamp: Date.now(),
    };
    
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));
    setIsOpen(false);
  };

  const isButtonEnabled = cookiesAccepted && privacyAccepted;

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent 
        className="max-w-2xl glass-strong border-2 border-border/50 shadow-2xl max-h-[90vh] overflow-y-auto"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-2xl font-bold text-center">
            Мы ценим вашу конфиденциальность и безопасность данных
          </DialogTitle>
          <DialogDescription className="text-base text-foreground/90 leading-relaxed">
            Добро пожаловать на сайт Франшизы TeleBizNet (ТелеБизНет). Для корректной работы сайта, 
            анализа трафика и предоставления вам информации о нашей франшизе мы используем файлы cookie 
            и обрабатываем ваши персональные данные.
            <br /><br />
            Согласно требованиям законодательства РФ, нам необходимо ваше согласие на продолжение работы. 
            Пожалуйста, отметьте пункты ниже, чтобы получить доступ к сайту.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
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
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleContinue}
            disabled={!isButtonEnabled}
            size="lg"
            className="px-8"
          >
            Продолжить работу с сайтом
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
