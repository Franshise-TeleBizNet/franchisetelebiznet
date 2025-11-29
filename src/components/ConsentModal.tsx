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
        className="max-w-2xl glass-strong border-2 border-border/50 shadow-2xl max-h-[90vh] overflow-y-auto sm:max-w-[95vw] mx-4"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="space-y-3 sm:space-y-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center px-2">
            Мы ценим вашу конфиденциальность и безопасность данных
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base text-foreground/90 leading-relaxed px-2">
            Добро пожаловать на сайт Франшизы TeleBizNet (ТелеБизНет). Для корректной работы сайта, 
            анализа трафика и предоставления вам информации о нашей франшизе мы используем файлы cookie 
            и обрабатываем ваши персональные данные.
            <br /><br />
            Согласно требованиям законодательства РФ, нам необходимо ваше согласие на продолжение работы. 
            Пожалуйста, отметьте пункты ниже, чтобы получить доступ к сайту.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 px-2">
          {/* Required: Cookies */}
          <div className="flex items-start space-x-2 sm:space-x-3 glass-light p-3 sm:p-4 rounded-lg">
            <Checkbox
              id="cookies"
              checked={cookiesAccepted}
              onCheckedChange={(checked) => setCookiesAccepted(checked === true)}
              className="mt-1 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <Label 
                htmlFor="cookies" 
                className="text-sm sm:text-base font-semibold cursor-pointer flex flex-wrap items-center gap-1 sm:gap-2"
              >
                <span className="break-words">Я согласен с использованием файлов Cookie</span>
                <span className="text-xs font-normal text-destructive whitespace-nowrap">
                  (Обязательный)
                </span>
              </Label>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 break-words">
                Необходимы для технической работы сайта и сбора обезличенной статистики посещаемости.
              </p>
            </div>
          </div>

          {/* Required: Privacy Policy */}
          <div className="flex items-start space-x-2 sm:space-x-3 glass-light p-3 sm:p-4 rounded-lg">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
              className="mt-1 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <Label 
                htmlFor="privacy" 
                className="text-sm sm:text-base font-semibold cursor-pointer flex flex-wrap items-center gap-1 sm:gap-2"
              >
                <span className="break-words">Я ознакомился и принимаю{" "}</span>
                <Link 
                  to="/personal-data-policy" 
                  className="text-primary hover:underline break-words"
                  target="_blank"
                >
                  Политику обработки персональных данных
                </Link>
                <span className="text-xs font-normal text-destructive whitespace-nowrap">
                  (Обязательный)
                </span>
              </Label>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 break-words">
                Подтверждаю свое согласие на обработку технических данных о моем визите (IP, гео-локация).
              </p>
            </div>
          </div>

          {/* Optional: Marketing */}
          <div className="flex items-start space-x-2 sm:space-x-3 glass-light p-3 sm:p-4 rounded-lg">
            <Checkbox
              id="marketing"
              checked={marketingAccepted}
              onCheckedChange={(checked) => setMarketingAccepted(checked === true)}
              className="mt-1 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <Label 
                htmlFor="marketing" 
                className="text-sm sm:text-base font-semibold cursor-pointer flex flex-wrap items-center gap-1 sm:gap-2"
              >
                <span className="break-words">Я согласен на получение персонализированных предложений</span>
                <span className="text-xs font-normal text-muted-foreground whitespace-nowrap">
                  (Опциональный)
                </span>
              </Label>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 break-words">
                Разрешаю использовать данные моего визита для показа мне релевантной рекламы франшизы (ретаргетинг).
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-center px-2">
          <Button
            onClick={handleContinue}
            disabled={!isButtonEnabled}
            size="lg"
            className="px-6 sm:px-8 w-full sm:w-auto text-sm sm:text-base"
          >
            Продолжить работу с сайтом
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
