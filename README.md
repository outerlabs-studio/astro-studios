# Astro Studios Frontend

## Setup

The usual process for Next.js based apps/websites:

1. Install node modules:

   `$ npm i`

2. Get the .env variables from Vercel (check `.env.template`), after [installing Vercel CLI](https://vercel.com/docs/cli):

   `$ vc link`

   `$ vc env pull`

3. run development environment:

   `$ npm run dev`

## Stack

- [Preact.js](https://preactjs.com/)
- [Next.js](https://nextjs.org/)
- [Lenis](https://github.com/studio-freight/lenis)
- Sass (Modules)
- [Gsap](https://greensock.com/gsap/)
- [Styled Components](https://styled-components.com/)
- GraphQL (CMS API)
- [Next-Sitemap](https://github.com/iamvishnusankar/next-sitemap) (postbuild script)

## Third Party

- [Strapi CMS (GraphQL API)](https://strapi.io/)
- [Hubspot CRM](https://hubspot.com/)
- [Vercel (Hosting & Continuous Deployment)](https://vercel.com/home)
- [GitHub Versioning](https://github.com/)

## Folder Structure

Alongside the usual Next.js folder structure (`/public`, `/pages`, etc.) We've added a few other folders to keep the code easier to read:

- **/assets:** General Images/Videos, SVGs, and Fonts
- **/components:** Reusable components
- **/components/views:** Sections of the website
- **/hooks:** Reusable Custom Hooks
- **/lib:** Reusable Scripts and State Store
- **/styles:** Global styles and Styled Components partials
