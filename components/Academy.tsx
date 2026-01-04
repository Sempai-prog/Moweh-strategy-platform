import React from 'react';
import { RevealWrapper } from './RevealWrapper';
import { Award, BookOpen, ChevronRight } from 'lucide-react';

export const Academy = () => {
  return (
    <section id="academy" className="relative z-10 bg-neutral-50 dark:bg-moweh-dark py-24 transition-colors duration-500">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neutral-200 dark:via-white/5 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="mb-16">
            <h2 className="font-display text-4xl font-bold uppercase text-neutral-900 dark:text-white md:text-5xl">
            Le Capital Humain Comme <span className="text-transparent bg-clip-text bg-gradient-to-r from-moweh-accent2 to-moweh-accent1">Levier</span>.
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
                Programmes de leadership, coaching et psychologie appliquée au management pour aligner vos équipes sur les standards d'excellence.
            </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
            {/* Program 1 */}
            <RevealWrapper className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-8 md:p-12 shadow-md dark:shadow-none">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 h-40 w-40 rounded-full bg-moweh-accent1/5 blur-3xl transition-all group-hover:bg-moweh-accent1/10" />
                
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-white/5 text-moweh-accent2 dark:text-moweh-accent1">
                    <Award className="h-6 w-6" />
                </div>

                <h3 className="font-display mb-4 text-2xl font-bold text-neutral-900 dark:text-white">Formation Dirigeants</h3>
                <p className="mb-8 text-neutral-600 dark:text-neutral-400">Coaching stratégique pour décideurs. Renforcez votre vision, votre résilience et votre capacité à piloter dans l'incertitude.</p>

                <ul className="space-y-3 mb-8">
                    {[
                        "Leadership Adaptatif",
                        "Prise de Décision Complexe",
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-moweh-accent2 dark:bg-moweh-accent1" />
                            {item}
                        </li>
                    ))}
                </ul>

                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-neutral-900 dark:text-white group-hover:text-moweh-accent2 dark:group-hover:text-moweh-accent1 transition-colors">
                    <span>Découvrir le cursus</span>
                    <ChevronRight className="h-4 w-4" />
                </button>
            </RevealWrapper>

            {/* Program 2 */}
            <RevealWrapper className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-8 md:p-12 shadow-md dark:shadow-none">
                 <div className="absolute top-0 right-0 -mt-8 -mr-8 h-40 w-40 rounded-full bg-sector-digital/5 blur-3xl transition-all group-hover:bg-sector-digital/10" />
                
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100 dark:bg-white/5 text-sector-digital">
                    <BookOpen className="h-6 w-6" />
                </div>

                <h3 className="font-display mb-4 text-2xl font-bold text-neutral-900 dark:text-white">Excellence Opérationnelle</h3>
                <p className="mb-8 text-neutral-600 dark:text-neutral-400">Alignement des équipes sur les standards Moweh. Méthodologies agiles, rigueur d'exécution et culture du résultat.</p>

                <ul className="space-y-3 mb-8">
                    {[
                        "Gestion de Projet Avancée",
                        "Optimisation Processus",
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-sector-digital" />
                            {item}
                        </li>
                    ))}
                </ul>

                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-neutral-900 dark:text-white group-hover:text-sector-digital transition-colors">
                    <span>Découvrir le cursus</span>
                    <ChevronRight className="h-4 w-4" />
                </button>
            </RevealWrapper>
        </div>
      </div>
    </section>
  );
};