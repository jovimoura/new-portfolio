import type { LocaleOption } from '@/providers/localization-provider'

export type LocalizedText = Record<LocaleOption, string>
export type LocalizedList = Record<LocaleOption, string[]>

export interface Experience {
  id: string
  company: LocalizedText
  title: LocalizedText
  description: LocalizedText
  achievements: LocalizedList
  startDate: string
  endDate: string | null
  current: boolean
}

export const data = {
  experiences: [
    {
      id: 'atento',
      company: {
        'pt-BR': 'Atento',
        'en-US': 'Atento',
        'es-ES': 'Atento',
      },
      title: {
        'pt-BR': 'Engenheiro de Software',
        'en-US': 'Frontend Developer',
        'es-ES': 'Desarrollador Frontend',
      },
      description: {
        'pt-BR':
          'Na Atento, sou responsável por trabalhar com Next.js em diversos produtos, como o Advanced Insights, um sistema que usa inteligência artificial para empresas com departamentos de atendimento ao cliente. Desenvolvi recursos multilíngues e um fluxo de qualidade de relatórios. Converti uma grande parte dos componentes client em server components, alcançando um ganho de 40% de performance. Implementei um chat com IA que permite ao usuário selecionar um arquivo de áudio e conversar ou fazer perguntas sobre esse áudio.',
        'en-US':
          'At Atento, I am responsible for working with Next.js across several products, such as Advanced Insights, which is essentially a system that uses artificial intelligence for companies with customer service departments.',
        'es-ES':
          'En Atento, soy responsable de trabajar con Next.js en diversos productos, como Advanced Insights, un sistema que utiliza inteligencia artificial para empresas con departamentos de atención al cliente. Desarrollé funciones multilingües y un flujo de calidad de informes. Convertí una gran parte de los componentes cliente en server components, logrando una mejora del 40% en rendimiento. Implementé un chat con IA que permite al usuario seleccionar un archivo de áudio y conversar o hacer preguntas sobre ese audio.',
      },
      achievements: {
        'pt-BR': [
          'Implementação e suporte a múltiplos idiomas com i18n e Zustand.',
          'Desenvolvimento do fluxo de Access Management usando Microsoft Authentication.',
          'Implementação de recursos com IA como feedback automatizado na plataforma.',
          'Implementação de arquitetura multi-tenant com Next.js.',
          'Implementação do Microsoft Clarity para monitorar uso em 6.000 usuários por tenant.',
          'Refatoração de componentes que usavam React Context API para Zustand, melhorando performance.',
          'Conversão de grande parte dos client components em server components, com ganho de 40% de performance.',
          'Implementação de chat baseado em LLM para análise de áudio e insights de interação funcionário–cliente.',
          'Trabalho com PostgreSQL e bancos NoSQL em projetos como SmartRecruiter, AIStudio e outros.',
          'Criação de novo fluxo de projeto com Next.js, TypeScript e FastAPI para endpoints de backend.',
        ],
        'en-US': [
          'Implementation and support of multiple languages using the i18n library and Zustand.',
          'Development of the platform\'s Access Management Flow using Microsoft Authentication.',
          'Implementation of AI-powered features such as automated feedback within the platform.',
          'Implementation of a multi-tenant architecture using Next.js.',
          'Implementation of Microsoft Clarity to monitor usage across 6,000 users per tenant.',
          'Refactoring of components that relied on the React Context API to Zustand, improving project performance and efficiency.',
          'Converted a large portion of client components into server components, achieving a 40% performance improvement.',
          'Implementation of an LLM-based chat for audio analysis and employee–customer interaction insights.',
          'Worked with PostgreSQL and NoSQL databases on projects such as SmartRecruiter, AIStudio, and others.',
          'Creation of a new project workflow using Next.js, TypeScript, and FastAPI to build backend endpoints.',
        ],
        'es-ES': [
          'Implementación y soporte de múltiples idiomas con i18n y Zustand.',
          'Desarrollo del flujo de Access Management con Microsoft Authentication.',
          'Implementación de funciones con IA como feedback automatizado en la plataforma.',
          'Implementación de arquitectura multi-tenant con Next.js.',
          'Implementación de Microsoft Clarity para monitorear uso en 6.000 usuarios por tenant.',
          'Refactorización de componentes que usaban React Context API a Zustand, mejorando rendimiento.',
          'Conversión de gran parte de client components a server components, con mejora del 40% de rendimiento.',
          'Implementación de chat basado en LLM para análisis de audio e insights de interacción empleado–cliente.',
          'Trabajo con PostgreSQL y bases NoSQL en proyectos como SmartRecruiter, AIStudio y otros.',
          'Creación de nuevo flujo de proyecto con Next.js, TypeScript y FastAPI para endpoints de backend.',
        ],
      },
      startDate: '2025-01',
      endDate: null,
      current: true,
    },
    {
      id: 'breaker19',
      company: {
        'pt-BR': 'Breaker19',
        'en-US': 'Breaker19',
        'es-ES': 'Breaker19',
      },
      title: {
        'pt-BR': 'Engenheiro de Software (Temporário)',
        'en-US': 'Senior Mobile Engineer',
        'es-ES': 'Ingeniero Móvil Senior',
      },
      description: {
        'pt-BR':
          'Breaker19 é um marketplace eficiente de transporte e hotshot para o setor petrolífero. Trabalhei na refatoração e manutenção dos apps de motoristas e compradores usando React Native, Expo e Swift. Também contribuí no backend com Laravel e PostgreSQL.',
        'en-US':
          'Breaker19 is an efficient platform for road transportation and urgent deliveries in oil fields. I worked on refactoring and maintaining the driver and buyer applications using React Native, Expo, and Swift. I was not limited to mobile development; I also contributed to the backend using Laravel and PostgreSQL.',
        'es-ES':
          'Breaker19 es un marketplace eficiente de transporte y hotshot para el sector petrolero. Trabajé en la refactorización y mantenimiento de las apps de conductores y compradores usando React Native, Expo y Swift. También contribuí en el backend con Laravel y PostgreSQL.',
      },
      achievements: {
        'pt-BR': [
          'Desenvolvimento de um Portal Web para gestão administrativa.',
          'Desenvolvimento de suporte multi-idioma com Zustand.',
          'Desenvolvimento de geolocalização em tempo real com Google Maps e Expo.',
          'Integração com Stripe para pagamentos.',
          'Desenvolvimento de API serverless, reduzindo custos de servidor.',
          'Desenvolvimento de autenticação via Google, Apple e Email/Senha no backend com Laravel.',
        ],
        'en-US': [
          'Development of a Web Portal for Administrative Management.',
          'Development of a Multi-language Support feature using Zustand.',
          'Development of real-time Geolocation using the Google Maps library with Expo.',
          'Stripe integration for payments.',
          'Serverless API development, reducing server costs.',
          'Development of authentication via Google, Apple, and Email/Password on the backend using Laravel.',
        ],
        'es-ES': [
          'Desarrollo de un Portal Web para gestión administrativa.',
          'Desarrollo de soporte multi-idioma con Zustand.',
          'Desarrollo de geolocalización en tiempo real con Google Maps y Expo.',
          'Integración con Stripe para pagos.',
          'Desarrollo de API serverless, reduciendo costos de servidor.',
          'Desarrollo de autenticación vía Google, Apple y Email/Contraseña en el backend con Laravel.',
        ],
      },
      startDate: '2024-08',
      endDate: '2024-10',
      current: false,
    },
    {
      id: 'fetchly',
      company: {
        'pt-BR': 'Fetchly Labs - Software House',
        'en-US': 'Fetchly Labs - Software House',
        'es-ES': 'Fetchly Labs - Software House',
      },
      title: {
        'pt-BR': 'Desenvolvedor Fullstack',
        'en-US': 'Software Engineer',
        'es-ES': 'Ingeniero de Software',
      },
      description: {
        'pt-BR':
          'Fetchly Labs é uma Software House responsável por criar todo tipo de aplicações web e mobile, sempre com as tecnologias mais modernas. Durante meu tempo na Fetchly, atuei como Engenheiro de Software desenvolvendo plataformas de E-commerce como CityWinery e MyTouring, aplicações mobile com React Native como Helper Heeves, e sites empresariais como Freight130. Trabalhei no frontend com Angular, React, React Native e Astro, e no backend com Ruby on Rails e PostgreSQL, como em Home Loan Gurus.',
        'en-US':
          'Responsible for building web and mobile systems using React, React Native, Node, Ruby on Rails, Django, Docker, Angular, and Vue. During my time at Fetchly, I developed systems independently when necessary and assisted other teams, leading and supporting backend and frontend developers.',
        'es-ES':
          'Fetchly Labs es una Software House responsable de crear todo tipo de aplicaciones web y móviles, siempre con las tecnologías más modernas. Durante mi tiempo en Fetchly, trabajé como Ingeniero de Software desarrollando plataformas E-commerce como CityWinery y MyTouring, aplicaciones móviles con React Native como Helper Heeves, y sitios empresariales como Freight130. Trabajé en frontend con Angular, React, React Native y Astro, y en backend con Ruby on Rails y PostgreSQL, como en Home Loan Gurus.',
      },
      achievements: {
        'pt-BR': [
          'Desenvolvimento de plataformas de e-commerce como CityWinery e MyTourig, usando CMS como Sanity.',
          'Integração com buckets S3 para armazenamento de imagens.',
          'Desenvolvimento de software financeiro como Home Loan Gurus, plataforma de empréstimos.',
          'Aplicações hospitalares (Helper Heeves), com Django no backend e React Native no frontend, e Redux para estado global.',
        ],
        'en-US': [
          'Development of e-commerce platforms such as CityWinery and MyTourig, using CMSs like Sanity.',
          'Integration with S3 buckets for image storage.',
          'Development of financial software such as Home Loan Gurus, a loan platform.',
          'Hospital applications (Helper Heeves), using Django on the backend and React Native on the frontend, along with libraries like Redux for global state management.',
        ],
        'es-ES': [
          'Desarrollo de plataformas e-commerce como CityWinery y MyTourig, usando CMS como Sanity.',
          'Integración con buckets S3 para almacenamiento de imágenes.',
          'Desarrollo de software financiero como Home Loan Gurus, plataforma de préstamos.',
          'Aplicaciones hospitalarias (Helper Heeves), con Django en backend y React Native en frontend, y Redux para estado global.',
        ],
      },
      startDate: '2022-08',
      endDate: '2024-06',
      current: false,
    },
    {
      id: 'noclaf',
      company: {
        'pt-BR': 'Noclaf Tech - Software House',
        'en-US': 'Noclaf Tech - Software House',
        'es-ES': 'Noclaf Tech - Software House',
      },
      title: {
        'pt-BR': 'Desenvolvedor Fullstack',
        'en-US': 'Fullstack Web Developer',
        'es-ES': 'Desarrollador Fullstack',
      },
      description: {
        'pt-BR':
          'Durante meu tempo na Noclaf Tech, atuei como Desenvolvedor Web Fullstack, desenvolvendo sistemas para diversas empresas no Brasil. Desenvolvi aplicações de gestão e emissão de notas fiscais, plataformas de e-commerce, landing pages e sites educacionais para crianças.',
        'en-US':
          'During my time at Noclaf, I worked as a full-stack developer using React, Angular, Java (Spring Boot), Firebase, Node.js, and GraphQL. I was involved in the development of NFe Management Systems (Spendfy), using Docker, Turborepo, and Azure.',
        'es-ES':
          'Durante mi tiempo en Noclaf Tech, trabajé como Desarrollador Web Fullstack, desarrollando sistemas para diversas empresas en Brasil. Desarrollé aplicaciones de gestión y emisión de facturas, plataformas de e-commerce, landing pages y sitios educativos para niños.',
      },
      achievements: {
        'pt-BR': [
          'Sistemas de gestão de NFe (Spendfy), com Docker, Turborepo e Azure. Stack: React, Node.js e MongoDB.',
          'Responsável pelo deploy do backend e do frontend.',
          'Trabalho na landing page do projeto com Next.js para melhorar o SEO.',
        ],
        'en-US': [
          'NFe Management Systems (Spendfy), using Docker, Turborepo, and Azure. We also used React, Node.js, and MongoDB as our tech stack.',
          'I was responsible for deploying both the backend and the frontend.',
          'I also worked on the project\'s landing page, where we used Next.js to improve the project\'s SEO.',
        ],
        'es-ES': [
          'Sistemas de gestión de NFe (Spendfy), con Docker, Turborepo y Azure. Stack: React, Node.js y MongoDB.',
          'Responsable del deploy del backend y del frontend.',
          'Trabajo en la landing page del proyecto con Next.js para mejorar el SEO.',
        ],
      },
      startDate: '2022-03',
      endDate: '2022-06',
      current: false,
    },
    {
      id: 'portlouis',
      company: {
        'pt-BR': 'Port Louis',
        'en-US': 'Port Louis',
        'es-ES': 'Port Louis',
      },
      title: {
        'pt-BR': 'Desenvolvedor Frontend',
        'en-US': 'Frontend Developer',
        'es-ES': 'Desarrollador Frontend',
      },
      description: {
        'pt-BR':
          'Port Louis é uma empresa de automação de serviços nos setores de Auditoria Jurídica, Administração, Precificação de Ativos e mais. Durante meu tempo na Port Louis, atuei como Desenvolvedor Frontend, desenvolvendo novas funcionalidades, criando documentação e testes unitários. Corrigi diversos tipos de erros de código, realizei refatoração e atualizações, migrando componentes de Vue 2 para a Vue Composition API.',
        'en-US':
          'During my time at Port Louis, I was responsible for maintaining a legal system using Vue.js, Node.js, and MySQL.',
        'es-ES':
          'Port Louis es una empresa de automatización de servicios en los sectores de Auditoría Legal, Administración, Valoración de Activos y más. Durante mi tiempo en Port Louis, trabajé como Desarrollador Frontend, desarrollando nuevas funcionalidades, creando documentación y pruebas unitarias. Corregí diversos tipos de errores de código, realicé refactorización y actualizaciones, migrando componentes de Vue 2 a la Vue Composition API.',
      },
      achievements: {
        'pt-BR': [
          'Escrita de testes unitários com Jest.',
          'Correção de bugs no frontend, refatorando componentes com Vuetify.',
          'Criação de novas funcionalidades no frontend.',
        ],
        'en-US': [
          'I wrote unit tests using Jest.',
          'I fixed bugs in the frontend, more specifically by refactoring components built with Vuetify.',
          'I created new features on the frontend.',
        ],
        'es-ES': [
          'Escritura de pruebas unitarias con Jest.',
          'Corrección de bugs en el frontend, refactorizando componentes con Vuetify.',
          'Creación de nuevas funcionalidades en el frontend.',
        ],
      },
      startDate: '2021-12',
      endDate: '2022-02',
      current: false,
    },
    {
      id: 'freelance',
      company: {
        'pt-BR': 'John Moura',
        'en-US': 'John Moura',
        'es-ES': 'John Moura',
      },
      title: {
        'pt-BR': 'Desenvolvedor Freelance',
        'en-US': 'Freelancer Developer',
        'es-ES': 'Desarrollador Freelance',
      },
      description: {
        'pt-BR':
          'Iniciei minha carreira como Desenvolvedor Freelance, criando landing pages e sites simples. Atualmente tenho clientes para os quais ofereço serviços de manutenção e desenvolvimento para suas empresas e negócios. Desenvolvi blogs, landing pages, aplicações mobile e criei algumas plataformas SaaS usando Next.js, React Native, Expo, Node e Supabase.',
        'en-US':
          'I started my career as a freelance developer, building landing pages, e-commerce websites, and mobile applications using React, Node.js, and React Native with MongoDB.',
        'es-ES':
          'Comencé mi carrera como Desarrollador Freelance, creando landing pages y sitios simples. Actualmente tengo clientes a los que ofrezco servicios de mantenimiento y desarrollo para sus empresas y negocios. He desarrollado blogs, landing pages, aplicaciones móviles y creado algunas plataformas SaaS usando Next.js, React Native, Expo, Node y Supabase.',
      },
      achievements: {
        'pt-BR': [
          'Construção de landing pages como Engeriscogr.com.br.',
          'Desenvolvimento do software hospitalar GoRad com Next.js, Node.js, PostgreSQL e Prisma ORM.',
          'Desenvolvimento do projeto LuxySwap, que permite troca de criptomoedas via API Shift.ai.',
        ],
        'en-US': [
          'Built landing pages such as Engeriscogr.com.br.',
          'Developed a hospital software called GoRad using Next.js and Node.js, with a PostgreSQL database and the Prisma ORM to simplify query writing and understanding.',
          'Also developed the LuxySwap project, which enables cryptocurrency exchange through the Shift.ai API.',
        ],
        'es-ES': [
          'Construcción de landing pages como Engeriscogr.com.br.',
          'Desarrollo del software hospitalario GoRad con Next.js, Node.js, PostgreSQL y Prisma ORM.',
          'Desarrollo del proyecto LuxySwap, que permite intercambio de criptomonedas vía API Shift.ai.',
        ],
      },
      startDate: '2020-06',
      endDate: '2024-12',
      current: false,
    },
  ] satisfies Experience[],
}
