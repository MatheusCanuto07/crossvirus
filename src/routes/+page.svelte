<script>
  import SEO, { getSEOProps } from '$components/SEO/index.svelte'
  import { icons } from "$lib/utils"
  import CardHome from '$lib/client/components/cards/CardHome.svelte'
  
  import Carousel from '$components/landing-page/Carousel.svelte'
  import Carousel2 from '$components/landing-page/Carousel2.svelte'
  import Features3 from '$components/landing-page/features/Features3.svelte'
  import Pricing from '$components/landing-page/pricing/Pricing.svelte'
  import Features4 from '$components/landing-page/features/Features4.svelte'
  import Footer from '$components/landing-page/Footer.svelte'
  
  import ShareButton from '$components/share/index.svelte'
  import { onMount } from 'svelte'
  import CardPlano from '$lib/client/components/cards/CardPlano.svelte'
  import Hero4 from '$lib/client/components/landing-page/hero/Hero4.svelte'  
  import Features from '$lib/client/components/landing-page/features/Features.svelte'
  import About from '$lib/client/components/landing-page/about/About.svelte'
  import ForWho from '$lib/client/components/landing-page/forWho/ForWho.svelte'
  import Advantages from '$lib/client/components/landing-page/advantages/Advantages.svelte'
  import TheMap from '$lib/client/components/landing-page/whatIs/TheMap.svelte'
  import Articles from '$lib/client/components/landing-page/about/Articles.svelte'
  import PrincingFigmaNew from '$lib/client/components/landing-page/pricing/PrincingFigmaNew.svelte'
  
  // console.log(tailwind.theme.colors.primary)
</script>

<SEO
{...getSEOProps({
  title: 'Home',
  featuredImage: {
    url: 'https://via.placeholder.com/672x448',
    alt: 'Placeholder image',
    width: 672,
    height: 448,
    caption: 'Home page',
  },
})}
/>

<svelte:head>
<link rel="stylesheet" href="/animation/particles.css">
</svelte:head>

<Hero4 />
<About />
<ForWho />
<Advantages />
<TheMap />
<Articles />
<!-- <Features /> -->
<!-- <Pricing /> -->
<PrincingFigmaNew />
<Footer />
