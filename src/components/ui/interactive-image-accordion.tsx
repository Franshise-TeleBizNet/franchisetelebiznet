import React, { useState } from 'react';

interface AccordionItemData {
  id: number;
  letter: string;
  title: string;
  description: string;
  colorClass: string;
}

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    letter: 'К',
    title: 'КОНТЕНТ',
    description: 'ИИ и контент-отдел автоматически создают качественный контент и следят за трендами, освобождая вас от рутины.',
    colorClass: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    letter: 'А',
    title: 'АУДИТОРИЯ',
    description: 'Команда маркетологов обеспечивает органический рост аудитории, применяя проверенные стратегии SMM и SEO.',
    colorClass: 'from-purple-500 to-purple-600',
  },
  {
    id: 3,
    letter: 'П',
    title: 'ПРОДАЖИ',
    description: 'Профессиональный отдел продаж находит рекламодателей и ведет переговоры, максимизируя доходы ваших каналов.',
    colorClass: 'from-green-500 to-green-600',
  },
  {
    id: 4,
    letter: 'Р',
    title: 'РЕИНВЕСТ',
    description: 'Автоматическое реинвестирование прибыли в рост и развитие медиасети для масштабирования бизнеса.',
    colorClass: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 5,
    letter: 'И',
    title: 'ИЗДЕРЖКИ',
    description: 'Оптимизация всех операционных расходов и контроль затрат через прозрачную систему управления.',
    colorClass: 'from-orange-500 to-orange-600',
  },
  {
    id: 6,
    letter: 'З',
    title: 'ЗАРАБОТОК',
    description: 'Стабильный растущий пассивный доход от рекламы и партнерских интеграций с минимальным участием.',
    colorClass: 'from-yellow-500 to-yellow-600',
  },
];

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[70px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.colorClass}`}></div>
      
      {/* Glass overlay */}
      <div className="absolute inset-0 glass-light"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-6">
        {/* Letter (always visible on spine) */}
        <span
          className={`
            absolute text-white font-bold text-2xl
            transition-all duration-300 ease-in-out
            ${
              isActive
                ? 'top-8 left-1/2 -translate-x-1/2 rotate-0 opacity-100'
                : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-100'
            }
          `}
        >
          {item.letter}
        </span>

        {/* Expanded content */}
        <div
          className={`
            transition-all duration-500 ease-in-out text-white text-center
            ${
              isActive
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 pointer-events-none'
            }
          `}
        >
          <h3 className="text-xl font-bold mb-4 mt-12">{item.title}</h3>
          <p className="text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export function InteractiveImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => handleItemHover(index)}
          />
        ))}
      </div>
    </div>
  );
}
