import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto shadow-2xl">
          <CardContent className="p-6 sm:p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              Готовы изменить свое{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                будущее
              </span>
              ?
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Свяжитесь с нами и начните свой путь к финансовой свободе уже
              сегодня!
            </p>
            <div className="mt-8 pt-6 border-t text-center">
              <p className="text-foreground/70 mb-2">
                Свяжитесь с нами напрямую:
              </p>
              <a
                href="tel:+79361112277"
                className="inline-flex items-center gap-2 text-xl font-semibold text-primary hover:underline mb-2"
              >
                <Phone className="w-6 h-6" />
                +7 936 111-22-77
              </a>
              <p className="text-sm text-muted-foreground">
                (Telegram, WhatsApp доступны)
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
