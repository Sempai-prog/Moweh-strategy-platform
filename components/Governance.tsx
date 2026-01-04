import React from 'react';
import { RevealWrapper } from './RevealWrapper';
import { Scale, Lock, FileCheck, ShieldCheck } from 'lucide-react';

export const Governance = () => {
  const pillars = [
    {
      title: "Transparence Financière",
      desc: "Séparation stricte des flux, traçabilité totale et auditabilité permanente. Nous garantissons une clarté absolue sur l'allocation des ressources à chaque étape du projet.",
      icon: <Scale className="h-6 w-6" />
    },
    {
      title: "Intégrité de l'Information",
      desc: "Politique 'Zéro Manipulation'. Nos rapports sont des outils de décision stratégique, basés sur des données factuelles, vérifiables et jamais de séduction.",
      icon: <Lock className="h-6 w-6" />
    },
    {
      title: "Standardisation ISO",
      desc: "Chaque intervention suit un manuel qualité rigoureux. Processus documentés, contrôlés et alignés sur les standards internationaux ISO 37001 (Anti-corruption).",
      icon: <FileCheck className="h-6 w-6" />
    }
  ];

  return (
    <section className="relative z-10 bg-neutral-100 dark:bg-[#0A0A0A] py-24 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full border border-moweh-accent4/30 bg-moweh-accent4/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-moweh-accent4 dark:text-moweh-accent1">
                Trust & Safety
            </span>
            <h2 className="font-display text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl">
                Cadre de Conformité <span className="text-neutral-400 dark:text-neutral-500">MQ-01</span>
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
                L'obligation, la confiance et la transparence ne sont pas des concepts abstraits chez Moweh. Ce sont des mécanismes opérationnels documentés, audités et irrévocables.
            </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <RevealWrapper key={idx} className="rounded-xl border border-neutral-200 dark:border-white/5 bg-white dark:bg-neutral-900/40 p-8 text-center transition-colors shadow-sm dark:shadow-none hover:bg-white dark:hover:bg-neutral-900/60">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-100 dark:border-white/10 bg-neutral-50 dark:bg-black text-moweh-accent2 dark:text-moweh-accent1 dark:shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                {pillar.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-neutral-900 dark:text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {pillar.desc}
              </p>
            </RevealWrapper>
          ))}
        </div>

        {/* Badges Footer */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 border-t border-neutral-200 dark:border-white/5 pt-8 md:gap-12">
            {[
                { label: "ISO 9001", sub: "Qualité Management" },
                { label: "ISO 37001", sub: "Anti-Bribery" },
                { label: "GDPR Compliant", sub: "Data Protection" },
            ].map((badge, i) => (
                <div key={i} className="flex items-center gap-3 opacity-60 dark:opacity-50 transition-opacity hover:opacity-100">
                    <ShieldCheck className="h-5 w-5 text-neutral-500" />
                    <div className="flex flex-col text-left">
                        <span className="text-sm font-bold text-neutral-900 dark:text-white">{badge.label}</span>
                        <span className="text-[10px] text-neutral-500 uppercase">{badge.sub}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};