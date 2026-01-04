import React from 'react';
import { RevealWrapper } from './RevealWrapper';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-black pt-0 pb-12">
        {/* Multi-color gradient border */}
        <div className="h-1 w-full bg-gradient-to-r from-moweh-accent1 via-sector-projets to-sector-conseil" />

        <div className="container mx-auto mt-16 px-4 md:px-12 lg:px-24">
            <div className="grid gap-12 md:grid-cols-4">
                
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <h2 className="font-display text-2xl font-bold text-white">MOWEH <span className="text-moweh-accent1">STRATEGY</span></h2>
                    <p className="mt-4 max-w-sm text-sm text-neutral-500 leading-relaxed">
                        Une approche rigoureuse pour des environnements complexes. Nous transformons l'incertitude en architecture de décision.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:bg-white hover:text-black transition-all">
                            <Linkedin className="h-4 w-4" />
                        </a>
                        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:bg-white hover:text-black transition-all">
                            <Twitter className="h-4 w-4" />
                        </a>
                        <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 hover:bg-white hover:text-black transition-all">
                            <Mail className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Locations */}
                <div>
                    <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Bureaux</h4>
                    <ul className="space-y-4 text-sm text-neutral-400">
                        <li>
                            <span className="block text-white">Paris</span>
                            88 Avenue Kléber, 75116
                        </li>
                        <li>
                            <span className="block text-white">Geneva</span>
                            Rue du Rhône 14, 1204
                        </li>
                        <li>
                            <span className="block text-white">Singapore</span>
                            Marina Bay Financial Centre
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Légal</h4>
                    <ul className="space-y-3 text-sm text-neutral-400">
                        <li><a href="#" className="hover:text-moweh-accent1">Mentions Légales</a></li>
                        <li><a href="#" className="hover:text-moweh-accent1">Politique de Confidentialité</a></li>
                        <li><a href="#" className="hover:text-moweh-accent1">Transparence (ISO 37001)</a></li>
                        <li><a href="#" className="hover:text-moweh-accent1">Carrières</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-neutral-600">
                <p>&copy; {new Date().getFullYear()} Moweh Agency. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};