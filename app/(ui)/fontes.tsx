import { Inter, Smooch } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const smooch = Smooch({
    subsets: ['latin'], 
    weight: ['400'], // Adicione os pesos suportados pelo Smooch
  });